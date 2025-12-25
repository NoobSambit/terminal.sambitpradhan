const SkillsSection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">user@portfolio</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/stats</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">node skills.js</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend Stack */}
        <div className="bg-term-panel border border-term-border p-5 rounded relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <span className="material-symbols-outlined text-[64px]">javascript</span>
          </div>
          <h4 className="text-ansi-gray text-xs font-bold mb-4 uppercase tracking-wider border-b border-term-border pb-2">
            Frontend Stack
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ansi-cyan">React_NextJS</span>
                <span className="text-ansi-magenta">95%</span>
              </div>
              <div className="h-1.5 w-full bg-term-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ansi-cyan to-ansi-blue w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ansi-yellow">TypeScript</span>
                <span className="text-ansi-magenta">90%</span>
              </div>
              <div className="h-1.5 w-full bg-term-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ansi-yellow to-orange-500 w-[90%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ansi-green">TailwindCSS</span>
                <span className="text-ansi-magenta">100%</span>
              </div>
              <div className="h-1.5 w-full bg-term-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ansi-green to-emerald-400 w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend & Tools */}
        <div className="bg-term-panel border border-term-border p-5 rounded relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <span className="material-symbols-outlined text-[64px]">dns</span>
          </div>
          <h4 className="text-ansi-gray text-xs font-bold mb-4 uppercase tracking-wider border-b border-term-border pb-2">
            Backend & Tools
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ansi-red">Node.js</span>
                <span className="text-ansi-magenta">80%</span>
              </div>
              <div className="h-1.5 w-full bg-term-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ansi-red to-rose-400 w-[80%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Docker / DevOps</span>
                <span className="text-ansi-magenta">75%</span>
              </div>
              <div className="h-1.5 w-full bg-term-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-white to-gray-400 w-[75%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ansi-magenta">Figma / UI</span>
                <span className="text-ansi-magenta">85%</span>
              </div>
              <div className="h-1.5 w-full bg-term-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ansi-magenta to-purple-400 w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
