// components/ImageCarouselMobile.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RegisterModal from './RegisterModal';


const ImageCarouselMobile = ({ images }) => {
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

            {/* Golden Text + Register Button for Mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-56 flex flex-col items-center justify-end pb-12 z-30">
              {/* Background Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>

              <h2 className="relative text-[#FFD700] text-3xl sm:text-4xl font-bold tracking-wider mb-6 z-10">
                प्रतापगडपर्व
              </h2>

              {/* Register Button */}
              <motion.button
                onClick={() => setIsRegisterOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="shine-btn px-8 py-3.5 bg-gradient-to-r from-[#FFD700] to-amber-400 text-[#8B4513] rounded-2xl text-lg font-bold shadow-lg shadow-orange-900/50 hover:brightness-110 z-10"
              >
                नोंदणी करा
              </motion.button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-3 rounded-full z-20 transition-all"
        >
          <ChevronLeft size={28} />
        </button>

        <button 
          onClick={goToNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-3 rounded-full z-20 transition-all"
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