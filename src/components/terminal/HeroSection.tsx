const HeroSection = () => {
  return (
    <section className="animate-fade-in relative group">
      <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-ansi-gray/20"></div>
      
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">user@portfolio</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">./init_system.sh</span>
        <span className="text-ansi-gray">--verbose</span>
      </div>

      {/* Welcome message */}
      <div className="pl-4 border-l-2 border-ansi-cyan/30 ml-1 py-2">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          <span className="text-ansi-magenta">&lt;System&gt;</span> Initialized... <br />
          <span className="text-ansi-cyan">Welcome to User's Portfolio v2.0</span>
        </h1>

        {/* Loading logs */}
        <div className="font-mono text-sm md:text-base space-y-1">
          <div className="flex gap-2">
            <span className="text-ansi-gray">[10:04:23]</span>
            <span className="text-ansi-blue">INFO</span>
            <span>Loading modules: UX_Design...</span>
            <span className="text-ansi-green font-bold">DONE</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ansi-gray">[10:04:24]</span>
            <span className="text-ansi-blue">INFO</span>
            <span>Loading modules: Frontend_Dev...</span>
            <span className="text-ansi-green font-bold">DONE</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ansi-gray">[10:04:25]</span>
            <span className="text-ansi-blue">INFO</span>
            <span>Loading modules: Accessibility...</span>
            <span className="text-ansi-green font-bold">DONE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
