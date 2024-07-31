/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
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
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
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
      backgroundImage: {
        hero: 'url(https://lekhoadev.github.io/Portfolio/hero/hero-bg.png)',
        hero_shape: 'url(https://lekhoadev.github.io/Portfolio/hero/shape-1.svg)',
        hero_shape2_light: 'url(https://lekhoadev.github.io/Portfolio/hero/shape-2-light.svg)',
        hero_shape2_dark: 'url(https://lekhoadev.github.io/Portfolio/hero/shape-2-dark.svg)',
        about_shape_light: 'url(https://lekhoadev.github.io/Portfolio/about/shape-light.svg)',
        about_shape_dark: 'url(https://lekhoadev.github.io/Portfolio/about/shape-dark.svg)',
        dots_light: 'url(https://lekhoadev.github.io/Portfolio/dots-light.svg)',
        dots_dark: 'url(https://lekhoadev.github.io/Portfolio/dots-dark.svg)',
        work_project_bg_light: 'url(https://lekhoadev.github.io/Portfolio/work/project-bg-light.png)',
        work_project_bg_dark: 'url(https://lekhoadev.github.io/Portfolio/work/project-bg-dark.png)',
        contact_illustration_light: 'url(https://lekhoadev.github.io/Portfolio/contact/illustration-light.svg)',
        contact_illustration_dark: 'url(https://lekhoadev.github.io/Portfolio/contact/illustration-dark.svg)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}