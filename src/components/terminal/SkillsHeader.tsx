import { Link } from "react-router-dom";
import { Download } from "lucide-react";

interface SkillsHeaderProps {
  activePage?: string;
}

const SkillsHeader = ({ activePage = "skills" }: SkillsHeaderProps) => {
  const tabs = [
    { id: "home", label: "~/home", path: "/" },
    { id: "skills", label: "~/skills", path: "/about", icon: "code" },
    { id: "projects", label: "~/projects", path: "/projects" },
    { id: "contact", label: "~/contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top System Bar */}
      <div className="w-full bg-term-bg border-b border-term-border flex items-center justify-between px-4 py-2 text-xs select-none">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 group">
            <div className="w-3 h-3 rounded-full bg-ansi-red/80 group-hover:bg-ansi-red transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-ansi-yellow/80 group-hover:bg-ansi-yellow transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-ansi-blue/80 group-hover:bg-ansi-blue transition-colors"></div>
          </div>
          <span className="text-ansi-gray font-mono">user@portfolio:~</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-ansi-gray">
            <span className="material-symbols-outlined text-[16px]">wifi</span>
            <span>CONNECTED</span>
          </div>
          <div className="flex items-center gap-2 text-ansi-gray">
            <span className="material-symbols-outlined text-[16px]">battery_charging_full</span>
            <span>100%</span>
          </div>
          <span className="text-ansi-gray">
            {new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-term-panel border-b border-term-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <h1 className="text-xl font-bold tracking-tight text-ansi-white">
                DEV_TERM<span className="text-primary animate-pulse">_</span>
              </h1>
            </Link>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors flex items-center gap-2 ${
                    activePage === tab.id
                      ? "text-ansi-white bg-term-bg border-b-2 border-primary"
                      : "text-ansi-gray hover:text-ansi-white hover:bg-term-bg"
                  }`}
                >
                  {tab.icon && <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>}
                  {tab.label}
                </Link>
              ))}
            </nav>

            {/* Resume Button */}
            <button className="bg-primary hover:bg-primary/80 text-white text-sm font-bold py-2 px-4 rounded shadow-[0_0_15px_rgba(13,89,242,0.3)] transition-all flex items-center gap-2">
              <Download size={18} />
              RESUME.pdf
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default SkillsHeader;
