"use server";
import "server-only";

import axios, { type AxiosRequestConfig } from "axios";
import "dotenv/config";
import { YOUTUBE_IDS } from "@/videos/VideoURLs";

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
if (process.env.NODE_ENV === "production") {
  referer = process.env.YOUTUBE_API_REFERER_PROD!;
} else {
  referer = process.env.YOUTUBE_API_REFERER_DEV!;
}
const headers = { Accept: "application/json", Referer: referer };
config.headers = headers;

const ax = axios.create(config);

const ids = YOUTUBE_IDS.toString();

export default async function getYouTubeStats(): Promise<YouTubeVideoStatsResponseBody | null> {
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

    console.log(" ");
    console.log("axios base config:");
    console.log(ax.toString());
    console.log(" ");
    console.log("axios config:");
    console.log(config);
    const response = await ax.request(config);

    const data = response.data;
    console.log(" ");
    console.log("data:");
    console.log(data);

    return data;
  } catch (error) {
    // AxiosError
    console.error(error);
    // TODO: Should throw error?
    // throw new Error("Couldn't get YouTube Stats", { cause: error });
  }
  return null;
}
