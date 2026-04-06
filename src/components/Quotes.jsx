// components/Quotes.jsx
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Quotes = () => {
  const { isMarathi } = useLanguage();

  // Bilingual Quotes
  const quoteText = isMarathi 
    ? "शूर पुरुष जीवन मागत नाहीत; ते स्वातंत्र्य मागतात."
    : "Brave men do not ask for life; they ask for freedom.";

  const quoteAuthor = isMarathi 
    ? "छत्रपती संभाजी महाराज"
    : "Chhatrapati Sambhaji Maharaj";

  // Font Class: Inknut Antiqua for Marathi, Cinzel for English
  const fontClass = isMarathi ? "tracking-widest" : "royal-english";

  return (
    <section 
      className="py-24 saffron-gradient text-white relative overflow-hidden" 
      id="quotes"
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#FFD70010_0%,transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Quote Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`italic text-3xl md:text-5xl leading-relaxed pl-8 md:pl-12 border-l-8 border-[#FFD700] text-left md:text-center mx-auto max-w-3xl royal-english`}
        >
          “{quoteText}”
        </motion.div>
        
        {/* Author */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`mt-12 text-2xl md:text-3xl font-bold text-[#FFD700] tracking-wide ${fontClass}`}
        >
          — {quoteAuthor}
        </motion.div>

        {/* Optional decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mx-auto mt-16"></div>
      </div>
    </section>
  );
};

export default Quotes;