/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'border-pulse': 'borderPulse 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 6s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scale': 'scale 2s ease-in-out infinite alternate',
        'wave': 'wave 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
        'scan': 'scan 2s linear infinite',
        'data-flow': 'data-flow 8s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
        'circuit-pulse': 'circuit-pulse 4s ease-in-out infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.1 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        borderPulse: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)', filter: 'brightness(1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)', filter: 'brightness(1.2)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 },
        },
        'glitch-1': {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'glitch-2': {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(2px)' },
          '40%': { transform: 'translateX(-2px)' },
          '60%': { transform: 'translateX(2px)' },
          '80%': { transform: 'translateX(-2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: 0.8,
            transform: 'translateY(0) scale(1)'
          },
          '50%': { 
            opacity: 0.4,
            transform: 'translateY(-2px) scale(1.02)'
          },
        },
        'cyber-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)'
          },
        },
        'circuit-pulse': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-angular': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'url("/img/mesh-pattern.png")',
        'noise-pattern': 'url("/img/noise.png")',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.cyan.500"), 0 0 20px theme("colors.cyan.500")',
        'neon-green': '0 0 5px theme("colors.green.500"), 0 0 20px theme("colors.green.500")',
        'neon-blue': '0 0 5px theme("colors.blue.500"), 0 0 20px theme("colors.blue.500")',
        'neon-purple': '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.500")',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 255, 0.5)',
        'cyber-glow': '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.1)',
        'cyber-glow-green': '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.1)',
      },
      colors: {
        'glass': 'rgba(0, 0, 0, 0.2)',
        'glass-dark': 'rgba(0, 0, 0, 0.6)',
        'glass-darker': 'rgba(0, 0, 0, 0.8)',
        'cyber': {
          'cyan': '#00ffff',
          'green': '#00ff00',
          'blue': '#0080ff',
          'purple': '#8000ff',
          'pink': '#ff0080',
        },
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'cyber': ['Orbitron', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      clipPath: {
        'cyber': 'polygon(0 0, calc(100% - 10px) 0, 100% calc(100% - 10px), 10px 100%)',
        'cyber-sm': 'polygon(0 0, calc(100% - 5px) 0, 100% calc(100% - 5px), 5px 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
    },
  },
  plugins: [],
}