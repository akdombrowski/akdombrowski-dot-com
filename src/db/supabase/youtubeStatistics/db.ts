import * as YoutubeStatisticsTableInsert from "@/supabase/youtubeStatistics/insert";
import * as YoutubeStatisticsTableUpdate from "@/supabase/youtubeStatistics/update";

export {
  YoutubeStatisticsTableInsert,
  YoutubeStatisticsTableUpdate as default,
};

import type { Database } from "@/db/supabase/supabase.types";

export type YouTubeStatistics =
  Database["public"]["Tables"]["youtube-videos"]["Update"]["statistics"];
