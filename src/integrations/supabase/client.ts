// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kpdpzirzhjuyesnxdqcg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZHB6aXJ6aGp1eWVzbnhkcWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NDU5MDMsImV4cCI6MjA2MDIyMTkwM30.w1wJShyLfH5R1Wo0OXdQnsHTgnWQuNB6Z8_X0jsoAIk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);