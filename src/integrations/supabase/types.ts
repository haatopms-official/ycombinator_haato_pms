export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
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
      audit_log: {
        Row: {
          action: string
          actor_role: string
          actor_staff_id: string | null
          actor_username: string
          category: string
          created_at: string
          id: string
          metadata: Json
          summary: string
        }
        Insert: {
          action: string
          actor_role: string
          actor_staff_id?: string | null
          actor_username: string
          category: string
          created_at?: string
          id?: string
          metadata?: Json
          summary?: string
        }
        Update: {
          action?: string
          actor_role?: string
          actor_staff_id?: string | null
          actor_username?: string
          category?: string
          created_at?: string
          id?: string
          metadata?: Json
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_log_actor_staff_id_fkey"
            columns: ["actor_staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_log_actor_staff_id_fkey"
            columns: ["actor_staff_id"]
            isOneToOne: false
            referencedRelation: "staff_directory"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_payments: {
        Row: {
          amount: number
          booking_id: string
          id: string
          method: string
          paid_at: string
          recorded_by: string | null
        }
        Insert: {
          amount: number
          booking_id: string
          id?: string
          method: string
          paid_at?: string
          recorded_by?: string | null
        }
        Update: {
          amount?: number
          booking_id?: string
          id?: string
          method?: string
          paid_at?: string
          recorded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_payments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_payments_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_payments_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "staff_directory"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_segments: {
        Row: {
          booking_id: string
          category_id: string
          from_date: string
          guest_count: number
          id: string
          nights: number
          per_night_rate: number
          price: number
          room_number: number
          sort_order: number
          to_date: string
        }
        Insert: {
          booking_id: string
          category_id: string
          from_date: string
          guest_count?: number
          id?: string
          nights?: number
          per_night_rate: number
          price: number
          room_number: number
          sort_order?: number
          to_date: string
        }
        Update: {
          booking_id?: string
          category_id?: string
          from_date?: string
          guest_count?: number
          id?: string
          nights?: number
          per_night_rate?: number
          price?: number
          room_number?: number
          sort_order?: number
          to_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_segments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          additional_beds: number[]
          bed_index: number | null
          booking_channel: string
          check_in: string
          check_in_half_day: boolean
          check_in_late_night: boolean
          check_out: string
          check_out_half_day: boolean
          created_at: string
          created_by: string | null
          guest_count: number
          guest_email: string
          guest_first_name: string
          guest_instagram: string
          guest_last_name: string
          guest_middle_name: string
          guest_phone: string
          guest_telegram: string
          guest_whatsapp: string
          id: string
          notes: string
          payment_amount: number | null
          payment_confirmed: boolean
          payment_confirmed_at: string | null
          payment_timing: string | null
          payment_type: string | null
          price: number | null
          residency: string
          room_number: number
          status: string
          updated_at: string
        }
        Insert: {
          additional_beds?: number[]
          bed_index?: number | null
          booking_channel?: string
          check_in: string
          check_in_half_day?: boolean
          check_in_late_night?: boolean
          check_out: string
          check_out_half_day?: boolean
          created_at?: string
          created_by?: string | null
          guest_count?: number
          guest_email?: string
          guest_first_name?: string
          guest_instagram?: string
          guest_last_name?: string
          guest_middle_name?: string
          guest_phone?: string
          guest_telegram?: string
          guest_whatsapp?: string
          id?: string
          notes?: string
          payment_amount?: number | null
          payment_confirmed?: boolean
          payment_confirmed_at?: string | null
          payment_timing?: string | null
          payment_type?: string | null
          price?: number | null
          residency?: string
          room_number: number
          status?: string
          updated_at?: string
        }
        Update: {
          additional_beds?: number[]
          bed_index?: number | null
          booking_channel?: string
          check_in?: string
          check_in_half_day?: boolean
          check_in_late_night?: boolean
          check_out?: string
          check_out_half_day?: boolean
          created_at?: string
          created_by?: string | null
          guest_count?: number
          guest_email?: string
          guest_first_name?: string
          guest_instagram?: string
          guest_last_name?: string
          guest_middle_name?: string
          guest_phone?: string
          guest_telegram?: string
          guest_whatsapp?: string
          id?: string
          notes?: string
          payment_amount?: number | null
          payment_confirmed?: boolean
          payment_confirmed_at?: string | null
          payment_timing?: string | null
          payment_type?: string | null
          price?: number | null
          residency?: string
          room_number?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "staff_directory"
            referencedColumns: ["id"]
          },
        ]
      }
      guest_documents: {
        Row: {
          anketa: Json
          booking_id: string
          created_at: string
          id: string
          passport: Json
          passport_scan_path: string | null
          recorded_by: string | null
          updated_at: string
        }
        Insert: {
          anketa?: Json
          booking_id: string
          created_at?: string
          id?: string
          passport?: Json
          passport_scan_path?: string | null
          recorded_by?: string | null
          updated_at?: string
        }
        Update: {
          anketa?: Json
          booking_id?: string
          created_at?: string
          id?: string
          passport?: Json
          passport_scan_path?: string | null
          recorded_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "guest_documents_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: true
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guest_documents_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guest_documents_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "staff_directory"
            referencedColumns: ["id"]
          },
        ]
      }
      hotel_settings: {
        Row: {
          data: Json
          key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          data?: Json
          key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          data?: Json
          key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hotel_settings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hotel_settings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "staff_directory"
            referencedColumns: ["id"]
          },
        ]
      }
      room_categories: {
        Row: {
          code: string
          created_at: string
          id: string
          label_en: string
          label_ru: string
          label_uz: string
          max_guests: number
          rate_nonresident: number
          rate_resident: number
          short_label: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          label_en: string
          label_ru: string
          label_uz: string
          max_guests: number
          rate_nonresident?: number
          rate_resident?: number
          short_label: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          label_en?: string
          label_ru?: string
          label_uz?: string
          max_guests?: number
          rate_nonresident?: number
          rate_resident?: number
          short_label?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      rooms: {
        Row: {
          category_id: string
          created_at: string
          floor: number
          id: string
          is_active: boolean
          number: number
          updated_at: string
        }
        Insert: {
          category_id: string
          created_at?: string
          floor: number
          id?: string
          is_active?: boolean
          number: number
          updated_at?: string
        }
        Update: {
          category_id?: string
          created_at?: string
          floor?: number
          id?: string
          is_active?: boolean
          number?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rooms_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "room_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      shifts: {
        Row: {
          ended_at: string | null
          id: string
          kind: string
          staff_id: string
          started_at: string
        }
        Insert: {
          ended_at?: string | null
          id?: string
          kind: string
          staff_id: string
          started_at?: string
        }
        Update: {
          ended_at?: string | null
          id?: string
          kind?: string
          staff_id?: string
          started_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shifts_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shifts_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_directory"
            referencedColumns: ["id"]
          },
        ]
      }
      staff: {
        Row: {
          created_at: string
          fingerprint_id: string
          first_name: string
          id: string
          id_number: string
          is_active: boolean
          last_name: string
          role: string
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          fingerprint_id?: string
          first_name?: string
          id: string
          id_number?: string
          is_active?: boolean
          last_name?: string
          role?: string
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          fingerprint_id?: string
          first_name?: string
          id?: string
          id_number?: string
          is_active?: boolean
          last_name?: string
          role?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      staff_directory: {
        Row: {
          created_at: string | null
          fingerprint_id: string | null
          first_name: string | null
          id: string | null
          id_number: string | null
          is_active: boolean | null
          last_name: string | null
          role: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          fingerprint_id?: never
          first_name?: string | null
          id?: string | null
          id_number?: never
          is_active?: boolean | null
          last_name?: string | null
          role?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          fingerprint_id?: never
          first_name?: string | null
          id?: string | null
          id_number?: never
          is_active?: boolean | null
          last_name?: string | null
          role?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      is_active_staff: { Args: never; Returns: boolean }
      is_admin: { Args: never; Returns: boolean }
      resolve_staff_email: { Args: { p_username: string }; Returns: string }
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
