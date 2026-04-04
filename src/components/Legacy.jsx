// components/Legacy.jsx
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import poet from '../assets/poet.png';
import warrior from '../assets/warrior.jpeg';
import dharma from '../assets/sacrifice.jpg';

const Legacy = () => {
  const { isMarathi } = useLanguage();

  const legacyTitle = "अमर वारसा";
  const legacySubtitle = "छत्रपती शिवाजी महाराजांचे पुत्र ज्यांनी औरंगजेबाला ९ वर्षे एकट्याने लढा दिला";

  const cards = [
    {
      icon: warrior,
      title: "योद्धा राजा",
      desc: "बुरहानपूरवर धाडसिक हल्ला, गुरिल्ला युद्धाचे धुरंधर. शिवाजी महाराजांचा खरा वारसदार.",
      delay: 100
    },
    {
      icon: poet,
      title: "विद्वान व कवी",
      desc: "'बुधभूषणम्' सारखे ग्रंथ रचले. संस्कृत, फारसी, मराठी भाषांचे जाणकार.",
      delay: 300
    },
    {
      icon: dharma,
      title: "धर्म रक्षक",
      desc: "४० दिवस अत्याचार सहन केले पण धर्म सोडला नाही. स्वराज्य आणि धर्माचे अमर प्रतीक.",
      delay: 500
    }
  ];

  return (
    <section id="legacy" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl royal-heading text-[#FFD700] mb-4 tracking-wider">
            {legacyTitle}
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            {legacySubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay / 1000 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="royal-card group p-8 md:p-10 rounded-3xl text-center 
                         bg-white/10 backdrop-blur-xl border border-[#FFD700]/30 
                         hover:border-[#FFD700] transition-all duration-500 overflow-hidden"
            >
              {/* Medium Premium Image Container */}
              <div className="relative w-full h-64 md:h-72 mx-auto mb-10 
                              bg-black/60 rounded-2xl overflow-hidden border border-[#FFD700]/20 
                              group-hover:border-[#FFD700]/50 transition-all duration-500 shadow-inner">
                
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 
                              group-hover:scale-105" 
                />

                {/* Subtle Golden Bottom Glow */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <h3 className="text-3xl font-bold text-[#FFD700] mb-6 tracking-wide">
                {card.title}
              </h3>
              
              <p className="text-amber-100 leading-relaxed text-[17px] md:text-lg">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;