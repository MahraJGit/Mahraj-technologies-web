"use client";

import React, { createContext, useContext, useState } from 'react';

const CalendlyContext = createContext();

export function CalendlyProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("https://calendly.com/muhammadahmed2k5/30min");

  const openModal = (url) => {
    if (url) setCalendlyUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <CalendlyContext.Provider value={{ isModalOpen, calendlyUrl, openModal, closeModal }}>
      {children}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
}
