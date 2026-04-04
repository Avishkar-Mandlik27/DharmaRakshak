// components/Hero.jsx
import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall';
import { useLanguage } from './LanguageContext';

const Hero = () => {
  const { isMarathi } = useLanguage();

  // Only Marathi content
  const jayantiDate = "१४ मे २०२६";

  const heroTitle1 = "धर्मवीर";
  const heroTitle2 = "संभाजी";

  const heroSubtitle = "स्वराज्य आणि धर्माचे निर्भय रक्षक";

  const joinMahotsav = "महोत्सवात सहभागी";

  const exploreLegacy = "वारसा जाणून घ्या";

  const scrollText = "खाली स्क्रोल करा";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.55]"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/7/7b/Sambhaji_Maharaj.jpg')`
          }}
        />
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Royal Saffron-Golden Snowfall */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Snowfall
          color="#FFCC33"
          snowflakeCount={35}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          speed={[0.5, 2.8]}
          wind={[-3, 3]}
          radius={[2, 6]}
          opacity={[0.6, 0.95]}
          blur={0.4}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-center"
        >
          {/* Date Badge - Saffron Border Only */}
          <div className="inline-flex items-center gap-3 
                px-6 py-2.5 rounded-full 
                border-2 border-[#FF9933] 
                bg-black/40 backdrop-blur-xl 
                mb-6 shadow-xl">
            <span className="text-2xl">🚩</span>
            <span className="text-xl font-bold tracking-widest text-[#FFEECC] font-serif">
              {jayantiDate}
            </span>
          </div>

          {/* Main Title with Vertical Gap on Mobile */}
          <div className="mb-6 md:mb-8 flex flex-col items-center">
            {/* Desktop / Tablet: Single Line */}
            <h1 className="hidden md:block text-6xl lg:text-7xl py-10 xl:text-[5.8rem] 
                         leading-none font-bold tracking-wider 
                         bg-gradient-to-r from-[#FFD700] via-[#FFCC33] to-[#FF9933] 
                         bg-clip-text text-transparent 
                         drop-shadow-[0_10px_40px_rgba(255,153,51,0.8)]">
              धर्मवीर संभाजी
            </h1>

            {/* Mobile: Two Lines with Good Vertical Gap */}
            <div className="md:hidden flex flex-col items-center">
              <h1 className="text-[3rem] sm:text-5xl font-bold tracking-wider 
                           bg-gradient-to-r from-[#FFD700] via-[#FFCC33] to-[#FF9933] 
                           bg-clip-text text-transparent py-2
                           drop-shadow-[0_6px_25px_rgba(255,153,51,0.7)]">
                {heroTitle1}
              </h1>
              <h1 className="text-[3.4rem] sm:text-6xl font-bold tracking-wider 
                           bg-gradient-to-r from-[#FFD700] via-[#FFCC33] to-[#FF9933] 
                           bg-clip-text text-transparent 
                           drop-shadow-[0_10px_40px_rgba(255,153,51,0.8)]">
                {heroTitle2}
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide 
                       text-[#FFEECC] max-w-3xl mx-auto mb-16 px-4 leading-relaxed">
            {heroSubtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button */}
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="shine-btn group w-full sm:w-auto inline-flex items-center justify-center gap-4 
                         bg-gradient-to-r from-[#FF9933] to-[#CC5500] hover:from-[#FFAA33] hover:to-[#FF7700]
                         text-white px-6 py-4 rounded-3xl text-2xl font-bold shadow-2xl 
                         shadow-[#FF9933]/60 hover:shadow-[#FFD700]/80 transition-all duration-300"
            >
              {joinMahotsav}
              {/* <span className="text-4xl group-hover:rotate-12 transition-transform duration-300">🛡️</span> */}
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#legacy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto border-2 border-[#FFD700] hover:border-[#FFEECC] 
                         hover:bg-[#FFD700]/10 px-12 py-4 rounded-3xl text-xl font-semibold 
                         text-[#FFEECC] transition-all duration-300"
            >
              {exploreLegacy}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex-col items-center"
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#FFCC33] to-transparent" />
        <p className="text-[#FFEECC]/70 text-sm tracking-widest mt-4 font-medium">
          {scrollText}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;