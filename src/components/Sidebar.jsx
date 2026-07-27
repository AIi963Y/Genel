import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, User, Settings, LogOut, X } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose, onOpenSettings }) {
  const links = [
    { label: "المنتجات", icon: <Package size={20} strokeWidth={1.5} />, action: () => {
      const el = document.getElementById('packages-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }},
    { label: "الملف الشخصي", icon: <User size={20} strokeWidth={1.5} /> },
    { label: "الإعدادات", icon: <Settings size={20} strokeWidth={1.5} />, action: () => {
      if (onOpenSettings) onOpenSettings();
    }},
    { label: "تسجيل الخروج", icon: <LogOut size={20} strokeWidth={1.5} /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Sidebar Drawer */}
          <motion.div
            className="sidebar-drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          >
            <div className="sidebar-header">
              <div className="sidebar-logo">
                <div className="logo-icon"></div>
                <span>THE GENERAL</span>
              </div>
              <button className="icon-btn close-btn" onClick={onClose} aria-label="إغلاق">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="sidebar-content">
              <nav className="sidebar-nav">
                {links.map((link, idx) => (
                  <a href="#" className="sidebar-link" key={idx} onClick={(e) => { e.preventDefault(); if (link.action) link.action(); }}>
                    <span className="sidebar-link-icon">{link.icon}</span>
                    <span className="sidebar-link-label">{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="sidebar-footer">
              <a href="#" className="sidebar-user-profile" onClick={(e) => e.preventDefault()}>
                <img src="https://ui-avatars.com/api/?name=User&background=000&color=fff" alt="User Avatar" className="sidebar-avatar" />
                <div className="sidebar-user-info">
                  <span className="sidebar-user-name">العميل المميز</span>
                  <span className="sidebar-user-role">عضو VIP</span>
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
