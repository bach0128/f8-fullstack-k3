import ProvidersTheme from "./Providers";
import "../app/globals.css";
import Navbar from "./pages/Navbar/Navbar";
import Auth from "../app/auths/Auth";
import SessionProvider from "./components/SessionProvider";

// import { getServerSession as getServerSession } from "next-auth";

export const metadata = {
  title: "Create Portfolio",
  description: "Day48-btvn-fullstack-f8",
};

export default async function RootLayout({ params: { lang }, children }) {
  // const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProvidersTheme>
          <main>
            <Navbar />
            {children}
          </main>
        </ProvidersTheme>
      </body>
    </html>
  );
}
