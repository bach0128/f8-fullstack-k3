import Providers from "./Providers";
import "../app/globals.css";
import Home from "./[page]/Home/Home";
import Navbar from "./[page]/Navbar/Navbar";

export const metadata = {
  title: "Create Portfolio",
  description: "Day48-btvn-fullstack-f8",
};

export default function RootLayout({ params: { lang } }) {
  return (
    <html lang={params}>
      <body>
        <Providers>
          <Navbar />
          <Home />
        </Providers>
      </body>
    </html>
  );
}
