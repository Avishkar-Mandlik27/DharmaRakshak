// components/Timeline.jsx
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import shivmudra from '../assets/shivmudra.png';

const Timeline = () => {
  const { isMarathi } = useLanguage();

  const timelineTitle = isMarathi ? "शौर्याची वेळरेषा" : "Timeline of Valor";

  const timelineData = [
    { 
      yearMarathi: "१६५७", 
      yearEnglish: "1657",
      title: isMarathi ? "जन्म" : "Birth",
      desc: isMarathi 
        ? "पुरंदर किल्ल्यावर शिवाजी महाराज व साईबाई यांच्या पोटी जन्म" 
        : "Born at Purandar Fort to Chhatrapati Shivaji Maharaj and Saibai"
    },
    { 
      yearMarathi: "१६८०", 
      yearEnglish: "1680",
      title: isMarathi ? "राज्याभिषेक" : "Coronation",
      desc: isMarathi 
        ? "पन्हाळा किल्ल्यावर छत्रपती म्हणून राज्याभिषेक" 
        : "Crowned as Chhatrapati at Panhala Fort"
    },
    { 
      yearMarathi: "१६८१", 
      yearEnglish: "1681",
      title: isMarathi ? "बुरहानपूर धाड" : "Raid on Burhanpur",
      desc: isMarathi 
        ? "औरंगजेबाच्या खजिन्यावर धाडसिक हल्ला" 
        : "Daring raid on Aurangzeb's treasury at Burhanpur"
    },
    { 
      yearMarathi: "१६८९", 
      yearEnglish: "1689",
      title: isMarathi ? "बलिदान" : "Martyrdom",
      desc: isMarathi 
        ? "तुळापूर येथे ४० दिवसांच्या अत्याचारानंतर अमर बलिदान" 
        : "Eternal sacrifice at Tulapur after 40 days of brutal torture"
    }
  ];

  const fontClass = isMarathi ? "tracking-widest" : "royal-english";

  return (
    <section className="py-24 text-white" id="timeline">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Centered Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-2xl shadow-orange-900/50">
            <img 
              src={shivmudra}
              alt="छत्रपती संभाजी महाराज"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          </div>
        </motion.div>

        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-6xl text-center text-[#FFD700] tracking-wider ${fontClass}`}
          >
            {timelineTitle}
          </motion.h2>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
        </div>

        {/* Desktop Timeline - Bilingual Years */}
        <div className="space-y-20 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#FFD700] before:via-amber-300 before:to-[#FF9933] before:-translate-x-1/2 hidden md:block">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className={`flex items-start gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content Side */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                {/* Bilingual Year */}
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="bg-white/10 backdrop-blur-md px-7 py-3 rounded-2xl border border-[#FFD700]/30">
                    <span className="text-4xl font-bold text-[#FFD700] tabular-nums">
                      {isMarathi ? item.yearMarathi : item.yearEnglish}
                    </span>
                  </div>
                  
                  {/* Small year in opposite script for beauty */}
                  <span className="text-sm opacity-60 font-light tabular-nums">
                    {isMarathi ? item.yearEnglish : item.yearMarathi}
                  </span>
                </div>

                <h3 className={`text-3xl mb-4 font-semibold text-white ${fontClass}`}>
                  {item.title}
                </h3>
                
                <p className="text-amber-100 leading-relaxed text-[17px]">
                  {item.desc}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="w-9 h-9 bg-[#FFD700] rounded-full border-[5px] border-[#1C0F07] flex-shrink-0 relative z-10 shadow-2xl shadow-orange-900/60 mt-3" />
              
              {/* Empty side for alignment */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline - Bilingual Years */}
        <div className="md:hidden space-y-10">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="royal-card p-8 rounded-3xl bg-white/10 backdrop-blur border border-[#FFD700]/30"
            >
              {/* Bilingual Year */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-6xl font-bold text-[#FFD700] tabular-nums ${fontClass}`}>
                  {isMarathi ? item.yearMarathi : item.yearEnglish}
                </div>
                <div className={`text-xl text-amber-200/70 font-light ${fontClass}`}>
                  {isMarathi ? item.yearEnglish : item.yearMarathi}
                </div>
              </div>

              <div className={`text-2xl font-semibold mb-5 text-white ${fontClass}`}>
                {item.title}
              </div>
              
              <p className="text-amber-100 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;