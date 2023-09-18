"use client";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function GridOfMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b77a11d0c97e646dd927293a6b1ad43d"
      );
      const json = await res.json();
      setMovies(json.results);
      setIsLoading(true);
    }
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <section className="grid sm:grid-cols-2  lg:grid-cols-4 grid-flow-dense gap-4 py-8 px-8 pt-0 mx-auto max-w-6xl  lg:py-6 lg:pt-0 text-white">
          {movies.map((movie) => (
            <Card movies={movie} />
          ))}
        </section>
      ) : (
        <div className="max-w-md text-center mx-auto mt-48 ">
          <h2 className="text-5xl font-semibold uppercase ">film is rolling</h2>
          <p className="font-thin mt-5">It'll only take a minute 😉</p>
        </div>
      )}
    </>
  );
}
