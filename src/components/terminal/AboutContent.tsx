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
          {Array.from({ length: 35 }, (_, i) => (
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
              <span className="text-ansi-white font-bold">ABOUT_ME.init()</span>
            </div>
          </div>

          {/* Section: Introduction / Bio */}
          <div className="mb-8 sm:mb-10 pl-3 sm:pl-4 border-l-2 border-term-border hover:border-ansi-green transition-colors duration-300">
            <h2 className="text-base sm:text-xl font-bold text-ansi-white mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-ansi-magenta">function</span>
              <span className="text-ansi-yellow">introduction()</span>
              <span className="text-ansi-gray">{"{"}</span>
            </h2>
            <p className="text-ansi-white/70 mb-3 sm:mb-4 max-w-2xl text-xs sm:text-sm">
              <span className="text-ansi-gray">// Welcome to my digital workspace.</span>
              <br />
              I am a <span className="text-ansi-green font-bold">Full Stack Developer</span> with a backend-first mindset, currently pursuing a B.Tech in Computer Science & Engineering at <span className="text-ansi-cyan font-bold">VIT Vellore</span>.
            </p>
            <p className="text-ansi-white/70 mb-3 sm:mb-4 max-w-2xl text-xs sm:text-sm">
              I enjoy building real-world, production-grade systems — from <span className="text-ansi-cyan">AI-powered platforms</span> and <span className="text-ansi-cyan">scalable APIs</span> to data-driven applications and hyperlocal products. My primary strength lies in <span className="text-ansi-magenta font-bold">backend engineering</span>, <span className="text-ansi-magenta font-bold">system design</span>, and <span className="text-ansi-magenta font-bold">applied AI</span>, while I am actively working towards becoming highly proficient in UI and frontend craftsmanship as well.
            </p>
            <p className="text-ansi-white/70 max-w-2xl text-xs sm:text-sm">
              I prefer execution over overthinking — when I get an idea, I like to build fast, iterate quickly, and refine based on real usage. I adapt quickly to new environments, collaborate easily with diverse teams, and stay comfortable across both structured and fast-moving workflows.
            </p>
            <div className="text-ansi-gray mt-2">{"}"}</div>
          </div>

          {/* Section: Engineering Focus */}
          <div className="mb-8 sm:mb-10 pl-3 sm:pl-4 border-l-2 border-term-border hover:border-ansi-cyan transition-colors duration-300">
            <h2 className="text-base sm:text-xl font-bold text-ansi-white mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-ansi-magenta">const</span>
              <span className="text-ansi-yellow">engineeringFocus</span>
              <span className="text-ansi-gray">=</span>
            </h2>
            <p className="text-ansi-white/70 max-w-2xl text-xs sm:text-sm">
              My interests primarily lie in <span className="text-ansi-green">applied AI</span>, <span className="text-ansi-green">LLM-powered systems</span>, <span className="text-ansi-green">backend architecture</span>, and <span className="text-ansi-green">scalable data pipelines</span>. I focus on building systems that are practical, efficient, and designed to evolve beyond their first version.
            </p>
          </div>

          {/* Section: Personality Flags */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-ansi-gray text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">terminal</span> personality.flags
            </h2>
            <div className="bg-[#0a0f0a] border border-term-border p-3 sm:p-4 rounded">
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-ansi-green">✔</span>
                  <span className="text-ansi-white/80">Backend-first engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-ansi-green">✔</span>
                  <span className="text-ansi-white/80">Frontend growth-focused <span className="text-ansi-gray">(UI mastery in progress)</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-ansi-green">✔</span>
                  <span className="text-ansi-white/80">Applied AI {">"} theoretical AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-ansi-green">✔</span>
                  <span className="text-ansi-white/80">Builder mindset <span className="text-ansi-gray">(idea → execution → iteration)</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-ansi-green">✔</span>
                  <span className="text-ansi-white/80">Highly adaptable to new environments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-ansi-green">✔</span>
                  <span className="text-ansi-white/80">Comfortable working with diverse teams</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Languages */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-ansi-gray text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">translate</span> languages.list
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="bg-term-border/20 text-ansi-cyan px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm border border-term-border/30">English</span>
              <span className="bg-term-border/20 text-ansi-cyan px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm border border-term-border/30">Hindi</span>
              <span className="bg-term-border/20 text-ansi-cyan px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm border border-term-border/30 flex items-center gap-1">
                Bengali <span className="text-ansi-gray text-[10px] sm:text-xs">(Native)</span>
              </span>
              <span className="bg-term-border/20 text-ansi-yellow px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm border border-ansi-yellow/30 flex items-center gap-1">
                Japanese <span className="text-ansi-gray text-[10px] sm:text-xs">(Learning)</span>
              </span>
            </div>
          </div>

          {/* Section: Hobbies */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-ansi-gray text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">interests</span> HOBBIES_ARRAY[]
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-magenta text-xs sm:text-sm">palette</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Painting</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-cyan text-xs sm:text-sm">mic</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Singing</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-green text-xs sm:text-sm">headphones</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Music</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-yellow text-xs sm:text-sm">explore</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Exploring</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-red text-xs sm:text-sm">smart_display</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Anime</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-blue text-xs sm:text-sm">play_circle</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">YouTube</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-term-border/10 border border-term-border rounded hover:bg-term-border/20 transition-colors">
                <span className="material-symbols-outlined text-ansi-green text-xs sm:text-sm">code</span>
                <span className="text-ansi-white/70 text-xs sm:text-sm">Side Projects</span>
              </div>
            </div>
          </div>

          {/* Section: Personal Notes */}
          <div className="mb-8 sm:mb-10 pl-3 sm:pl-4 border-l-2 border-term-border hover:border-ansi-magenta transition-colors duration-300">
            <h2 className="text-base sm:text-xl font-bold text-ansi-white mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-ansi-gray">{"/*"}</span>
              <span className="text-ansi-yellow">personal_notes</span>
              <span className="text-ansi-gray">{"*/"}</span>
            </h2>
            <p className="text-ansi-white/70 mb-3 sm:mb-4 max-w-2xl text-xs sm:text-sm">
              Outside of engineering, I enjoy creative expression through painting and singing. I love traveling and exploring new places, and I often unwind by watching anime or discovering new content online.
            </p>
            <p className="text-ansi-white/70 max-w-2xl text-xs sm:text-sm">
              I'm a huge <span className="text-ansi-red font-bold">One Piece</span> fan — for me, it's one of the greatest stories across any form of media. I also deeply appreciate <span className="text-ansi-magenta font-bold">BTS</span>, both for their music and the messages they convey through their work.
            </p>
          </div>

          {/* Section: Closing / Vision */}
          <div className="mb-4 pl-3 sm:pl-4 border-l-2 border-ansi-green">
            <h2 className="text-base sm:text-xl font-bold text-ansi-white mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-ansi-magenta">return</span>
              <span className="text-ansi-yellow">vision</span>
              <span className="text-ansi-gray">;</span>
            </h2>
            <p className="text-ansi-green/90 max-w-2xl text-xs sm:text-sm font-medium">
              I aim to grow into an engineer who blends strong backend systems, thoughtful UI design, and applied AI to build products that are both powerful and enjoyable to use.
            </p>
          </div>

          {/* Terminal Cursor Bottom */}
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-dashed border-ansi-gray/30 text-ansi-gray text-xs sm:text-sm">
            <span className="text-ansi-green">sambit@portfolio</span>:<span className="text-ansi-cyan">~/about</span>$ <span className="cursor-blink">_</span>
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
