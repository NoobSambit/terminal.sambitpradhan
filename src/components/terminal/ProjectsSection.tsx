const ProjectsSection = () => {
  return (
    <section id="projects">
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-6 font-bold">
        <span className="text-ansi-green">sambit-pradhan@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/projects</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">ls -la --featured</span>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-ansi-cyan mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined">rocket_launch</span>
        Featured Projects
      </h2>

      <div className="flex flex-col gap-10">
        {/* Project 1: ARMYVERSE */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-magenta/50 hover:shadow-neon-pink">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-4 py-2 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-ansi-magenta font-bold">drwxr-xr-x</span>
              <span className="text-ansi-gray">24.5M</span>
              <span className="text-ansi-magenta">sambit</span>
              <span className="text-white">ARMYVERSE</span>
            </div>
            <div className="text-ansi-gray">
              ID: <span className="text-ansi-yellow">PRJ-ARMY-001</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-ansi-magenta transition-colors">
                  ARMYVERSE
                </h3>
                <p className="text-ansi-cyan text-sm mb-3 font-medium">
                  AI-Powered Analytics & Fan Platform for Music Communities
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-2 py-0.5 rounded">Next.js</span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-2 py-0.5 rounded">TypeScript</span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-2 py-0.5 rounded">Node.js</span>
                  <span className="bg-ansi-cyan/10 text-ansi-cyan border border-ansi-cyan/30 px-2 py-0.5 rounded">MongoDB</span>
                  <span className="bg-ansi-red/10 text-ansi-red border border-ansi-red/30 px-2 py-0.5 rounded">Firebase Auth</span>
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-2 py-0.5 rounded">Gemini API</span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-ansi-magenta/10 hover:bg-ansi-magenta hover:text-black border border-ansi-magenta/50 text-ansi-magenta font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    DEMO
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    CODE
                  </button>
                </a>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-8 text-lg font-light max-w-4xl border-l-4 border-ansi-magenta/30 pl-4 py-1">
              ArmyVerse is a large-scale fan engagement platform built for the BTS community. 
              It combines AI playlist generation, streaming analytics, and community features into a single, 
              scalable system designed for real-world traffic and data volume.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-5">
              <div className="text-xs font-bold text-ansi-gray mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">settings_suggest</span>
                Key Highlights:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-ansi-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>AI-generated playlists using structured prompts (mood, era, bias)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Spotify & YouTube analytics with daily snapshots and trend tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Secure authentication and scalable API design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Production-ready Next.js architecture with clean routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Designed for future social and competitive features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2: AI Document Builder */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-cyan/50 hover:shadow-neon-blue">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-4 py-2 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-ansi-cyan font-bold">drwxr--r--</span>
              <span className="text-ansi-gray">18.2M</span>
              <span className="text-ansi-cyan">sambit</span>
              <span className="text-white">AI_Document_Builder</span>
            </div>
            <div className="text-ansi-gray">
              ID: <span className="text-ansi-yellow">PRJ-DBLDR-001</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-ansi-cyan transition-colors">
                  AI Document Builder
                </h3>
                <p className="text-ansi-yellow text-sm mb-3 font-medium">
                  Enterprise-Style AI System for Generating Documents & Presentations
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-2 py-0.5 rounded">Next.js</span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-2 py-0.5 rounded">FastAPI</span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-2 py-0.5 rounded">Python</span>
                  <span className="bg-ansi-cyan/10 text-ansi-cyan border border-ansi-cyan/30 px-2 py-0.5 rounded">LangChain</span>
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-2 py-0.5 rounded">FAISS</span>
                  <span className="bg-ansi-red/10 text-ansi-red border border-ansi-red/30 px-2 py-0.5 rounded">Firebase</span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-ansi-cyan/10 hover:bg-ansi-cyan hover:text-black border border-ansi-cyan/50 text-ansi-cyan font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    DEMO
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    CODE
                  </button>
                </a>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-8 text-lg font-light max-w-4xl border-l-4 border-ansi-cyan/30 pl-4 py-1">
              An AI-powered document and presentation builder that generates structured, professional DOCX and PPTX 
              files using LLM orchestration and retrieval-augmented generation (RAG).
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-5">
              <div className="text-xs font-bold text-ansi-gray mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">settings_suggest</span>
                Key Highlights:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-ansi-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Section-by-section AI content generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Context-aware refinement using LangChain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>RAG pipeline with embeddings and vector search</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Export to DOCX and PPTX formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Full FastAPI backend with secure authentication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 3: Kirana Corner */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-green/50 hover:shadow-[0_0_20px_rgba(80,250,123,0.15)]">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-4 py-2 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-ansi-green font-bold">drwxr-xr-x</span>
              <span className="text-ansi-gray">8.7M</span>
              <span className="text-ansi-green">sambit</span>
              <span className="text-white">Kirana_Corner</span>
            </div>
            <div className="text-ansi-gray">
              ID: <span className="text-ansi-yellow">PRJ-KIRANA-001</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-ansi-green transition-colors">
                  Kirana Corner
                </h3>
                <p className="text-ansi-magenta text-sm mb-3 font-medium">
                  Hyperlocal Marketplace Connecting Customers with Nearby Kirana Stores
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-2 py-0.5 rounded">React</span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-2 py-0.5 rounded">TypeScript</span>
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-2 py-0.5 rounded">Vite</span>
                  <span className="bg-ansi-red/10 text-ansi-red border border-ansi-red/30 px-2 py-0.5 rounded">Firebase</span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-2 py-0.5 rounded">React Leaflet</span>
                  <span className="bg-ansi-cyan/10 text-ansi-cyan border border-ansi-cyan/30 px-2 py-0.5 rounded">Tailwind</span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-ansi-green/10 hover:bg-ansi-green hover:text-black border border-ansi-green/50 text-ansi-green font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    DEMO
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    CODE
                  </button>
                </a>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-8 text-lg font-light max-w-4xl border-l-4 border-ansi-green/30 pl-4 py-1">
              Kirana Corner is a location-aware marketplace that enables local grocery stores to go online 
              while allowing customers to discover and order from nearby shops in real time.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-5">
              <div className="text-xs font-bold text-ansi-gray mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">settings_suggest</span>
                Key Highlights:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-ansi-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Map-first shop discovery using OpenStreetMap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Real-time inventory and order updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Role-based flows for customers and shop owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Optimized Firestore queries and scalable data models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-green font-bold">➜</span>
                  <span>Designed for Indian hyperlocal commerce use cases</span>
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
