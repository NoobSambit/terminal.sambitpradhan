const StatusBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-term-panel border-t border-term-border text-xs font-mono flex items-center justify-between px-2 py-1 select-none">
      <div className="flex items-center gap-4">
        <span className="bg-ansi-blue text-black px-2 font-bold">NORMAL</span>
        <span className="text-ansi-gray">master*</span>
        <span className="text-ansi-white">portfolio.tsx</span>
      </div>
      <div className="flex items-center gap-4 text-ansi-gray">
        <span className="hidden sm:inline">utf-8</span>
        <span className="hidden sm:inline">javascript</span>
        <span>100%</span>
        <span className="bg-ansi-gray text-white px-2">Ln 42, Col 12</span>
      </div>
    </div>
  );
};

export default StatusBar;
