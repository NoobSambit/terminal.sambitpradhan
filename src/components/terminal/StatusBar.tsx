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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-term-panel border-t border-term-border text-[10px] sm:text-xs font-mono flex items-center justify-between px-2 sm:px-3 py-1 sm:py-1.5 select-none animate-slide-in-bottom">
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="bg-ansi-blue text-black px-1.5 sm:px-2 font-bold hover:bg-ansi-cyan transition-colors cursor-default text-[9px] sm:text-xs">NORMAL</span>
        <span className="text-ansi-gray flex items-center gap-1">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ansi-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-ansi-green"></span>
          </span>
          <span className="hidden xs:inline">master*</span>
        </span>
        <span className="text-ansi-white hover:text-ansi-cyan transition-colors cursor-default hidden sm:inline">portfolio.tsx</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 text-ansi-gray">
        <span className="hidden lg:inline hover:text-ansi-white transition-colors">utf-8</span>
        <span className="hidden md:inline hover:text-ansi-white transition-colors">javascript</span>
        <span className="hidden sm:flex items-center gap-1">
          <span className="text-ansi-yellow">CPU:</span>
          <span className={cpuUsage > 60 ? 'text-ansi-red' : 'text-ansi-green'}>{cpuUsage}%</span>
        </span>
        <span className="hidden sm:inline text-ansi-cyan">{time.toLocaleTimeString()}</span>
        <span className="bg-ansi-gray text-white px-1.5 sm:px-2 hover:bg-ansi-white hover:text-black transition-colors cursor-default text-[9px] sm:text-xs">Ln 42</span>
      </div>
    </div>
  );
};

export default StatusBar;
