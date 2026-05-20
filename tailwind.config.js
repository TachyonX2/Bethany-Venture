/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0c1210',
          raised: '#111916',
          overlay: '#1a2420',
        },
        brand: {
          DEFAULT: '#0F4C45',
          light: '#2C6E63',
          glow: '#3d8f82',
          muted: '#6b9e94',
        },
        ink: {
          DEFAULT: '#e8edea',
          muted: '#9aab9f',
          faint: '#5c6e66',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(44, 110, 99, 0.35), transparent 70%)',
        'card-glow':
          'radial-gradient(ellipse at top left, rgba(44, 110, 99, 0.12), transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(44, 110, 99, 0.15)',
        'glow-sm': '0 0 20px rgba(44, 110, 99, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
