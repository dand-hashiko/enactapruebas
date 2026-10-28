"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  TypographyManager,
  TypographyCategory,
  TypographyCategoryConfig,
  TypographyThemeConfig,
} from "@/lib/typography";

interface TypographyContextType {
  theme: TypographyThemeConfig;
  setTitulos: (config: Partial<TypographyCategoryConfig> | string) => void;
  setSubtitulos: (config: Partial<TypographyCategoryConfig> | string) => void;
  setBotones: (config: Partial<TypographyCategoryConfig> | string) => void;
  setOtros1: (config: Partial<TypographyCategoryConfig> | string) => void;
  setOtros2: (config: Partial<TypographyCategoryConfig> | string) => void;
  setCategory: (
    category: TypographyCategory,
    config: Partial<TypographyCategoryConfig> | string
  ) => void;
  resetTheme: () => void;
}

const TypographyContext = createContext<TypographyContextType | undefined>(
  undefined
);

export function TypographyProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TypographyThemeConfig>(
    TypographyManager.getTheme()
  );

  const updateCategory = (
    category: TypographyCategory,
    config: Partial<TypographyCategoryConfig> | string
  ) => {
    TypographyManager.setCategory(category, config);
    setTheme(TypographyManager.getTheme());
  };

  const setTitulos = (config: Partial<TypographyCategoryConfig> | string) =>
    updateCategory("titulos", config);

  const setSubtitulos = (config: Partial<TypographyCategoryConfig> | string) =>
    updateCategory("subtitulos", config);

  const setBotones = (config: Partial<TypographyCategoryConfig> | string) =>
    updateCategory("botones", config);

  const setOtros1 = (config: Partial<TypographyCategoryConfig> | string) =>
    updateCategory("otros1", config);

  const setOtros2 = (config: Partial<TypographyCategoryConfig> | string) =>
    updateCategory("otros2", config);

  const resetTheme = () => {
    TypographyManager.reset();
    setTheme(TypographyManager.getTheme());
  };

  useEffect(() => {
    TypographyManager.syncDOM();
  }, [theme]);

  return (
    <TypographyContext.Provider
      value={{
        theme,
        setTitulos,
        setSubtitulos,
        setBotones,
        setOtros1,
        setOtros2,
        setCategory: updateCategory,
        resetTheme,
      }}
    >
      {children}
    </TypographyContext.Provider>
  );
}

export function useTypography() {
  const context = useContext(TypographyContext);
  if (!context) {
    throw new Error("useTypography must be used within a TypographyProvider");
  }
  return context;
}
