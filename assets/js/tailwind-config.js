/**
 * Global Tailwind CSS Configuration
 * Used across the Priyani Bais Portfolio
 */
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#c8a87e",
        "primary-muted": "#d4a853",
        "primary-light": "#e8d5b7",
        "background-light": "#f5f0eb",
        "background-dark": "#0e0e0e",
        "neutral-dark": "#1d1a15",
        "surface-dark": "#1a1a1a",
        "card-dark": "#1a1a1a",
        "border-dark": "#2a2a2a",
        "border-muted": "#2A2A2A",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
        "italic-serif": ["Cormorant Garamond", "serif"],
        "accent": ["Cormorant Garamond", "serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'floating-gradient 15s ease infinite',
        'fade-up': 'fade-up 1s ease-out forwards',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'floating-gradient': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10%, -5%) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
}
