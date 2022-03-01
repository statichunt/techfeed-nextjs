const isProd = process.env.NODE_ENV === "production";
module.exports = {
  reactStrictMode: true,
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   routes = {
  //     "/": { page: "/", assetPrefix: "./" }, // Index page
  //     "/post/find-love": { page: "/post/[slug]" },
  //     "/post/green-forest": { page: "/post/[slug]" },
  //     "/post/love-art": { page: "/post/[slug]" },
  //     "/post/nature-photgraphy": { page: "/post/[slug]" },
  //     "/post/natural-love": { page: "/post/[slug]" },
  //     "/post/sky-view": { page: "/post/[slug]" },
  //     "/post/snow": { page: "/post/[slug]" },
  //     "/post/sunset-beauty": { page: "/post/[slug]" },
  //     "/category/Love-&-Romance": { page: "/category/[category]" },
  //     "/category/Natural-Beauty": { page: "/category/[category]" },
  //     "/category/Travels-&-Tour": { page: "/category/[category]" },
  //     "/category/Travels-and-Tour": { page: "/category/[category]" },
  //   };
  //   return routes;
  // },
  // trailingSlash: true,
  // basePath: "/out",
  //  requires the trailing slash
};
