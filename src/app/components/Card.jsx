export default function Card({ movies }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <a
      href={`/${movies.id}`}
      key={movies.key}
      className="text-center cursor-pointer rounded-lg border shadow-md bg-gray-900 border-gray-700 hover:scale-105 hover:border-gray-600 transition flex flex-col"
    >
      <picture className="justify-center p-4 flex">
        <img
          src={`${imgUrl}${movies.poster_path}`}
          alt={`Movie poster of ${movies.original_title}`}
          width={200}
          height={300}
        />
      </picture>
      <p>Rating: {movies.vote_average}⭐</p>
      <h3 className="text-2xl font-semibold mx-3">{movies.original_title}</h3>
      <ul className="flex justify-evenly m-2 mt-6"></ul>
    </a>
  );
}
