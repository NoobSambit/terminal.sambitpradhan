const PhilosophySection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">sambit-pradhan@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/philosophy</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">cat mindset.md</span>
      </div>

      <div className="bg-term-panel border border-term-border rounded-lg p-6 md:p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <span className="material-symbols-outlined text-[120px]">architecture</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-ansi-cyan mb-6 flex items-center gap-3 relative z-10">
          <span className="material-symbols-outlined">lightbulb</span>
          Engineering Philosophy
        </h2>

        <div className="relative z-10 max-w-3xl">
          <p className="text-ansi-white/80 text-lg leading-relaxed mb-4">
            I approach development with a <span className="text-ansi-yellow font-medium">production mindset</span> — 
            prioritizing scalability, clarity, and long-term maintainability.
          </p>
          <p className="text-ansi-white/70 text-lg leading-relaxed">
            I believe good systems are not just functional, but{" "}
            <span className="text-ansi-cyan">observable</span>,{" "}
            <span className="text-ansi-green">extensible</span>, and{" "}
            <span className="text-ansi-magenta">resilient to growth</span>.
          </p>
        </div>

        {/* Terminal-style decorative elements */}
        <div className="mt-8 pt-6 border-t border-term-border">
          <div className="flex flex-wrap gap-4 text-xs font-mono text-ansi-gray">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ansi-green rounded-full animate-pulse"></span>
              clean_abstractions: true
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ansi-cyan rounded-full animate-pulse"></span>
              measurable_performance: enabled
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ansi-yellow rounded-full animate-pulse"></span>
              growth_ready: always
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
