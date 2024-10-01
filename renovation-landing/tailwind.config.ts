import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
        fontFamily: {
            "gilroy": "Gilroy",
        },
        colors: {
            "primary": "#222222",
        },
        backgroundImage: {
            "services-background": "url(/src/assets/img/services-background.jpeg)"
        },
    },
  },
  plugins: [],
} satisfies Config
