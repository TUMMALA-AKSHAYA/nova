import dotenv from "dotenv";

dotenv.config();
console.log("Gemini Key Loaded:", !!process.env.GEMINI_API_KEY);
console.log("Supabase URL Loaded:", !!process.env.SUPABASE_URL);
console.log("Supabase Service Role Key Loaded:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log("AI Provider Loaded:", process.env.AI_PROVIDER ?? "gemini");
export const env = {
  geminiApiKey: process.env.GEMINI_API_KEY ?? "",

  supabaseUrl: process.env.SUPABASE_URL ?? "",

  supabaseServiceRoleKey:
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",

  aiProvider:
    process.env.AI_PROVIDER ?? "gemini",
};