import React, { useEffect, useState } from 'react';
import { User, ShoppingBag, Menu } from 'lucide-react';
import './TopNav.css';

export default function TopNav({ onMenuClick }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-nav ${hidden ? 'top-nav--hidden' : ''}`}>
      {/* Apple-style black global nav */}
      <nav className="global-nav-bar">
        <div className="nav-logo">GENERAL</div>
        <div className="icons-group">
          <button className="icon-btn" aria-label="حسابي">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn" aria-label="السلة">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn" aria-label="القائمة" onClick={onMenuClick}>
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Parchment band below nav */}
      <div className="parchment-band">
        <div className="hero-content">
          <span className="hero-tagline">مرحباً بكم في متجرنا</span>
          <h1 className="hero-title">THE GENERAL</h1>
          <p className="hero-description">بوابتك للحصول على أرقى الباقات والخدمات الحصرية بأعلى معايير الجودة والتصميم الفريد.</p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}>
              استكشف الباقات
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
