import * as YoutubeVideosTableInsert from "@/supabase/youtubeVideos/insert";
import * as YoutubeVideosTableUpdate from "@/supabase/youtubeVideos/update";

export { YoutubeVideosTableInsert, YoutubeVideosTableUpdate as default };

import type { Database } from "@/db/supabase/supabase.types";

export type YouTubeVideo =
  Database["public"]["Tables"]["youtube-videos"]["Insert"];
