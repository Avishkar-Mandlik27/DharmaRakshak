// components/ImageCarouselMobile.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RegisterModal from './RegisterModal';
import { useLanguage } from './LanguageContext';

const ImageCarouselMobile = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const { isMarathi } = useLanguage();

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

  // Bilingual Content
  const organizer = isMarathi 
    ? "धर्मरक्षक संभाजी महाराज प्रतिष्ठान" 
    : "DharmaRakshak Sambhaji Maharaj Pratishthan";

  const organizedBy = isMarathi ? "आयोजित" : "Organized";

  const mainTitle = isMarathi ? "प्रतापगडपर्व" : "Pratapgad Parv";

  const location = isMarathi 
    ? "जाणता राजा मैदान , संगमनेर , महाराष्ट्र" 
    : "Janta Raja Maidan, Sangamner, Maharashtra";

  const registerBtnText = isMarathi ? "नोंदणी करा" : "Register Now";

  // Font Class: Cinzel for English, Inknut Antiqua for Marathi
  const fontClass = isMarathi ? "tracking-widest" : "tracking-widest-english";

  return (
    <>
      <div className="relative w-full max-w-full mx-auto mt-12 overflow-hidden shadow-2xl md:hidden">
        <div className="relative w-full bg-black">
          <div className="relative w-full h-[95vh]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Text Container */}
            <div className="absolute bottom-0 left-0 right-0 h-80 flex flex-col items-center justify-end pb-12 z-30">
              
              <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/95 via-black/85 to-transparent" />

              {/* Organizer */}
              <p className={`text-[#FFD700] text-lg sm:text-xl text-center font-medium tracking-widest mb-1 drop-shadow-lg z-10 ${fontClass}`}>
                {organizer}
              </p>

              {/* Organized By */}
              <p className={`text-[#FFD700] text-base sm:text-lg font-medium tracking-widest mb-2 drop-shadow-lg z-10 ${fontClass}`}>
                {organizedBy}
              </p>

              {/* Main Title with Decorative Lines */}
              <div className="relative flex items-center w-full max-w-[290px] mb-6 z-10">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#FFD700] shadow-[0_0_10px_#FFD700]" />
                
                <h2 
                  className={`text-[#FFD700] 
                    ${isMarathi ? 'text-4xl' : 'text-[2.05rem]'} 
                    font-bold tracking-wider drop-shadow-2xl mx-4 text-center leading-tight ${fontClass}`}
                >
                  {mainTitle}
                </h2>

                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#FFD700] shadow-[0_0_10px_#FFD700]" />
              </div>

              {/* Location */}
              <p className={`text-[#FFD700] 
                ${isMarathi ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} 
                text-center font-medium tracking-widest mb-5 drop-shadow-md z-10 ${fontClass}`}>
                {location}
              </p>

              {/* Register Button */}
              <motion.button
                onClick={() => setIsRegisterOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`shine-btn px-12 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 text-[#8B4513] 
                           rounded-2xl text-lg font-bold shadow-lg shadow-orange-900/50 hover:brightness-110 z-10 ${fontClass}`}
              >
                {registerBtnText}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full z-20 transition-all hover:bg-white/10"
        >
          <ChevronLeft size={28} />
        </button>

        <button 
          onClick={goToNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full z-20 transition-all hover:bg-white/10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </>
  );
};

export default ImageCarouselMobile;