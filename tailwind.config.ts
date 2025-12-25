import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // Terminal colors
        "term-bg": "hsl(var(--term-bg))",
        "term-panel": "hsl(var(--term-panel))",
        "term-border": "hsl(var(--term-border))",
        "term-fg": "hsl(var(--term-fg))",
        // ANSI colors
        "ansi-black": "hsl(var(--ansi-black))",
        "ansi-red": "hsl(var(--ansi-red))",
        "ansi-green": "hsl(var(--ansi-green))",
        "ansi-yellow": "hsl(var(--ansi-yellow))",
        "ansi-blue": "hsl(var(--ansi-blue))",
        "ansi-magenta": "hsl(var(--ansi-magenta))",
        "ansi-cyan": "hsl(var(--ansi-cyan))",
        "ansi-white": "hsl(var(--ansi-white))",
        "ansi-gray": "hsl(var(--ansi-gray))",
      },
      fontFamily: {
        display: ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-blue": "0 0 5px rgba(139, 233, 253, 0.2), 0 0 2px rgba(139, 233, 253, 0.1)",
        "neon-pink": "0 0 5px rgba(255, 121, 198, 0.2), 0 0 2px rgba(255, 121, 198, 0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
