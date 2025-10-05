export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/health';
  let status = 'unknown';

  try {
    const res = await fetch(apiUrl);
    status = res.ok ? 'Backend connected ✅' : 'Backend unreachable ❌';
  } catch (err) {
    status = 'Backend unreachable ❌';
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">ArtistOS Frontend Connected</h1>
      <p>{status}</p>
    </main>
  );
}
