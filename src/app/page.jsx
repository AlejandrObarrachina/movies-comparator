import RootLayout from "./layout";
import GridOfMovies from "./components/GridOfMovies";

export default function Home() {
  return (
    <RootLayout title="TBMCE || Home">
      <GridOfMovies popular />
    </RootLayout>
  );
}
