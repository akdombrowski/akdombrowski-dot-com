import dbClient from "@/db";
import type { YouTubeVideo } from "@/supabase/youtubeVideos/db";

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

export const bulkInsert = async (videos: YouTubeVideo[]) => {
  const { error } = await supabase.from("youtube-videos").insert(videos);

  if (error) {
    console.error("insert data youtube-videos error:", error);
    return error;
  }
  return true;
};

export const insert = async ({ video }: { video: YouTubeVideo }) => {
  const { error } = await supabase.from("youtube-videos").insert(video);

  if (error) {
    console.error("insert data youtube-videos error:", error);
    return error;
  }

  return true;
};
