import dbClient from "@/db";
import type { Database } from "@/db/supabase/supabase.types";
import type { YoutubeStatistics } from "@/db/supabase/youtubeStatistics/db";
const supabase = dbClient();

export interface YouTubeSnippet {
  statistics: YoutubeStatistics;
}

export const fetchStatsAll = async () => {
  const { data, error } = await supabase.from("youtube-videos").select();
  console.log("data:");
  console.log(data);
  if (error) {
    console.error(error);
  }
  return data;
};

export const bulkInsert = async (videos: Database["public"]["Tables"]["youtube-videos"]["Insert"]) => {
  const { error } = await supabase.from("youtube-videos").insert(videos);
  if (error) {
    console.error("insert data youtube-videos error:", error);
    return error;
  }
  return true;
};

export const updateStatistics = async ({
  id,
  statistics,
}: {
  id: string;
  statistics: YoutubeStatistics;
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update(statistics)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateSnippet = async ({
  id,
  snippet,
}: {
  id: string;
  snippet?: Database["public"]["Tables"]["youtube-videos"]["Update"]["snippet"];
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update({ snippet })
    .eq("id", id)
    .select();
  if (error) {
    console.error("error:", error);
  }

  return data;
};

export const updatePlayer = async ({
  id,
  player_url,
}: {
  id: string;
  player_url?: { embedHtml: string };
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update(player_url)
    .eq("id", id)
    .select();
  if (error) {
    console.error("error:", error);
  }

  return data;
};

export const updateTitle = async ({
  id,
  title,
}: {
  id: string;
  title?: string;
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update(title)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateETag = async ({
  id,
  etag,
}: {
  id: string;
  etag?: string;
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update(etag)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateKind = async ({
  id,
  kind,
}: {
  id: string;
  kind?: Database["public"]["Enums"]["kind"];
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update(kind)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};
