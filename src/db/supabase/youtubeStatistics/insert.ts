import dbClient from "@/db";
import type { Database } from "@/db/supabase/supabase.types";
import type { YouTubeStatistics } from "@/db/supabase/youtubeStatistics/db";
import type { YouTubeSnippet } from "@/db/supabase/youtubeSnippets/db";
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

export const bulkInsert = async (
  videos: Database["public"]["Tables"]["youtube-videos"]["Insert"][],
) => {
  const { error } = await supabase.from("youtube-videos").insert(videos);

  if (error) {
    console.error("insert data youtube-videos error:", error);
    return error;
  }
  return true;
};

export const insert = async ({
  video,
}: {
  video: Database["public"]["Tables"]["youtube-videos"]["Insert"];
}) => {
  const { error } = await supabase.from("youtube-videos").insert(video);

  if (error) {
    console.error("insert data youtube-videos error:", error);
    return error;
  }

  return true;
};
