export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  let progressText = "Loading...";

  try {
    const res = await fetch(`${baseUrl}/roadmaps/1`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch roadmap");
    const roadmap = await res.json();

    const total = roadmap.total_tasks ?? 0;
    const completed = roadmap.completed_tasks ?? 0;

    progressText =
      total > 0
        ? `${completed}/${total} Micro-Moves Complete`
        : "No Micro-Moves found";
  } catch (err) {
    progressText = "Error fetching roadmap ❌";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">ArtistOS Progress Tracker</h1>
      <p className="text-xl">{progressText}</p>
    </main>
  );
}
