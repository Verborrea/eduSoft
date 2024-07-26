import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  const headers = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZWV3dnRzbmpqcnRtdnVkZWJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTcxMDAzNCwiZXhwIjoyMDM3Mjg2MDM0fQ.NUvDYMLK_AAFUi-VogeN5elsm7JXIyh4WCczJryA2n8",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZWV3dnRzbmpqcnRtdnVkZWJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTcxMDAzNCwiZXhwIjoyMDM3Mjg2MDM0fQ.NUvDYMLK_AAFUi-VogeN5elsm7JXIyh4WCczJryA2n8",
  };
  const url = `https://mzsoxdawrlbupjaqwzej.supabase.co/rest/v1/alumnos`;
  const response = await fetch(url, { headers });
  const alumnos = await response.json();

  return {
    alumnos,
  };
};
