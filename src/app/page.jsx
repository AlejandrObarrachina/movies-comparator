"use client";
import RootLayout from "./layout";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b77a11d0c97e646dd927293a6b1ad43d"
      );
      const json = await res.json();
      setMovies(json.results);
    }
    fetchData();
  }, []);

  return (
    <RootLayout title="TBMCE || Home">
      <Header />
      <section className="grid sm:grid-cols-2  lg:grid-cols-4 grid-flow-dense gap-4 py-8 px-8 pt-0 mx-auto max-w-6xl  lg:py-6 lg:pt-0 text-white">
        {movies.map((movie) => (
          <Card movies={movie} />
        ))}
      </section>
    </RootLayout>
  );
}
