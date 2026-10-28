"use client";

import React, { useState } from "react";
import Image from "next/image";

export function StitchNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Planes Web", href: "#planes-web" },
    { label: "Equipo", href: "#equipo" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#agendamiento" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Node Status */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            className="flex items-center gap-2.5 group focus:outline-none"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-8 w-8 shrink-0">
              <Image
                alt="Enacta Logo"
                className="h-8 w-auto object-contain"
                src="/images/enacta-logo.png"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="font-code-lg text-code-lg tracking-wider font-semibold text-on-surface uppercase">
              ENACTA
              <span className="text-primary font-code-sm text-code-sm">
                .CL
              </span>
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low rounded border border-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              LATAM Integration Node // Chile
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links — 4 secciones */}
        <nav className="hidden lg:flex items-center gap-space-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-1 font-medium"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-xs bg-primary text-on-primary font-headline-md text-body-sm font-semibold rounded hover:bg-primary-fixed transition-colors shadow-[0_0_16px_rgba(0,229,163,0.2)]"
            href="#agendamiento"
          >
            <span className="material-symbols-outlined text-[16px]">
              terminal
            </span>
            <span>Agendar Reunión</span>
          </a>

          <a
            href="https://wa.me/56995127788"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Enacta"
            className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat
            </span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            aria-label="Abrir menú de navegación"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center border border-white/[0.06] hover:bg-surface-bright transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-primary/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-body-md text-base text-on-surface hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-surface-container flex items-center justify-between"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-primary text-[18px]">
                  chevron_right
                </span>
              </a>
            ))}

            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2.5">
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary text-on-primary font-semibold rounded-lg shadow-lg hover:bg-primary-fixed transition-colors"
                href="#agendamiento"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
                <span>Agendar Reunión (45 min)</span>
              </a>

              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-surface-container hover:bg-surface-bright text-on-surface text-sm font-medium rounded-lg border border-white/[0.06] transition-colors"
                href="https://wa.me/56995127788"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  chat
                </span>
                <span>WhatsApp: +569 9512 7788</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
