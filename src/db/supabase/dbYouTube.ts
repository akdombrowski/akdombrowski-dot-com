import dbClient from "@/db";
const supabase = dbClient();

export interface youtubeStats {
  viewCount: number;
  likeCount: number;
  favoriteCount?: number;
  commentCount: number;
}
export interface youtubeSnippet {
  title: string;
  description?: string;
  favoriteCount?: number;
  commentCount: number;
}

export const fetchStatsAll = async () => {
  const { data, error } = await supabase.from("youtube-statisics").select();
  console.log("data:");
  console.log(data);
  if (error) {
    console.error(error);
  }
  return data;
};

export const updateStats = async ({
  id,
  statistics,
}: {
  id: string;
  statistics: youtubeStats;
}) => {
  const { data, error } = await supabase
    .from("youtube-statisics")
    .update(statistics)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateYouTubeVideos = async ({
  id,
  snippet,
  player_url,
  statistics,
  title,
  etag,
  kind,
}: {
  id: string;
  snippet?: youtubeStats;
  player_url?: { embedHtml: string };
  statistics?: youtubeStats;
  title?: string;
  etag?: string;
  kind?: youtubeStats;
}) => {
  let updateRes = await supabase
    .from("youtube-statisics")
    .update({ snippet })
    .eq("id", id)
    .select();
  if (updateRes.error) {
    console.error("error:", updateRes.error);
  }

  updateRes = await supabase
    .from("youtube-statisics")
    .update(player_url)
    .eq("id", id)
    .select();
  if (updateRes.error) {
    console.error("error:", updateRes.error);
  }
  updateRes = await supabase
    .from("youtube-statisics")
    .update(statistics)
    .eq("id", id)
    .select();
  if (updateRes.error) {
    console.error("error:", updateRes.error);
  }
  updateRes = await supabase
    .from("youtube-statisics")
    .update(title)
    .eq("id", id)
    .select();
  if (updateRes.error) {
    console.error("error:", updateRes.error);
  }
  updateRes = await supabase
    .from("youtube-statisics")
    .update(etag)
    .eq("id", id)
    .select();
  if (updateRes.error) {
    console.error("error:", updateRes.error);
  }
  updateRes = await supabase
    .from("youtube-statisics")
    .update(kind)
    .eq("id", id)
    .select();
  if (updateRes.error) {
    console.error("error:", updateRes.error);
  }

  return updateRes.data;
};
