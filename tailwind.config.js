/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C0A08",
        coal: "#161109",
        gold: "#C9A15C",
        gild: "#E4C287",
        terra: "#C25E3E",
        bone: "#EFE7DA",
        sand: "#A6937B",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["'Instrument Sans'", "system-ui", "sans-serif"],
        serif: ["'Fraunces'", "Georgia", "serif"],
        mono: ["'Fragment Mono'", "ui-monospace", "monospace"],
        mal: ["'Noto Sans Malayalam'", "sans-serif"],
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "to": { transform: "translateX(-50%)" },
        },
        "scroll-cue": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "top" },
          "56%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 60s linear infinite",
        "scroll-cue": "scroll-cue 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
      },
    },
  },
  plugins: [],
}
