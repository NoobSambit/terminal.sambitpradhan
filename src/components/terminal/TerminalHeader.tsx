const TerminalHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-term-border bg-term-bg/95 backdrop-blur-sm shadow-md">
      {/* Title bar with window controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-term-panel border-b border-term-border">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="flex size-3 items-center justify-center rounded-full bg-ansi-red hover:brightness-110 cursor-pointer"></div>
            <div className="flex size-3 items-center justify-center rounded-full bg-ansi-yellow hover:brightness-110 cursor-pointer"></div>
            <div className="flex size-3 items-center justify-center rounded-full bg-ansi-green hover:brightness-110 cursor-pointer"></div>
          </div>
          <div className="flex items-center gap-2 text-xs text-ansi-gray font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            zsh — 120x40
          </div>
        </div>
        <div className="text-xs text-ansi-gray hidden sm:block">
          Last login: <span className="text-ansi-blue">Today</span> on ttys001
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-end px-2 pt-2 gap-1 bg-term-bg border-b border-term-border overflow-x-auto">
        <div className="bg-term-panel border-t border-l border-r border-term-border px-4 py-1.5 rounded-t text-sm flex items-center gap-2 text-ansi-cyan font-bold min-w-fit">
          <span className="material-symbols-outlined text-[14px]">code</span>
          portfolio.tsx
          <span className="ml-2 text-xs opacity-50">x</span>
        </div>
        <div className="bg-term-bg hover:bg-term-panel/50 border-t border-l border-r border-transparent hover:border-term-border px-4 py-1.5 rounded-t text-sm flex items-center gap-2 text-ansi-gray min-w-fit cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-[14px]">data_object</span>
          data.json
        </div>
        <div className="bg-term-bg hover:bg-term-panel/50 border-t border-l border-r border-transparent hover:border-term-border px-4 py-1.5 rounded-t text-sm flex items-center gap-2 text-ansi-gray min-w-fit cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-[14px]">style</span>
          style.css
        </div>
      </div>
    </header>
  );
};

export default TerminalHeader;
