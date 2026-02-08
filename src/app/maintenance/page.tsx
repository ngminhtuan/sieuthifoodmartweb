// app/maintenance/page.tsx

import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div style={styles.body}>

      {/* logo */}
      <div style={styles.logo}>
        <img
          src="/logo-6609-removebg.png"
          alt="logo"
          width={250}
          height={250}
        />
      </div>

      {/* card */}
      <div style={styles.card}>

        {/* SVG illustration */}
        <svg style={styles.illustration} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="105" r="82" fill="#f0fdf4" />

          {/* basket */}
          <path d="M48 95 L55 155 C55 160 60 165 65 165 L135 165 C140 165 145 160 145 155 L152 95 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          <line x1="60" y1="110" x2="140" y2="110" stroke="#d97706" strokeWidth="1.5" />
          <line x1="58" y1="125" x2="142" y2="125" stroke="#d97706" strokeWidth="1.5" />
          <line x1="57" y1="140" x2="143" y2="140" stroke="#d97706" strokeWidth="1.5" />
          <line x1="56" y1="155" x2="144" y2="155" stroke="#d97706" strokeWidth="1.5" />
          <line x1="75" y1="95" x2="72" y2="165" stroke="#d97706" strokeWidth="1" opacity="0.5" />
          <line x1="90" y1="95" x2="88" y2="165" stroke="#d97706" strokeWidth="1" opacity="0.5" />
          <line x1="105" y1="95" x2="105" y2="165" stroke="#d97706" strokeWidth="1" opacity="0.5" />
          <line x1="120" y1="95" x2="122" y2="165" stroke="#d97706" strokeWidth="1" opacity="0.5" />
          <line x1="135" y1="95" x2="138" y2="165" stroke="#d97706" strokeWidth="1" opacity="0.5" />

          {/* handles */}
          <path d="M65 95 C65 70 75 55 100 55" stroke="#92400e" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M135 95 C135 70 125 55 100 55" stroke="#92400e" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* carrot */}
          <g transform="translate(68, 58) rotate(-15)">
            <path d="M0 0 L8 35 L-8 35 Z" fill="#f97316" />
            <line x1="0" y1="5" x2="2" y2="12" stroke="#ea580c" strokeWidth="1" />
            <line x1="2" y1="8" x2="-1" y2="18" stroke="#ea580c" strokeWidth="1" />
            <path d="M0 0 C-4 -10 -8 -6 -5 -2" fill="#22c55e" />
            <path d="M0 0 C2 -12 6 -7 4 -1" fill="#16a34a" />
            <path d="M0 0 C-1 -8 3 -10 2 -3" fill="#4ade80" />
          </g>

          {/* broccoli */}
          <g transform="translate(105, 50)">
            <rect x="-3" y="12" width="6" height="18" rx="3" fill="#65a30d" />
            <circle cx="-10" cy="8" r="11" fill="#22c55e" />
            <circle cx="10" cy="8" r="11" fill="#16a34a" />
            <circle cx="0" cy="2" r="12" fill="#4ade80" />
            <circle cx="-6" cy="14" r="7" fill="#22c55e" />
            <circle cx="6" cy="14" r="7" fill="#16a34a" />
          </g>

          {/* tomato */}
          <g transform="translate(130, 72)">
            <defs>
              <radialGradient id="tomatoShine" cx="35%" cy="35%">
                <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                <stop offset="60%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="0" cy="0" r="14" fill="#ef4444" />
            <circle cx="0" cy="0" r="14" fill="url(#tomatoShine)" />
            <path d="M-4 -13 C-6 -18 -2 -17 0 -14 C2 -17 6 -18 4 -13" fill="#16a34a" />
            <line x1="0" y1="-14" x2="0" y2="-10" stroke="#15803d" strokeWidth="1.5" />
          </g>

          {/* apple */}
          <g transform="translate(52, 80)">
            <circle cx="0" cy="0" r="11" fill="#dc2626" />
            <path d="M-3 -10 C-2 -14 2 -14 3 -10" fill="#16a34a" />
            <line x1="0" y1="-11" x2="0" y2="-7" stroke="#15803d" strokeWidth="1.2" />
            <ellipse cx="-4" cy="-4" rx="2.5" ry="3.5" fill="white" opacity="0.25" transform="rotate(-20 -4 -4)" />
          </g>

          {/* wrench badge */}
          <g transform="translate(148, 145)">
            <circle cx="0" cy="0" r="12" fill="white" stroke="#bbf7d0" strokeWidth="1.5" />
            <path d="M-4 -6 L4 6 M4 -6 L-1 -1" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="-5" cy="-6" r="3" fill="none" stroke="#16a34a" strokeWidth="2" />
          </g>
        </svg>

        {/* badge */}
        <div style={styles.badge}>
          <div style={styles.dot} />
          Đang bảo trì hệ thống
        </div>

        {/* message */}
        <h1 style={styles.h1}>Foodmart đang được nâng cấp</h1>
        <p style={styles.p}>
          Đội ngũ của chúng tôi đang làm việc để cải thiện trải nghiệm mua sắm của bạn.
          Foodmart sẽ sớm quay trở lại với nhiều cập nhật mới.
          Cảm ơn bạn đã kiên nhẫn chờ đợi!
        </p>
      </div>
    </div>
  );
}

/* ─── inline styles ─── */
const styles: Record<string, React.CSSProperties> = {
  body: {
    minHeight: '100vh',
    fontFamily: "'DM Sans', sans-serif",
    background: '#f8faf8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '48px',
  },
  logoIcon: {
    width: 34, height: 34,
    background: '#16a34a',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#111',
  },
  card: {
    background: '#fff',
    border: '1px solid #e5e7e5',
    borderRadius: 20,
    padding: '48px 20px 40px',
    maxWidth: 420,
    width: '100%',
    textAlign: 'center',
  },
  illustration: {
    width: 200,
    height: 200,
    margin: '0 auto 32px',
    display: 'block',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#16a34a',
    fontSize: '0.78rem',
    fontWeight: 500,
    padding: '5px 12px',
    borderRadius: 20,
    marginBottom: 20,
  },
  dot: {
    width: 7, height: 7,
    borderRadius: '50%',
    background: '#16a34a',
  },
  h1: {
    fontSize: '1.45rem',
    fontWeight: 600,
    color: '#111',
    marginBottom: 12,
  },
  p: {
    fontSize: '0.92rem',
    lineHeight: 1.65,
    color: '#6b7280',
    maxWidth: 320,
    margin: '0 auto',
  },
  footer: {
    marginTop: 36,
    fontSize: '0.8rem',
    color: '#9ca3af',
  },
};
