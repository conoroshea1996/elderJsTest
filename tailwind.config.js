const isProduction = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.svelte', './src/**/*.html'],
    // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      const broadMatchesWithoutTrailingSlash = broadMatches.map((match) => _.trimEnd(match, '\\'));
      const matches = broadMatches.concat(broadMatchesWithoutTrailingSlash);
      return matches;
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#356AFD',
        },
        gray: {
          900: '#0E171D',
        },
        navy: '#1D2F3C',
      },
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      rozanonva: ['Rozanova GEO'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
