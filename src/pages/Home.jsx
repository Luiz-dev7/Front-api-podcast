import React, { useEffect, useState } from "react";
import { getPodcasts } from "../services/podcastServices";
import CategoryCarousel from "../components/CategoryCarousel";

export default function Home() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    getPodcasts().then((data) => setPodcasts(Array.isArray(data) ? data : []));
  }, []);

  const categories = [...new Set(podcasts.flatMap((p) => p.categorie || []))];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
        <h1 className="text-xl md:text-2xl font-bold">Podcast Package Manager</h1>
      </header>

      <main className="px-6 py-8">
        {categories.map((cat) => (
          <CategoryCarousel
            key={cat}
            title={cat}
            items={podcasts.filter((p) => (p.categorie || []).includes(cat))}
          />
        ))}
      </main>
    </div>
  );
}
