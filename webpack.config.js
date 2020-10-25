const { webpackConfig } = require("./webpack.plugin");

module.exports = webpackConfig("cart", (defaultConfig) => {
  return {
    ...defaultConfig,
    entry: {
      resume: "./src/modules/resume/resume.tsx",
      details: "./src/modules/details/details.tsx",
      ...(defaultConfig.mode === "production"
        ? {}
        : { preview: "./src/preview.tsx" }),
    },
  };
});
