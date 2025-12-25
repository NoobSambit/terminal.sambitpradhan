const ProjectsSection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-6 font-bold">
        <span className="text-ansi-green">user@portfolio</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/projects</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">ls -la --detailed</span>
      </div>

      <div className="flex flex-col gap-10">
        {/* Project 1: Finance Dashboard */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-blue/50 hover:shadow-neon-blue">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-4 py-2 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-ansi-blue font-bold">drwxr-xr-x</span>
              <span className="text-ansi-gray">4.0K</span>
              <span className="text-ansi-magenta">user</span>
              <span className="text-white">Finance_Dashboard_v2</span>
            </div>
            <div className="text-ansi-gray">
              ID: <span className="text-ansi-yellow">8821</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-ansi-blue transition-colors">
                  Finance Dashboard v2
                </h3>
                <div className="flex gap-2 text-xs mb-3">
                  <span className="bg-ansi-blue/10 text-ansi-blue border border-ansi-blue/30 px-2 py-0.5 rounded">
                    React
                  </span>
                  <span className="bg-ansi-green/10 text-ansi-green border border-ansi-green/30 px-2 py-0.5 rounded">
                    D3.js
                  </span>
                  <span className="bg-ansi-yellow/10 text-ansi-yellow border border-ansi-yellow/30 px-2 py-0.5 rounded">
                    WebSocket
                  </span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="px-4 py-2 bg-ansi-blue/10 hover:bg-ansi-blue hover:text-black border border-ansi-blue/50 text-ansi-blue font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  DEMO
                </button>
                <button className="px-4 py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  CODE
                </button>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-8 text-lg font-light max-w-4xl border-l-4 border-ansi-blue/30 pl-4 py-1">
              Real-time crypto tracking dashboard built with React. Monitors over 500+ assets with live
              price updates and historical data visualization. Designed for high-frequency traders.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-5">
              <div className="text-xs font-bold text-ansi-gray mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">settings_suggest</span>
                System Specifications:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-ansi-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Integrated CoinGecko API for real-time market data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>WebSocket connections for sub-second latency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Redux Toolkit used for complex state management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Responsive D3.js charting with custom indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-cyan font-bold">➜</span>
                  <span>Optimized rendering using React.memo & virtualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2: AI Chat Interface */}
        <div className="group border border-term-border bg-term-panel rounded-lg overflow-hidden transition-all hover:border-ansi-magenta/50 hover:shadow-neon-pink">
          {/* File header */}
          <div className="bg-term-bg border-b border-term-border px-4 py-2 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-ansi-magenta font-bold">drwxr--r--</span>
              <span className="text-ansi-gray">12.5M</span>
              <span className="text-ansi-magenta">user</span>
              <span className="text-white">AI_Chat_Interface</span>
            </div>
            <div className="text-ansi-gray">
              ID: <span className="text-ansi-yellow">8822</span>
            </div>
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-ansi-magenta transition-colors">
                  AI Chat Interface
                </h3>
                <div className="flex gap-2 text-xs mb-3">
                  <span className="bg-ansi-magenta/10 text-ansi-magenta border border-ansi-magenta/30 px-2 py-0.5 rounded">
                    Next.js
                  </span>
                  <span className="bg-ansi-cyan/10 text-ansi-cyan border border-ansi-cyan/30 px-2 py-0.5 rounded">
                    OpenAI API
                  </span>
                  <span className="bg-white/10 text-white border border-white/30 px-2 py-0.5 rounded">
                    Tailwind
                  </span>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="px-4 py-2 bg-ansi-magenta/10 hover:bg-ansi-magenta hover:text-black border border-ansi-magenta/50 text-ansi-magenta font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  DEMO
                </button>
                <button className="px-4 py-2 bg-term-bg hover:bg-ansi-gray/20 border border-term-border text-ansi-gray hover:text-white font-bold text-sm transition-all flex items-center gap-2 rounded-sm">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  CODE
                </button>
              </div>
            </div>

            <p className="text-ansi-white/80 mb-8 text-lg font-light max-w-4xl border-l-4 border-ansi-magenta/30 pl-4 py-1">
              A responsive chat interface designed for AI interactions. Features syntax highlighting
              for code blocks and a sleek, distraction-free writing environment.
            </p>

            {/* Specifications */}
            <div className="bg-term-bg rounded border border-term-border p-5">
              <div className="text-xs font-bold text-ansi-gray mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">settings_suggest</span>
                System Specifications:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-ansi-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Streaming responses via Server-Sent Events (SSE)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Markdown rendering with prism.js syntax highlighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>LocalStorage integration for persistent chat history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Mobile-first responsive design methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ansi-magenta font-bold">➜</span>
                  <span>Accessible ARIA attributes for screen readers</span>
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
