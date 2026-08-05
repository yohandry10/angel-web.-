import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ children, size = 18, className = "", strokeWidth = 1.75, ...p }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...p}
  >
    {children}
  </svg>
);

export const Ic = {
  // brand-ish
  k: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} className={p.className} aria-hidden {...p}>
      <path d="M6 4v16M6 12l8-8M6 12l9 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  spark: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 3l1.8 4.6L18 9.5l-4.2 1.9L12 16l-1.8-4.6L6 9.5l4.2-1.9L12 3z"/>
      <path d="M19 14l.7 1.7L21 16.5l-1.3.8L19 19l-.7-1.7L17 16.5l1.3-.8L19 14z"/>
    </Icon>
  ),
  check: (p: IconProps) => (
    <Icon {...p}>
      <path d="M20 6L9 17l-5-5"/>
    </Icon>
  ),
  x: (p: IconProps) => (
    <Icon {...p}>
      <path d="M18 6L6 18M6 6l12 12"/>
    </Icon>
  ),
  play: (p: IconProps) => (
    <Icon {...p}>
      <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/>
    </Icon>
  ),
  arrowR: (p: IconProps) => (
    <Icon {...p}>
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </Icon>
  ),
  arrowUpR: (p: IconProps) => (
    <Icon {...p}>
      <path d="M7 17L17 7M8 7h9v9"/>
    </Icon>
  ),
  chevD: (p: IconProps) => (
    <Icon {...p}>
      <path d="M6 9l6 6 6-6"/>
    </Icon>
  ),
  plus: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 5v14M5 12h14"/>
    </Icon>
  ),
  menu: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 7h16M4 12h16M4 17h16"/>
    </Icon>
  ),
  sun: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </Icon>
  ),
  moon: (p: IconProps) => (
    <Icon {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
    </Icon>
  ),

  // modules
  cart: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="9" cy="20" r="1.4"/>
      <circle cx="18" cy="20" r="1.4"/>
      <path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/>
    </Icon>
  ),
  box: (p: IconProps) => (
    <Icon {...p}>
      <path d="M3 7l9-4 9 4-9 4-9-4z"/>
      <path d="M3 7v10l9 4 9-4V7"/>
      <path d="M12 11v10"/>
    </Icon>
  ),
  boxes: (p: IconProps) => (
    <Icon {...p}>
      <path d="M2.97 7.5l4.5 2.6 4.5-2.6"/>
      <path d="M11.97 7.5v5.4"/>
      <path d="M16.97 11l4.5 2.6-4.5 2.6-4.5-2.6 4.5-2.6z"/>
      <path d="M2.97 7.5l4.5-2.6 4.5 2.6-4.5 2.6-4.5-2.6z"/>
      <path d="M11.97 12.9l-4.5 2.6"/>
      <path d="M16.97 16.2v2.4l-4.5 2.6"/>
      <path d="M7.47 18.4l4.5 2.6"/>
    </Icon>
  ),
  calc: (p: IconProps) => (
    <Icon {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2"/>
      <path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>
    </Icon>
  ),
  bank: (p: IconProps) => (
    <Icon {...p}>
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M6 12h.01M18 12h.01"/>
    </Icon>
  ),
  fileCheck: (p: IconProps) => (
    <Icon {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>
      <path d="M14 3v5h5"/>
      <path d="M9 15l2 2 4-4"/>
    </Icon>
  ),

  // misc UI
  search: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4.3-4.3"/>
    </Icon>
  ),
  bell: (p: IconProps) => (
    <Icon {...p}>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.7 21a2 2 0 0 1-3.4 0"/>
    </Icon>
  ),
  trendUp: (p: IconProps) => (
    <Icon {...p}>
      <path d="M22 7l-9.5 9.5-5-5L2 17"/>
      <path d="M16 7h6v6"/>
    </Icon>
  ),
  trendDown: (p: IconProps) => (
    <Icon {...p}>
      <path d="M22 17l-9.5-9.5-5 5L2 7"/>
      <path d="M16 17h6v-6"/>
    </Icon>
  ),
  zap: (p: IconProps) => (
    <Icon {...p}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </Icon>
  ),
  globe: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
    </Icon>
  ),
  wifi: (p: IconProps) => (
    <Icon {...p}>
      <path d="M5 12.5a14 14 0 0 1 14 0"/>
      <path d="M8 15.5a9 9 0 0 1 8 0"/>
      <path d="M2 9.5a20 20 0 0 1 20 0"/>
      <circle cx="12" cy="18.5" r="1" fill="currentColor"/>
    </Icon>
  ),
  shield: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/>
    </Icon>
  ),
  clock: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </Icon>
  ),
  users: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="9" cy="8" r="3.5"/>
      <path d="M2 21a7 7 0 0 1 14 0"/>
      <circle cx="17" cy="8" r="3"/>
      <path d="M22 21a5.5 5.5 0 0 0-8-4.9"/>
    </Icon>
  ),
  building: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="3" width="18" height="18" rx="1.5"/>
      <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/>
    </Icon>
  ),
  layers: (p: IconProps) => (
    <Icon {...p}>
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </Icon>
  ),
  api: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 8l-2 2 2 2M20 8l2 2-2 2M9 5l6 14"/>
    </Icon>
  ),
  database: (p: IconProps) => (
    <Icon {...p}>
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/>
    </Icon>
  ),
  cpu: (p: IconProps) => (
    <Icon {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
    </Icon>
  ),
  linkedin: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c.7-1.3 2.2-2.4 4-2.4 3.3 0 4 2 4 5V20h-4v-4.5c0-1.4-.5-2.5-2-2.5s-2 1.1-2 2.5V20h-4V10z" fill="currentColor" stroke="none"/>
    </Icon>
  ),
  x_twit: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 4l16 16M20 4L4 20"/>
    </Icon>
  ),
  youtube: (p: IconProps) => (
    <Icon {...p}>
      <rect x="2" y="5" width="20" height="14" rx="3"/>
      <polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none"/>
    </Icon>
  ),
  flag: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 21V4M4 4h11l-1.5 4L15 12H4"/>
    </Icon>
  ),
  receipt: (p: IconProps) => (
    <Icon {...p}>
      <path d="M5 3h14v18l-3-2-3 2-3-2-3 2-2-2V3z"/>
      <path d="M9 8h6M9 12h6M9 16h4"/>
    </Icon>
  ),
  flash: (p: IconProps) => (
    <Icon {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" stroke="none" opacity=".9"/>
    </Icon>
  ),
};
