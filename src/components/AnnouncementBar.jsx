import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`announcement-bar ${scrolled ? 'announcement-bar--compact' : ''}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="announcement-bar-inner">
            <div className="announcement-content">
              <Sparkles size={14} strokeWidth={2} />
              <span>خصم <strong>40%</strong> على جميع الباقات — لفترة محدودة!</span>
              <Sparkles size={14} strokeWidth={2} />
            </div>
            <button
              className="announcement-close"
              onClick={() => setIsVisible(false)}
              aria-label="إغلاق الإعلان"
            >
              <X size={14} strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
