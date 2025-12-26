const AboutContent = () => {
  return (
    <section className="flex-1 flex flex-col min-w-0 bg-[#111611] relative">
      {/* Breadcrumbs / Path */}
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 border-b border-term-border bg-[#0d120d] overflow-x-auto">
        <span className="text-ansi-gray font-mono text-xs sm:text-sm whitespace-nowrap">root</span>
        <span className="text-ansi-gray/60">/</span>
        <a className="text-ansi-green hover:underline font-mono text-xs sm:text-sm cursor-pointer whitespace-nowrap">portfolio</a>
        <span className="text-ansi-gray/60">/</span>
        <span className="text-ansi-white font-bold font-mono text-xs sm:text-sm whitespace-nowrap">about_me</span>
      </div>

      {/* Content Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 font-mono text-xs sm:text-sm lg:text-base leading-relaxed relative">
        {/* Line Numbers - Hidden on mobile */}
        <div
          aria-hidden="true"
          className="absolute left-2 top-10 bottom-0 w-8 text-right text-ansi-gray/30 select-none text-xs hidden lg:block leading-relaxed"
        >
          {Array.from({ length: 21 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div className="lg:pl-8 max-w-4xl mx-auto">
          {/* Header Command */}
          <div className="mb-6 sm:mb-8">
            <p className="text-ansi-gray mb-2 text-xs sm:text-sm">Last login: Today at 09:41:00 on ttys001</p>
            <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg md:text-xl flex-wrap">
              <span className="text-ansi-green">➜</span>
              <span className="text-ansi-cyan">~</span>
              <span className="text-ansi-white font-bold">./init_bio.sh</span>
              <span className="text-ansi-gray hidden sm:inline">--verbose</span>
            </div>
          </div>

          {/* Section: Introduction */}
          <div className="mb-8 sm:mb-10 pl-3 sm:pl-4 border-l-2 border-term-border hover:border-ansi-green transition-colors duration-300">
            <h2 className="text-base sm:text-xl font-bold text-ansi-white mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-ansi-magenta">function</span>
              <span className="text-ansi-yellow">introduction()</span>
              <span className="text-ansi-gray">{"{"}</span>
            </h2>
            <p className="text-ansi-white/70 mb-3 sm:mb-4 max-w-2xl text-xs sm:text-sm">
              <span className="text-ansi-gray">// Welcome to my digital workspace.</span>
              <br />
              I am a passionate <span className="text-ansi-green font-bold">Full-Stack Developer</span> specializing in building exceptional digital experiences. Currently, I'm focused on accessible, human-centered products. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-ansi-white/70 max-w-2xl text-xs sm:text-sm">
              When I'm not pushing pixels or writing logic, you can find me exploring the latest in{" "}
              <span className="text-ansi-cyan">AI technology</span> or contributing to open-source ecosystems.
            </p>
            <div className="text-ansi-gray mt-2">{"}"}</div>
          </div>

          {/* Section: Stack / Skills */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-ansi-gray text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">memory</span> Tech_Stack.json
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-[#0a0f0a] border border-term-border p-3 sm:p-4 rounded hover:border-ansi-green/50 transition-colors group">
                <h3 className="text-ansi-green font-bold mb-2 text-xs sm:text-sm group-hover:translate-x-1 transition-transform">Frontend</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="bg-term-border/20 text-ansi-cyan px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">React.js</span>
                  <span className="bg-term-border/20 text-ansi-cyan px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">Tailwind</span>
                  <span className="bg-term-border/20 text-ansi-cyan px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">TypeScript</span>
                  <span className="bg-term-border/20 text-ansi-cyan px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">Next.js</span>
                </div>
              </div>
              <div className="bg-[#0a0f0a] border border-term-border p-3 sm:p-4 rounded hover:border-ansi-green/50 transition-colors group">
                <h3 className="text-ansi-green font-bold mb-2 text-xs sm:text-sm group-hover:translate-x-1 transition-transform">Backend</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="bg-term-border/20 text-ansi-magenta px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">Node.js</span>
                  <span className="bg-term-border/20 text-ansi-magenta px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">Python</span>
                  <span className="bg-term-border/20 text-ansi-magenta px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">PostgreSQL</span>
                  <span className="bg-term-border/20 text-ansi-magenta px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs border border-term-border/30">Redis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="mb-8 sm:mb-10 pl-3 sm:pl-4 border-l-2 border-term-border hover:border-ansi-yellow transition-colors duration-300">
            <h2 className="text-base sm:text-xl font-bold text-ansi-white mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-ansi-magenta">class</span>
              <span className="text-ansi-yellow">Education</span>
              <span className="text-ansi-gray hidden xs:inline">extends</span>
              <span className="text-ansi-cyan hidden xs:inline">History</span>
            </h2>
            <div className="bg-[#0d120d] p-3 sm:p-4 rounded border border-term-border relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10 text-ansi-white hidden sm:block">
                <span className="material-symbols-outlined text-4xl sm:text-6xl">school</span>
              </div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                  <h3 className="text-ansi-white font-bold text-sm sm:text-lg">B.S. Computer Science</h3>
                  <span className="text-ansi-green text-[10px] sm:text-xs border border-ansi-green/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-ansi-green/10 w-fit">2018 - 2022</span>
                </div>
                <p className="text-ansi-cyan text-xs sm:text-sm mb-2">University of Technology</p>
                <ul className="list-disc list-inside text-ansi-gray text-xs sm:text-sm space-y-1 ml-1 sm:ml-2">
                  <li>Major in Software Engineering</li>
                  <li>Minor in Data Science</li>
                  <li>Dean's List 2020-2022</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Hobbies */}
          <div className="mb-4">
            <h2 className="text-ansi-gray text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">stadia_controller</span> Hobbies_Array[]
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-yellow text-xs sm:text-sm">keyboard</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Mech Keyboards</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-cyan text-xs sm:text-sm">photo_camera</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Photography</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-magenta text-xs sm:text-sm">hiking</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Hiking</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-green text-xs sm:text-sm">videogame_asset</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Retro Gaming</span>
              </div>
            </div>
          </div>

          {/* Terminal Cursor Bottom */}
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-dashed border-ansi-gray/30 text-ansi-gray text-xs sm:text-sm">
            <span className="text-ansi-green">user@portfolio</span>:<span className="text-ansi-cyan">~/about</span>$ <span className="cursor-blink">_</span>
          </div>
          <div className="h-16 sm:h-20"></div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="bg-[#0d120d] border-t border-term-border px-2 sm:px-4 py-1 sm:py-1.5 flex justify-between items-center text-[9px] sm:text-[10px] md:text-xs text-ansi-gray font-mono select-none">
        <div className="flex gap-2 sm:gap-4">
          <span className="flex items-center gap-1 hover:text-ansi-white cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-[10px] sm:text-xs">account_tree</span> master*
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <span className="material-symbols-outlined text-[10px] sm:text-xs">check_circle</span> 0 errors
          </span>
          <span className="hidden md:flex items-center gap-1">
            <span className="material-symbols-outlined text-[10px] sm:text-xs">warning</span> 0 warnings
          </span>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <span className="hidden sm:inline">Ln 42, Col 12</span>
          <span className="hidden md:inline">UTF-8</span>
          <span className="text-ansi-green font-bold">NORMAL</span>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
