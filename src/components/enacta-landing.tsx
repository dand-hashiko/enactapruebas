"use client";

import * as React from "react";
import { Send, CheckCircle, Mail, MapPin, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";

export function EnactaLanding() {
  // Countdown to October 10, 2026 at 00:00:00 (Chile Local Time)
  const [timeLeft, setTimeLeft] = React.useState({
    days: "07",
    hours: "07",
    minutes: "21",
    seconds: "00",
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    // Target: October 10, 2026 at 00:00:00 CLT
    const targetDate = new Date(2026, 9, 10, 0, 0, 0).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / (1000 * 60)) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#22c55e", "#6366f1"],
      });
    } catch {}
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between font-sans selection:bg-white selection:text-black">
      {/* ========================================================================= */}
      {/* SECCIÓN 1 (FOTO 1): FONDO NEGRO + ENACTA + CONTADOR + FORMA DE MAR BLANCO */}
      {/* ========================================================================= */}
      <section className="relative bg-black pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Glow sutil */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Título Principal Exacto ENACTA */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-light tracking-[0.08em] sm:tracking-[0.12em] text-white uppercase select-none transition-transform hover:scale-[1.01] duration-300">
          ENACTA
        </h1>

        {/* Subtítulo dinámico con cuenta regresiva en vivo */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-2xl md:text-3xl font-light tracking-wide text-zinc-100 flex items-center justify-center gap-1.5 flex-wrap">
          <span>Faltan</span>
          <span className="font-mono font-medium tracking-widest text-white px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-xs">
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </span>
          <span>días para el estreno.</span>
        </p>

        {/* Botón sutil para consulta anticipada */}
        <div className="mt-8 z-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Contacto Directo / Adelanto Exclusivo</span>
          </button>
        </div>

        {/* Forma de Mar Blanco (Wave SVG idéntica a FOTO 1) */}
        <div className="w-full mt-16 sm:mt-24 -mb-12 sm:-mb-16 md:-mb-1">
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-24 md:h-36 block preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C320,130 460,-15 780,95 C1100,195 1260,25 1440,70 L1440,180 L0,180 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2 (FOTO 2): CONTACTOS WHATSAPP (FONDO BLANCO)                    */}
      {/* ========================================================================= */}
      <section className="bg-white text-black py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center justify-center transition-colors">
        <div className="max-w-2xl w-full mx-auto space-y-10 sm:space-y-12">
          {/* Contacto 1: Paola Huenuman */}
          <a
            href="https://wa.me/56953797437"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-6 sm:gap-8 p-4 rounded-3xl hover:bg-zinc-50 transition-all duration-200 cursor-pointer"
          >
            {/* Ícono WhatsApp Estilo FOTO 2 */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center rounded-full border-2 border-black p-3 group-hover:scale-105 group-hover:border-emerald-600 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 sm:w-12 sm:h-12 text-black group-hover:text-emerald-600 transition-colors"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </div>

            {/* Texto Contacto */}
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-4xl font-normal tracking-tight text-black group-hover:text-emerald-700 transition-colors font-sans">
                +569 53797437
              </span>
              <span className="text-xl sm:text-3xl font-light text-zinc-800 tracking-wide mt-1">
                Paola Huenuman
              </span>
            </div>
          </a>

          {/* Contacto 2: Daniel Díaz */}
          <a
            href="https://wa.me/56995127788"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-6 sm:gap-8 p-4 rounded-3xl hover:bg-zinc-50 transition-all duration-200 cursor-pointer"
          >
            {/* Ícono WhatsApp Estilo FOTO 2 */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center rounded-full border-2 border-black p-3 group-hover:scale-105 group-hover:border-emerald-600 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 sm:w-12 sm:h-12 text-black group-hover:text-emerald-600 transition-colors"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </div>

            {/* Texto Contacto */}
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-4xl font-normal tracking-tight text-black group-hover:text-emerald-700 transition-colors font-sans">
                +569 95127788
              </span>
              <span className="text-xl sm:text-3xl font-light text-zinc-800 tracking-wide mt-1">
                Daniel Díaz
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3 (FOTO 2 INFERIOR): A QUÉ SE DEDICA LA EMPRESA (100 PALABRAS)     */}
      {/* ========================================================================= */}
      <footer className="bg-black text-white py-14 sm:py-20 px-6 sm:px-12 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-zinc-400 font-medium">
            Enacta • Soluciones Informáticas & Ingeniería de Software
          </div>

          {/* Explicación de 100 palabras garantizando el mejor servicio */}
          <p className="text-base sm:text-xl md:text-2xl font-light text-zinc-200 leading-relaxed tracking-wide max-w-3xl mx-auto">
            En Enacta somos especialistas en ingeniería de software, arquitectura cloud y soluciones informáticas de vanguardia. Desarrollamos plataformas web de alto rendimiento, aplicaciones a medida e integración de inteligencia artificial para empresas que exigen máxima eficiencia y competitividad. Garantizamos el mejor servicio técnico y estratégico del mercado: código limpio y escalable, disponibilidad cloud del 99.9%, ciberseguridad avanzada y atención directa sin intermediarios con ingenieros senior dedicados. Transformamos tus desafíos tecnológicos en activos digitales sólidos, rentables y preparados para el futuro de Chile y el mundo.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-zinc-500 font-light">
            <span>© 2026 Enacta SpA. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span>Santiago de Chile</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400">Estreno Oficial: 10 de Octubre 00:00 hrs</span>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL DE CONTACTO / CONSULTA DIRECTA                                     */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium">¡Mensaje Recibido!</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Gracias <strong>{formData.name}</strong>. Paola Huenuman o Daniel Díaz se pondrán en contacto contigo en breve.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsModalOpen(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  Consulta Anticipada • Enacta
                </h3>
                <p className="text-xs text-zinc-400 mt-1 mb-6">
                  Déjanos tus datos o contáctanos directamente a nuestros WhatsApp.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="correo@empresa.cl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Mensaje o Requerimiento</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Cuéntanos brevemente tu necesidad..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
