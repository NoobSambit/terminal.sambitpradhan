import { useState } from "react";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import SkillsExplorer from "@/components/terminal/SkillsExplorer";
import SkillsContent from "@/components/terminal/SkillsContent";
import StatusBar from "@/components/terminal/StatusBar";

const Skills = () => {
  const [activeFile, setActiveFile] = useState("languages.js");
  const [explorerOpen, setExplorerOpen] = useState(false);

  const handleFileClick = (fileName: string) => {
    setActiveFile(fileName);
  };

  return (
    <div className="min-h-screen bg-term-bg text-ansi-white font-mono flex flex-col relative overflow-hidden">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12 mt-12 sm:mt-14 md:mt-16">
        <TerminalHeader activePage="skills" />

        {/* Main Content Layout */}
        <main className="flex-grow flex flex-col md:flex-row max-w-[1400px] mx-auto w-full min-h-0 md:h-[calc(100vh-8rem)] overflow-hidden border border-term-border rounded-lg bg-term-panel">
          {/* Mobile Explorer Toggle */}
          <div className="md:hidden border-b border-term-border">
            <button
              onClick={() => setExplorerOpen(!explorerOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-ansi-yellow/10 via-term-panel to-ansi-yellow/10 hover:from-ansi-yellow/20 hover:to-ansi-yellow/20 transition-all duration-300 border-b border-ansi-yellow/30 shadow-[0_0_15px_rgba(255,215,0,0.15)]"
            >
              <span className="flex items-center gap-2 text-sm font-bold text-ansi-yellow animate-pulse">
                <span className="material-symbols-outlined text-lg">folder_open</span>
                TAP TO EXPLORE SKILLS
              </span>
              <span className={`material-symbols-outlined text-ansi-yellow transition-transform duration-300 text-xl animate-bounce ${explorerOpen ? 'rotate-180 animate-none' : ''}`}>
                expand_more
              </span>
            </button>
            {explorerOpen && (
              <div className="animate-fade-in-down max-h-[50vh] overflow-y-auto">
                <SkillsExplorer activeFile={activeFile} onFileClick={(file) => {
                  handleFileClick(file);
                  setExplorerOpen(false);
                }} />
              </div>
            )}
          </div>

          {/* Desktop Sidebar Explorer */}
          <div className="hidden md:block">
            <SkillsExplorer activeFile={activeFile} onFileClick={handleFileClick} />
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
