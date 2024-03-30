import dbClient from "@/db";
const supabase = dbClient();

export interface YoutubeSnippet {
  title: string;
  description?: string;
  published_at?: number;
  channelId?: string;
  thumbnails?: Thumbnails;
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcast?: string;
  localized?: Localized;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
export interface Localized {
  title: string;
  description: string;
}

export const fetchStatsAll = async () => {
  const { data, error } = await supabase.from("youtube-snippet").select();
  console.log("data:");
  console.log(data);
  if (error) {
    console.error(error);
  }
  return data;
};
