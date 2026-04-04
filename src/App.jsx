// App.jsx
import { useEffect, useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import Registration from './components/Registeration';

import laptop1 from './assets/laptop1.jpeg';
import laptop2 from './assets/laptop2.jpeg';
import laptop3 from './assets/laptop3.jpeg';

import mobile1 from './assets/mobile12.jpeg';
import mobile2 from './assets/mobile7.jpeg';
import mobile3 from './assets/mobile1.jpeg';
import mobile4 from './assets/mobile11.jpeg';

// Import both components
import ImageCarousel from './components/ImageCarousel';
import ImageCarouselMobile from './components/ImageCarouselMobile';
import RegisterModal from './components/RegisterModal';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Choose images based on screen size
  const laptopImages = [laptop1, laptop2, laptop3];
  const mobileImages = [mobile1, mobile2, mobile3, mobile4];

  useEffect(() => {
    document.documentElement.lang = 'mr';
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-[#FFF8E7] bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 overflow-x-hidden font-serif">
        
       <Navbar onRegisterClick={() => setIsRegisterOpen(true)} />
      
      {/* Other sections */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
        
        {/* Show Mobile Carousel on phones */}
        {isMobile ? (
          <ImageCarouselMobile images={mobileImages} />
        ) : (
          /* Show Laptop Carousel on tablets & desktops */
          <ImageCarousel images={laptopImages} />
        )}

        <Hero />
        <Legacy />
        {/* <Gallery /> */}
        <Timeline />
        <Quotes />
        <Registration />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;