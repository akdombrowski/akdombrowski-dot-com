"use server";
import "server-only";

import axios, { type AxiosRequestConfig } from "axios";
import "dotenv/config";

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
const ax = (mergeConfig: {
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: { [key: string]: any };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: { [key: string]: any };
}) => {
  const config: AxiosRequestConfig = {
    url: process.env.YOUTUBE_API_BASE_PATH,
    timeout: 30000,
    responseType: "json",
    maxBodyLength: 20000,
    maxRedirects: 0,
  };

  // referrer defined in .env, needs to be allowed on API key in GCloud
  let referrer = "";
  if (process.env.NODE_ENV === "production") {
    referrer = process.env.YOUTUBE_API_REFERRER_PROD!;
  } else {
    referrer = process.env.YOUTUBE_API_REFERRER_DEV!;
  }
  const headers = { Accept: "application/json", Referrer: referrer };
  config.headers = headers;

  // add method and params or body
  config.method = mergeConfig.method;
  if (mergeConfig.method === "GET") {
    config.params = mergeConfig.params;
    config.paramsSerializer = (params) => {
      const paramsEncoded = {};
      for (const [key, value] of Object.entries(params)) {
        params.encoded[key] = encodeURIComponent(value);
      }
      return JSON.stringify(paramsEncoded);
    };
  } else if (mergeConfig.body) {
    config.data = mergeConfig.body;
  }

  return axios.create(config);
};

export default async function getYouTubeStats(): Promise<YouTubeVideoStatsResponseBody> {
  try {
    const config = {
      method: "get",
      url: "/videos",
      params: {
        key: "AIzaSyDFJhvI7DZsUxXX1ryiUk_H9dF9aW81G-w",
        maxResults: 10,
        id: "ypa8prwEMcc,eg7I8x-u0sc,_zWovo2zv6k,D-yskqXigZQ,T0F5hqXxGOk,PJMjHLzD_Kg,3yCKQ5b0st8,9QOpDGLLxIQ,-3nwwH9PgHA,wYrzc4AWCzw,O9lQGwKTEQM,IdtBkGQg2Q8,PeZ-Fz_soFs,1hs5e7TDwM4,fX5U50VGxtg,2Mkzy3ZWT6Q,fCbW1YFnm6M", // video id's
        part: "statistics,snippet,player",
      },
    };

    const axGet = ax(config);
    const response = await axGet.request(config);
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't get YouTube Stats", { cause: error });
  }
}
