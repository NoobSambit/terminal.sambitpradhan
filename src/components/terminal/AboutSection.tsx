const AboutSection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">user@portfolio</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/profile</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">cat about_me.md</span>
        <span className="animate-pulse block w-2 h-4 bg-ansi-gray ml-1"></span>
      </div>

      {/* About card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-term-panel border border-term-border rounded-lg overflow-hidden shadow-neon-blue">
        {/* Profile image section */}
        <div className="lg:col-span-4 bg-[#0d0d11] p-6 border-b lg:border-b-0 lg:border-r border-term-border flex flex-col items-center justify-center relative">
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-ansi-cyan"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-ansi-cyan"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-ansi-cyan"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-ansi-cyan"></div>

          {/* Avatar */}
          <div className="aspect-square w-48 rounded-full border-4 border-ansi-gray/20 overflow-hidden relative mb-4 ring-2 ring-ansi-cyan/50 shadow-[0_0_15px_rgba(139,233,253,0.3)]">
            <div className="absolute inset-0 bg-ansi-blue/20 mix-blend-overlay z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyuUSC7bLI7JbBuD_VuOT0xQFHiROGsv7XRU_Xbhsvva2X1PTpxZuoFddTHSoCqlUQjKWC29P4VBJsjziIM5QzfNrgTMZnCg6kqvaBe8kDTeMljTT5P2_E1QdWneSxliw9byMqazKW4Qys-gQ4qVYwJ83hsVssGB82GXTQsBlKCGgEeG6IEmsGcsfgw05BpMDxdElRqvzPFYj8Pca4XV_E3skgMdPH4g33Wt3LOjcvwyEhnxMLfoLv58tmgEY-Xn9j3t3Jt8Epcxxo')",
              }}
            ></div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">GUEST USER</h3>
            <p className="text-ansi-magenta text-sm mb-4">@fullstack_dev</p>
            <div className="inline-block px-3 py-1 border border-ansi-green/50 text-ansi-green text-xs rounded bg-ansi-green/10">
              STATUS: ONLINE
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="lg:col-span-8 p-6 md:p-8">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-ansi-cyan mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">fingerprint</span>
              WHOAMI
            </h3>
            <p className="text-ansi-white/80 leading-relaxed mb-6 font-light text-lg">
              I am a passionate developer who believes that{" "}
              <span className="text-ansi-yellow font-medium">code is poetry</span>. I build accessible,
              pixel-perfect, and performant web experiences. Like a well-optimized algorithm, I believe
              in efficiency and elegance in design.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-8">
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">CURRENT_LOCATION</span>
                <span className="text-ansi-blue font-bold">Cyberspace, Earth Node</span>
              </div>
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">AVAILABILITY</span>
                <span className="text-ansi-green font-bold">Open for Commissions</span>
              </div>
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">EXPERIENCE_LEVEL</span>
                <span className="text-ansi-magenta font-bold">Level 25 (Senior)</span>
              </div>
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">MAIN_WEAPON</span>
                <span className="text-ansi-yellow font-bold">VS Code + Vim Mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
