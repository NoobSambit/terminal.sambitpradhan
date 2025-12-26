import { useState } from "react";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import SkillsExplorer from "@/components/terminal/SkillsExplorer";
import SkillsContent from "@/components/terminal/SkillsContent";
import StatusBar from "@/components/terminal/StatusBar";

const Skills = () => {
  const [activeFile, setActiveFile] = useState("languages.js");

  const handleFileClick = (fileName: string) => {
    setActiveFile(fileName);
  };

  return (
    <div className="min-h-screen bg-term-bg text-ansi-white font-mono flex flex-col relative overflow-hidden">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12">
        <TerminalHeader activePage="skills" />

        {/* Main Content Layout */}
        <main className="flex-grow flex flex-col md:flex-row max-w-[1400px] mx-auto w-full min-h-0 md:h-[calc(100vh-8rem)] overflow-hidden">
          {/* Sidebar Explorer - Hidden on mobile, shown as horizontal scroll on tablet */}
          <div className="hidden md:block">
            <SkillsExplorer activeFile={activeFile} onFileClick={handleFileClick} />
          </div>

          {/* Mobile File Tabs */}
          <div className="md:hidden flex overflow-x-auto gap-2 p-2 bg-term-panel border-b border-term-border">
            {["languages.js", "frameworks.json", "skills_meter.tsx", "certs.log", "tools.sh"].map((file) => (
              <button
                key={file}
                onClick={() => {
                  handleFileClick(file);
                  const element = document.getElementById(file);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`whitespace-nowrap px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                  activeFile === file 
                    ? 'bg-ansi-cyan/20 text-ansi-cyan border border-ansi-cyan/50' 
                    : 'text-ansi-gray hover:text-ansi-white hover:bg-term-bg'
                }`}
              >
                {file}
              </button>
            ))}
          </div>

          {/* Editor Area */}
          <SkillsContent activeTab={activeFile} onTabChange={setActiveFile} />
        </main>
      </div>

      <StatusBar />
    </div>
  );
};

export default Skills;
