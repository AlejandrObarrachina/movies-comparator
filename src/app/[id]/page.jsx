import RootLayout from "@/app/layout";
import Header from "@/app/components/Header";
import MovieDetailedPage from "../components/MovieDetailedPage";
import { findMovieById } from "../services/fetch";

export default async function MoviePage({ params }) {
  const { id } = params;
  const data = await findMovieById(id);
  return (
    <RootLayout title={data.original_title}>
      <MovieDetailedPage movie={data} />
    </RootLayout>
  );
}
