const ProjectsSection = () => {
  return (
    <section id="projects">
      {/* Command prompt */}
      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm mb-4 sm:mb-6 font-bold overflow-x-auto">
        <span className="text-ansi-green whitespace-nowrap">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/projects</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow whitespace-nowrap">ls -la --featured</span>
      </div>

      {/* Section Title */}
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-ansi-cyan mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <span className="material-symbols-outlined text-lg sm:text-2xl">rocket_launch</span>
        Featured Projects
      </h2>

      <div className="flex flex-col gap-6 sm:gap-10">
        {/* Project 1: ARMYVERSE */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-magenta/50 hover:shadow-neon-pink">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between font-mono text-[9px] sm:text-xs">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-ansi-magenta font-bold hidden sm:inline">drwxr-xr-x</span>
              <span className="text-ansi-gray hidden xs:inline">24.5M</span>
              <span className="text-ansi-magenta">sambit</span>
              <span className="text-white">ARMYVERSE</span>
            </div>
            <div className="text-ansi-gray">
              <span className="text-ansi-yellow">PRJ-001</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-ansi-magenta transition-colors">
                  ARMYVERSE
                </h3>
                <p className="text-ansi-cyan text-[10px] sm:text-sm mb-2 sm:mb-3 font-medium">
                  AI Analytics & Fan Platform
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-xs">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-1.5 sm:px-2 py-0.5 rounded">Next.js</span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-1.5 sm:px-2 py-0.5 rounded">TS</span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-1.5 sm:px-2 py-0.5 rounded">Node</span>
                  <span className="bg-ansi-cyan/10 text-ansi-cyan border border-ansi-cyan/30 px-1.5 sm:px-2 py-0.5 rounded">MongoDB</span>
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-1.5 sm:px-2 py-0.5 rounded">Gemini</span>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-ansi-magenta/10 hover:bg-ansi-magenta hover:text-black border border-ansi-magenta/50 text-ansi-magenta font-bold text-[10px] sm:text-sm transition-all flex items-center gap-1 sm:gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">play_arrow</span>
                    DEMO
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-[10px] sm:text-sm transition-all flex items-center gap-1 sm:gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">code</span>
                    CODE
                  </button>
                </a>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-4 sm:mb-8 text-xs sm:text-lg font-light max-w-4xl border-l-2 sm:border-l-4 border-ansi-magenta/30 pl-3 sm:pl-4 py-1">
              Large-scale fan engagement platform with AI playlist generation, streaming analytics, and community features.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-3 sm:p-5">
              <div className="text-[9px] sm:text-xs font-bold text-ansi-gray mb-2 sm:mb-3 tracking-widest uppercase flex items-center gap-1 sm:gap-2">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">settings_suggest</span>
                Highlights
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-4 sm:gap-x-8 text-[10px] sm:text-sm text-ansi-white/90">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>AI playlists (mood, era, bias)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Spotify & YouTube analytics</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Secure auth & scalable API</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Production Next.js architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2: AI Document Builder */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-cyan/50 hover:shadow-neon-blue">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between font-mono text-[9px] sm:text-xs">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-ansi-cyan font-bold hidden sm:inline">drwxr--r--</span>
              <span className="text-ansi-gray hidden xs:inline">18.2M</span>
              <span className="text-ansi-cyan">sambit</span>
              <span className="text-white">AI_Document_Builder</span>
            </div>
            <div className="text-ansi-gray">
              <span className="text-ansi-yellow">PRJ-002</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-ansi-cyan transition-colors">
                  AI Document Builder
                </h3>
                <p className="text-ansi-yellow text-[10px] sm:text-sm mb-2 sm:mb-3 font-medium">
                  Enterprise AI Document Generator
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-xs">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-1.5 sm:px-2 py-0.5 rounded">Next.js</span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-1.5 sm:px-2 py-0.5 rounded">FastAPI</span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-1.5 sm:px-2 py-0.5 rounded">Python</span>
                  <span className="bg-ansi-cyan/10 text-ansi-cyan border border-ansi-cyan/30 px-1.5 sm:px-2 py-0.5 rounded">LangChain</span>
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-1.5 sm:px-2 py-0.5 rounded">FAISS</span>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-ansi-cyan/10 hover:bg-ansi-cyan hover:text-black border border-ansi-cyan/50 text-ansi-cyan font-bold text-[10px] sm:text-sm transition-all flex items-center gap-1 sm:gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">play_arrow</span>
                    DEMO
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-[10px] sm:text-sm transition-all flex items-center gap-1 sm:gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">code</span>
                    CODE
                  </button>
                </a>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-4 sm:mb-8 text-xs sm:text-lg font-light max-w-4xl border-l-2 sm:border-l-4 border-ansi-cyan/30 pl-3 sm:pl-4 py-1">
              AI-powered document builder generating DOCX and PPTX using LLM orchestration and RAG.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-3 sm:p-5">
              <div className="text-[9px] sm:text-xs font-bold text-ansi-gray mb-2 sm:mb-3 tracking-widest uppercase flex items-center gap-1 sm:gap-2">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">settings_suggest</span>
                Highlights
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-4 sm:gap-x-8 text-[10px] sm:text-sm text-ansi-white/90">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Section-by-section AI generation</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Context-aware LangChain refinement</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>RAG with vector search</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Export to DOCX & PPTX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 3: Kirana Corner */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-green/50 hover:shadow-[0_0_20px_rgba(80,250,123,0.15)]">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between font-mono text-[9px] sm:text-xs">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-ansi-green font-bold hidden sm:inline">drwxr-xr-x</span>
              <span className="text-ansi-gray hidden xs:inline">8.7M</span>
              <span className="text-ansi-green">sambit</span>
              <span className="text-white">Kirana_Corner</span>
            </div>
            <div className="text-ansi-gray">
              <span className="text-ansi-yellow">PRJ-003</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-ansi-green transition-colors">
                  Kirana Corner
                </h3>
                <p className="text-ansi-magenta text-[10px] sm:text-sm mb-2 sm:mb-3 font-medium">
                  Hyperlocal Kirana Marketplace
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-xs">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-1.5 sm:px-2 py-0.5 rounded">React</span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-1.5 sm:px-2 py-0.5 rounded">TS</span>
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-1.5 sm:px-2 py-0.5 rounded">Vite</span>
                  <span className="bg-ansi-red/10 text-ansi-red border border-ansi-red/30 px-1.5 sm:px-2 py-0.5 rounded">Firebase</span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-1.5 sm:px-2 py-0.5 rounded">Leaflet</span>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-ansi-green/10 hover:bg-ansi-green hover:text-black border border-ansi-green/50 text-ansi-green font-bold text-[10px] sm:text-sm transition-all flex items-center gap-1 sm:gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">play_arrow</span>
                    DEMO
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-[10px] sm:text-sm transition-all flex items-center gap-1 sm:gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">code</span>
                    CODE
                  </button>
                </a>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-4 sm:mb-8 text-xs sm:text-lg font-light max-w-4xl border-l-2 sm:border-l-4 border-ansi-green/30 pl-3 sm:pl-4 py-1">
              Location-aware marketplace enabling local grocery stores to go online with real-time orders.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-3 sm:p-5">
              <div className="text-[9px] sm:text-xs font-bold text-ansi-gray mb-2 sm:mb-3 tracking-widest uppercase flex items-center gap-1 sm:gap-2">
                <span className="material-symbols-outlined text-[12px] sm:text-[14px]">settings_suggest</span>
                Highlights
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-4 sm:gap-x-8 text-[10px] sm:text-sm text-ansi-white/90">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Map-first shop discovery</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Real-time inventory updates</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Role-based user flows</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Optimized Firestore queries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
