const AboutSection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">sambit-pradhan@dev</span>
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
            <h3 className="text-xl font-bold text-white mb-1">SAMBIT PRADHAN</h3>
            <p className="text-ansi-magenta text-sm mb-4">@fullstack_backend</p>
            <div className="inline-block px-3 py-1 border border-ansi-green/50 text-ansi-green text-xs rounded bg-ansi-green/10">
              STATUS: AVAILABLE
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
            <p className="text-ansi-white/80 leading-relaxed mb-4 font-light text-lg">
              I'm a <span className="text-ansi-cyan font-medium">Full Stack Developer</span> with a backend-first mindset 
              and a strong interest in scalable systems, AI integration, and developer-friendly architectures.
            </p>
            <p className="text-ansi-white/70 leading-relaxed mb-4 font-light">
              I enjoy solving problems that sit at the intersection of data, APIs, and user experience — 
              whether it's building AI-assisted workflows, real-time dashboards, or location-aware platforms.
            </p>
            <p className="text-ansi-white/70 leading-relaxed mb-6 font-light">
              I value <span className="text-ansi-yellow">clean abstractions</span>, <span className="text-ansi-green">measurable performance</span>, 
              and systems that are designed to grow beyond their first version.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-8">
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">LOCATION</span>
                <span className="text-ansi-blue font-bold">India (Remote-friendly)</span>
              </div>
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">ROLE</span>
                <span className="text-ansi-magenta font-bold">Full Stack / Backend-Focused</span>
              </div>
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">PRIMARY_STACK</span>
                <span className="text-ansi-yellow font-bold text-xs">TypeScript · Next.js · Node.js · MongoDB</span>
              </div>
              <div className="bg-term-bg p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-xs mb-1">AVAILABILITY</span>
                <span className="text-ansi-green font-bold">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
