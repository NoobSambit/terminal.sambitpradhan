const PhilosophySection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm mb-3 sm:mb-4 font-bold overflow-x-auto">
        <span className="text-ansi-green whitespace-nowrap">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/philosophy</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow whitespace-nowrap">cat mindset.md</span>
      </div>

      <div className="bg-term-panel border border-term-border rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-5">
          <span className="material-symbols-outlined text-[60px] sm:text-[120px]">architecture</span>
        </div>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-ansi-cyan mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 relative z-10">
          <span className="material-symbols-outlined text-lg sm:text-2xl">lightbulb</span>
          Engineering Philosophy
        </h2>

        <div className="relative z-10 max-w-3xl">
          <p className="text-ansi-white/80 text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4">
            I approach development with a <span className="text-ansi-yellow font-medium">production mindset</span> — 
            prioritizing scalability, clarity, and long-term maintainability.
          </p>
          <p className="text-ansi-white/70 text-sm sm:text-lg leading-relaxed">
            I believe good systems are not just functional, but{" "}
            <span className="text-ansi-cyan">observable</span>,{" "}
            <span className="text-ansi-green">extensible</span>, and{" "}
            <span className="text-ansi-magenta">resilient to growth</span>.
          </p>
        </div>

        {/* Terminal-style decorative elements */}
        <div className="mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-term-border">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-[9px] sm:text-xs font-mono text-ansi-gray">
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-ansi-green rounded-full animate-pulse"></span>
              clean_abstractions
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-ansi-cyan rounded-full animate-pulse"></span>
              measurable_perf
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-ansi-yellow rounded-full animate-pulse"></span>
              growth_ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
