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

      <div className="flex-1 flex flex-col p-2 md:p-6 lg:h-screen lg:max-h-screen">
        <TerminalHeader activePage="skills" />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col md:flex-row max-w-[1400px] mx-auto w-full h-[calc(100vh-7rem)] overflow-hidden">
        {/* Sidebar Explorer */}
        <SkillsExplorer activeFile={activeFile} onFileClick={handleFileClick} />

        {/* Editor Area */}
        <SkillsContent activeTab={activeFile} onTabChange={setActiveFile} />
        </main>
      </div>

      <StatusBar />
    </div>
  );
};

export default Skills;
