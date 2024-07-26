import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  const headers = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16c294ZGF3cmxidXBqYXF3emVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMTUyMzYsImV4cCI6MjAzNzU5MTIzNn0.sGZ75E5mMD9c8u0fBze4B2YcyaPHG3WhJuEVC3A_J3g",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16c294ZGF3cmxidXBqYXF3emVqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjAxNTIzNiwiZXhwIjoyMDM3NTkxMjM2fQ.FuiMvb5BBUdGOPF1kLnUxBufp_HunJnA3s12E379X6I",
  };

  const url = `https://mzsoxdawrlbupjaqwzej.supabase.co/rest/v1/cursos`;
  const response = await fetch(url, { headers });
  const cursos = await response.json();

  return {
    cursos,
  };
};
