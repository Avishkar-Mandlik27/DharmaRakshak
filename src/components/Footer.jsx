// components/Footer.jsx

import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { isMarathi } = useLanguage();

  // Marathi Content
  const marathiSlogan = "जय भवानी • जय शिवाजी • जय संभाजी";
  const marathiEventInfo = "छत्रपती संभाजी महाराज जयंती २०२६ • पुणे, महाराष्ट्र";
  const marathiReverence = "धर्म आणि स्वराज्याचे रक्षण करणाऱ्या अमर शूरवीराला भावपूर्ण श्रद्धांजली";
  const marathiCopyright = "© २०२६ धर्मवीर संभाजी महोत्सव समिती • पुणे";

  // English Content
  const englishSlogan = "JAY BHAVANI • JAY SHIVAJI • JAY SAMBHAJI";
  const englishEventInfo = "Chhatrapati Sambhaji Maharaj Jayanti 2026 • Pune, Maharashtra";
  const englishReverence = "With deep reverence to the immortal warrior who protected Dharma and Swarajya";
  const englishCopyright = "© 2026 Dharmaveer Sambhaji Mahotsav Samiti • Pune";

  return (
    <footer className="bg-[#1C0F07] text-white py-16 text-center border-t-4 border-[#FF9933]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Royal Emblems */}
        {/* <div className="flex justify-center gap-8 text-5xl mb-10">
          <span className="hover:scale-110 transition-transform duration-300">🛡️</span>
          <span className="hover:scale-110 transition-transform duration-300">🚩</span>
          <span className="hover:scale-110 transition-transform duration-300">🦁</span>
        </div> */}

        {/* Main Slogan */}
        <p className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4 tracking-widest leading-tight">
          {isMarathi ? marathiSlogan : englishSlogan}
        </p>
        
        {/* Event Info */}
        <p className="text-[#FFCC66] text-xl mb-10 tracking-wide">
          {isMarathi ? marathiEventInfo : englishEventInfo}
        </p>

        {/* Reverence Line */}
        <div className="text-sm md:text-base text-[#FFEECC]/70 border-t border-[#FF9933]/30 pt-10 max-w-2xl mx-auto">
          {isMarathi ? marathiReverence : englishReverence}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-xs opacity-50 tracking-widest">
          {isMarathi ? marathiCopyright : englishCopyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;