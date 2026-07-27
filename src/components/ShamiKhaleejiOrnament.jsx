import React from 'react';
import { motion } from 'framer-motion';
import './ShamiKhaleejiOrnament.css';

export default function ShamiKhaleejiOrnament({ title = "الزخرفة الشامية الخليجية الملكية", subtitle }) {
  return (
    <div className="shami-khaleeji-wrapper">
      <motion.div 
        className="shami-khaleeji-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        {/* Top Decorative Line with Liquid Gold Gradient */}
        <div className="shami-gold-line-top"></div>

        {/* Master Arabesque SVG Ornament */}
        <div className="shami-svg-box">
          <svg 
            viewBox="0 0 900 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="shami-svg-graphic"
          >
            <defs>
              {/* Shimmering Metallic Gold Gradient */}
              <linearGradient id="goldLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#aa771c" stopOpacity="0" />
                <stop offset="15%" stopColor="#bf953f" stopOpacity="0.8" />
                <stop offset="35%" stopColor="#fcf6ba" />
                <stop offset="50%" stopColor="#b38728" />
                <stop offset="65%" stopColor="#fbf5b7" />
                <stop offset="85%" stopColor="#bf953f" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#aa771c" stopOpacity="0" />
              </linearGradient>

              {/* Sapphire Blue Ambient Glow */}
              <radialGradient id="sapphireGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0066cc" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0066cc" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Glow Aura */}
            <circle cx="450" cy="60" r="100" fill="url(#sapphireGlow)" />

            {/* Left Damascus Arabesque Scroll Curves */}
            <path 
              d="M 50 60 C 150 20, 250 100, 370 60 C 390 53, 405 50, 420 58" 
              stroke="url(#goldLiquid)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            <path 
              d="M 100 60 C 180 35, 230 85, 330 60 C 355 54, 380 54, 400 60" 
              stroke="url(#goldLiquid)" 
              strokeWidth="1.2" 
              strokeDasharray="4 4"
              opacity="0.85"
            />
            {/* Left Floral Petal Swirl */}
            <path 
              d="M 220 55 C 210 30, 240 30, 235 50 C 230 70, 260 70, 255 55" 
              stroke="url(#goldLiquid)" 
              strokeWidth="1.8" 
              fill="none" 
            />

            {/* Right Damascus Arabesque Scroll Curves */}
            <path 
              d="M 850 60 C 750 20, 650 100, 530 60 C 510 53, 495 50, 480 58" 
              stroke="url(#goldLiquid)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            <path 
              d="M 800 60 C 720 35, 670 85, 570 60 C 545 54, 520 54, 500 60" 
              stroke="url(#goldLiquid)" 
              strokeWidth="1.2" 
              strokeDasharray="4 4"
              opacity="0.85"
            />
            {/* Right Floral Petal Swirl */}
            <path 
              d="M 680 55 C 690 30, 660 30, 665 50 C 670 70, 640 70, 645 55" 
              stroke="url(#goldLiquid)" 
              strokeWidth="1.8" 
              fill="none" 
            />

            {/* Central Octagram (نجمة ثمانية خليجية دمشقية) */}
            <g transform="translate(450, 60)">
              {/* Outer Rotated Square 1 */}
              <rect x="-24" y="-24" width="48" height="48" fill="none" stroke="url(#goldLiquid)" strokeWidth="1.8" rx="2" />
              {/* Outer Rotated Square 2 (45 deg) */}
              <rect x="-24" y="-24" width="48" height="48" fill="none" stroke="url(#goldLiquid)" strokeWidth="1.8" rx="2" transform="rotate(45)" />
              
              {/* Inner Diamond */}
              <polygon points="0,-16 16,0 0,16 -16,0" fill="url(#goldLiquid)" opacity="0.25" />
              <polygon points="0,-16 16,0 0,16 -16,0" fill="none" stroke="url(#goldLiquid)" strokeWidth="1.5" />

              {/* Center Radiant Core */}
              <circle cx="0" cy="0" r="5" fill="url(#goldLiquid)" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="url(#goldLiquid)" strokeWidth="1" strokeDasharray="2 2" />

              {/* Accompanying Crescent Flank Ornaments */}
              <circle cx="-50" cy="0" r="4" fill="url(#goldLiquid)" />
              <circle cx="50" cy="0" r="4" fill="url(#goldLiquid)" />
              <circle cx="-90" cy="0" r="2.5" fill="url(#goldLiquid)" opacity="0.7" />
              <circle cx="90" cy="0" r="2.5" fill="url(#goldLiquid)" opacity="0.7" />
            </g>
          </svg>
        </div>

        {/* Optional Title with Gold Gradient Typography */}
        {title && (
          <div className="shami-text-box">
            <h3 className="shami-title">{title}</h3>
            {subtitle && <p className="shami-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* Bottom Gold Accent Line */}
        <div className="shami-gold-line-bottom"></div>
      </motion.div>
    </div>
  );
}
