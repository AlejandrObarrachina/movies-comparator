export default async function MovieDetailedPage({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="max-w-md mx-auto flex flex-col gap-4 text-center mt-5 px-5">
      <picture>
        <img src={`${imgUrl}${movie.poster_path}`} alt="" />
      </picture>
      <ul
        className="flex flex-row justify-evenly border border-slate-500
      p-5 rounded-lg bg-cyan-200 text-slate-950 font-semibold"
      >
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p className="text-justify">{movie.overview}</p>
    </div>
  );
}
