import dbClient from "@/db";
import type { YouTubeSnippet } from "@/supabase/youtubeSnippets/db";
import type { Database } from "@/supabase/supabase.types";
import type { YouTubeStatistics } from "@/supabase/youtubeStatistics/db";
const supabase = dbClient();



export const fetchStatsAll = async () => {
  const { data, error } = await supabase.from("youtube-videos").select();
  console.log("data:");
  console.log(data);
  if (error) {
    console.error(error);
  }
  return data;
};

export const updateStatistics = async ({
  id,
  statistics,
}: {
  id: string;
  statistics: YouTubeStatistics;
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
  snippet?: YouTubeSnippet;
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
  player,
}: {
  id: string;
  player?: { embedHtml: string };
}) => {
  const { data, error } = await supabase
    .from("youtube-videos")
    .update(player)
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
