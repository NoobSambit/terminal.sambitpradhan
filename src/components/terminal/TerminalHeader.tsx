import { Link } from "react-router-dom";

interface TerminalHeaderProps {
  activePage?: "home" | "about" | "projects" | "contact";
}

const TerminalHeader = ({ activePage = "home" }: TerminalHeaderProps) => {
  const tabs = [
    { id: "about", path: "/about", icon: "person", label: "01_ABOUT_ME.sh" },
    { id: "projects", path: "/projects", icon: "folder_open", label: "02_PROJECTS" },
    { id: "contact", path: "/contact", icon: "mail", label: "03_CONTACTS" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-term-bg shadow-md">
      {/* Title bar with window controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-term-panel border border-term-border rounded-t-lg">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="flex size-3 items-center justify-center rounded-full bg-ansi-red hover:brightness-110 cursor-pointer"></div>
            <div className="flex size-3 items-center justify-center rounded-full bg-ansi-yellow hover:brightness-110 cursor-pointer"></div>
            <div className="flex size-3 items-center justify-center rounded-full bg-ansi-green hover:brightness-110 cursor-pointer"></div>
          </div>
          <Link to="/" className="flex items-center gap-2 text-xs text-ansi-gray font-bold tracking-widest uppercase hover:text-ansi-white transition-colors">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            user@portfolio:~
          </Link>
        </div>
        <div className="text-xs text-ansi-green font-bold hidden sm:block">
          v2.4.0-stable
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex bg-[#0d120d] border-x border-term-border pt-2 px-2 gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activePage === tab.id;
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`relative group cursor-pointer flex items-center gap-2 px-6 py-2 rounded-t-lg transition-all ${
                isActive
                  ? "bg-term-panel border-t-2 border-ansi-green text-ansi-green z-10"
                  : "bg-transparent hover:bg-term-panel/50 border-t-2 border-transparent hover:border-term-border text-ansi-gray hover:text-ansi-white"
              }`}
            >
              <span className="material-symbols-outlined text-sm">{tab.icon}</span>
              <span className="text-sm font-bold tracking-wide">{tab.label}</span>
              {isActive && (
                <span className="material-symbols-outlined text-xs ml-2 opacity-50 hover:opacity-100">close</span>
              )}
            </Link>
          );
        })}

        {/* New Tab Placeholder */}
        <div className="flex items-center justify-center px-3 py-2 text-ansi-gray/60 hover:text-ansi-green cursor-pointer">
          <span className="material-symbols-outlined text-sm">add</span>
        </div>
      </nav>
    </header>
  );
};

export default TerminalHeader;
