export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      admins: {
        Row: {
          id: string
          inserted_at: string
        }
        Insert: {
          id: string
          inserted_at?: string
        }
        Update: {
          id?: string
          inserted_at?: string
        }
        Relationships: []
      }
      blips: {
        Row: {
          active: boolean | null
          created_at: string | null
          current_ring: number
          id: number
          previous_ring: number | null
          radar_id: number | null
          solution_id: number | null
          solution_ids: number[] | null
          technology_id: number | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          current_ring?: number
          id?: number
          previous_ring?: number | null
          radar_id?: number | null
          solution_id?: number | null
          solution_ids?: number[] | null
          technology_id?: number | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          current_ring?: number
          id?: number
          previous_ring?: number | null
          radar_id?: number | null
          solution_id?: number | null
          solution_ids?: number[] | null
          technology_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blips_radar_id_fkey"
            columns: ["radar_id"]
            isOneToOne: false
            referencedRelation: "radars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blips_solution_id_fkey"
            columns: ["solution_id"]
            isOneToOne: false
            referencedRelation: "labels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blips_technology_id_fkey"
            columns: ["technology_id"]
            isOneToOne: false
            referencedRelation: "technologies"
            referencedColumns: ["id"]
          },
        ]
      }
      certifications: {
        Row: {
          id: number
          issuer_id: number | null
          name: string | null
          url: string | null
        }
        Insert: {
          id?: number
          issuer_id?: number | null
          name?: string | null
          url?: string | null
        }
        Update: {
          id?: number
          issuer_id?: number | null
          name?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certifications_issuer_id_fkey"
            columns: ["issuer_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      channels: {
        Row: {
          active: boolean
          id: number
          name: string
          url: string
        }
        Insert: {
          active?: boolean
          id?: number
          name: string
          url: string
        }
        Update: {
          active?: boolean
          id?: number
          name?: string
          url?: string
        }
        Relationships: []
      }
      courses: {
        Row: {
          certification_id: number | null
          id: number
          level: Database["public"]["Enums"]["level"] | null
          name: string | null
          organization_id: number | null
          platform: string | null
          technologies: number[] | null
          url: string | null
        }
        Insert: {
          certification_id?: number | null
          id?: number
          level?: Database["public"]["Enums"]["level"] | null
          name?: string | null
          organization_id?: number | null
          platform?: string | null
          technologies?: number[] | null
          url?: string | null
        }
        Update: {
          certification_id?: number | null
          id?: number
          level?: Database["public"]["Enums"]["level"] | null
          name?: string | null
          organization_id?: number | null
          platform?: string | null
          technologies?: number[] | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "programs_certification_id_fkey"
            columns: ["certification_id"]
            isOneToOne: false
            referencedRelation: "certifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "programs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      development: {
        Row: {
          description_en: string
          description_nl: string
          fts_en: unknown | null
          fts_nl: unknown | null
          goal: string
          id: number
          inserted_at: string
          profile_id: string
          technologies: number[] | null
          updated_at: string
        }
        Insert: {
          description_en?: string
          description_nl?: string
          fts_en?: unknown | null
          fts_nl?: unknown | null
          goal?: string
          id?: number
          inserted_at?: string
          profile_id: string
          technologies?: number[] | null
          updated_at?: string
        }
        Update: {
          description_en?: string
          description_nl?: string
          fts_en?: unknown | null
          fts_nl?: unknown | null
          goal?: string
          id?: number
          inserted_at?: string
          profile_id?: string
          technologies?: number[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_development_profiles"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      education: {
        Row: {
          certification_id: number | null
          id: number
          month_end: number | null
          month_start: number | null
          name: string | null
          organization_id: number | null
          profile_id: string
          remarks_en: string | null
          remarks_nl: string | null
          technologies: number[] | null
          year_end: number | null
          year_start: number | null
        }
        Insert: {
          certification_id?: number | null
          id?: number
          month_end?: number | null
          month_start?: number | null
          name?: string | null
          organization_id?: number | null
          profile_id: string
          remarks_en?: string | null
          remarks_nl?: string | null
          technologies?: number[] | null
          year_end?: number | null
          year_start?: number | null
        }
        Update: {
          certification_id?: number | null
          id?: number
          month_end?: number | null
          month_start?: number | null
          name?: string | null
          organization_id?: number | null
          profile_id?: string
          remarks_en?: string | null
          remarks_nl?: string | null
          technologies?: number[] | null
          year_end?: number | null
          year_start?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_education_certification"
            columns: ["certification_id"]
            isOneToOne: false
            referencedRelation: "certifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_education_organizations"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_education_profiles"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      experience: {
        Row: {
          activities_en: string
          activities_nl: string
          employer: string | null
          fts_en: unknown | null
          fts_nl: unknown | null
          id: number
          job_function: string
          month_end: number | null
          month_start: number | null
          organization_id: number | null
          profile_id: string | null
          project_id: number | null
          technologies: number[] | null
          year_end: number | null
          year_start: number | null
        }
        Insert: {
          activities_en?: string
          activities_nl?: string
          employer?: string | null
          fts_en?: unknown | null
          fts_nl?: unknown | null
          id?: number
          job_function?: string
          month_end?: number | null
          month_start?: number | null
          organization_id?: number | null
          profile_id?: string | null
          project_id?: number | null
          technologies?: number[] | null
          year_end?: number | null
          year_start?: number | null
        }
        Update: {
          activities_en?: string
          activities_nl?: string
          employer?: string | null
          fts_en?: unknown | null
          fts_nl?: unknown | null
          id?: number
          job_function?: string
          month_end?: number | null
          month_start?: number | null
          organization_id?: number | null
          profile_id?: string | null
          project_id?: number | null
          technologies?: number[] | null
          year_end?: number | null
          year_start?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_experience_profiles"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_experience_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_organization"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      labels: {
        Row: {
          acronym: string | null
          id: number
          text_en: string | null
          text_nl: string | null
          type: number | null
        }
        Insert: {
          acronym?: string | null
          id?: number
          text_en?: string | null
          text_nl?: string | null
          type?: number | null
        }
        Update: {
          acronym?: string | null
          id?: number
          text_en?: string | null
          text_nl?: string | null
          type?: number | null
        }
        Relationships: []
      }
      news: {
        Row: {
          category: string[]
          channel_id: number | null
          guid: string
          link: string
          pub_date: string
          title: string
        }
        Insert: {
          category?: string[]
          channel_id?: number | null
          guid: string
          link: string
          pub_date: string
          title: string
        }
        Update: {
          category?: string[]
          channel_id?: number | null
          guid?: string
          link?: string
          pub_date?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "news_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          id: number
          logo: string | null
          name: string | null
          types: string[] | null
          website_url: string | null
        }
        Insert: {
          id?: number
          logo?: string | null
          name?: string | null
          types?: string[] | null
          website_url?: string | null
        }
        Update: {
          id?: number
          logo?: string | null
          name?: string | null
          types?: string[] | null
          website_url?: string | null
        }
        Relationships: []
      }
      proficiency: {
        Row: {
          level: number
          profile_id: string
          technology_id: number
        }
        Insert: {
          level: number
          profile_id: string
          technology_id: number
        }
        Update: {
          level?: number
          profile_id?: string
          technology_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "proficiency_technology_id_fkey"
            columns: ["technology_id"]
            isOneToOne: false
            referencedRelation: "technologies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proficiency_user_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_descriptions: {
        Row: {
          id: number
          is_primary: boolean
          profile_id: string
          text: string
          title: string
        }
        Insert: {
          id?: number
          is_primary?: boolean
          profile_id: string
          text: string
          title: string
        }
        Update: {
          id?: number
          is_primary?: boolean
          profile_id?: string
          text?: string
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          about_en: string
          about_nl: string
          active: boolean
          city: string | null
          dob: string | null
          fts_en: unknown | null
          fts_nl: unknown | null
          full_name: string | null
          hours: number | null
          id: string
          job_title: string | null
          picture_url: string | null
          solution_ids: number[]
          solutions: number[] | null
          updated_at: string | null
        }
        Insert: {
          about_en?: string
          about_nl?: string
          active?: boolean
          city?: string | null
          dob?: string | null
          fts_en?: unknown | null
          fts_nl?: unknown | null
          full_name?: string | null
          hours?: number | null
          id: string
          job_title?: string | null
          picture_url?: string | null
          solution_ids?: number[]
          solutions?: number[] | null
          updated_at?: string | null
        }
        Update: {
          about_en?: string
          about_nl?: string
          active?: boolean
          city?: string | null
          dob?: string | null
          fts_en?: unknown | null
          fts_nl?: unknown | null
          full_name?: string | null
          hours?: number | null
          id?: string
          job_title?: string | null
          picture_url?: string | null
          solution_ids?: number[]
          solutions?: number[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          fts_en: unknown | null
          fts_nl: unknown | null
          id: number
          name: string
          organization_id: number | null
          summary_en: string
          summary_nl: string
        }
        Insert: {
          fts_en?: unknown | null
          fts_nl?: unknown | null
          id?: number
          name?: string
          organization_id?: number | null
          summary_en?: string
          summary_nl?: string
        }
        Update: {
          fts_en?: unknown | null
          fts_nl?: unknown | null
          id?: number
          name?: string
          organization_id?: number | null
          summary_en?: string
          summary_nl?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_projects_organizations"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      radars: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      solutions: {
        Row: {
          id: number
          lead: string | null
          name: string | null
        }
        Insert: {
          id?: number
          lead?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          lead?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solutions_lead_fkey"
            columns: ["lead"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technologies: {
        Row: {
          alt_label: string | null
          description: string | null
          documentation_url: string | null
          id: number
          label: string | null
          link: string | null
          logo: string | null
          organization_id: number | null
          parent_id: number | null
          quadrant: number | null
          registry_url: string | null
          repository_url: string | null
          technology_type: number | null
          types: number[] | null
        }
        Insert: {
          alt_label?: string | null
          description?: string | null
          documentation_url?: string | null
          id?: number
          label?: string | null
          link?: string | null
          logo?: string | null
          organization_id?: number | null
          parent_id?: number | null
          quadrant?: number | null
          registry_url?: string | null
          repository_url?: string | null
          technology_type?: number | null
          types?: number[] | null
        }
        Update: {
          alt_label?: string | null
          description?: string | null
          documentation_url?: string | null
          id?: number
          label?: string | null
          link?: string | null
          logo?: string | null
          organization_id?: number | null
          parent_id?: number | null
          quadrant?: number | null
          registry_url?: string | null
          repository_url?: string | null
          technology_type?: number | null
          types?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_technologies_labels"
            columns: ["technology_type"]
            isOneToOne: false
            referencedRelation: "labels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technologies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      unicorns: {
        Row: {
          city: string
          company: string
          country: string
          date_joined: string | null
          id: number
          industry: string
          select_investors: string
          valuation: number
        }
        Insert: {
          city: string
          company: string
          country: string
          date_joined?: string | null
          id?: number
          industry: string
          select_investors: string
          valuation: number
        }
        Update: {
          city?: string
          company?: string
          country?: string
          date_joined?: string | null
          id?: number
          industry?: string
          select_investors?: string
          valuation?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_admins: {
        Args: { input: string[] }
        Returns: {
          id: string
          inserted_at: string
        }[]
      }
      create_organization: {
        Args: { organization_name: string; organization_type: string }
        Returns: {
          id: number
          logo: string | null
          name: string | null
          types: string[] | null
          website_url: string | null
        }[]
      }
      exp_skills_ng: {
        Args: { pid: string }
        Returns: {
          id: number
          months: number
          years: number
        }[]
      }
      experience_for_resume: {
        Args: { input_id: string }
        Returns: {
          activities_en: string
          activities_nl: string
          applied: string
          client: string
          employer: string
          id: number
          job_function: string
          month_end: number
          month_start: number
          project: string
          summary_en: string
          summary_nl: string
          year_end: number
          year_start: number
        }[]
      }
      missing_skills_ng: {
        Args: { pid: string; sid: number }
        Returns: {
          id: number
          label: string
          ring: number
        }[]
      }
      news_for_radar: {
        Args: { rid: number }
        Returns: {
          category: string[]
          channel_name: string
          guid: string
          link: string
          pub_date: string
          title: string
        }[]
      }
      news_for_tags: {
        Args: { tags: string[] }
        Returns: {
          category: string[]
          channel_name: string
          guid: string
          link: string
          pub_date: string
          title: string
        }[]
      }
      organization_stats_ng: {
        Args: { oid: number }
        Returns: {
          edu_count: number
          exp_count: number
          id: number
          tec_count: number
        }[]
      }
      profiles_for_client: {
        Args: { input: number }
        Returns: {
          full_name: string
          id: string
        }[]
      }
      profiles_for_project: {
        Args: { input: number }
        Returns: {
          full_name: string
          id: string
        }[]
      }
      search_profiles_en: {
        Args: { criteria: string; normalization: number }
        Returns: {
          description: string
          full_name: string
          id: number
          profile_id: string
          rank: number
          section: string
          title: string
        }[]
      }
      search_profiles_nl: {
        Args: { criteria: string; normalization: number }
        Returns: {
          description: string
          full_name: string
          id: number
          profile_id: string
          rank: number
          section: string
          title: string
        }[]
      }
      set_admin: {
        Args: { flag: boolean; input: string }
        Returns: {
          id: string
          inserted_at: string
        }[]
      }
      skills: {
        Args: { pid: string }
        Returns: {
          id: number
          label: string
          months: number
          years: number
        }[]
      }
      skills_ng: {
        Args: { pid: string }
        Returns: {
          id: number
          label: string
          level: number
          months: number
          radars: number[]
          years: number
        }[]
      }
      skills1_ng: {
        Args: { pid: string }
        Returns: {
          id: number
          label: string
        }[]
      }
      skills2_ng: {
        Args: { pid: string }
        Returns: {
          id: number
          label: string
          level: number
          months: number
          radars: number[]
          years: number
        }[]
      }
      technologies_for_project: {
        Args: { input: number }
        Returns: {
          id: number
          label: string
        }[]
      }
      technologies_ng: {
        Args: Record<PropertyKey, never>
        Returns: {
          blp_count: number
          dev_count: number
          edu_count: number
          exp_count: number
          id: number
          label: string
          link: string
          quadrant: number
          technology_type: number
          technology_type_label: string
        }[]
      }
      technologies_to_text: {
        Args: { ids: number[] }
        Returns: string
      }
      technologies2_ng: {
        Args: Record<PropertyKey, never>
        Returns: {
          dev_count: number
          documentation_url: string
          edu_count: number
          exp_count: number
          id: number
          label: string
          link: string
          logo: string
          organization_id: number
          organization_name: string
          quadrant: number
          radars: Json
          registry_url: string
          repository_url: string
          types: Json
        }[]
      }
      technology_options: {
        Args: { sol_id: number }
        Returns: {
          label: string
          value: number
        }[]
      }
      technology_stats_ng: {
        Args: { tid: number }
        Returns: {
          dev_count: number
          edu_count: number
          exp_count: number
          id: number
        }[]
      }
      vendors_ng: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          logo: string
          name: string
          nws_count: number
        }[]
      }
    }
    Enums: {
      level: "beginner" | "intermediate" | "advanced"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      level: ["beginner", "intermediate", "advanced"],
    },
  },
} as const

