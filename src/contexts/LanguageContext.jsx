import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // 1. Kullanıcı daha önce bir dil seçtiyse onu al (Hafıza)
    const saved = localStorage.getItem('site_language');
    if (saved) return saved;

    // 2. İlk defa giriyorsa tarayıcı diline bak
    // Eğer tarayıcı dili 'tr' ile başlamıyorsa (yani yabancıysa) 'en' yap, değilse 'tr' yap.
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && !browserLang.toLowerCase().startsWith('tr')) {
      return 'en';
    }
    
    return 'tr';
  });

  useEffect(() => {
    // Dil değiştiğinde hafızaya kaydet
    localStorage.setItem('site_language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
