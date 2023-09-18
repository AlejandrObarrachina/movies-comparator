import RootLayout from "@/app/layout";
import Header from "@/app/components/Header";
import MovieDetailedPage from "../components/MovieDetailedPage";

const fetchMovie = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b77a11d0c97e646dd927293a6b1ad43d`
  ).then((res) => res.json());
};

export default async function MoviePage({ params }) {
  const { id } = params;

  const data = await fetchMovie(id);

  return (
    <RootLayout title={data.original_title}>
      <Header />
      <MovieDetailedPage movieId={id} />
    </RootLayout>
  );
}
