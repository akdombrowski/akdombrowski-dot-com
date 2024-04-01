"use server";
import "server-only";

import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import "dotenv/config";
import { YOUTUBE_IDS } from "@/videos/VideoURLs";

import {
  YoutubeVideosTableInsert,
  YoutubeVideosTableUpdate,
} from "@/db/supabase/youtubeVideos/db";

export interface YouTubeVideoStatsResponseBody {
  kind: "youtube#videoListResponse";
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind: "youtube#video";
  etag: string;
  id: string;
  statistics: Statistics;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

// create an axios instance with shared config
const config: AxiosRequestConfig = {
  baseURL: process.env.YOUTUBE_API_BASE_PATH,
  timeout: 30000,
  responseType: "json",
  maxBodyLength: 20000,
  maxRedirects: 0,
};

// referrer defined in .env, needs to be allowed on API key in GCloud
let referer = "";
const vercel_node_env = process.env.NEXT_PUBLIC_VERCEL_ENV;
const node_env = process.env.NODE_ENV;
if (
  (vercel_node_env && vercel_node_env === "production") ||
  (node_env && node_env === "production")
) {
  referer = process.env.NEXT_PUBLIC_VERCEL_URL!;
} else {
  referer = process.env.REFERER_ORIGIN_DEV!;
}
const headers = { Accept: "application/json", Referer: referer };
config.headers = headers;

const ax = axios.create(config);

const ids = YOUTUBE_IDS.toString();

const getVideosData = async () => {
  try {
    const config = {
      method: "get",
      url: "/videos",
      params: {
        key: process.env.YOUTUBE_API_KEY,
        maxResults: 10,
        id: "ypa8prwEMcc,eg7I8x-u0sc,_zWovo2zv6k,D-yskqXigZQ,T0F5hqXxGOk,PJMjHLzD_Kg,3yCKQ5b0st8,9QOpDGLLxIQ,-3nwwH9PgHA,wYrzc4AWCzw,O9lQGwKTEQM,IdtBkGQg2Q8,PeZ-Fz_soFs,1hs5e7TDwM4,fX5U50VGxtg,2Mkzy3ZWT6Q,fCbW1YFnm6M", // video id's
        part: "statistics,snippet,player",
      },
    };
    const response = await ax.request(config);

    const data = response.data;
    console.log(" ");
    console.log("data:");
    console.log(data);

    return data;
  } catch (error) {
    console.log(" ");
    console.error("error type:", typeof error);

    // bubble up error
    if (typeof error === typeof AxiosError) {
      const axError = error as AxiosError;
      // AxiosError

      if (axError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(" ");
        console.log(axError.response.data);
        console.log(" ");
        console.log(axError.response.status);
        console.log(" ");
        console.log(axError.response.headers);
        throw new Error(
          "Axios Error fetching YouTube Data - Error data, status, headers",
          {
            cause: {
              data: axError.response.data,
              status: axError.response.status,
              headers: axError.response.headers,
              config: axError.config,
            },
          },
        );
      } else if (axError.request) {
        // The request was made but no response was received
        // `axError.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(" ");
        console.log(axError.request);
        throw new Error("Axios Error fetching YouTube Data - Error request", {
          cause: {
            request: axError.request,
            config: axError.config,
          },
        });
      } else {
        // Something happened in setting up the request that triggered an axError
        console.log(" ");
        console.log("axError", axError.message);
        throw new Error("Axios Error fetching YouTube Data - Error message", {
          cause: {
            message: axError.message,
            config: axError.config,
          },
        });
      }
    } else {
      console.log(" ");
      throw new Error("Couldn't get YouTube Stats", { cause: error });
    }
  }
};

export default async function getYouTubeStats(): Promise<YouTubeVideoStatsResponseBody | null> {
  try {
    const data = await getVideosData();
    const items = data.items;

    for (const item of items) {
      const { kind, etag, id, snippet, statistics, player } = item;
      const { title, description, thumbnails, channelTitle, tags, categoryId } =
        snippet;
      console.log("item");
      console.log(item);
      YoutubeVideosTableInsert.insert({
        video: {
          created_at: Date(),
          etag,
          id: Number(id),
          updated_at: Date(),
          snippet,
          player,
          statistics,
          title,
          kind: kind.replace("youtube#", ""),
        },
      });
    }
    return data;
  } catch (error) {
    console.log(" ");
    // AxiosError
    console.error(error);
    // TODO: Should throw error?
    console.log(" ");
    throw error;
  }
}
