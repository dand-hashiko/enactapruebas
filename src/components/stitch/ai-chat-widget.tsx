"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_SUGGESTIONS = [
  "¿Cómo funciona el ERP Offline si se corta internet?",
  "¿Instalan cableado estructurado en Santiago o Temuco?",
  "¿Qué tiempos de carga logran en desarrollo web?",
  "¿Cómo agendo un Google Meet de 45 min?",
];

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-1",
      role: "assistant",
      content:
        "Hola, soy el **Asistente de Ingeniería de ENACTA**.\n\n¿En qué podemos colaborar con tu empresa? Cuéntame sobre tus requerimientos de desarrollo de software, puntos de venta ERP offline o infraestructura de redes en terreno.",
      timestamp: "Ahora",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Error en el servidor");
      const data = await res.json();

      const assistantMsg: Message = {
        id: `ast-${Date.now()}`,
        role: "assistant",
        content: data.reply || "He recibido tu consulta. ¿Deseas agendar un Meet técnico de 45 minutos?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content:
          "Disculpa, hubo una intermitencia de conexión momentánea. Puedes escribirnos directamente al WhatsApp de Daniel Díaz [+56 9 9512 7788](https://wa.me/56995127788) o agendar en la sección de Google Meet más abajo.",
        timestamp: "Ahora",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón Flotante Launcher en Esquina Inferior Derecha */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir asistente de ingeniería"
            className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#0a0b10] hover:bg-[#12131a] text-white border border-primary/40 rounded-full shadow-[0_0_25px_rgba(0,229,163,0.3)] hover:shadow-[0_0_35px_rgba(0,229,163,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer select-none"
          >
            {/* Ping indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>

            {/* Icon */}
            <span className="material-symbols-outlined text-primary text-[20px]">
              smart_toy
            </span>

            {/* Label */}
            <span className="typo-otros1 text-xs font-bold text-white tracking-wider uppercase font-mono">
              AI Engineer
            </span>
          </button>
        )}
      </div>

      {/* Ventana de Chat Flotante / Terminal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#08090d]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(0,229,163,0.15)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header Superior con Telemetría */}
          <div className="p-4 bg-black/90 border-b border-white/[0.08] flex items-center justify-between select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  terminal
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="typo-titulos text-xs tracking-wider text-white font-bold">
                    ENACTA® // AI ASSISTANT
                  </span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">
                  Ingeniería en Terreno &amp; Cloud
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Cerrar chat"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.15] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/[0.06]"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-black font-medium rounded-tr-none shadow-md"
                      : "bg-[#101218] text-zinc-200 border border-white/[0.08] rounded-tl-none shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
                <span className="text-[9px] text-zinc-500 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-[#101218] border border-white/[0.08] p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  <span className="text-[11px] text-zinc-400 font-mono ml-1.5">
                    Consultando arquitectura...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sugerencias Rápidas (Chips de 1 clic) */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none select-none">
              {QUICK_SUGGESTIONS.map((sug, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(sug)}
                  className="flex-shrink-0 text-[10px] px-2.5 py-1 bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] rounded-full transition-colors cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Atajos Rápidos de Escalamiento Humano */}
          <div className="px-4 py-1.5 bg-black/60 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-400 font-mono">
            <a
              href="#agendamiento"
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[13px] text-primary">
                calendar_month
              </span>
              <span>Agendar Meet 45 min</span>
            </a>

            <a
              href="https://wa.me/56995127788"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[13px] text-primary">
                chat
              </span>
              <span>WhatsApp Daniel</span>
            </a>
          </div>

          {/* Input Form */}
          <div className="p-3 bg-black/90 border-t border-white/[0.08] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Escribe tu consulta técnica..."
              className="flex-1 bg-[#101218] border border-white/[0.08] focus:border-primary/50 text-white placeholder:text-zinc-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl focus:outline-none transition-colors"
            />

            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              aria-label="Enviar mensaje"
              className="w-10 h-10 rounded-xl bg-primary text-black flex items-center justify-center hover:bg-primary-fixed transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-[0_0_15px_rgba(0,229,163,0.3)]"
            >
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
