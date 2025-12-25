const CommandInput = () => {
  return (
    <div className="mt-auto border-t border-term-border pt-6 pb-12">
      <div className="flex items-center gap-2 text-lg font-mono">
        <span className="text-ansi-green font-bold">➜</span>
        <span className="text-ansi-cyan font-bold">guest@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-ansi-blue font-bold">~</span>
        <span className="text-white">$</span>
        <div className="relative flex-1">
          <input
            autoComplete="off"
            className="w-full bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-mono caret-transparent cursor-text"
            placeholder=""
            spellCheck="false"
            type="text"
          />
          <span className="absolute left-0 top-0 h-6 w-3 bg-ansi-white/80 cursor-blink pointer-events-none"></span>
        </div>
      </div>
      <p className="text-xs text-ansi-gray mt-2 font-mono">
        <span className="text-ansi-yellow">TIP:</span> Use the mouse to navigate or type{" "}
        <span className="text-ansi-white">'help'</span> for list of commands.
      </p>
    </div>
  );
};

export default CommandInput;
