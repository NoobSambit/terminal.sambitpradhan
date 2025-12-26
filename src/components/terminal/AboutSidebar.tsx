import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSidebar = () => {
  return (
    <aside className="w-full lg:w-72 bg-[#0d120d] border-b lg:border-b-0 lg:border-r border-term-border p-3 sm:p-4 flex flex-col gap-4 sm:gap-5 shrink-0 overflow-y-auto">
      {/* Avatar / User Profile */}
      <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 lg:pt-4 pb-4 lg:pb-6 border-b border-dashed border-term-border">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 lg:mb-4 shrink-0">
          <div className="absolute inset-0 border-2 border-ansi-green rounded-full animate-pulse opacity-50"></div>
          <div className="absolute inset-1 bg-term-panel rounded-full overflow-hidden flex items-center justify-center border border-term-border">
            <img src={profilePhoto} alt="Sambit" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 bg-ansi-green rounded-full border-2 border-term-bg"></div>
        </div>
        <div className="text-left lg:text-center">
          <h3 className="text-ansi-white font-bold text-base sm:text-lg tracking-widest">SAMBIT</h3>
          <p className="text-ansi-green text-xs tracking-wider opacity-80">Full-Stack Developer</p>
        </div>
      </div>

      {/* System Stats */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h4 className="text-ansi-gray text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-xs sm:text-sm">monitoring</span> System Stats
        </h4>

        {/* Sanity */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-magenta">Sanity</span>
            <span className="text-ansi-red">12% (Critical)</span>
          </div>
          <div className="h-1.5 sm:h-2 w-full bg-term-border/30 rounded-sm overflow-hidden">
            <div className="h-full bg-ansi-magenta w-[12%]"></div>
          </div>
        </div>

        {/* Depression */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-yellow">Depression</span>
            <span className="text-ansi-yellow">Over 9000</span>
          </div>
          <div className="h-1.5 sm:h-2 w-full bg-term-border/30 rounded-sm overflow-hidden">
            <div className="h-full bg-ansi-yellow w-full"></div>
          </div>
        </div>

        {/* Works? */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-green">Works?</span>
            <span className="text-ansi-green">On My Machine</span>
          </div>
          <div className="h-1.5 sm:h-2 w-full bg-term-border/30 rounded-sm overflow-hidden">
            <div className="h-full bg-ansi-green w-full"></div>
          </div>
        </div>

        {/* Gym? */}
        <div className="group">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-ansi-cyan">Gym?</span>
            <span className="text-ansi-cyan">Chills</span>
          </div>
          <div className="h-1.5 sm:h-2 w-full bg-term-border/30 rounded-sm overflow-hidden">
            <div className="h-full bg-ansi-cyan w-[5%]"></div>
          </div>
        </div>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-term-border/10 p-2 rounded border border-term-border">
          <p className="text-[9px] sm:text-[10px] text-ansi-gray uppercase">Motivation</p>
          <p className="text-[10px] sm:text-xs text-ansi-cyan font-bold animate-pulse">BUFFERING...</p>
        </div>
        <div className="bg-term-border/10 p-2 rounded border border-term-border">
          <p className="text-[9px] sm:text-[10px] text-ansi-gray uppercase">Sleep</p>
          <p className="text-[10px] sm:text-xs text-ansi-red font-bold">404 ERROR</p>
        </div>
        <div className="bg-term-border/10 p-2 rounded border border-term-border col-span-2">
          <p className="text-[9px] sm:text-[10px] text-ansi-gray uppercase">Current Mission</p>
          <p className="text-[10px] sm:text-xs text-ansi-white">Centering a &lt;div&gt;</p>
        </div>
      </div>

      {/* System Specs */}
      <div className="flex flex-col gap-2 sm:gap-3 border-t border-dashed border-term-border pt-3 sm:pt-4">
        <h4 className="text-ansi-gray text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-xs sm:text-sm">memory</span> System Specs
        </h4>

        <div className="space-y-1.5 text-[10px] sm:text-xs font-mono">
          <div className="flex justify-between">
            <span className="text-ansi-gray">OS:</span>
            <span className="text-ansi-cyan">Garuda Linux</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ansi-gray">Shell:</span>
            <span className="text-ansi-white">zsh 5.8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ansi-gray">Role:</span>
            <span className="text-ansi-magenta">Full Stack Dev</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ansi-gray">Loc:</span>
            <span className="text-ansi-white">India / Remote</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ansi-gray">Uptime:</span>
            <span className="text-ansi-green">3+ Years Exp</span>
          </div>
        </div>

        {/* Hardware Specs */}
        <div className="mt-2 space-y-1.5 text-[9px] sm:text-[10px] font-mono border-t border-term-border/30 pt-2">
          <div className="flex gap-2">
            <span className="text-ansi-cyan shrink-0">CPU:</span>
            <span className="text-ansi-white truncate">i7-13700HX @ 5.00 GHz</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ansi-green shrink-0">GPU:</span>
            <span className="text-ansi-white truncate">RTX 4050 Max-Q</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ansi-magenta shrink-0">Display:</span>
            <span className="text-ansi-white truncate">1920x1080 @ 165Hz</span>
          </div>
        </div>

        {/* Energy Level */}
        <div className="mt-2">
          <div className="flex justify-between text-[9px] sm:text-[10px] mb-1">
            <span className="text-ansi-gray uppercase">Energy Level</span>
          </div>
          <div className="h-2 sm:h-2.5 w-full bg-term-border/30 rounded-sm overflow-hidden relative">
            <div className="h-full bg-ansi-red w-[15%]"></div>
          </div>
          <div className="flex justify-between text-[8px] sm:text-[9px] mt-0.5 text-ansi-gray">
            <span>MIN</span>
            <span className="text-ansi-red">15%</span>
            <span>MAX</span>
          </div>
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
