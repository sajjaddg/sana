import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "grey-classic": {
          50: "var(--grey-classic-50)",
          100: "var(--grey-classic-100)",
          200: "var(--grey-classic-200)",
          300: "var(--grey-classic-300)",
          400: "var(--grey-classic-400)",
          500: "var(--grey-classic-500)",
          600: "var(--grey-classic-600)",
          700: "var(--grey-classic-700)",
          800: "var(--grey-classic-800)",
          900: "var(--grey-classic-900)",
        },
      },
      fontSize: {
        "8": ["var(--text-8-font-size)", "var(--text-8-line-height)"],
        "7": ["var(--text-7-font-size)", "var(--text-7-line-height)"],
        "6": ["var(--text-6-font-size)", "var(--text-6-line-height)"],
        "5": ["var(--text-5-font-size)", "var(--text-5-line-height)"],
        "4": ["var(--text-4-font-size)", "var(--text-4-line-height)"],
        "3": ["var(--text-3-font-size)", "var(--text-3-line-height)"],
        "2": ["var(--text-2-font-size)", "var(--text-2-line-height)"],
        "1": ["var(--text-1-font-size)", "var(--text-1-line-height)"],
      },
    },
  },
  plugins: [],
} satisfies Config
