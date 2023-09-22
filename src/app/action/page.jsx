import RootLayout from "../layout";
import Header from "../components/Header";
import GridOfMovies from "../components/GridOfMovies";

export default function ActionPage() {
  return (
    <RootLayout title="TBMCE || About">
      <GridOfMovies genre="28" />
    </RootLayout>
  );
}
