const ContactSection = () => {
  return (
    <section id="contact" className="pb-6 sm:pb-10">
      {/* Command prompt */}
      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm mb-4 sm:mb-6 font-bold overflow-x-auto">
        <span className="text-ansi-green whitespace-nowrap">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/contact</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow whitespace-nowrap">./connect.sh</span>
      </div>

      {/* Section Header */}
      <div className="mb-4 sm:mb-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-ansi-cyan mb-2 sm:mb-4 flex items-center gap-2 sm:gap-3">
          <span className="material-symbols-outlined text-lg sm:text-2xl">handshake</span>
          Let's Connect
        </h2>
        <p className="text-ansi-white/70 text-xs sm:text-lg max-w-2xl">
          Open to internships, full-time roles, or collaboration on challenging problems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        {/* Email */}
        <div className="group relative block p-3 sm:p-4 border border-term-border bg-term-panel transition-colors overflow-hidden rounded-lg">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-red"></div>
          <div className="relative flex items-center gap-2 sm:gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-red text-lg sm:text-2xl">mail</span>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-xs text-ansi-gray font-bold mb-0.5 sm:mb-1">EMAIL</div>
              <a
                href="mailto:sambitpradhan.dev2004@gmail.com"
                className="text-ansi-white/90 font-mono text-[10px] sm:text-sm truncate block hover:underline hover:text-ansi-red transition-colors cursor-pointer"
              >
                sambitpradhan.dev2004@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* GitHub */}
        <div className="group relative block p-3 sm:p-4 border border-term-border bg-term-panel transition-colors overflow-hidden rounded-lg">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
          <div className="relative flex items-center gap-2 sm:gap-4 z-10">
            <span className="material-symbols-outlined text-white text-lg sm:text-2xl">code</span>
            <div>
              <div className="text-[9px] sm:text-xs text-ansi-gray font-bold mb-0.5 sm:mb-1">GITHUB</div>
              <a
                href="https://github.com/NoobSambit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ansi-white/90 font-mono text-[10px] sm:text-sm hover:underline hover:text-white transition-colors cursor-pointer"
              >
                @NoobSambit
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="group relative block p-3 sm:p-4 border border-term-border bg-term-panel transition-colors overflow-hidden rounded-lg">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-blue"></div>
          <div className="relative flex items-center gap-2 sm:gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-blue text-lg sm:text-2xl">work</span>
            <div>
              <div className="text-[9px] sm:text-xs text-ansi-gray font-bold mb-0.5 sm:mb-1">LINKEDIN</div>
              <a
                href="https://www.linkedin.com/in/sambit-pradhan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ansi-white/90 font-mono text-[10px] sm:text-sm hover:underline hover:text-ansi-blue transition-colors cursor-pointer"
              >
                /in/sambit-pradhan-dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
