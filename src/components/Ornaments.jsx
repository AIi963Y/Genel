import React from 'react';
import { motion } from 'framer-motion';
import './Ornaments.css';

/* ============================================
   1. الزخرفة الدمشقية الشامية الفاخرة (Damascene)
   ============================================ */
export function ShamiOrnament({ title, subtitle }) {
  return (
    <div className="ornament-wrapper shami-theme">
      <motion.div 
        className="ornament-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="ornament-gold-line"></div>
        <div className="ornament-svg-box">
          <svg viewBox="0 0 900 120" className="ornament-svg">
            <defs>
              <linearGradient id="shamiGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b38728" stopOpacity="0" />
                <stop offset="25%" stopColor="#fcf6ba" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="75%" stopColor="#fbf5b7" />
                <stop offset="100%" stopColor="#b38728" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Floral Arabesque Swirls */}
            <path d="M 60 60 C 180 15, 260 105, 380 60 C 400 52, 420 52, 435 60" stroke="url(#shamiGold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 840 60 C 720 15, 640 105, 520 60 C 500 52, 480 52, 465 60" stroke="url(#shamiGold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 200 55 C 190 25, 230 25, 220 50 C 215 70, 255 70, 245 55" stroke="url(#shamiGold)" strokeWidth="1.8" fill="none" />
            <path d="M 700 55 C 710 25, 670 25, 680 50 C 685 70, 645 70, 655 55" stroke="url(#shamiGold)" strokeWidth="1.8" fill="none" />

            {/* Damascus Central Medallion */}
            <g transform="translate(450, 60)">
              <circle cx="0" cy="0" r="22" fill="none" stroke="url(#shamiGold)" strokeWidth="2" />
              <circle cx="0" cy="0" r="14" fill="url(#shamiGold)" opacity="0.25" />
              <polygon points="0,-26 7,-8 26,0 7,8 0,26 -7,8 -26,0 -7,-8" fill="none" stroke="url(#shamiGold)" strokeWidth="1.5" />
              <polygon points="-18,-18 0,-7 18,-18 7,0 18,18 0,7 -18,18 -7,0" fill="none" stroke="url(#shamiGold)" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="5" fill="url(#shamiGold)" />
            </g>
          </svg>
        </div>
        {title && (
          <div className="ornament-text">
            <h3 className="ornament-title shami-font">{title}</h3>
            {subtitle && <p className="ornament-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="ornament-gold-line"></div>
      </motion.div>
    </div>
  );
}

/* ============================================
   2. الزخرفة السعودية الملكية (Saudi Royal)
   ============================================ */
export function SaudiOrnament({ title, subtitle }) {
  return (
    <div className="ornament-wrapper saudi-theme">
      <motion.div 
        className="ornament-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="ornament-gold-line saudi-line"></div>
        <div className="ornament-svg-box">
          <svg viewBox="0 0 900 120" className="ornament-svg">
            <defs>
              <linearGradient id="saudiGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#006c35" stopOpacity="0" />
                <stop offset="20%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#fff2a3" />
                <stop offset="80%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#006c35" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Geometric Royal Diamond Lattice */}
            <path d="M 80 60 L 220 20 L 360 60 L 220 100 Z" stroke="url(#saudiGold)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M 820 60 L 680 20 L 540 60 L 680 100 Z" stroke="url(#saudiGold)" strokeWidth="1.5" fill="none" opacity="0.6" />
            
            {/* Center Royal Palm & Crossed Swords Graphic */}
            <g transform="translate(450, 60)">
              {/* Octagonal Shield */}
              <polygon points="0,-32 23,-23 32,0 23,23 0,32 -23,23 -32,0 -23,-23" fill="none" stroke="url(#saudiGold)" strokeWidth="2" />
              <polygon points="0,-24 17,-17 24,0 17,17 0,24 -17,17 -24,0 -17,-17" fill="url(#saudiGold)" opacity="0.2" />

              {/* Stylized Palm Tree Central Icon */}
              <path d="M 0 10 L 0 -12 M 0 -12 C -8 -20, -18 -15, -20 -10 M 0 -12 C 8 -20, 18 -15, 20 -10 M 0 -12 C -6 -24, -14 -22, -14 -16 M 0 -12 C 6 -24, 14 -22, 14 -16" stroke="url(#saudiGold)" strokeWidth="2" fill="none" strokeLinecap="round" />
              
              {/* Crossed Curved Swords underneath */}
              <path d="M -16 12 Q 0 4 16 -12" stroke="url(#saudiGold)" strokeWidth="2" fill="none" />
              <path d="M 16 12 Q 0 4 -16 -12" stroke="url(#saudiGold)" strokeWidth="2" fill="none" />

              <circle cx="-55" cy="0" r="4" fill="url(#saudiGold)" />
              <circle cx="55" cy="0" r="4" fill="url(#saudiGold)" />
            </g>
          </svg>
        </div>
        {title && (
          <div className="ornament-text">
            <h3 className="ornament-title saudi-font">{title}</h3>
            {subtitle && <p className="ornament-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="ornament-gold-line saudi-line"></div>
      </motion.div>
    </div>
  );
}

/* ============================================
   3. الزخرفة الكويتية البحرية (Kuwaiti Royal)
   ============================================ */
export function KuwaitiOrnament({ title, subtitle }) {
  return (
    <div className="ornament-wrapper kuwaiti-theme">
      <motion.div 
        className="ornament-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="ornament-gold-line kuwaiti-line"></div>
        <div className="ornament-svg-box">
          <svg viewBox="0 0 900 120" className="ornament-svg">
            <defs>
              <linearGradient id="kuwaitiGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#003366" stopOpacity="0" />
                <stop offset="25%" stopColor="#e5c158" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#e5c158" />
                <stop offset="100%" stopColor="#003366" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Maritime Waves & Pearl Lines */}
            <path d="M 50 60 Q 150 20 250 60 T 400 60" stroke="url(#kuwaitiGold)" strokeWidth="2" fill="none" />
            <path d="M 850 60 Q 750 20 650 60 T 500 60" stroke="url(#kuwaitiGold)" strokeWidth="2" fill="none" />
            <circle cx="150" cy="60" r="3" fill="url(#kuwaitiGold)" />
            <circle cx="250" cy="60" r="4" fill="url(#kuwaitiGold)" />
            <circle cx="350" cy="60" r="3" fill="url(#kuwaitiGold)" />
            <circle cx="750" cy="60" r="3" fill="url(#kuwaitiGold)" />
            <circle cx="650" cy="60" r="4" fill="url(#kuwaitiGold)" />
            <circle cx="550" cy="60" r="3" fill="url(#kuwaitiGold)" />

            {/* Central Kuwaiti Dhow / Sunburst Medallion */}
            <g transform="translate(450, 60)">
              <circle cx="0" cy="0" r="28" fill="none" stroke="url(#kuwaitiGold)" strokeWidth="2" strokeDasharray="6 3" />
              <circle cx="0" cy="0" r="18" fill="url(#kuwaitiGold)" opacity="0.2" />

              {/* Dhow Sail Curve Silhouette */}
              <path d="M -12 8 C -8 -14, 0 -18, 12 -12 C 4 -2, -2 4, -12 8 Z" fill="url(#kuwaitiGold)" />
              <path d="M -14 10 L 14 10" stroke="url(#kuwaitiGold)" strokeWidth="2" strokeLinecap="round" />

              <circle cx="0" cy="0" r="3" fill="url(#kuwaitiGold)" />
            </g>
          </svg>
        </div>
        {title && (
          <div className="ornament-text">
            <h3 className="ornament-title kuwaiti-font">{title}</h3>
            {subtitle && <p className="ornament-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="ornament-gold-line kuwaiti-line"></div>
      </motion.div>
    </div>
  );
}

/* ============================================
   4. الزخرفة الأندلسية المغربية (Andalusian Zellij)
   ============================================ */
export function AndalusianOrnament({ title, subtitle }) {
  return (
    <div className="ornament-wrapper andalusian-theme">
      <motion.div 
        className="ornament-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="ornament-gold-line andalusian-line"></div>
        <div className="ornament-svg-box">
          <svg viewBox="0 0 900 120" className="ornament-svg">
            <defs>
              <linearGradient id="andalusianGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                <stop offset="30%" stopColor="#f3e5ab" />
                <stop offset="50%" stopColor="#c5a059" />
                <stop offset="70%" stopColor="#f3e5ab" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Andalusian Geometrics */}
            <path d="M 100 60 L 140 30 L 180 60 L 140 90 Z M 180 60 L 220 30 L 260 60 L 220 90 Z M 260 60 L 300 30 L 340 60 L 300 90 Z" stroke="url(#andalusianGold)" strokeWidth="1.2" fill="none" opacity="0.7" />
            <path d="M 800 60 L 760 30 L 720 60 L 760 90 Z M 720 60 L 680 30 L 640 60 L 680 90 Z M 640 60 L 600 30 L 560 60 L 600 90 Z" stroke="url(#andalusianGold)" strokeWidth="1.2" fill="none" opacity="0.7" />

            {/* Central 12-point Star Zellij */}
            <g transform="translate(450, 60)">
              <polygon points="0,-30 8,-15 25,-25 15,-8 30,0 15,8 25,25 8,15 0,30 -8,15 -25,25 -15,8 -30,0 -15,-8 -25,-25 -8,-15" fill="url(#andalusianGold)" opacity="0.25" stroke="url(#andalusianGold)" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="url(#andalusianGold)" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="4" fill="url(#andalusianGold)" />
            </g>
          </svg>
        </div>
        {title && (
          <div className="ornament-text">
            <h3 className="ornament-title andalusian-font">{title}</h3>
            {subtitle && <p className="ornament-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="ornament-gold-line andalusian-line"></div>
      </motion.div>
    </div>
  );
}

/* ============================================
   5. شريط زجاجي بسيط (Glass Line)
   ============================================ */
export function GlassLineOrnament() {
  return (
    <div className="ornament-wrapper glass-theme">
      <div className="glass-line-track">
        <div className="glass-line-glow"></div>
      </div>
    </div>
  );
}

/* ============================================
   6. الزخرفة المكسيكية الذائبة الفاخرة (Mexican Liquid Melt)
   ============================================ */
export function MexicanMeltOrnament({ title, subtitle }) {
  return (
    <div className="ornament-wrapper mexican-theme">
      <motion.div 
        className="ornament-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="ornament-gold-line mexican-line"></div>
        <div className="ornament-svg-box">
          <svg viewBox="0 0 900 130" className="ornament-svg mexican-svg">
            <defs>
              <linearGradient id="mexicanMoltenGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4500" stopOpacity="0.2" />
                <stop offset="25%" stopColor="#ff8c00" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="75%" stopColor="#ff4500" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
              </linearGradient>
              <filter id="liquidGlow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Liquid Dripping Wave Paths */}
            <path d="M 40 50 C 120 20, 180 95, 260 45 C 310 15, 370 75, 410 40 L 430 45" stroke="url(#mexicanMoltenGold)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#liquidGlow)" />
            <path d="M 860 50 C 780 20, 720 95, 640 45 C 590 15, 530 75, 490 40 L 470 45" stroke="url(#mexicanMoltenGold)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#liquidGlow)" />

            {/* Dripping Drops on the sides */}
            <path d="M 170 65 Q 170 85 170 90 A 4 4 0 1 0 174 90 Q 174 85 170 65" fill="url(#mexicanMoltenGold)" />
            <path d="M 330 55 Q 330 75 330 82 A 3.5 3.5 0 1 0 333.5 82 Q 333.5 75 330 55" fill="url(#mexicanMoltenGold)" />
            <path d="M 730 65 Q 730 85 730 90 A 4 4 0 1 0 734 90 Q 734 85 730 65" fill="url(#mexicanMoltenGold)" />
            <path d="M 570 55 Q 570 75 570 82 A 3.5 3.5 0 1 0 573.5 82 Q 573.5 75 570 55" fill="url(#mexicanMoltenGold)" />

            {/* Central Liquid Aztec Sunburst Medallion */}
            <g transform="translate(450, 55)">
              {/* Dripping Liquid Sun Rays */}
              <path d="M 0 -35 L 0 -22 M 0 35 L 0 22 M -35 0 L -22 0 M 35 0 L 22 0 M -25 -25 L -15 -15 M 25 25 L 15 15 M -25 25 L -15 15 M 25 -25 L 15 -15" stroke="url(#mexicanMoltenGold)" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Molten Outer Ring */}
              <circle cx="0" cy="0" r="22" fill="none" stroke="url(#mexicanMoltenGold)" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="14" fill="url(#mexicanMoltenGold)" opacity="0.3" />

              {/* Melting Tear Drop Center */}
              <path d="M 0 -10 C 6 -10, 10 -4, 10 2 C 10 8, 5 14, 0 18 C -5 14, -10 8, -10 2 C -10 -4, -6 -10, 0 -10 Z" fill="url(#mexicanMoltenGold)" filter="url(#liquidGlow)" />
            </g>
          </svg>
        </div>
        {title && (
          <div className="ornament-text">
            <h3 className="ornament-title mexican-font">{title}</h3>
            {subtitle && <p className="ornament-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="ornament-gold-line mexican-line"></div>
      </motion.div>
    </div>
  );
}

/* ============================================
   Master Switcher Component
   ============================================ */
export default function MasterOrnament({ style = "shami", title, subtitle }) {
  switch (style) {
    case 'saudi':
      return <SaudiOrnament title={title} subtitle={subtitle} />;
    case 'kuwaiti':
      return <KuwaitiOrnament title={title} subtitle={subtitle} />;
    case 'andalusian':
      return <AndalusianOrnament title={title} subtitle={subtitle} />;
    case 'mexican':
      return <MexicanMeltOrnament title={title} subtitle={subtitle} />;
    case 'glass':
      return <GlassLineOrnament />;
    case 'shami':
    default:
      return <ShamiOrnament title={title} subtitle={subtitle} />;
  }
}
