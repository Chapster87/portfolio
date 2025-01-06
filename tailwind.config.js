const plugin = require('tailwindcss/plugin')
const theme_config = require("./src/config/theme.json");

let fontPrimaryType, fontSecondaryType;
if (theme_config.fonts.font_family.primary) {
  fontPrimaryType = theme_config.fonts.font_family.primary_type;
}
if (theme_config.fonts.font_family.secondary) {
  fontSecondaryType = theme_config.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [{ pattern: /^col-/ }],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", fontPrimaryType],
        secondary: ["var(--font-secondary)", fontSecondaryType],
      },
      textShadow: {
        // --tw-shadow-color is not defined in tailwindcss by now
        sm: '0 0px 2px var(--tw-shadow-color)',
        DEFAULT: '0 0px 3px var(--tw-shadow-color)',
        lg: '0 0px 8px var(--tw-shadow-color)',
      },

      // Custom animations
      // Defined keyframes
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      // Defined animations
      animation: {
        fade: 'fadeInUp 1s both',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          primary: "#00b140",
          secondary: "#377cfb",
          accent: "#ea6947",
          "--bc": "0% 0 0"
        },
      },
      {
        business: {
          ...require("daisyui/src/theming/themes")["business"],
          primary: "#00b140",
          secondary: "#377cfb",
          accent: "#ea6947",
        },
      }
    ]
  },
  darkMode: ['selector', '[data-theme="business"]']
};
