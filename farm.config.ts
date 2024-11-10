import { defineConfig } from "@farmfe/core";
import farmPluginPostcss from "@farmfe/js-plugin-postcss";
import farmJsPluginSvgr from "@farmfe/js-plugin-svgr";

export default defineConfig({
  compilation: {
    persistentCache: process.env.NODE_ENV === "production",
    minify: process.env.NODE_ENV === "production",
  },
  plugins: ["@farmfe/plugin-react", farmJsPluginSvgr({ svgrOptions: { icon: true, dimensions: false, svgo: true } }), farmPluginPostcss()],
  server: {
    port: +(process.env.FARM_PORT || 3000),
  },
});
