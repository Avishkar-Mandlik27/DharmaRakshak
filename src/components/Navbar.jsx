// components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Navbar = ({ onRegisterClick }) => {   // ← Added prop
  const { isMarathi, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bilingual Content
  const navTitle = isMarathi 
    ? "छत्रपती संभाजी महाराज जयंती २०२६" 
    : "Chhatrapati Sambhaji Maharaj Jayanti 2026";

  const registerNow = isMarathi ? "नोंदणी करा" : "Register Now";

  const navLinks = isMarathi 
    ? [
        { name: "मुख्य", href: "#hero" },
        { name: "वारसा", href: "#legacy" },
        { name: "कालक्रम", href: "#timeline" },
        { name: "नोंदणी", href: "#register" },
      ]
    : [
        { name: "Home", href: "#hero" },
        { name: "Legacy", href: "#legacy" },
        { name: "Timeline", href: "#timeline" },
        { name: "Register", href: "#register" },
      ];

  const languageBtnText = isMarathi ? "EN" : "मराठी";

  // Smooth Scroll Function
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 left-0 right-0 z-50 bg-[#1C0F07] text-white border-b-4 border-[#FFD700] shadow-2xl">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 sm:gap-4 cursor-pointer" 
            onClick={() => scrollToSection('#hero')}
          >
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-[#FFD700]">
                {isMarathi ? "छत्रपती संभाजी" : "Chhatrapati Sambhaji"}
              </h1>
              <p className="text-[10px] sm:text-xs tracking-[3px] text-amber-300 -mt-1">
                {isMarathi ? "धर्मवीर • स्वराज्यरक्षक" : "Dharmaveer • Swarajya Protector"}
              </p>
            </div>
          </div>

          {/* Desktop Title */}
          <div className="hidden lg:block text-xl xl:text-2xl font-bold tracking-widest text-[#FFD700]">
            {navTitle}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="hover:text-[#FFD700] px-2 py-2.5 transition-colors font-medium tracking-wide text-sm uppercase"
              >
                {link.name}
              </button>
            ))}
{/* 
            <button
              onClick={toggleLanguage}
              className="px-6 py-2.5 rounded-full font-bold transition-all text-sm 
                bg-white/10 hover:bg-white/20 border border-[#FFD700]/50 text-amber-100 hover:text-white"
            >
              {languageBtnText}
            </button> */}

            {/* Register Now Button - Now opens Modal */}
            <button
              onClick={onRegisterClick}        // ← Changed to open modal
              className="shine-btn bg-gradient-to-r from-[#FFD700] to-amber-400 hover:from-amber-400 hover:to-[#FFD700] 
                         text-[#8B4513] px-12 py-2 rounded-full font-bold shadow-lg shadow-orange-900/50 transition-all text-base"
            >
              {registerNow}
            </button>
          </div>

          {/* Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-[#FFD700] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#FFD700] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#FFD700] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1C0F07] border-t border-[#FFD700]/30"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-center">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="py-4 text-lg font-medium text-white hover:text-[#FFD700] transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="py-4 bg-white/10 hover:bg-white/20 border border-[#FFD700]/50 rounded-2xl font-bold text-lg transition-all text-amber-100"
              >
                {isMarathi ? "Switch to English" : "मराठीत स्विच करा"}
              </button>

              {/* Mobile Register Button - Opens Modal */}
              <button
                onClick={() => {
                  onRegisterClick();
                  setIsMenuOpen(false);
                }}
                className="shine-btn py-4 text-lg font-bold bg-gradient-to-r from-[#FFD700] to-amber-400 
                           text-[#8B4513] rounded-2xl shadow-lg shadow-orange-900/50 transition-all"
              >
                {registerNow}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;