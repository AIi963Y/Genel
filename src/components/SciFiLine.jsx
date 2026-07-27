import React from 'react';
import { motion } from 'framer-motion';
import './SciFiLine.css';

export default function SciFiLine() {
  return (
    <div className="scifi-line-section">
      <motion.div 
        className="scifi-line-track"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="scifi-glass-line"></div>
      </motion.div>

      <motion.div
        className="divider-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="divider-label-text">✦ نهاية الباقات ✦</span>
      </motion.div>
    </div>
  );
}
