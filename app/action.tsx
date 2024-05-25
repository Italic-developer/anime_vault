"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// a server action that gets some data from an API and the function is called featchAnime

export async function featchAnime(page: number) {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
  );
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  if (data) {
    return data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ));
  }
}
