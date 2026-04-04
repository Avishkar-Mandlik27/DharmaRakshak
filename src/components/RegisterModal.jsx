// components/RegisterModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Registration from './Registeration';

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl 
                            max-h-[95vh] md:max-h-[92vh] 
                            bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-[#FFD700]/20">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-red-600 
                           border border-white/30 hover:border-red-500 text-white 
                           p-2.5 rounded-full transition-all duration-200"
              >
                <X size={24} strokeWidth={3} />
              </button>

              {/* Scrollable Registration Form */}
              <div className="max-h-[85vh] overflow-y-auto custom-scrollbar p-2 sm:p-4 md:p-8">
                <Registration />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;