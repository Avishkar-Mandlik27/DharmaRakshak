// components/ImageCarousel.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RegisterModal from './RegisterModal';


const ImageCarousel = ({ images }) => {
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
      <div className="relative w-full max-w-full mx-auto mt-12 lg:mt-4 overflow-hidden shadow-2xl hidden md:block">
        <div className="relative w-full bg-black">
          <div className="relative w-full aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-fill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Text + Register Button Container */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent h-48 flex flex-col items-center justify-end pb-10 z-30">
              <h2 className="text-[#FFD700] text-4xl md:text-5xl font-bold tracking-wider drop-shadow-2xl mb-6">
                प्रतापगडपर्व
              </h2>

              {/* Register Button */}
              <motion.button
                onClick={() => setIsRegisterOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="shine-btn px-10 py-4 bg-gradient-to-r from-[#FFD700] to-amber-400 text-[#8B4513] rounded-2xl text-xl font-bold shadow-lg shadow-orange-900/50 hover:brightness-110 flex items-center gap-3"
              >
                नोंदणी करा
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