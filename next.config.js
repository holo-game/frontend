const path = require("path");

module.exports = {
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
        : "http://localhost:1337",
  },
};
