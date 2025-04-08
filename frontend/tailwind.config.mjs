/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueColor: "#0d6efd",
        brownColor: "#D4B301",
        purpleColor: "#6328A6",
      },
      
      fontWeight: {
        'bold-md': '600',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

