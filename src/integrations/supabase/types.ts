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
      blog_post_categories: {
        Row: {
          blog_post_id: string
          category_id: string
        }
        Insert: {
          blog_post_id: string
          category_id: string
        }
        Update: {
          blog_post_id?: string
          category_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_categories_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_post_related_produce: {
        Row: {
          blog_post_id: string
          produce_id: string
        }
        Insert: {
          blog_post_id: string
          produce_id: string
        }
        Update: {
          blog_post_id?: string
          produce_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_related_produce_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_related_produce_produce_id_fkey"
            columns: ["produce_id"]
            isOneToOne: false
            referencedRelation: "produce"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_post_tags: {
        Row: {
          blog_post_id: string
          tag_id: string
        }
        Insert: {
          blog_post_id: string
          tag_id: string
        }
        Update: {
          blog_post_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_tags_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          published_at: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      produce: {
        Row: {
          additional_tests: string | null
          category_id: string | null
          created_at: string
          created_by: string | null
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          featured: boolean
          id: string
          main_image: string | null
          name: string
          overripe_image: string | null
          ripe_image: string | null
          ripening_tips: string | null
          short_description: string | null
          slug: string
          smell_test: string | null
          status: string
          storage_recommendations: string | null
          touch_test: string | null
          underripe_image: string | null
          updated_at: string
          updated_by: string | null
          visual_indicators: string | null
        }
        Insert: {
          additional_tests?: string | null
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          featured?: boolean
          id?: string
          main_image?: string | null
          name: string
          overripe_image?: string | null
          ripe_image?: string | null
          ripening_tips?: string | null
          short_description?: string | null
          slug: string
          smell_test?: string | null
          status?: string
          storage_recommendations?: string | null
          touch_test?: string | null
          underripe_image?: string | null
          updated_at?: string
          updated_by?: string | null
          visual_indicators?: string | null
        }
        Update: {
          additional_tests?: string | null
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          featured?: boolean
          id?: string
          main_image?: string | null
          name?: string
          overripe_image?: string | null
          ripe_image?: string | null
          ripening_tips?: string | null
          short_description?: string | null
          slug?: string
          smell_test?: string | null
          status?: string
          storage_recommendations?: string | null
          touch_test?: string | null
          underripe_image?: string | null
          updated_at?: string
          updated_by?: string | null
          visual_indicators?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "produce_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      produce_seasons: {
        Row: {
          produce_id: string
          season_id: string
        }
        Insert: {
          produce_id: string
          season_id: string
        }
        Update: {
          produce_id?: string
          season_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "produce_seasons_produce_id_fkey"
            columns: ["produce_id"]
            isOneToOne: false
            referencedRelation: "produce"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produce_seasons_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "seasons"
            referencedColumns: ["id"]
          },
        ]
      }
      produce_tags: {
        Row: {
          produce_id: string
          tag_id: string
        }
        Insert: {
          produce_id: string
          tag_id: string
        }
        Update: {
          produce_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "produce_tags_produce_id_fkey"
            columns: ["produce_id"]
            isOneToOne: false
            referencedRelation: "produce"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produce_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      related_produce: {
        Row: {
          produce_id: string
          related_id: string
        }
        Insert: {
          produce_id: string
          related_id: string
        }
        Update: {
          produce_id?: string
          related_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "related_produce_produce_id_fkey"
            columns: ["produce_id"]
            isOneToOne: false
            referencedRelation: "produce"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "related_produce_related_id_fkey"
            columns: ["related_id"]
            isOneToOne: false
            referencedRelation: "produce"
            referencedColumns: ["id"]
          },
        ]
      }
      seasons: {
        Row: {
          end_month: number
          id: string
          name: string
          slug: string
          start_month: number
        }
        Insert: {
          end_month: number
          id?: string
          name: string
          slug: string
          start_month: number
        }
        Update: {
          end_month?: number
          id?: string
          name?: string
          slug?: string
          start_month?: number
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: {
        Args: { input_text: string }
        Returns: string
      }
    }
    Enums: {
      difficulty_level: "easy" | "moderate" | "challenging"
      user_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      difficulty_level: ["easy", "moderate", "challenging"],
      user_role: ["admin", "editor"],
    },
  },
} as const
