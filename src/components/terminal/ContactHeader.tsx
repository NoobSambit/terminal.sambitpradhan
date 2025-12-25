import { Link } from "react-router-dom";

interface ContactHeaderProps {
  activePage?: string;
}

const ContactHeader = ({ activePage = "contact" }: ContactHeaderProps) => {
  const tabs = [
    { id: "home", label: "/home", icon: "folder", path: "/" },
    { id: "about", label: "/about-me", icon: "person", path: "/about" },
    { id: "skills", label: "/skills", icon: "code", path: "/skills" },
    { id: "projects", label: "/projects", icon: "folder_open", path: "/projects" },
    { id: "contact", label: "/contact", icon: "alternate_email", path: "/contact" },
  ];

  return (
    <header className="bg-term-bg border-b border-term-border shrink-0">
      {/* Window Title Bar */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Window Controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-ansi-red border border-[#e0443e]"></div>
            <div className="w-3 h-3 rounded-full bg-ansi-yellow border border-[#dea123]"></div>
            <div className="w-3 h-3 rounded-full bg-ansi-green border border-[#1aab29]"></div>
          </div>
          {/* Title */}
          <div className="flex items-center gap-2 text-ansi-gray text-sm font-medium select-none">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span className="tracking-wide">root@portfolio:~/contact</span>
          </div>
        </div>
        {/* Window Actions */}
        <div className="flex items-center gap-3 text-ansi-gray/60">
          <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-ansi-white transition-colors">settings</span>
          <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-ansi-white transition-colors">menu</span>
        </div>
      </div>

      {/* Tab Navigation Bar */}
      <div className="bg-term-panel/50 border-t border-term-border flex items-end px-2 pt-2 gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activePage === tab.id;
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t transition-colors ${
                isActive
                  ? "bg-term-panel text-primary font-bold border-t border-l border-r border-term-border border-b-2 border-b-primary relative -mb-[1px]"
                  : "bg-term-panel/30 text-ansi-gray/60 hover:bg-term-panel hover:text-ansi-gray border-b-2 border-transparent"
              }`}
            >
              <span className={`material-symbols-outlined text-[16px] ${isActive ? "text-primary" : ""}`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
              {isActive && (
                <span className="ml-2 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              )}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default ContactHeader;
