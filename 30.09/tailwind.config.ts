import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
        colors: {
            "accent": "#02AC8F",
        }
    },
  },
  plugins: [],
} satisfies Config
