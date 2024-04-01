export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "youtube-player": {
        Row: {
          created_at: string
          embedHtml: string | null
          id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          embedHtml?: string | null
          id?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          embedHtml?: string | null
          id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_youtube-player_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "youtube-videos"
            referencedColumns: ["id"]
          },
        ]
      }
      "youtube-snippet": {
        Row: {
          categoryId: string | null
          channelId: string | null
          channelTitle: string | null
          created_at: string
          description: string | null
          id: number
          liveBroadcastContent: string | null
          localized: Json | null
          published_at: string | null
          tags: string[] | null
          thumbnails: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          categoryId?: string | null
          channelId?: string | null
          channelTitle?: string | null
          created_at?: string
          description?: string | null
          id?: number
          liveBroadcastContent?: string | null
          localized?: Json | null
          published_at?: string | null
          tags?: string[] | null
          thumbnails?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          categoryId?: string | null
          channelId?: string | null
          channelTitle?: string | null
          created_at?: string
          description?: string | null
          id?: number
          liveBroadcastContent?: string | null
          localized?: Json | null
          published_at?: string | null
          tags?: string[] | null
          thumbnails?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_youtube-snippet_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "youtube-videos"
            referencedColumns: ["id"]
          },
        ]
      }
      "youtube-statistics": {
        Row: {
          commentCount: number | null
          created_at: string
          favoriteCount: number | null
          id: number
          likeCount: number
          updated_at: string
          viewCount: number
        }
        Insert: {
          commentCount?: number | null
          created_at?: string
          favoriteCount?: number | null
          id?: number
          likeCount?: number
          updated_at?: string
          viewCount?: number
        }
        Update: {
          commentCount?: number | null
          created_at?: string
          favoriteCount?: number | null
          id?: number
          likeCount?: number
          updated_at?: string
          viewCount?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_youtube-statistics_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "youtube-videos"
            referencedColumns: ["id"]
          },
        ]
      }
      "youtube-videos": {
        Row: {
          created_at: string
          etag: string | null
          id: number
          kind: Database["public"]["Enums"]["kind"]
          player_url: Json | null
          snippet: Json | null
          statistics: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          etag?: string | null
          id?: number
          kind: Database["public"]["Enums"]["kind"]
          player?: Json | null
          snippet?: Json | null
          statistics?: Json | null
          title?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          etag?: string | null
          id?: number
          kind?: Database["public"]["Enums"]["kind"]
          player_url?: Json | null
          snippet?: Json | null
          statistics?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      kind:
        | "video"
        | "playlist"
        | "videoListResponse"
        | "channel"
        | "playlistItem"
        | "searchResult"
        | "thumbnailSetResponse"
        | "videoCategory"
        | "member"
        | "activity"
        | "caption"
        | "channelBannerResource"
        | "channelSection"
        | "comment"
        | "guideCategory"
        | "membershipsLevel"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
