// components/Footer.jsx
import { useLanguage } from './LanguageContext';   // Adjust path if needed

const Footer = () => {
  const { isMarathi } = useLanguage();

  // Bilingual Content
  const slogan = isMarathi 
    ? "जय भवानी • जय शिवाजी • जय संभाजी" 
    : "JAY BHAVANI • JAY SHIVAJI • JAY SAMBHAJI";

  const eventInfo = isMarathi 
    ? "छत्रपती संभाजी महाराज जयंती २०२६ • संगमनेर, महाराष्ट्र" 
    : "Chhatrapati Sambhaji Maharaj Jayanti 2026 • Sangamner, Maharashtra";

  const reverence = isMarathi 
    ? "धर्म आणि स्वराज्याचे रक्षण करणाऱ्या अमर शूरवीराला भावपूर्ण श्रद्धांजली" 
    : "With deep reverence to the immortal warrior who protected Dharma and Swarajya";

  const copyright = isMarathi 
    ? "© २०२६ धर्मरक्षक संभाजी महाराज प्रतिष्ठान • संगमनेर" 
    : "© 2026 DharmaRakshak Sambhaji Maharaj Pratishthan • Sangamner";

  const developedBy = isMarathi 
    ? "विकसितकर्ता" 
    : "Developed by";

  // Font Class
  const fontClass = isMarathi ? "tracking-widest" : "royal-english";

  return (
    <footer className="bg-[#1C0F07] text-white py-20 text-center border-t-4 border-[#FF9933] relative overflow-hidden">
      {/* Subtle decorative gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF9933]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Slogan - Enhanced with glow */}
        <p className={`text-4xl md:text-6xl font-bold text-[#FFD700] mb-6 tracking-widest leading-tight ${fontClass} drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]`}>
          {slogan}
        </p>
        
        {/* Event Info */}
        <p className={`text-[#FFCC66] text-xl md:text-2xl mb-12 tracking-wide ${fontClass}`}>
          {eventInfo}
        </p>

        {/* Reverence Line - Elegant border */}
        <div className={`text-sm md:text-base text-[#FFEECC]/80 border-t border-[#FF9933]/30 pt-12 max-w-3xl mx-auto ${fontClass} leading-relaxed`}>
          {reverence}
        </div>

        {/* Developed By + Instagram Section */}
        {/* <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-[#FFCC66]/90 text-sm tracking-widest">
            <span className="opacity-75">{developedBy}</span>
            <a 
              href="https://instagram.com/avishkarmandlik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-white transition-all duration-300"
            >
              <span className="font-medium text-white">Avishkar Mandlik</span>
              
              {/* Instagram Icon with gradient hover */}
              {/* <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#E1306C] transition-colors"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </div> */} 

          {/* Optional: Instagram handle below */}
          {/* <a 
            href="https://instagram.com/avishkar___v.2.0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-[#FF9933]/70 hover:text-[#FF9933] transition-colors flex items-center gap-1.5"
          >
            @avishkar___v.2.0 • Follow for updates
          </a>
        </div> */}

        {/* Bottom Copyright - Refined */}
        <div className={`mt-16 pt-8 border-t border-[#FF9933]/20 text-xs opacity-60 tracking-widest ${fontClass}`}>
          {copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;