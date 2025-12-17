import React, { useRef } from "react";
import EpisodeCard from "../components/EpisodeCard";

export default function CategoryCarousel({ title, items }) {
  const scrollerRef = useRef(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-lg md:text-xl font-semibold mb-4 capitalize">{title}</h2>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
      >
        {items.map((podcast) => (
          <EpisodeCard key={podcast.videoId} podcast={podcast} />
        ))}
      </div>
    </section>
  );
}
