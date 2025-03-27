module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{js,jsx,ts,tsx}',
    './blog/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Support Docusaurus dark mode
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        firework: {
          '0%': { 
            transform: 'translate(-50%, 0) scale(0)',
            opacity: 1,
            backgroundColor: '#38bdf8'
          },
          '50%': { 
            transform: 'translate(-50%, -50px) scale(1)',
            opacity: 0.5,
            backgroundColor: '#f472b6'
          },
          '100%': { 
            transform: 'translate(-50%, -100px) scale(0)',
            opacity: 0,
            backgroundColor: '#4ade80'
          }
        }
      },
      animation: {
        'firework': 'firework 0.6s ease-out forwards',
        'firework-delay': 'firework 0.6s ease-out 0.2s forwards'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
