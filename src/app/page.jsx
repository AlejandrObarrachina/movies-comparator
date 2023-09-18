import RootLayout from "./layout";
import Header from "./components/Header";
import GridOfMovies from "./components/GridOfMovies";

export default function Home() {
  return (
    <RootLayout title="TBMCE || Home">
      <Header />
      <GridOfMovies />
    </RootLayout>
  );
}
