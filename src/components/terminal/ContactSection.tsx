const ContactSection = () => {
  return (
    <section id="contact" className="pb-10">
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-6 font-bold">
        <span className="text-ansi-green">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/contact</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">./connect.sh</span>
      </div>

      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-ansi-cyan mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined">handshake</span>
          Let's Build Something Meaningful
        </h2>
        <p className="text-ansi-white/70 text-lg max-w-2xl">
          Whether it's an internship, full-time role, or collaboration, I'm always open to 
          discussing challenging problems and impactful ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Email */}
        <a
          href="mailto:sambitpradhan.dev2004@gmail.com"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden rounded-lg"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-red group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-red text-2xl">mail</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold mb-1">EMAIL</div>
              <div className="text-ansi-white/90 font-mono text-sm break-all">sambitpradhan.dev2004@gmail.com</div>
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/NoobSambit"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden rounded-lg"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-white text-2xl">code</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold mb-1">GITHUB</div>
              <div className="text-ansi-white/90 font-mono text-sm">github.com/NoobSambit</div>
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/sambit-pradhan"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden rounded-lg"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-blue group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-blue text-2xl">work</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold mb-1">LINKEDIN</div>
              <div className="text-ansi-white/90 font-mono text-sm">linkedin.com/in/sambit-pradhan</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
