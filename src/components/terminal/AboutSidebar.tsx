const AboutSidebar = () => {
  return (
    <aside className="w-full lg:w-72 bg-[#0d120d] border-b lg:border-b-0 lg:border-r border-term-border p-3 sm:p-4 flex flex-col gap-4 sm:gap-6 shrink-0 overflow-y-auto">
      {/* Avatar / User Profile */}
      <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 lg:pt-4 pb-4 lg:pb-6 border-b border-dashed border-term-border">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 lg:mb-4 shrink-0">
          <div className="absolute inset-0 border-2 border-ansi-green rounded-full animate-pulse opacity-50"></div>
          <div className="absolute inset-1 bg-term-panel rounded-full overflow-hidden flex items-center justify-center border border-term-border">
            <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl text-ansi-gray">person</span>
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 bg-ansi-green rounded-full border-2 border-term-bg"></div>
        </div>
        <div className="text-left lg:text-center">
          <h3 className="text-ansi-white font-bold text-base sm:text-lg tracking-widest">USER_ADMIN</h3>
          <p className="text-ansi-green text-xs tracking-wider opacity-80">Full-Stack Engineer</p>
        </div>
      </div>

      {/* Stats Module */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h4 className="text-ansi-gray text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-xs sm:text-sm">query_stats</span> System Stats
        </h4>

        {/* Exp Level */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-cyan">Exp.Level</span>
            <span className="text-ansi-white">Senior</span>
          </div>
          <div className="h-1 sm:h-1.5 w-full bg-term-border/30 rounded-full overflow-hidden">
            <div className="h-full bg-ansi-cyan w-[85%]"></div>
          </div>
        </div>

        {/* Coffee */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-magenta">Coffee</span>
            <span className="text-ansi-white">98%</span>
          </div>
          <div className="h-1 sm:h-1.5 w-full bg-term-border/30 rounded-full overflow-hidden">
            <div className="h-full bg-ansi-magenta w-[98%]"></div>
          </div>
        </div>

        {/* Bugs Fixed */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-yellow">Bugs Fixed</span>
            <span className="text-ansi-white">1,024+</span>
          </div>
          <div className="h-1 sm:h-1.5 w-full bg-term-border/30 rounded-full overflow-hidden">
            <div className="h-full bg-ansi-yellow w-[60%]"></div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 mt-2">
        <div className="bg-term-border/10 p-2 rounded border border-term-border">
          <p className="text-[9px] sm:text-[10px] text-ansi-gray uppercase">Status</p>
          <p className="text-[10px] sm:text-xs text-ansi-green font-bold">ONLINE</p>
        </div>
        <div className="bg-term-border/10 p-2 rounded border border-term-border">
          <p className="text-[9px] sm:text-[10px] text-ansi-gray uppercase">Uptime</p>
          <p className="text-[10px] sm:text-xs text-ansi-white">5Y 3M</p>
        </div>
        <div className="bg-term-border/10 p-2 rounded border border-term-border col-span-2">
          <p className="text-[9px] sm:text-[10px] text-ansi-gray uppercase">Location</p>
          <p className="text-[10px] sm:text-xs text-ansi-white truncate">127.0.0.1 (Remote)</p>
        </div>
      </div>

      {/* Footer of Sidebar */}
      <div className="mt-auto pt-3 sm:pt-4 border-t border-dashed border-term-border hidden lg:block">
        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-ansi-gray">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ansi-green rounded-full animate-pulse"></span>
          Listening on port 3000...
        </div>
      </div>
    </aside>
  );
};

export default AboutSidebar;
