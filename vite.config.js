"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("@tailwindcss/vite");
var vite_2 = require("@tanstack/router-plugin/vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var path_1 = require("path");
var vite_3 = require("vite");
// https://vite.dev/config/
exports.default = (0, vite_3.defineConfig)({
  plugins: [
    (0, vite_2.tanstackRouter)({
      target: "react",
      autoCodeSplitting: true,
    }),
    (0, plugin_react_1.default)(),
    (0, vite_1.default)(),
  ],
  resolve: {
    alias: {
      "@": path_1.default.resolve(__dirname, "src"),
    },
  },
});
