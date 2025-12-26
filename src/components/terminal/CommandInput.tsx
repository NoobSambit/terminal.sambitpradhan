const CommandInput = () => {
  return (
    <div className="mt-auto border-t border-term-border pt-4 sm:pt-6 pb-8 sm:pb-12">
      <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg font-mono overflow-x-auto">
        <span className="text-ansi-green font-bold">➜</span>
        <span className="text-ansi-cyan font-bold whitespace-nowrap">guest@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-ansi-blue font-bold">~</span>
        <span className="text-white">$</span>
        <div className="relative flex-1 min-w-0">
          <input
            autoComplete="off"
            className="w-full bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-mono caret-transparent cursor-text text-sm sm:text-base"
            placeholder=""
            spellCheck="false"
            type="text"
          />
          <span className="absolute left-0 top-0 h-4 sm:h-6 w-2 sm:w-3 bg-ansi-white/80 cursor-blink pointer-events-none"></span>
        </div>
      </div>
      <p className="text-[9px] sm:text-xs text-ansi-gray mt-1.5 sm:mt-2 font-mono">
        <span className="text-ansi-yellow">TIP:</span> Type{" "}
        <span className="text-ansi-white">'help'</span> for commands
      </p>
    </div>
  );
};

export default CommandInput;
