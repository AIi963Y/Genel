import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Type, Sliders, Bold, Sparkles, Edit3 } from 'lucide-react';
import MasterOrnament from './Ornaments';
import './SettingsPanel.css';

const fontOptions = [
  { id: 'kookies', num: 'خط 1', label: 'KOOkies', preview: 'أهلاً بالعالم' },
  { id: 'rubbama', num: 'خط 2', label: 'KORubbama', preview: 'أهلاً بالعالم' },
  { id: 'rubbama-expanded', num: 'خط 3', label: 'Rubbama Expanded', preview: 'أهلاً بالعالم' },
  { id: 'aynama-curved', num: 'خط 4', label: 'Aynama Curved (منحني)', preview: 'أهلاً بالعالم' },
  { id: 'aynama-sharp', num: 'خط 5', label: 'Aynama Sharp (حاد)', preview: 'أهلاً بالعالم' },
  { id: 'aref-ruqaa', num: 'خط 6', label: 'زخرفة الرقعة الشامية', preview: 'أهلاً بالعالم' },
  { id: 'amiri', num: 'خط 7', label: 'الزخرفة الأميرية الملكية', preview: 'أهلاً بالعالم' },
];

const fontFamilyMap = {
  'kookies': "'KOOkies', sans-serif",
  'rubbama': "'KORubbama', sans-serif",
  'rubbama-expanded': "'KORubbama Expanded', sans-serif",
  'aynama-curved': "'KOAynama Curved', sans-serif",
  'aynama-sharp': "'KOAynama Sharp', sans-serif",
  'aref-ruqaa': "'Aref Ruqaa', serif",
  'amiri': "'Amiri', serif",
};

const ornamentOptions = [
  { id: 'shami', num: 'زخرفة 1', label: 'الدمشقية الشامية الفاخرة' },
  { id: 'saudi', num: 'زخرفة 2', label: 'السعودية الملكية' },
  { id: 'kuwaiti', num: 'زخرفة 3', label: 'الكويتية البحرية' },
  { id: 'andalusian', num: 'زخرفة 4', label: 'الأندلسية المغربية' },
  { id: 'mexican', num: 'زخرفة 5', label: 'المكسيكية الذائبة الفاخرة 🔥' },
  { id: 'glass', num: 'زخرفة 6', label: 'شريط زجاجي بسيط' },
];

export default function SettingsPanel({ isOpen, onClose, ornamentStyle, onSelectOrnament }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [font, setFont] = useState(() => {
    return localStorage.getItem('font') || 'kookies';
  });

  // Dynamic Slider States
  const [fontSizePercent, setFontSizePercent] = useState(() => {
    return Number(localStorage.getItem('font-size-scale')) || 100;
  });
  const [fontWeightVal, setFontWeightVal] = useState(() => {
    return Number(localStorage.getItem('font-weight-val')) || 400;
  });

  // Custom Live Test Text Input
  const [customTestText, setCustomTestText] = useState(() => {
    return localStorage.getItem('custom-test-text') || 'متجر الجنرال الملكي';
  });

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply font family
  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('font', font);
  }, [font]);

  // Apply font size scale slider
  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', fontSizePercent / 100);
    localStorage.setItem('font-size-scale', fontSizePercent);
  }, [fontSizePercent]);

  // Apply font weight slider
  useEffect(() => {
    document.documentElement.style.setProperty('--font-custom-weight', fontWeightVal);
    localStorage.setItem('font-weight-val', fontWeightVal);
  }, [fontWeightVal]);

  // Persist custom test text
  useEffect(() => {
    localStorage.setItem('custom-test-text', customTestText);
  }, [customTestText]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const getWeightLabel = (val) => {
    if (val <= 300) return 'خفيف جداً (300)';
    if (val <= 400) return 'عادي (400)';
    if (val <= 600) return 'متوسط (600)';
    if (val <= 800) return 'عريض (800)';
    return 'عريض جداً (900)';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="settings-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="settings-panel"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          >
            {/* Header */}
            <div className="settings-header">
              <h2 className="settings-title">مركز التحكم والزخارف</h2>
              <button className="icon-btn settings-close-btn" onClick={onClose} aria-label="إغلاق">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <div className="settings-body">
              {/* Ornament Live Preview Box with Custom Typed Text */}
              <div className="settings-ornament-preview">
                <MasterOrnament 
                  style={ornamentStyle} 
                  title={customTestText || "معاينة الزخرفة"} 
                  subtitle="معاينة حية للزخرفة مع النص التجريبي الخاص بك" 
                />
              </div>

              {/* Interactive Custom Text Tester Box (مربع تجربة النص التجريبي) */}
              <div className="settings-section">
                <div className="settings-section-header">
                  <Edit3 size={18} strokeWidth={1.5} />
                  <h3 className="settings-section-title">خانة تجربة كتابة نص خاص</h3>
                </div>
                <div className="custom-test-input-wrapper">
                  <input
                    type="text"
                    className="custom-test-input"
                    value={customTestText}
                    onChange={(e) => setCustomTestText(e.target.value)}
                    placeholder="اكتب أي كلمة أو جملة لتجربتها هنا..."
                  />
                  <div className="live-custom-text-card">
                    <span className="live-custom-text-preview">
                      {customTestText || 'اكتب نصك التجريبي بالأعلى...'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Theme Toggle */}
              <div className="settings-section">
                <h3 className="settings-section-title">المظهر العام</h3>
                <div className="theme-toggle-row" onClick={toggleTheme}>
                  <div className="theme-toggle-info">
                    {theme === 'light' ? (
                      <Sun size={20} strokeWidth={1.5} />
                    ) : (
                      <Moon size={20} strokeWidth={1.5} />
                    )}
                    <span>{theme === 'light' ? 'الوضع الفاتح' : 'الوضع الداكن'}</span>
                  </div>
                  <div className={`theme-switch ${theme === 'dark' ? 'theme-switch--active' : ''}`}>
                    <div className="theme-switch-knob" />
                  </div>
                </div>
              </div>

              {/* Dynamic Range Slider: Font Size (شريط سحب حجم الكتابة) */}
              <div className="settings-section">
                <div className="settings-section-header">
                  <Sliders size={18} strokeWidth={1.5} />
                  <h3 className="settings-section-title">شريط سحب حجم الخط</h3>
                  <span className="slider-value-badge">{fontSizePercent}%</span>
                </div>
                <div className="range-slider-container">
                  <input
                    type="range"
                    min="70"
                    max="150"
                    step="2"
                    value={fontSizePercent}
                    onChange={(e) => setFontSizePercent(Number(e.target.value))}
                    className="custom-range-slider"
                  />
                  <div className="slider-labels">
                    <span>70% (صغير)</span>
                    <span>100% (عادي)</span>
                    <span>150% (كبير)</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Range Slider: Font Weight (شريط سحب سُمك وعُرض الخط) */}
              <div className="settings-section">
                <div className="settings-section-header">
                  <Bold size={18} strokeWidth={1.5} />
                  <h3 className="settings-section-title">شريط سحب سُمك وعُرض الكتابة</h3>
                  <span className="slider-value-badge">{getWeightLabel(fontWeightVal)}</span>
                </div>
                <div className="range-slider-container">
                  <input
                    type="range"
                    min="300"
                    max="900"
                    step="50"
                    value={fontWeightVal}
                    onChange={(e) => setFontWeightVal(Number(e.target.value))}
                    className="custom-range-slider"
                  />
                  <div className="slider-labels">
                    <span>300 (خفيف)</span>
                    <span>600 (متوسط)</span>
                    <span>900 (عريض جداً)</span>
                  </div>
                </div>
              </div>

              {/* Ornament Style Selector (اختيار شكل الزخارف بالارقام) */}
              <div className="settings-section">
                <div className="settings-section-header">
                  <Sparkles size={18} strokeWidth={1.5} />
                  <h3 className="settings-section-title">أشكال الزخارف (بالأرقام)</h3>
                </div>
                <div className="numbered-options-grid">
                  {ornamentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      className={`numbered-option-btn ${ornamentStyle === opt.id ? 'numbered-option-btn--active' : ''}`}
                      onClick={() => onSelectOrnament(opt.id)}
                    >
                      <span className="option-num-badge">{opt.num}</span>
                      <span className="option-label-text">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Family Selector (أنواع الخطوط بالارقام) */}
              <div className="settings-section">
                <div className="settings-section-header">
                  <Type size={18} strokeWidth={1.5} />
                  <h3 className="settings-section-title">أنواع الخطوط (بالأرقام)</h3>
                </div>
                <div className="font-options">
                  {fontOptions.map((opt) => (
                    <button
                      key={opt.id}
                      className={`font-option ${font === opt.id ? 'font-option--active' : ''}`}
                      onClick={() => setFont(opt.id)}
                    >
                      <div className="font-option-header">
                        <span className="option-num-badge">{opt.num}</span>
                        <span className="font-option-name">{opt.label}</span>
                      </div>
                      <span
                        className="font-option-preview"
                        style={{ fontFamily: fontFamilyMap[opt.id] }}
                      >
                        {opt.preview}
                      </span>
                      {font === opt.id && <div className="font-option-check">✓</div>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
