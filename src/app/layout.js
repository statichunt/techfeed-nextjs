import Footer from "@/component/Footer";
import { Header } from "@/component/Header";
import perameters from "@/config/config.json";
import config from "@/config/theme.json";
import "@/styles/globals.css";

const { site } = perameters;
const { font_family } = config.fonts;

export const metadata = {
  title: site.title,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${font_family.secondary}&family=${font_family.primary}&display=swap`}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href={site.favicon}></link>
        <title>{site?.title}</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
