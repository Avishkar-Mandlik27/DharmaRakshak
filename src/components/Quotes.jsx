// components/Quotes.jsx
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Quotes = () => {
  const { isMarathi } = useLanguage();

  // Only Marathi content
  const quoteText = "शूर पुरुष जीवन मागत नाहीत; ते स्वातंत्र्य मागतात.";
  const quoteAuthor = "छत्रपती संभाजी महाराज";

  return (
    <section className="py-24 saffron-gradient text-white" id="quotes">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="italic text-3xl md:text-4xl leading-relaxed border-l-8 border-[#FFD700] pl-10 text-white"
        >
          “{quoteText}”
        </motion.div>
        
        <div className="mt-10 text-3xl font-bold text-[#FFD700]">
          — {quoteAuthor}
        </div>
      </div>
    </section>
  );
};

export default Quotes;