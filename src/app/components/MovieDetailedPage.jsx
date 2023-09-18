const fetchMovie = (movieId) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=b77a11d0c97e646dd927293a6b1ad43d`
  ).then((res) => res.json());
};

export default async function MovieDetailedPage({ movieId }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const movie = await fetchMovie(movieId);

  console.log(movie);

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
