import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TopNav from './components/TopNav';
import SciFiLine from './components/SciFiLine';
import MasterOrnament from './components/Ornaments';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SettingsPanel from './components/SettingsPanel';
import packageImg from './assets/package-special-name.png';
import './App.css';

/* Scroll-reveal animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [ornamentStyle, setOrnamentStyle] = useState(() => {
    return localStorage.getItem('ornament-style') || 'shami';
  });

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenSettings={() => { setIsSidebarOpen(false); setIsSettingsOpen(true); }}
      />
      <SettingsPanel 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        ornamentStyle={ornamentStyle}
        onSelectOrnament={(style) => {
          setOrnamentStyle(style);
          localStorage.setItem('ornament-style', style);
        }}
      />
      <TopNav onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Main scrollable content */}
      <main className="main-content">
        {/* Space for the parchment header area */}
        <div className="header-spacer"></div>

        {/* Content below the line (white area) */}
        <div className="below-line-region">
          <section id="packages-section" className="packages-section">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">الباقات الحصرية</h2>
              <p className="section-subtitle">اختر الباقة المناسبة لك وابدأ تجربتك الفريدة اليوم.</p>
            </motion.div>

            <motion.div
              className="packages-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Package Card 1 — Special Name */}
              <motion.div className="package-card" variants={fadeInUp} custom={0}>
                <div className="package-card-img-wrapper">
                  <div className="package-card-badge">عرض محدود</div>
                  <img 
                    src={packageImg} 
                    alt="باقة سبيشل نيم" 
                    className="package-card-img"
                  />
                </div>
                <div className="package-card-content">
                  <span className="package-card-tag">SPECIAL OFFER</span>
                  <h3 className="package-card-title">سبيشل نيم للبيع</h3>
                  <p className="package-card-description">
                    باقة الاسم الخاص الفريدة! تمنحك اسماً ملوناً ومميزاً في السيرفر مع أيقونة خاصة بجانب اسمك وصلاحيات حصرية تليق بك.
                  </p>
                  <div className="package-card-footer">
                    <div className="package-card-price">
                      <span>150 ر.س</span>
                      <span className="price-old">250 ر.س</span>
                    </div>
                    <div className="package-card-actions">
                      <button className="btn-primary">شراء الآن</button>
                      <button className="btn-secondary">تفاصيل أكثر</button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Package Card 2 — VIP */}
              <motion.div className="package-card" variants={fadeInUp} custom={1}>
                <div className="package-card-img-wrapper">
                  <div className="package-card-badge badge-gold">الأكثر مبيعاً</div>
                  <div className="package-card-placeholder-img">
                    <span>VIP</span>
                  </div>
                </div>
                <div className="package-card-content">
                  <span className="package-card-tag">MOST POPULAR</span>
                  <h3 className="package-card-title">باقة VIP</h3>
                  <p className="package-card-description">
                    انضم إلى النخبة مع باقة VIP الشاملة. صلاحيات دخول الغرف المغلقة، شارة ذهبية، وأولوية دعم فني على مدار الساعة.
                  </p>
                  <div className="package-card-footer">
                    <div className="package-card-price">
                      <span>99 ر.س</span>
                    </div>
                    <div className="package-card-actions">
                      <button className="btn-primary">شراء الآن</button>
                      <button className="btn-secondary">تفاصيل أكثر</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Smooth glass blue divider line with '✦ نهاية الباقات ✦' */}
          <SciFiLine />

          {/* Why Choose Us Section */}
          <WhyChooseUs />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
