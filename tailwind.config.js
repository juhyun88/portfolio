/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",       // 파란색 계열 (예: 버튼, 링크 강조)
        secondary: "#64748B",     // 중간 회색톤
        accent: "#F59E0B",        // 주목용 색 (예: 경고, CTA)
        background: "#F9FAFB",    // 기본 배경색
        surface: "#FFFFFF",       // 카드/패널 등 흰색 배경
        textPrimary: "#111827",   // 메인 텍스트
        // 보조 텍스트
            },
            screens: {
              'xs': '480px',
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1600px'
            },
            container: {
              center: true,
              padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
              },
             
            },
            fontSize: {
              title: [
                'clamp(1.875rem, 4vw, 2.5rem)', // 약 30px ~ 40px
          { lineHeight: '1.3', fontWeight: '700' }
        ],
        subtitle: [
          'clamp(1.25rem, 2.5vw, 1.75rem)', // 약 20px ~ 28px
          { lineHeight: '1.4', fontWeight: '600' }
        ],
        description: [
          'clamp(1rem, 2vw, 1.125rem)', // 약 16px ~ 18px
          { lineHeight: '1.6' }
        ],
        navi: [
          'clamp(0.875rem, 1.5vw, 1rem)', // 약 14px ~ 16px
          { fontWeight: '500' }
        ],
        btn: [
          'clamp(0.875rem, 1.2vw, 1rem)', // 약 14px ~ 16px
          { fontWeight: '600', letterSpacing: '0.02em' }
        ],
      },
      fontFamily: {
        pretendard: ['"Sora"', 'sans-serif'],
        // 원하는 이름: [실제 폰트 패밀리, 대체 폰트]
      },
    },
  },
  plugins: [],
}


