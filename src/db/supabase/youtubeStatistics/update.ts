import dbClient from "@/db";

const supabase = dbClient();


export const updateTitle = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  const { data, error } = await supabase
    .from("youtube-statistics")
    .update(title)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateDescription = async ({
  id,
  description,
}: {
  id: string;
  description: string;
}) => {
  const { data, error } = await supabase
    .from("youtube-statistics")
    .update(description)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateFavoriteCount = async ({
  id,
  favoriteCount,
}: {
  id: string;
  favoriteCount: number;
}) => {
  const { data, error } = await supabase
    .from("youtube-statistics")
    .update(favoriteCount)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const updateCommentCount = async ({
  id,
  commentCount,
}: {
  id: string;
  commentCount: number;
}) => {
  const { data, error } = await supabase
    .from("youtube-statistics")
    .update(commentCount)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const fetchPlayer = async ({ id }: { id: number }) => {
  const { data, error } = await supabase
    .from("youtube-statistics")
    .eq("id", id)
    .select();

  console.log("data:");
  console.log(data);

  if (error) {
    console.error(error);
  }
  return data;
};

export const fetchPlayersAll = async () => {
  const { data, error } = await supabase.from("youtube-statistics").select();

  console.log("data:");
  console.log(data);

  if (error) {
    console.error(error);
  }
  return data;
};
