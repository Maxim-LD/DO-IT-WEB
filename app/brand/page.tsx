import Link from "next/link"
import { DoItLogo, DoItWordmark } from "@/components/do-it-logo"
import { Button } from "@/components/ui/button"

interface DoItBrandSystemProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const DoItBrandSystem: React.FC<DoItBrandSystemProps> = ({
  width = '100%',
  height = 'auto',
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 1400 1600"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007AFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0055CC', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF7A00', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF5500', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Dark Navy Background */}
      <rect width="1400" height="1600" fill="#0A1628" />

      {/* ========== HEADER SECTION ========== */}
      <g transform="translate(700, 80)">
        <text
          x="0"
          y="0"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="60"
          fontWeight="700"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="3"
        >
          DO-IT
        </text>
        <text
          x="0"
          y="45"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="20"
          fontWeight="400"
          fill="#8B9DB8"
          textAnchor="middle"
        >
          Brand Identity & Iconography System
        </text>
      </g>

      {/* ========== PRIMARY LOGO VARIATIONS ========== */}
      <g transform="translate(100, 180)">
        <text
          x="0"
          y="0"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="32"
          fontWeight="600"
          fill="#FFFFFF"
        >
          Logo Variations
        </text>

        {/* Full Logo - Light Background */}
        <g transform="translate(150, 60)">
          <rect x="-120" y="-40" width="240" height="100" fill="#F5F5F5" rx="12" />

          {/* DO-IT Icon */}
          <g transform="translate(-60, 10)">
            <circle
              cx="0"
              cy="0"
              r="28"
              fill="none"
              stroke="#007AFF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="145 175"
              transform="rotate(-90)"
            />
            <path
              d="M -10,-16 L -10,16 Q -10,20 -6,22.4 Q 0,25.6 6.4,22.4 Q 12,19.2 12,12 L 12,-12 Q 12,-19.2 6.4,-22.4 Q 0,-25.6 -6,-22.4 Q -10,-20 -10,-16 Z"
              fill="#007AFF"
            />
            <circle cx="0" cy="0" r="6.5" fill="#FF7A00" />
          </g>

          <text
            x="-20"
            y="18"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="32"
            fontWeight="700"
            fill="#1E1E1E"
            letterSpacing="2"
          >
            DO-IT
          </text>
          <text
            x="0"
            y="55"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#666"
            textAnchor="middle"
          >
            Light Mode
          </text>
        </g>

        {/* Full Logo - Dark Background */}
        <g transform="translate(450, 60)">
          <rect x="-120" y="-40" width="240" height="100" fill="#1E1E1E" rx="12" />

          <g transform="translate(-60, 10)">
            <circle
              cx="0"
              cy="0"
              r="28"
              fill="none"
              stroke="#007AFF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="145 175"
              transform="rotate(-90)"
            />
            <path
              d="M -10,-16 L -10,16 Q -10,20 -6,22.4 Q 0,25.6 6.4,22.4 Q 12,19.2 12,12 L 12,-12 Q 12,-19.2 6.4,-22.4 Q 0,-25.6 -6,-22.4 Q -10,-20 -10,-16 Z"
              fill="#007AFF"
            />
            <circle cx="0" cy="0" r="6.5" fill="#FF7A00" />
          </g>

          <text
            x="-20"
            y="18"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="32"
            fontWeight="700"
            fill="#FFFFFF"
            letterSpacing="2"
          >
            DO-IT
          </text>
          <text
            x="0"
            y="55"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Dark Mode
          </text>
        </g>

        {/* App Icon */}
        <g transform="translate(750, 60)">
          <rect x="-50" y="-40" width="100" height="100" fill="#007AFF" rx="20" />

          <g transform="translate(0, 10)">
            <circle
              cx="0"
              cy="0"
              r="28"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="145 175"
              transform="rotate(-90)"
              opacity="0.3"
            />
            <path
              d="M -10,-16 L -10,16 Q -10,20 -6,22.4 Q 0,25.6 6.4,22.4 Q 12,19.2 12,12 L 12,-12 Q 12,-19.2 6.4,-22.4 Q 0,-25.6 -6,-22.4 Q -10,-20 -10,-16 Z"
              fill="white"
            />
            <circle cx="0" cy="0" r="6.5" fill="#FF7A00" />
          </g>

          <text
            x="0"
            y="55"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            App Icon
          </text>
        </g>
      </g>

      {/* ========== ICONOGRAPHY SYSTEM ========== */}
      <g transform="translate(100, 420)">
        <g>
          <circle cx="10" cy="0" r="5" fill="#FF7A00" />
          <text
            x="25"
            y="6"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="45"
            fontWeight="700"
            fill="#FFFFFF"
          >
            Iconography
          </text>
        </g>
        <text
          x="0"
          y="35"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="20"
          fontWeight="400"
          fill="#8B9DB8"
        >
          Simple, rounded icons in vibrant orange that represent key app features
        </text>
      </g>

      {/* Icon Grid */}
      <g transform="translate(100, 520)">
        {/* Row 1 */}
        {/* Tasks Icon */}
        <g transform="translate(110, 90)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <path
            d="M -18,-8 L -18,18 M -8,-8 L -8,18 M 2,-8 L 2,18 M 12,-8 L 12,18"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="-18" cy="-18" r="3" fill="#FF7A00" />
          <circle cx="-8" cy="-15" r="3" fill="#FF7A00" />
          <circle cx="2" cy="-18" r="3" fill="#FF7A00" />
          <circle cx="12" cy="-15" r="3" fill="#FF7A00" />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Tasks
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Daily to-dos
          </text>
        </g>

        {/* Focus Mode Icon */}
        <g transform="translate(330, 90)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <circle cx="0" cy="0" r="20" fill="none" stroke="#FF7A00" strokeWidth="3" />
          <path
            d="M 0,-20 L 0,-28 M 0,20 L 0,28 M -20,0 L -28,0 M 20,0 L 28,0"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 8,-5 L 3,0 L 8,5"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Focus Mode
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Time management
          </text>
        </g>

        {/* Goals Icon */}
        <g transform="translate(550, 90)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <circle cx="0" cy="0" r="22" fill="none" stroke="#FF7A00" strokeWidth="3" />
          <circle cx="0" cy="0" r="12" fill="none" stroke="#FF7A00" strokeWidth="3" />
          <circle cx="0" cy="0" r="4" fill="#FF7A00" />
          <path d="M 12,-18 L 18,-24" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
          <circle cx="18" cy="-24" r="2" fill="#FF7A00" />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Goals
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Target achievement
          </text>
        </g>

        {/* Projects Icon */}
        <g transform="translate(770, 90)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <rect
            x="-18"
            y="-18"
            width="36"
            height="36"
            rx="4"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
          />
          <circle cx="-10" cy="-10" r="3" fill="#FF7A00" />
          <circle cx="10" cy="-10" r="3" fill="#FF7A00" />
          <circle cx="-10" cy="10" r="3" fill="#FF7A00" />
          <circle cx="10" cy="10" r="3" fill="#FF7A00" />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Projects
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Organization
          </text>
        </g>

        {/* Wellness Icon */}
        <g transform="translate(990, 90)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <path
            d="M 0,12 Q -8,4 -12,-2 Q -14,-6 -12,-10 Q -10,-14 -6,-14 Q -2,-14 0,-10 Q 2,-14 6,-14 Q 10,-14 12,-10 Q 14,-6 12,-2 Q 8,4 0,12 Z"
            fill="#FF7A00"
          />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Wellness
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Health & fitness
          </text>
        </g>

        {/* Row 2 */}
        {/* Analytics Icon */}
        <g transform="translate(110, 310)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <path
            d="M -20,15 L -20,5 L -10,0 L 0,8 L 10,-5 L 20,-10 L 20,15 Z"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="-10" cy="0" r="3" fill="#FF7A00" />
          <circle cx="0" cy="8" r="3" fill="#FF7A00" />
          <circle cx="10" cy="-5" r="3" fill="#FF7A00" />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Analytics
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Progress tracking
          </text>
        </g>

        {/* Reminders Icon */}
        <g transform="translate(330, 310)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <path
            d="M -12,-8 Q -12,-18 -2,-18 L 2,-18 Q 12,-18 12,-8 L 12,8 Q 12,12 8,12 L -8,12 Q -12,12 -12,8 Z"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="-6" y="-22" width="12" height="4" rx="2" fill="#FF7A00" />
          <path
            d="M -10,12 Q -10,18 0,18 Q 10,18 10,12"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Reminders
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Notifications
          </text>
        </g>

        {/* Calendar Icon */}
        <g transform="translate(550, 310)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <rect
            x="-16"
            y="-14"
            width="32"
            height="28"
            rx="3"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
          />
          <line x1="-16" y1="-4" x2="16" y2="-4" stroke="#FF7A00" strokeWidth="3" />
          <circle cx="-8" cy="4" r="2" fill="#FF7A00" />
          <circle cx="0" cy="4" r="2" fill="#FF7A00" />
          <circle cx="8" cy="4" r="2" fill="#FF7A00" />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Calendar
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Schedule
          </text>
        </g>

        {/* Habits Icon */}
        <g transform="translate(770, 310)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeDasharray="20 5"
          />
          <path
            d="M -6,-2 L -2,4 L 8,-8"
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Habits
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Routine building
          </text>
        </g>

        {/* Settings Icon */}
        <g transform="translate(990, 310)">
          <circle cx="0" cy="0" r="50" fill="#162B42" stroke="#1E3A52" strokeWidth="2" />
          <circle cx="0" cy="0" r="10" fill="none" stroke="#FF7A00" strokeWidth="3" />
          <g>
            <rect x="-2" y="-22" width="4" height="8" rx="1" fill="#FF7A00" />
            <rect x="-2" y="14" width="4" height="8" rx="1" fill="#FF7A00" />
            <rect x="-22" y="-2" width="8" height="4" ry="1" fill="#FF7A00" />
            <rect x="14" y="-2" width="8" height="4" ry="1" fill="#FF7A00" />
          </g>
          <text
            x="0"
            y="80"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Settings
          </text>
          <text
            x="0"
            y="98"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="14"
            fill="#8B9DB8"
            textAnchor="middle"
          >
            Preferences
          </text>
        </g>
      </g>

      {/* ========== DESIGN GUIDELINES ========== */}
      <g transform="translate(100, 1100)">
        <rect
          x="0"
          y="0"
          width="1200"
          height="380"
          fill="#162B42"
          rx="16"
          stroke="#1E3A52"
          strokeWidth="2"
        />

        <text
          x="40"
          y="50"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="28"
          fontWeight="700"
          fill="#FFFFFF"
        >
          Icon Guidelines
        </text>

        {/* Guidelines Grid */}
        <g transform="translate(40, 90)">
          <circle cx="8" cy="0" r="4" fill="#FF7A00" />
          <text
            x="25"
            y="5"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Use vibrant orange (#FF7A00) for all feature icons
          </text>

          <circle cx="8" cy="40" r="4" fill="#FF7A00" />
          <text
            x="25"
            y="45"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Maintain 3px stroke width for consistency
          </text>

          <circle cx="8" cy="80" r="4" fill="#FF7A00" />
          <text
            x="25"
            y="85"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Keep designs simple, flat, and geometric
          </text>

          <circle cx="8" cy="120" r="4" fill="#FF7A00" />
          <text
            x="25"
            y="125"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Use rounded corners and caps for a friendly feel
          </text>

          <circle cx="8" cy="160" r="4" fill="#FF7A00" />
          <text
            x="25"
            y="165"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Icons work on dark navy (#0A1628) and dark backgrounds
          </text>
        </g>

        {/* Color Swatches */}
        <g transform="translate(700, 90)">
          <text
            x="0"
            y="-10"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="20"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Color Palette
          </text>

          <g transform="translate(0, 20)">
            <rect x="0" y="0" width="80" height="50" fill="#007AFF" rx="6" />
            <text
              x="40"
              y="70"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="14"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              #007AFF
            </text>
            <text
              x="40"
              y="85"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="12"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              Primary
            </text>
          </g>

          <g transform="translate(100, 20)">
            <rect x="0" y="0" width="80" height="50" fill="#FF7A00" rx="6" />
            <text
              x="40"
              y="70"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="14"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              #FF7A00
            </text>
            <text
              x="40"
              y="85"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="12"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              Accent
            </text>
          </g>

          <g transform="translate(200, 20)">
            <rect
              x="0"
              y="0"
              width="80"
              height="50"
              fill="#0A1628"
              stroke="#1E3A52"
              strokeWidth="1"
              rx="6"
            />
            <text
              x="40"
              y="70"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="14"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              #0A1628
            </text>
            <text
              x="40"
              y="85"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="12"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              Background
            </text>
          </g>

          <g transform="translate(300, 20)">
            <rect x="0" y="0" width="80" height="50" fill="#8B9DB8" rx="6" />
            <text
              x="40"
              y="70"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="14"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              #8B9DB8
            </text>
            <text
              x="40"
              y="85"
              fontFamily="Montserrat, Arial, sans-serif"
              fontSize="12"
              fill="#8B9DB8"
              textAnchor="middle"
            >
              Secondary
            </text>
          </g>
        </g>
      </g>

      {/* Footer */}
      <text
        x="700"
        y="1560"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="14"
        fill="#8B9DB8"
        textAnchor="middle"
      >
        DO-IT Brand System — Combining powerful motivation with clear, actionable design
      </text>
    </svg>
  );
};

const IconConstruction: React.FC<DoItBrandSystemProps> = ({
  width = '100%',
  height = 'auto',
  className = ''
}) => {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className}>
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007AFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0055CC', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <rect width="400" height="250" fill="#F8F9FA"/>
      
      <text x="20" y="30" fontFamily="Montserrat, Arial, sans-serif" fontSize="16" fontWeight="700" fill="#6B7280" letterSpacing="1">ICON CONSTRUCTION</text>
      
      <g transform="translate(100, 130)">
        <circle cx="0" cy="0" r="50" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
        <circle cx="0" cy="0" r="42" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="-55" y1="0" x2="55" y2="0" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
        
        <circle 
          cx="0" 
          cy="0" 
          r="42" 
          fill="none" 
          stroke="url(#blueGrad)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeDasharray="218 265" 
          transform="rotate(-90)"
        />
        
        <path 
          d="M -15,-24 L -15,24 Q -15,30 -9,33.6 Q 0,38.4 9.6,33.6 Q 18,28.8 18,18 L 18,-18 Q 18,-28.8 9.6,-33.6 Q 0,-38.4 -9,-33.6 Q -15,-30 -15,-24 Z" 
          fill="url(#blueGrad)"
          opacity="0.9"
        />
        
        <circle cx="0" cy="0" r="10" fill="#FF7A00"/>
        
        <circle cx="0" cy="0" r="2" fill="white" opacity="0.6"/>
      </g>
      
      <g>
        <line x1="135" y1="85" x2="180" y2="70" stroke="#6B7280" strokeWidth="1.5"/>
        <circle cx="135" cy="85" r="3" fill="#007AFF"/>
        <text x="190" y="75" fontFamily="Arial, sans-serif" fontSize="13" fill="#1F2937">Progress ring</text>
      </g>
      
      <g>
        <line x1="110" y1="130" x2="180" y2="130" stroke="#6B7280" strokeWidth="1.5"/>
        <circle cx="110" cy="130" r="3" fill="#007AFF"/>
        <text x="190" y="135" fontFamily="Arial, sans-serif" fontSize="13" fill="#1F2937">"D" letterform</text>
      </g>
      
      <g>
        <line x1="110" y1="140" x2="180" y2="185" stroke="#6B7280" strokeWidth="1.5"/>
        <circle cx="100" cy="130" r="3" fill="#FF7A00"/>
        <text x="190" y="190" fontFamily="Arial, sans-serif" fontSize="13" fill="#1F2937">"O" power center</text>
      </g>
    </svg>
  );
};

export default function BrandPage() {
  return (
    <div className="min-h-screen w-full bg-[#0A1628] flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full bg-[#0A1628]/80 backdrop-blur-md z-10 sticky top-0 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <DoItLogo size={32} />
            <DoItWordmark height={28} variant="inverse" />
          </Link>
          <Link href="/">
            <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Brand System SVG */}
      <main className="w-full max-w-7xl p-4 sm:p-8 md:p-12 space-y-12">
        <DoItBrandSystem />
        <IconConstruction />
      </main>
    </div>
  )
}