/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'system-ui', 'sans-serif'],
          display: ['Montserrat', 'system-ui', 'sans-serif'],
        },
        colors: {
          // Основная палитра для мебельного магазина
          primary: {
            50: '#FDF8F3',    // Очень светлый крем
            100: '#F8EEE0',   // Светлый крем
            200: '#F0DAC7',   // Бежевый
            300: '#E5C4A0',   // Светло-коричневый
            400: '#D4A574',   // Золотисто-коричневый
            500: '#B8935F',   // Основной коричневый
            600: '#8B6F47',   // Темно-коричневый
            700: '#6B5538',   // Очень темно-коричневый
            800: '#4A3B28',   // Темный шоколад
            900: '#2D241A',   // Почти черный коричневый
          },
          secondary: {
            50: '#F9F7F4',    // Очень светлый песочный
            100: '#F2EDE4',   // Светлый песочный
            200: '#E8DCC9',   // Песочный
            300: '#D9C7A8',   // Светло-золотистый
            400: '#C5A875',   // Золотистый
            500: '#A68B5B',   // Основной золотистый
            600: '#8A7249',   // Темно-золотистый
            700: '#6B5638',   // Коричнево-золотистый
            800: '#4D3E2A',   // Темный золотистый
            900: '#32271C',   // Очень темный золотистый
          },
          accent: {
            50: '#FEF7F0',    // Очень светлый персик
            100: '#FDEEE1',   // Светлый персик
            200: '#F9D5BE',   // Персиковый
            300: '#F4B896',   // Светло-оранжевый
            400: '#E89968',   // Оранжевый
            500: '#D4823D',   // Основной оранжевый
            600: '#B86F35',   // Темно-оранжевый
            700: '#96572A',   // Коричнево-оранжевый
            800: '#73421F',   // Темный оранжевый
            900: '#4F2D15',   // Очень темный оранжевый
          },
          neutral: {
            50: '#FAFAF9',    // Почти белый
            100: '#F4F4F3',   // Очень светло-серый
            200: '#E5E5E4',   // Светло-серый
            300: '#D6D6D4',   // Серый
            400: '#A8A8A6',   // Средне-серый
            500: '#737371',   // Темно-серый
            600: '#5C5C5A',   // Очень темно-серый
            700: '#454543',   // Темный
            800: '#2F2F2E',   // Очень темный
            900: '#1A1A19',   // Почти черный
          },
          success: {
            50: '#F0FDF4',
            500: '#22C55E',
            600: '#16A34A',
          },
          warning: {
            50: '#FFFBEB',
            500: '#F59E0B',
            600: '#D97706',
          },
          error: {
            50: '#FEF2F2',
            500: '#EF4444',
            600: '#DC2626',
          },
        },
        spacing: {
          '18': '4.5rem',   // 72px
          '88': '22rem',    // 352px
          '128': '32rem',   // 512px
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
        boxShadow: {
          'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.04)',
          'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 40px -10px rgba(0, 0, 0, 0.04)',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.3s ease-out',
          'slide-in-right': 'slideInRight 0.3s ease-out',
          'bounce-gentle': 'bounceGentle 2s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(20px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
        },
        screens: {
          'xs': '375px',
          '3xl': '1920px',
        },
      },
    },
    plugins: [],
  }