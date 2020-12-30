const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  env: {
    API_URI:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:1337"
        : "https://32960a81b9b1.ngrok.io",
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    scope: "/",
    sw: "/service-worker.js",
    runtimeCaching,
  },
});
