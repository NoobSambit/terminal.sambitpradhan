import { useState } from "react";
import { ChevronDown, Folder, FolderOpen } from "lucide-react";

interface SkillsExplorerProps {
  activeFile: string;
  onFileClick: (fileName: string) => void;
}

const SkillsExplorer = ({ activeFile, onFileClick }: SkillsExplorerProps) => {
  const [srcExpanded, setSrcExpanded] = useState(true);

  const files = [
    { id: "languages.js", icon: "javascript", color: "text-ansi-yellow" },
    { id: "frameworks.json", icon: "data_object", color: "text-ansi-magenta" },
    { id: "skills_meter.tsx", icon: "speed", color: "text-ansi-green" },
    { id: "certs.log", icon: "verified", color: "text-ansi-cyan" },
    { id: "tools.sh", icon: "terminal", color: "text-orange-400" },
  ];

  return (
    <aside className="w-full md:w-64 bg-term-bg border-r border-term-border flex flex-col shrink-0 md:h-full h-auto">
      {/* Explorer Header */}
      <div className="p-4 border-b border-term-border flex items-center justify-between">
        <span className="text-xs font-bold text-ansi-gray tracking-widest">EXPLORER</span>
        <span className="material-symbols-outlined text-ansi-gray text-[16px]">more_horiz</span>
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 font-mono text-sm">
        {/* Portfolio Root */}
        <div className="flex items-center gap-2 text-ansi-white py-1 px-2 hover:bg-term-panel rounded cursor-pointer">
          <ChevronDown size={18} />
          <span className="font-bold text-ansi-cyan">SAMBIT-SKILLS</span>
        </div>

        {/* SRC Folder */}
        <div className="pl-4">
          <div
            className="flex items-center gap-2 text-ansi-gray py-1 px-2 hover:bg-term-panel rounded cursor-pointer"
            onClick={() => setSrcExpanded(!srcExpanded)}
          >
            {srcExpanded ? <FolderOpen size={18} className="text-ansi-blue" /> : <Folder size={18} className="text-ansi-blue" />}
            <span className="text-ansi-blue">src</span>
          </div>

          {/* Files inside SRC */}
          {srcExpanded && (
            <div className="pl-6 space-y-1 mt-1">
              {files.map((file) => (
                <div
                  key={file.id}
                  className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer transition-colors ${
                    activeFile === file.id
                      ? `${file.color} bg-term-panel/50 border-l-2`
                      : `text-ansi-gray hover:${file.color} hover:bg-term-panel`
                  }`}
                  style={{ borderColor: activeFile === file.id ? 'currentColor' : 'transparent' }}
                  onClick={() => {
                    onFileClick(file.id);
                    // Scroll to the section
                    const element = document.getElementById(file.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <span className={`material-symbols-outlined text-[16px] ${file.color}`}>{file.icon}</span>
                  <span className={activeFile === file.id ? file.color : 'text-ansi-gray/90 hover:text-ansi-white'}>{file.id}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Node Modules Folder */}
        <div className="pl-4 mt-2">
          <div className="flex items-center gap-2 text-ansi-gray/50 py-1 px-2 hover:bg-term-panel rounded cursor-pointer">
            <Folder size={18} />
            <span>node_modules</span>
          </div>
        </div>

        {/* Whoami Easter Egg */}
        <div className="mt-8 p-3 border border-term-border/50 rounded bg-term-panel/30 mx-2">
          <p className="text-xs text-ansi-gray mb-1">$ whoami</p>
          <p className="text-ansi-cyan text-sm font-bold">Sambit Pradhan</p>
          <p className="text-ansi-white/70 text-xs">Full Stack Developer</p>
          <p className="text-ansi-gray text-[10px] mt-1">Backend-first • AI-driven • System-oriented</p>
        </div>
      </div>
    </aside>
  );
};

export default SkillsExplorer;
