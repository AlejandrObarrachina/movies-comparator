import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children, title }) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body className="h-14 bg-gradient-to-r from-cyan-950 to-gray-950">
        {children}
      </body>
    </html>
  );
}
