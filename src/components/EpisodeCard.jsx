import React, { useState } from "react";

export default function EpisodeCard({ podcast, onFavorite }) {
  const cover = `https://img.youtube.com/vi/${podcast.videoId}/hqdefault.jpg`;
  const [isFav, setIsFav] = useState(false);

  const toggleFavorite = () => {
    const newState = !isFav;
    setIsFav(newState);
    onFavorite(podcast.videoId, newState);
  };

  return (
    <div className="relative shrink-0 w-64 h-40 rounded-2xl overflow-hidden shadow-lg bg-zinc-900 hover:scale-105 transition-transform">
      <img src={cover} alt={podcast.episode} className="w-full h-full object-cover" />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold text-white truncate">{podcast.episode}</h2>
          {/* Estrela */}
          <button onClick={toggleFavorite} className="text-yellow-400 text-lg">
            {isFav ? "★" : "☆"}
          </button>
        </div>
        <p className="text-xs text-zinc-300 truncate">{podcast.podcastName}</p>
      </div>
    </div>
  );
}
