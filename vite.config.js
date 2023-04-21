const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    outDir: resolve(__dirname, "dist"),
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        company: resolve(__dirname, "src/company.html"),
        features: resolve(__dirname, "src/features.html"),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  publicDir: resolve(__dirname, "public"),
  root: "src",

});
