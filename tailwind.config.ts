import * as aspectRatio from '@tailwindcss/aspect-ratio';
import * as lineClamp from '@tailwindcss/line-clamp';
import * as tailwindCssAnimate from 'tailwindcss-animate';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      width: {
        'full/2-3': 'calc(50% - 12px) !important',
        'full/2-4': 'calc(50% - 16px) !important',
        'full-4': 'calc(100% - 16px) !important',
        'full-8': 'calc(100% - 32px) !important',
        'full-6': 'calc(100% - 24px) !important',
        'full-15': 'calc(100% - 60px) !important',
        'full-25': 'calc(100% - 100px) !important',
        'full-41': 'calc(100% - 164px) !important',
        'screen-8': 'calc(100vw - 32px) !important',
        'col-5': 'calc((100vw - 80px)/5)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1224px',
          xl: '1300px',
        },
      },
      colors: {
        aqua: {
          '50': '#EBF9F7',
          '100': '#BFFAF5',
          '200': '#80F5EC',
          '400': '#40EFE3',
          '500': '#00EAD9',
        },
        brandTeal: {
          '25': '#F5FEFE',
          '50': '#E8FCFC',
          '100': '#CFFBFC',
          '200': '#A2F3F6',
          '300': '#60E6EB',
          '400': '#17CCD3',
          '500': '#14B2B8',
          '600': '#1C7E82',
          '700': '#13787C',
          '800': '#126060',
          '900': '#104A4C',
          '950': '#082D2C',
        },
        gray: {
          '25': '#FCFCFD',
          '50': '#FAFAFA',
          '100': '#F2F4F7',
          '200': '#E4E7EC',
          '300': '#D0D5DD',
          '400': '#98A2B3',
          '500': '#667085',
          '600': '#475467',
          '700': '#344054',
          '800': '#182230',
          '900': '#101828',
          '950': '#0C111D',
        },
        purple: '#9E77ED',
        'focus-ring': '#00EAD9',
        'skip-to-content': '#A819D3',
        tab: '#C434EF',
        'aqua-radiance': '#00EAD9',
        error: {
          '25': '#FFFBFA',
          '50': '#FEF3F2',
          '100': '#FEE4E2',
          '200': '#FECDCA',
          '300': '#FDA29B',
          '400': '#F97066',
          '500': '#F04438',
          '600': '#D92D20',
          '700': '#B42318',
        },
        success: {
          '25': '#FAFEF5',
          '50': '#F3FEE7',
          '100': '#E4FBCC',
          '200': '#D0F8AB',
          '300': '#A6EF67',
          '400': '#85E13A',
          '500': '#66C61C',
          '600': '#4CA30D',
          '700': '#3B7C0F',
          '800': '#326212',
          '900': '#2B5314',
          '950': '#15290A',
        },
        sunny: {
          '100': '#A2F3F6',
          '200': '#FFE180',
          '400': '#FFD140',
          '500': '#FFC200',
        },
        sunset: {
          '100': '#FEE1DB',
          '200': '#FDC3B6',
          '400': '#FDA592',
          '500': '#FC876E',
        },
        rose: {
          '100': '#FEDBE3',
          '200': '#FDB7C8',
          '400': '#FD94AD',
          '500': '#FC7091',
          blush: '#FC5A75',
        },
        fresh: {
          '100': '#ECFBF9',
          '200': '#D9F6F2',
          '400': '#C5F1EB',
          '500': '#B2EDE5',
        },
        warning: {
          '25': '#FFFCF5',
          '50': '#FFFAEB',
          '100': '#FEF0C7',
          '200': '#FEDF89',
          '300': '#FEC84B',
          '400': '#FDB022',
          '500': '#F79009',
          '600': '#DC6803',
          '700': '#B54708',
          '800': '#93370D',
          '900': '#7A2E0E',
          '950': '#4E1D09',
        },
      },
      fontSize: {
        medium_sm: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '500',
          },
        ],
        medium_md: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        medium_lg: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
        medium_xl: [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '500',
          },
        ],
        regular_xs: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
        regular_sm: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        regular_md: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        regular_xl: [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '400',
          },
        ],
        body_lg: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '400',
          },
        ],
        semibold_lg: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '600',
          },
        ],
        semibold_xl: [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '600',
          },
        ],
        semibold_md: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        bold_sm: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        bold_md: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        semibold_sm: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '600',
          },
        ],
        display_xs: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '500',
          },
        ],
        display_sm: [
          '30px',
          {
            lineHeight: '38px',
            fontWeight: '600',
          },
        ],
        display_md: [
          '36px',
          {
            lineHeight: '44px',
            fontWeight: '600',
          },
        ],
        display_lg: [
          '48px',
          {
            lineHeight: '60px',
            fontWeight: '600',
          },
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindCssAnimate, aspectRatio, lineClamp],
};
export default config;
