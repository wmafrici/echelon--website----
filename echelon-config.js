// ─────────────────────────────────────────────────────────────
// Echelon — Supabase configuration
// These values come from Supabase → Project Settings → API.
// The anon key is safe to expose in client code; access is
// controlled by Row Level Security policies on the table.
// ─────────────────────────────────────────────────────────────
window.ECHELON_SUPABASE = {
  url:     "https://tekhbwqvyhsdgqbcfnts.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRla2hid3F2eWhzZGdxYmNmbnRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTI0MjIsImV4cCI6MjA5NjQ4ODQyMn0.Eu_trLPpyJmxbbLVL3lUQCqt8xLL7c_6rOISEeWOlzw",
};

// Auto-detects whether real values have been filled in.
window.ECHELON_CONFIGURED =
  /^https:\/\/.+\.supabase\.co/.test(window.ECHELON_SUPABASE.url) &&
  window.ECHELON_SUPABASE.anonKey.indexOf("eyJ") === 0;
