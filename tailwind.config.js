/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",       // 파란색 계열 (예: 버튼, 링크 강조) -> `text-primary`, `bg-primary`, `border-primary` 등
        secondary: "#64748B",     // 중간 회색톤 -> `text-secondary`, `bg-secondary`
        accent: "#F59E0B",        // 주목용 색 (예: 경고, CTA) -> `text-accent`, `bg-accent`
        background: "#F9FAFB",    // 기본 배경색 -> `bg-background`
        surface: "#FFFFFF",       // 카드/패널 등 흰색 배경 -> `bg-surface`
        textPrimary: "#111827",   // 메인 텍스트 -> `text-textPrimary`
        // 보조 텍스트
      },
      screens: {
        'xs': '480px',    // `xs:` 미디어 쿼리 사용 가능
        'sm': '640px',    // `sm:`
        'md': '768px',    // `md:`
        'lg': '1024px',   // `lg:`
        'xl': '1280px',   // `xl:`
        '2xl': '1600px'   // `2xl:`
      },
      container: {
        center: true,     // `container` 사용 시 가운데 정렬
        padding: {
          DEFAULT: '1rem',  // 기본 패딩
          sm: '2rem',      // sm 이상일 때 패딩
          lg: '4rem',      // lg 이상일 때 패딩
          xl: '5rem',      // xl 이상일 때 패딩
          '2xl': '6rem',   // 2xl 이상일 때 패딩
        },
      },
      fontSize: {
        title: [
          'clamp(1.875rem, 4vw, 2.5rem)', // 약 30px ~ 40px
          { lineHeight: '1.3', fontWeight: '700' }
        ], // 사용 예: `text-title`
        subtitle: [
          'clamp(1.25rem, 2.5vw, 1.75rem)', // 약 20px ~ 28px
          { lineHeight: '1.4', fontWeight: '600' }
        ], // 사용 예: `text-subtitle`
        description: [
          'clamp(1rem, 2vw, 1.125rem)', // 약 16px ~ 18px
          { lineHeight: '1.6' }
        ], // 사용 예: `text-description`
        navi: [
          'clamp(0.875rem, 1.5vw, 1rem)', // 약 14px ~ 16px
          { fontWeight: '500' }
        ], // 사용 예: `text-navi`
        btn: [
          'clamp(0.875rem, 1.2vw, 1rem)', // 약 14px ~ 16px
          { fontWeight: '600', letterSpacing: '0.02em' }
        ], // 사용 예: `text-btn`
      },
      fontFamily: {
        pretendard: ['"Sora"', 'sans-serif'], // 사용 예: `font-pretendard`
      },
    },
  },
  plugins: [],
}
