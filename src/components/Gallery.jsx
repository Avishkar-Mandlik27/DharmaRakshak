// components/Gallery.jsx
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sambhaji_Maharaj.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sambhaji_painting_late_17th_century.png/800px-Sambhaji_painting_late_17th_century.png",
  "https://i.pinimg.com/originals/6b/8f/9e/6b8f9e9c8b4a4b0f7b5e0a9c1e4c1f1a.jpg",
  "https://i.pinimg.com/originals/8f/f5/73/8ff5738e1f9c0a4e21a7b8dfcd1c1d7f.jpg",
];

const Gallery = () => {
  const { isMarathi } = useLanguage();

  // Only Marathi content
  const galleryTitle = "शौर्याचे दृश्य स्मरण";
  
  const galleryDescription = "धर्मवीर संभाजी महाराजांच्या ऐतिहासिक आणि कलात्मक चित्रांचा संग्रह";

  return (
    <section className="py-20" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title with Saffron Theme */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 
                     bg-clip-text text-transparent tracking-wider"
        >
          {galleryTitle}
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.06, y: -8 }}
              className="overflow-hidden rounded-3xl shadow-xl group relative"
            >
              {/* Image */}
              <img 
                src={src} 
                alt="धर्मवीर संभाजी महाराज" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Saffron Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/70 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[#8B4513] mt-12 text-lg font-medium tracking-wide"
        >
          {galleryDescription}
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;