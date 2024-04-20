export default async function supabaseData(table: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${table}`,
    {
      method: "GET",
      headers: {
        apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data", { cause: res });
  }

  return res.json();
}
