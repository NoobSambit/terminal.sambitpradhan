import { Link } from "react-router-dom";
import { useState } from "react";

interface TerminalHeaderProps {
  activePage?: "home" | "about" | "skills" | "projects" | "contact";
}

const TerminalHeader = ({ activePage = "home" }: TerminalHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const tabs = [
    { id: "about", path: "/about", icon: "person", label: "ABOUT", fullLabel: "01_ABOUT_ME.sh", color: "text-ansi-cyan" },
    { id: "skills", path: "/skills", icon: "code", label: "SKILLS", fullLabel: "02_SKILLS.js", color: "text-ansi-yellow" },
    { id: "projects", path: "/projects", icon: "folder_open", label: "PROJECTS", fullLabel: "03_PROJECTS", color: "text-ansi-magenta" },
    { id: "contact", path: "/contact", icon: "mail", label: "CONTACT", fullLabel: "04_CONTACTS", color: "text-ansi-green" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-term-bg shadow-md animate-fade-in-down">
      {/* Title bar with window controls */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 bg-term-panel border border-term-border rounded-t-lg">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="flex size-2.5 sm:size-3 items-center justify-center rounded-full bg-ansi-red hover:brightness-125 hover:scale-110 cursor-pointer transition-all duration-200 hover:shadow-[0_0_8px_rgba(255,85,85,0.6)]"></div>
            <div className="flex size-2.5 sm:size-3 items-center justify-center rounded-full bg-ansi-yellow hover:brightness-125 hover:scale-110 cursor-pointer transition-all duration-200 hover:shadow-[0_0_8px_rgba(241,250,140,0.6)]"></div>
            <div className="flex size-2.5 sm:size-3 items-center justify-center rounded-full bg-ansi-green hover:brightness-125 hover:scale-110 cursor-pointer transition-all duration-200 hover:shadow-[0_0_8px_rgba(80,250,123,0.6)]"></div>
          </div>
          <Link to="/" className="flex items-center gap-1 text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:text-white transition-colors group">
            <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-ansi-cyan group-hover:animate-pulse">terminal</span>
            <span className="text-ansi-magenta group-hover:text-glow-magenta transition-all hidden xs:inline">SAMBIT</span>
            <span className="text-ansi-magenta group-hover:text-glow-magenta transition-all xs:hidden">SP</span>
            <span className="text-ansi-gray hidden sm:inline">@</span>
            <span className="text-ansi-cyan group-hover:text-glow-cyan transition-all hidden sm:inline">PORTFOLIO</span>
            <span className="text-ansi-yellow hidden md:inline">:~</span>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center p-1.5 text-ansi-gray hover:text-ansi-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
        
        <div className="text-[10px] sm:text-xs text-ansi-green font-bold hidden md:block animate-float">
          v2.4.0-stable
        </div>
      </div>

      {/* Desktop Navigation Tabs */}
      <nav className="hidden md:flex bg-[#0d120d] border-x border-term-border pt-2 px-2 gap-1 overflow-x-auto">
        {tabs.map((tab, index) => {
          const isActive = activePage === tab.id;
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`relative group cursor-pointer flex items-center gap-2 px-4 lg:px-6 py-2 rounded-t-lg transition-all duration-300 opacity-0 animate-fade-in-up whitespace-nowrap ${
                isActive
                  ? `bg-term-panel border-t-2 z-10 ${tab.color}`
                  : "bg-transparent hover:bg-term-panel/50 border-t-2 border-transparent hover:border-term-border"
              }`}
              style={{ 
                borderColor: isActive ? undefined : 'transparent',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <span className={`material-symbols-outlined text-sm ${tab.color} ${isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`}>{tab.icon}</span>
              <span className={`text-xs lg:text-sm font-bold tracking-wide transition-all ${isActive ? tab.color : 'text-ansi-gray group-hover:text-ansi-white'}`}>
                <span className="hidden lg:inline">{tab.fullLabel}</span>
                <span className="lg:hidden">{tab.label}</span>
              </span>
              {isActive && (
                <span className="material-symbols-outlined text-xs ml-1 lg:ml-2 opacity-50 hover:opacity-100 hover:rotate-90 transition-all duration-300 hidden lg:inline">close</span>
              )}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-4/5'}`}></span>
            </Link>
          );
        })}

        <div className="flex items-center justify-center px-3 py-2 text-ansi-gray/60 hover:text-ansi-green cursor-pointer transition-all hover:scale-110 hover:rotate-90 duration-300">
          <span className="material-symbols-outlined text-sm">add</span>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-term-panel border-x border-b border-term-border animate-fade-in-down">
          <div className="flex flex-col p-2 gap-1">
            {tabs.map((tab) => {
              const isActive = activePage === tab.id;
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? `bg-term-bg ${tab.color} border-l-2`
                      : "text-ansi-gray hover:bg-term-bg/50 hover:text-ansi-white"
                  }`}
                  style={{ borderColor: isActive ? 'currentColor' : 'transparent' }}
                >
                  <span className={`material-symbols-outlined text-lg ${tab.color}`}>{tab.icon}</span>
                  <span className="text-sm font-bold">{tab.fullLabel}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default TerminalHeader;
