/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Cascadia Mono',
        'Segoe UI Mono',
        'Roboto Mono',
        'Oxygen Mono',
        'Ubuntu Monospace',
        'Source Code Pro',
        'Fira Mono',
        'Droid Sans Mono',
        'Courier New',
        'monospace',
      ], //ensure all devices have a fallback mono font
      custom: [
        'Inter',
        'system-ui',
        'Avenir',
        'Helvetica',
        'Arial',
        'sans-serif',
      ], //ensure all devices have a fallback font
    },
    extend: {
      maxWidth: {
        custom: '1100px',
      },
      borderRadius: {
        custom: '12px',
      },
      colors: {
        foreground: '#000000',
        backgroundStart: '#CBBEFF',
        backgroundEnd: '#FFFFFF',
        callout: '#EEEEF1',
        calloutBorder: '#ACAFB0',
        card: '#6649AE',
        cardBorder: '#838687',
        btnPrimary: '#1a1a1a',
        btnPrimaryHover: '#646cff',
        linkHover: '#dadbf9',
      },
    },
  },
  plugins: [],
}
