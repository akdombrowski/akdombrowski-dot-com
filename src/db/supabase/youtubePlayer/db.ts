import dbClient from "@/db";
const supabase = dbClient();

export const updatePlayer = async ({
  id,
  embedHtml,
}: {
  id: string;
  embedHtml: string;
}) => {
  const { data, error } = await supabase
    .from("youtube-player")
    .update(embedHtml)
    .eq("id", id)
    .select();

  if (error) {
    console.error("error:", error);
  }
  return data;
};

export const fetchPlayer = async ({ id }: { id: number }) => {
  const { data, error } = await supabase
    .from("youtube-player")
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
  const { data, error } = await supabase.from("youtube-player").select();

  console.log("data:");
  console.log(data);

  if (error) {
    console.error(error);
  }
  return data;
};
