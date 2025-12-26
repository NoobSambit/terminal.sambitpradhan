import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setCpuUsage(Math.floor(Math.random() * 30) + 30);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-term-panel border-t border-term-border text-xs font-mono flex items-center justify-between px-2 py-1 select-none animate-slide-in-bottom">
      <div className="flex items-center gap-4">
        <span className="bg-ansi-blue text-black px-2 font-bold hover:bg-ansi-cyan transition-colors cursor-default">NORMAL</span>
        <span className="text-ansi-gray flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ansi-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ansi-green"></span>
          </span>
          master*
        </span>
        <span className="text-ansi-white hover:text-ansi-cyan transition-colors cursor-default">portfolio.tsx</span>
      </div>
      <div className="flex items-center gap-4 text-ansi-gray">
        <span className="hidden sm:inline hover:text-ansi-white transition-colors">utf-8</span>
        <span className="hidden sm:inline hover:text-ansi-white transition-colors">javascript</span>
        <span className="hidden md:flex items-center gap-1">
          <span className="text-ansi-yellow">CPU:</span>
          <span className={cpuUsage > 60 ? 'text-ansi-red' : 'text-ansi-green'}>{cpuUsage}%</span>
        </span>
        <span className="hidden md:inline text-ansi-cyan">{time.toLocaleTimeString()}</span>
        <span className="bg-ansi-gray text-white px-2 hover:bg-ansi-white hover:text-black transition-colors cursor-default">Ln 42, Col 12</span>
      </div>
    </div>
  );
};

export default StatusBar;
