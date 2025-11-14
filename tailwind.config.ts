import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        'header': ['var(--font-header)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;