import { Link } from "react-router-dom";

interface ProjectsHeaderProps {
  activePage?: "home" | "about" | "skills" | "projects" | "contact";
}

const ProjectsHeader = ({ activePage = "projects" }: ProjectsHeaderProps) => {
  const tabs = [
    { id: "about", path: "/about", icon: "person", label: "/about_me" },
    { id: "skills", path: "/skills", icon: "code", label: "/skills" },
    { id: "projects", path: "/projects", icon: "folder_open", label: "/projects" },
    { id: "contact", path: "/contact", icon: "mail", label: "/contacts" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-ansi-gray/20 bg-term-panel px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-ansi-gray text-xl">
            terminal
          </span>
          <Link 
            to="/"
            className="text-sm font-bold tracking-widest uppercase text-ansi-gray/80 hover:text-ansi-white transition-colors"
          >
            root@portfolio:~
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs font-medium opacity-60">
          <span className="hover:text-ansi-white cursor-pointer">[ FILE ]</span>
          <span className="hover:text-ansi-white cursor-pointer">[ EDIT ]</span>
          <span className="hover:text-ansi-white cursor-pointer">[ VIEW ]</span>
          <span className="hover:text-ansi-white cursor-pointer">[ HELP ]</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-ansi-yellow/50 border border-ansi-yellow" />
          <div className="w-3 h-3 rounded-full bg-ansi-gray/30 border border-ansi-gray/50" />
          <div className="w-3 h-3 rounded-full bg-ansi-red/50 border border-ansi-red" />
        </div>
      </div>

      {/* Navigation tabs */}
      <nav className="bg-term-bg border-b border-ansi-gray/20 px-4 pt-4 backdrop-blur-sm bg-opacity-95">
        <div className="flex gap-1 max-w-7xl mx-auto overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activePage === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`group flex items-center gap-2 px-6 py-2 border-t border-l border-r rounded-t transition-colors ${
                  isActive
                    ? "relative border-ansi-gray bg-term-bg shadow-[0_-2px_10px_rgba(255,255,255,0.05)] z-10"
                    : "border-ansi-gray/20 bg-term-dim/50 hover:bg-term-dim opacity-60 hover:opacity-100"
                }`}
              >
                {isActive && (
                  <span className="w-full h-1 absolute -top-[1px] left-0 bg-ansi-gray shadow-glow" />
                )}
                <span
                  className={`material-symbols-outlined text-base ${
                    isActive ? "animate-pulse text-ansi-white" : ""
                  }`}
                >
                  {tab.icon}
                </span>
                <span className={`text-sm font-bold ${isActive ? "text-ansi-white" : ""}`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default ProjectsHeader;
