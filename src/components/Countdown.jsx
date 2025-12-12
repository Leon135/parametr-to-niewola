import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-05-11T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      dni: Math.floor(difference / (1000 * 60 * 60 * 24)),
      godz: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      min: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      sek: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft)
    return (
      <div className="text-red-500 font-mono text-2xl">
        KONIEC. CZAS NA REWOLUCJĘ. WIELKI BRAT PATRZY.
      </div>
    );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8 font-mono">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col p-4 border border-zinc-700 bg-zinc-900 rounded-sm"
        >
          <span className="text-4xl md:text-6xl font-bold text-white tabular-nums">
            {value < 10 ? `0${value}` : value}
          </span>
          <span className="text-sm text-zinc-500 uppercase tracking-widest mt-2">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
