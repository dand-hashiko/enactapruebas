"use client";

import * as React from "react";
import { Clock } from "lucide-react";

export function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 7,
    hours: 3,
    minutes: 4,
    seconds: 59,
  });

  React.useEffect(() => {
    // Set target date 7 days, 3 hours ahead
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(targetDate.getHours() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 dark:bg-black/90 text-white border border-slate-700/60 shadow-lg shadow-black/20 backdrop-blur-md mb-6">
      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        <span className="hidden sm:inline">Lanzamiento Oficial:</span>
      </div>
      <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-100">
        <div className="flex flex-col items-center">
          <span>{formatNum(timeLeft.days)}</span>
          <span className="text-[9px] font-sans text-slate-400 -mt-0.5">días</span>
        </div>
        <span className="text-slate-500 font-sans -mt-2">:</span>
        <div className="flex flex-col items-center">
          <span>{formatNum(timeLeft.hours)}</span>
          <span className="text-[9px] font-sans text-slate-400 -mt-0.5">hrs</span>
        </div>
        <span className="text-slate-500 font-sans -mt-2">:</span>
        <div className="flex flex-col items-center">
          <span>{formatNum(timeLeft.minutes)}</span>
          <span className="text-[9px] font-sans text-slate-400 -mt-0.5">min</span>
        </div>
        <span className="text-slate-500 font-sans -mt-2">:</span>
        <div className="flex flex-col items-center">
          <span className="text-indigo-400">{formatNum(timeLeft.seconds)}</span>
          <span className="text-[9px] font-sans text-slate-400 -mt-0.5">seg</span>
        </div>
      </div>
      <span className="text-[11px] text-slate-400 hidden md:inline border-l border-slate-700 pl-3">
        para el estreno
      </span>
    </div>
  );
}
