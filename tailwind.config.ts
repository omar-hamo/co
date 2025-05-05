// tailwind.config.ts
import type { Config } from "tailwindcss";
import { join } from "path";

const config: Config = {
  content: [
    // عدّل المسارات حسب هيكل مجلداتك
    join(__dirname, "src/**/*.{js,jsx,ts,tsx}"),
    join(__dirname, "pages/**/*.{js,jsx,ts,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        // هنا تعرّف اللون الأساسي بعنوان `primary`
        primary: {
          DEFAULT: "#1E40AF", // اللون الرئيسي
          light: "#3B82F6", // ظلّ فاتح
          dark: "#1E3A8A", // ظلّ غامق
        },
      },
    },
  },
  plugins: [],
};

export default config;
