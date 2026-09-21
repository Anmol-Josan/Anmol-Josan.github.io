import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070807",
        panel: "#10120f",
        paper: "#f4f1e8",
        muted: "#9ea69a",
        line: "rgba(244, 241, 232, 0.14)",
        moss: "#9bd870",
        cyan: "#6ed6ff",
        coral: "#ff735c",
        amber: "#f6c85f"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        glow: "0 0 42px rgba(110, 214, 255, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
