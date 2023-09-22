import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children, title }) {
  return (
    <html className="h-max">
      <head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png" />
      </head>
      <body className="bg-gradient-to-r from-cyan-950 to-gray-950 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col p-4">{children}</main>
      </body>
    </html>
  );
}
