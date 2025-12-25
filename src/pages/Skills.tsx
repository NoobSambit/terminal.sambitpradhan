import { useState } from "react";
import SkillsHeader from "@/components/terminal/SkillsHeader";
import SkillsExplorer from "@/components/terminal/SkillsExplorer";
import SkillsContent from "@/components/terminal/SkillsContent";
import SkillsStatusBar from "@/components/terminal/SkillsStatusBar";

const Skills = () => {
  const [activeFile, setActiveFile] = useState("languages.js");

  const handleFileClick = (fileName: string) => {
    setActiveFile(fileName);
  };

  return (
    <div className="min-h-screen bg-term-bg text-ansi-white font-mono flex flex-col overflow-hidden">
      {/* Header with System Bar and Navigation */}
      <SkillsHeader activePage="skills" />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col md:flex-row max-w-[1400px] mx-auto w-full h-[calc(100vh-7rem)] overflow-hidden">
        {/* Sidebar Explorer */}
        <SkillsExplorer activeFile={activeFile} onFileClick={handleFileClick} />

        {/* Editor Area */}
        <SkillsContent activeTab={activeFile} onTabChange={setActiveFile} />
      </main>

      {/* Status Bar */}
      <SkillsStatusBar />
    </div>
  );
};

export default Skills;
