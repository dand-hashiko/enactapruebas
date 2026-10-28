"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TypographyManager, TypographyTheme } from "@/lib/typography";

interface TypographyContextType {
  theme: TypographyTheme;
  setHeadingFont: (font: string) => void;
  setBodyFont: (font: string) => void;
  updateTheme: (theme: Partial<TypographyTheme>) => void;
  resetTheme: () => void;
}

const TypographyContext = createContext<TypographyContextType | undefined>(
  undefined
);

export function TypographyProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TypographyTheme>(
    TypographyManager.getTheme()
  );

  const updateTheme = (overrides: Partial<TypographyTheme>) => {
    TypographyManager.apply(overrides);
    setTheme(TypographyManager.getTheme());
  };

  const setHeadingFont = (font: string) => updateTheme({ heading: font });
  const setBodyFont = (font: string) => updateTheme({ body: font });
  const resetTheme = () => {
    TypographyManager.reset();
    setTheme(TypographyManager.getTheme());
  };

  useEffect(() => {
    TypographyManager.apply(theme);
  }, [theme]);

  return (
    <TypographyContext.Provider
      value={{ theme, setHeadingFont, setBodyFont, updateTheme, resetTheme }}
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
