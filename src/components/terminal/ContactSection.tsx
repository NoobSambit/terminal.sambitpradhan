const ContactSection = () => {
  return (
    <section className="pb-10">
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-6 font-bold">
        <span className="text-ansi-green">user@portfolio</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">printenv | grep CONTACT</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <a
          href="#"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-red group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-red">mail</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold">CONTACT_EMAIL</div>
              <div className="text-white font-mono">hello@developer.com</div>
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="#"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-white">code</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold">GITHUB_USER</div>
              <div className="text-white font-mono">@github/user</div>
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-blue group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-blue">work</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold">LINKEDIN_PROFILE</div>
              <div className="text-white font-mono">in/professional-profile</div>
            </div>
          </div>
        </a>

        {/* X/Twitter */}
        <a
          href="#"
          className="group relative block p-4 border border-term-border bg-term-panel hover:bg-term-bg transition-colors overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ansi-cyan group-hover:w-full transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
          <div className="relative flex items-center gap-4 z-10">
            <span className="material-symbols-outlined text-ansi-cyan">alternate_email</span>
            <div>
              <div className="text-xs text-ansi-gray font-bold">X_HANDLE</div>
              <div className="text-white font-mono">@dev_status</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
