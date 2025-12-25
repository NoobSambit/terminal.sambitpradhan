import { useState } from "react";
import { ChevronDown, Folder, FolderOpen } from "lucide-react";

interface SkillsExplorerProps {
  activeFile: string;
  onFileClick: (fileName: string) => void;
}

const SkillsExplorer = ({ activeFile, onFileClick }: SkillsExplorerProps) => {
  const [srcExpanded, setSrcExpanded] = useState(true);

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
          <span className="font-bold text-ansi-blue">PORTFOLIO-V1</span>
        </div>

        {/* SRC Folder */}
        <div className="pl-4">
          <div
            className="flex items-center gap-2 text-ansi-gray py-1 px-2 hover:bg-term-panel rounded cursor-pointer"
            onClick={() => setSrcExpanded(!srcExpanded)}
          >
            {srcExpanded ? <FolderOpen size={18} /> : <Folder size={18} />}
            <span>src</span>
          </div>

          {/* Files inside SRC */}
          {srcExpanded && (
            <div className="pl-6 space-y-1 mt-1">
              <div
                className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer ${
                  activeFile === "languages.js"
                    ? "text-ansi-yellow bg-term-panel/50 border-l-2 border-ansi-yellow"
                    : "text-ansi-gray hover:text-ansi-yellow hover:bg-term-panel"
                }`}
                onClick={() => onFileClick("languages.js")}
              >
                <span className="material-symbols-outlined text-[16px] text-ansi-yellow">javascript</span>
                <span>languages.js</span>
              </div>
              <div
                className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer ${
                  activeFile === "frameworks.json"
                    ? "text-ansi-magenta bg-term-panel/50 border-l-2 border-ansi-magenta"
                    : "text-ansi-gray hover:text-ansi-magenta hover:bg-term-panel"
                }`}
                onClick={() => onFileClick("frameworks.json")}
              >
                <span className="material-symbols-outlined text-[16px] text-ansi-magenta">data_object</span>
                <span>frameworks.json</span>
              </div>
              <div
                className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer ${
                  activeFile === "certs.log"
                    ? "text-ansi-cyan bg-term-panel/50 border-l-2 border-ansi-cyan"
                    : "text-ansi-gray hover:text-ansi-cyan hover:bg-term-panel"
                }`}
                onClick={() => onFileClick("certs.log")}
              >
                <span className="material-symbols-outlined text-[16px] text-ansi-cyan">description</span>
                <span>certs.log</span>
              </div>
              <div
                className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer ${
                  activeFile === "tools.sh"
                    ? "text-orange-400 bg-term-panel/50 border-l-2 border-orange-400"
                    : "text-ansi-gray hover:text-orange-400 hover:bg-term-panel"
                }`}
                onClick={() => onFileClick("tools.sh")}
              >
                <span className="material-symbols-outlined text-[16px] text-orange-400">terminal</span>
                <span>tools.sh</span>
              </div>
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
      </div>
    </aside>
  );
};

export default SkillsExplorer;
