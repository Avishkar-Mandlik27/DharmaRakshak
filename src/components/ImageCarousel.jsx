// components/ImageCarousel.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RegisterModal from './RegisterModal';
import { useLanguage } from './LanguageContext';   // Adjust path if needed

const ImageCarousel = ({ images }) => {
  const { isMarathi } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Multilingual Content
  const organizerText = isMarathi 
    ? "धर्मरक्षक संभाजी महाराज प्रतिष्ठान" 
    : "DharmaRakshak Sambhaji Maharaj Pratishthan";

  const ayojitText = isMarathi ? "आयोजित" : "Organized";

  const mainTitle = isMarathi ? "प्रतापगडपर्व" : "Pratapgad Parv";

  const locationText = isMarathi 
    ? "जाणता राजा मैदान, संगमनेर , महाराष्ट्र" 
    : "Janta Raja Maidan, Sangamner, Maharashtra";

  const registerBtnText = isMarathi ? "नोंदणी करा" : "Register Now";

  // Dynamic Font Class
  const fontClass = isMarathi ? "tracking-widest" : "tracking-widest-english";   // Adjusted for better English spacing
  const paragrapgh = "royal-pararaph";

  return (
    <>
      <div className="relative w-full max-w-full mx-auto mt-12 lg:mt-4 overflow-hidden shadow-2xl hidden md:block">
        <div className="relative w-full bg-black">
          <div className="relative w-full aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"   // Changed to object-cover for better look
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Text Container */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent h-80 flex flex-col items-center justify-end pb-14 z-30">
              
              {/* Organizer */}
              <p className={`text-[#FFD700] text-xl md:text-2xl font-medium tracking-widest mb-1 drop-shadow-lg ${fontClass}`}>
                {organizerText}
              </p>

              {/* Organized By */}
              <p className={`text-[#FFD700] text-xl md:text-2xl font-medium tracking-widest mb-6 drop-shadow-lg ${fontClass}`}>
                {ayojitText}
              </p>

              {/* Main Title with Decorative Lines */}
              <div className="relative flex items-center w-full max-w-lg mb-6">
                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-[#FFD700] shadow-[0_0_15px_#FFD700]" />
                
                <motion.h2 
                  className={`text-[#FFD700] 
                    ${isMarathi ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-5xl md:text-6xl'} 
                   tracking-[4px] drop-shadow-2xl mx-8 text-center leading-none ${fontClass}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {mainTitle}
                </motion.h2>

                <div className="flex-1 h-[2px] bg-gradient-to-l from-[#FFD700] via-[#FFD700] to-transparent shadow-[0_0_15px_#FFD700]" />
              </div>

              {/* Location */}
              <p className={`text-[#FFD700] text-xl md:text-2xl font-medium tracking-widest mb-10 drop-shadow-md ${fontClass}`}>
                {locationText}
              </p>

              {/* Register Button */}
              <motion.button
                onClick={() => setIsRegisterOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`shine-btn px-12 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 text-[#8B4513] 
                           rounded-2xl text-xl font-bold shadow-lg shadow-orange-900/50 hover:brightness-110 flex items-center gap-3 ${fontClass}`}
              >
                {registerBtnText}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious} 
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-4 rounded-full z-20 transition-all"
        >
          <ChevronLeft size={36} />
        </button>

        <button 
          onClick={goToNext} 
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-4 rounded-full z-20 transition-all"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </>
  );
};

export default ImageCarousel;