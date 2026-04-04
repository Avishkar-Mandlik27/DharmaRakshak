// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('mr'); // Default: Marathi

  const isMarathi = language === 'mr';

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'mr' ? 'en' : 'mr');
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        isMarathi, 
        toggleLanguage 
      }}
    >
      {/* Dynamic lang attribute + font class for English mode */}
      <div 
        lang={language === 'mr' ? 'mr' : 'en'}
        className={language === 'en' ? 'english-mode' : ''}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};