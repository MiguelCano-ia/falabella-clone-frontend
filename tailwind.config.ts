import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "header-background": "hsl(var(--header-background))",
        "primary-theme-color": "hsl(var(--primary-theme-color))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          brand: "hsl(var(--card-brand))",
          price: "hsl(var(--card-price))",
          offer: {
            background: "hsl(var(--card-offer-background))",
            foreground: "hsl(var(--card-offer-foreground))",
          },
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        icon: {
          background: "hsl(var(--icon-background))",
        },
        social: {
          icon: {
            background: "hsl(var(--social-icon-background))",
            foreground: "hsl(var(--social-icon-foreground))",
          },
        },
        sidebar: {
          foreground: "hsl(var(--sidebar-foreground))",
        },
        footer: {
          background: "hsl(var(--footer-background))",
          foreground: "hsl(var(--footer-foreground))",
          links: "hsl(var(--footer-links))",
          legal: {
            background: "hsl(var(--footer-legal-background))",
            foreground: "hsl(var(--footer-legal-foreground))",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
