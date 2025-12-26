import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm mb-3 sm:mb-4 font-bold overflow-x-auto">
        <span className="text-ansi-green whitespace-nowrap">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/profile</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow whitespace-nowrap">cat about_me.md</span>
        <span className="animate-pulse block w-1.5 sm:w-2 h-3 sm:h-4 bg-ansi-gray ml-1"></span>
      </div>

      {/* About card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 bg-term-panel border border-term-border rounded-lg overflow-hidden shadow-neon-blue">
        {/* Profile image section */}
        <div className="lg:col-span-4 bg-[#0d0d11] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-term-border flex flex-col items-center justify-center relative">
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-l-2 border-ansi-cyan"></div>
          <div className="absolute top-2 right-2 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-r-2 border-ansi-cyan"></div>
          <div className="absolute bottom-2 left-2 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-l-2 border-ansi-cyan"></div>
          <div className="absolute bottom-2 right-2 w-2 sm:w-3 h-2 sm:h-3 border-b-2 border-r-2 border-ansi-cyan"></div>

          {/* Avatar */}
          <div className="aspect-square w-28 sm:w-40 md:w-48 rounded-full border-2 sm:border-4 border-ansi-gray/20 overflow-hidden relative mb-3 sm:mb-4 ring-1 sm:ring-2 ring-ansi-cyan/50 shadow-[0_0_15px_rgba(139,233,253,0.3)]">
            <div className="absolute inset-0 bg-ansi-blue/20 mix-blend-overlay z-10"></div>
            <img
              src={profilePhoto}
              alt="Sambit Pradhan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="text-center">
            <h3 className="text-base sm:text-xl font-bold text-white mb-1">SAMBIT PRADHAN</h3>
            <p className="text-ansi-magenta text-xs sm:text-sm mb-3 sm:mb-4">@fullstack_backend</p>
            <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 border border-ansi-green/50 text-ansi-green text-[10px] sm:text-xs rounded bg-ansi-green/10">
              STATUS: AVAILABLE
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="lg:col-span-8 p-4 sm:p-6 md:p-8">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg sm:text-2xl font-bold text-ansi-cyan mb-3 sm:mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg sm:text-2xl">fingerprint</span>
              WHOAMI
            </h3>
            <p className="text-ansi-white/80 leading-relaxed mb-3 sm:mb-4 font-light text-sm sm:text-lg">
              I'm a <span className="text-ansi-cyan font-medium">Full Stack Developer</span> with a backend-first mindset 
              and a strong interest in scalable systems, AI integration, and developer-friendly architectures.
            </p>
            <p className="text-ansi-white/70 leading-relaxed mb-3 sm:mb-4 font-light text-xs sm:text-base">
              I enjoy solving problems that sit at the intersection of data, APIs, and user experience — 
              whether it's building AI-assisted workflows, real-time dashboards, or location-aware platforms.
            </p>
            <p className="text-ansi-white/70 leading-relaxed mb-4 sm:mb-6 font-light text-xs sm:text-base">
              I value <span className="text-ansi-yellow">clean abstractions</span>, <span className="text-ansi-green">measurable performance</span>, 
              and systems that are designed to grow beyond their first version.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm mt-4 sm:mt-8">
              <div className="bg-term-bg p-2 sm:p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-[9px] sm:text-xs mb-0.5 sm:mb-1">LOCATION</span>
                <span className="text-ansi-blue font-bold text-[10px] sm:text-sm">India (Remote)</span>
              </div>
              <div className="bg-term-bg p-2 sm:p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-[9px] sm:text-xs mb-0.5 sm:mb-1">ROLE</span>
                <span className="text-ansi-magenta font-bold text-[10px] sm:text-sm">Full Stack</span>
              </div>
              <div className="bg-term-bg p-2 sm:p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-[9px] sm:text-xs mb-0.5 sm:mb-1">STACK</span>
                <span className="text-ansi-yellow font-bold text-[9px] sm:text-xs">TS · Next · Node · Mongo</span>
              </div>
              <div className="bg-term-bg p-2 sm:p-3 border border-term-border rounded flex flex-col">
                <span className="text-ansi-gray text-[9px] sm:text-xs mb-0.5 sm:mb-1">AVAILABILITY</span>
                <span className="text-ansi-green font-bold text-[10px] sm:text-sm">Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
