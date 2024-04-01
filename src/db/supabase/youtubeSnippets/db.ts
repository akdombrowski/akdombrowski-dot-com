import * as YoutubeSnippetsTableInsert from "@/supabase/youtubeSnippets/insert";
import * as YoutubeSnippetsTableUpdate from "@/supabase/youtubeSnippets/update";

export { YoutubeSnippetsTableInsert, YoutubeSnippetsTableUpdate as default };

import type { Database } from "@/db/supabase/supabase.types";

export type YouTubeSnippet =
  Database["public"]["Tables"]["youtube-videos"]["Update"]["snippet"];