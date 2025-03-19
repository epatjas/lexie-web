'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fi' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);
  
  // Translation function
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = { ...translations[language] };
    
    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Import translations here to avoid circular dependency
import { translations } from '@/translations'; 