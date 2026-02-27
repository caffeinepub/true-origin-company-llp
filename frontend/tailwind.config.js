/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepEmerald: "#0F3D2E",
        softGold: "#C6A75E",
        backgroundLight: "#F4F1EA",
        textDark: "#1A1A1A",
        // Semantic aliases
        forest: {
          DEFAULT: "#0F3D2E",
          50: "#e8f0ed",
          100: "#c5d9d0",
          200: "#9ebfb3",
          300: "#77a596",
          400: "#5a9180",
          500: "#3d7d6a",
          600: "#2e6b58",
          700: "#1f5545",
          800: "#0F3D2E",
          900: "#082a1f",
        },
        gold: {
          DEFAULT: "#C6A75E",
          50: "#faf5e9",
          100: "#f2e5c3",
          200: "#e8d49a",
          300: "#ddc271",
          400: "#d4b44e",
          500: "#C6A75E",
          600: "#b8943a",
          700: "#9a7a2e",
          800: "#7c6124",
          900: "#5e491a",
        },
        cream: {
          DEFAULT: "#F4F1EA",
          50: "#fdfcfa",
          100: "#F4F1EA",
          200: "#e8e2d4",
          300: "#d9d0bc",
          400: "#c8bda3",
          500: "#b5a88a",
        },
        parchment: "#F4F1EA",
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
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        none: "0",
        full: "9999px",
      },
      boxShadow: {
        'emerald': '0 4px 24px rgba(15, 61, 46, 0.15)',
        'gold': '0 4px 24px rgba(198, 167, 94, 0.25)',
        'card': '0 2px 16px rgba(15, 61, 46, 0.08)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}
