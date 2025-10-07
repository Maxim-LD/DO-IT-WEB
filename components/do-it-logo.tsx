"use client"

import Link from "next/link"

export function DoItLogo({
  className = "",
  size = 120,
  variant = "default",
  href,
}: { className?: string; size?: number; variant?: "default" | "hero"; href?: string }) {
  const isHero = variant === "hero"

  const LogoSvg = () => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${className}`}
      >
        <circle
          cx="40"
          cy="40"
          r="28"
          fill="none"
          stroke={isHero ? "white" : "#007AFF"}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="145 175"
          transform="rotate(-90 40 40)"
          opacity={isHero ? "0.3" : "1"}
        />
        <path
          d="M 30,24 L 30,56 Q 30,60 34,62.4 Q 40,65.6 46.4,62.4 Q 52,59.2 52,52 L 52,28 Q 52,20.8 46.4,17.6 Q 40,14.4 34,17.6 Q 30,20 30,24 Z"
          fill={isHero ? "white" : "#007AFF"}
        />
        <circle cx="40" cy="40" r="6.5" fill="#FF7A00" />
      </svg>
  );

  if (href) {
    return <Link href={href}><LogoSvg /></Link>;
  }

  return <LogoSvg />;
}

export function DoItWordmark({
  className = "",
  height = 60,
  variant = "default",
  href,
}: { className?: string; height?: number; variant?: "default" | "inverse", href?: string }) {
  const isInverse = variant === "inverse"

  const WordmarkContent = () => (
    <div className={`flex items-center gap-1 ${href ? 'cursor-pointer' : ''} ${className}`} style={{ height: `${height}px` }}>
        <span
          className={`font-extrabold leading-none ${
            isInverse ? "text-white" : "text-[#1E1E1E]"
          }`}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: `${height * 0.6}px`,
            fontWeight: 800,
            letterSpacing: "0.05em",
          }}
        >
          DO
        </span>
        <span
          className="font-extrabold text-[#FF7A00] leading-none"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: `${height * 0.6}px`,
            fontWeight: 800,
          }}
        >
          -
        </span>
        <span
          className={`font-extrabold leading-none ${
            isInverse ? "text-white" : "text-[#1E1E1E]"
          }`}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: `${height * 0.6}px`,
            fontWeight: 800,
            letterSpacing: "0.05em",
          }}
        >
          IT
        </span>
      </div>
  );

  if (href) {
    return <Link href={href}><WordmarkContent /></Link>;
  }

  return <WordmarkContent />;
}

export function DoItIcon({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${className}`}
      >
        <circle
          cx="40"
          cy="40"
          r="28"
          fill="none"
          stroke="#007AFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="145 175"
          transform="rotate(-90 40 40)"
        />
        <path
          d="M 30,24 L 30,56 Q 30,60 34,62.4 Q 40,65.6 46.4,62.4 Q 52,59.2 52,52 L 52,28 Q 52,20.8 46.4,17.6 Q 40,14.4 34,17.6 Q 30,20 30,24 Z"
          fill="#007AFF"
        />
        <circle cx="40" cy="40" r="6.5" fill="#FF7A00" />
      </svg>
  )
}
