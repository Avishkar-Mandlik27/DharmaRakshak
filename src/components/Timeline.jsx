// components/Timeline.jsx
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import shivmudra from '../assets/shivmudra.png';

const Timeline = () => {
  const { isMarathi } = useLanguage();

  const timelineTitle = "शौर्याची वेळरेषा";

  const timelineData = [
    { 
      year: "1657", 
      title: "जन्म",
      desc: "पुरंदर किल्ल्यावर शिवाजी महाराज व साईबाई यांच्या पोटी जन्म" 
    },
    { 
      year: "1680", 
      title: "राज्याभिषेक",
      desc: "पन्हाळा किल्ल्यावर छत्रपती म्हणून राज्याभिषेक" 
    },
    { 
      year: "1681", 
      title: "बुरहानपूर धाड",
      desc: "औरंगजेबाच्या खजिन्यावर धाडसिक हल्ला" 
    },
    { 
      year: "1689", 
      title: "बलिदान",
      desc: "तुळापूर येथे ४० दिवसांच्या अत्याचारानंतर अमर बलिदान" 
    }
  ];

  return (
    <section className="py-24 text-white" id="timeline">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Centered Image Above Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-2xl shadow-orange-900/50">
            <img 
              src={shivmudra}   // ← Change this path to your actual image
              alt="छत्रपती संभाजी महाराज"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Golden Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl royal-heading text-center mb-16 text-[#FFD700]"
        >
          {timelineTitle}
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="space-y-16 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#FFD700] before:via-amber-300 before:to-[#FF9933] before:-translate-x-1/2 hidden md:block">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-10' : 'pl-10'}`}>
                <div className="inline-block bg-white/10 backdrop-blur px-8 py-3 rounded-2xl mb-4 border border-[#FFD700]/30">
                  <span className="text-4xl font-bold text-[#FFD700]">{item.year}</span>
                </div>
                <h3 className="text-3xl mb-3 font-semibold text-white">{item.title}</h3>
                <p className="text-amber-100 leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-8 h-8 bg-[#FFD700] rounded-full border-4 border-white flex-shrink-0 relative z-10 shadow-2xl shadow-orange-900/50" />
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-10">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="royal-card p-8 rounded-3xl bg-white/10 backdrop-blur border border-[#FFD700]/30"
            >
              <div className="text-5xl font-bold text-[#FFD700] mb-3">{item.year}</div>
              <div className="text-2xl font-semibold mb-4 text-white">{item.title}</div>
              <p className="text-amber-100 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;