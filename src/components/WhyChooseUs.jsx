import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Headphones, Gem } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: 'ضمان كامل',
    description: 'استرجاع كامل خلال 24 ساعة إذا لم تكن راضياً عن الخدمة.',
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: 'تفعيل فوري',
    description: 'باقتك تنفعل بثوانٍ معدودة بعد إتمام عملية الشراء.',
  },
  {
    icon: <Headphones size={28} strokeWidth={1.5} />,
    title: 'دعم فني 24/7',
    description: 'فريق الدعم متواجد على مدار الساعة لمساعدتك في أي وقت.',
  },
  {
    icon: <Gem size={28} strokeWidth={1.5} />,
    title: 'جودة عالية',
    description: 'نقدم فقط أفضل المنتجات والخدمات المختارة بعناية.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="why-title">لماذا تختارنا؟</h2>
        <p className="why-subtitle">نلتزم بأعلى معايير الجودة لضمان تجربة استثنائية لكل عميل.</p>
      </motion.div>

      <motion.div
        className="why-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {features.map((feature, idx) => (
          <motion.div className="why-card" key={idx} variants={itemVariants}>
            <div className="why-card-icon">{feature.icon}</div>
            <h3 className="why-card-title">{feature.title}</h3>
            <p className="why-card-desc">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
