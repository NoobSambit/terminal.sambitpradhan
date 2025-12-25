import { X } from "lucide-react";

interface SkillsContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SkillsContent = ({ activeTab, onTabChange }: SkillsContentProps) => {
  const tabs = [
    { id: "languages.js", icon: "javascript", color: "text-ansi-yellow", borderColor: "border-t-ansi-yellow" },
    { id: "frameworks.json", icon: "data_object", color: "text-ansi-magenta", borderColor: "border-t-ansi-magenta" },
    { id: "certs.log", icon: "description", color: "text-ansi-cyan", borderColor: "border-t-ansi-cyan" },
  ];

  const certifications = [
    { date: "2023-10-15", level: "INFO", levelColor: "text-ansi-blue", message: "AWS Certified Cloud Practitioner acquired", status: "VERIFIED", statusColor: "text-primary" },
    { date: "2023-08-02", level: "INFO", levelColor: "text-ansi-blue", message: "Meta Frontend Developer Certificate completed", status: "VERIFIED", statusColor: "text-primary" },
    { date: "2022-12-10", level: "WARN", levelColor: "text-ansi-yellow", message: "Legacy System Migration Workshop attended", status: "ARCHIVED", statusColor: "text-ansi-gray" },
    { date: "2024-02-28", level: "DEBUG", levelColor: "text-ansi-magenta", message: "CompTIA Security+ Exam Preparation...", status: "PENDING", statusColor: "text-ansi-yellow", pulse: true },
  ];

  return (
    <section className="flex-1 flex flex-col bg-term-panel relative overflow-hidden">
      {/* Editor Tabs */}
      <div className="flex items-center bg-term-bg border-b border-term-border overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-mono border-r border-term-border min-w-fit cursor-pointer transition-colors ${
              activeTab === tab.id
                ? `bg-term-panel border-t-2 ${tab.borderColor} text-ansi-white`
                : "text-ansi-gray hover:bg-term-panel"
            }`}
          >
            <span className={`material-symbols-outlined text-[14px] ${tab.color}`}>{tab.icon}</span>
            {tab.id}
            {activeTab === tab.id && (
              <X size={14} className="hover:text-ansi-white cursor-pointer ml-2" />
            )}
          </div>
        ))}
      </div>

      {/* Command Line */}
      <div className="px-6 py-3 border-b border-term-border/50 bg-term-panel">
        <p className="font-mono text-sm">
          <span className="text-primary font-bold">student@portfolio</span>:
          <span className="text-ansi-blue">~/skills</span>{" "}
          <span className="text-ansi-white">$</span>{" "}
          <span className="text-ansi-yellow">node</span> index.js --verbose
        </p>
      </div>

      {/* Code Content Area */}
      <div className="flex-1 overflow-y-auto p-6 font-mono text-sm md:text-base leading-relaxed">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages Section */}
          <div className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative group hover:border-ansi-yellow/30 transition-colors">
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-yellow flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">javascript</span> languages.js
            </div>
            <code className="block">
              <span className="text-ansi-magenta">const</span>{" "}
              <span className="text-ansi-blue">coreStack</span>{" "}
              <span className="text-ansi-white">=</span>{" "}
              <span className="text-ansi-yellow">[</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"Python"</span>,
              <br />
              {"  "}<span className="text-ansi-cyan">"JavaScript"</span>,{" "}
              <span className="text-ansi-gray">// ES6+</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"TypeScript"</span>,
              <br />
              {"  "}<span className="text-ansi-cyan">"C++"</span>,
              <br />
              {"  "}<span className="text-ansi-cyan">"Rust"</span>,{" "}
              <span className="text-ansi-gray">// Learning</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"SQL"</span>
              <br />
              <span className="text-ansi-yellow">]</span>;
              <br />
              <br />
              <span className="text-ansi-magenta">export default</span>{" "}
              <span className="text-ansi-blue">coreStack</span>;
            </code>
          </div>

          {/* Frameworks Section */}
          <div className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative group hover:border-ansi-magenta/30 transition-colors">
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-magenta flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">data_object</span> package.json
            </div>
            <code className="block">
              <span className="text-ansi-white">{"{"}</span>
              <br />
              {"  "}<span className="text-ansi-magenta">"dependencies"</span>:{" "}
              <span className="text-ansi-white">{"{"}</span>
              <br />
              {"    "}<span className="text-ansi-cyan">"react"</span>:{" "}
              <span className="text-orange-400">"^18.2.0"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"next"</span>:{" "}
              <span className="text-orange-400">"14.1.0"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"tailwindcss"</span>:{" "}
              <span className="text-orange-400">"^3.4.1"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"node"</span>:{" "}
              <span className="text-orange-400">"latest"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"express"</span>:{" "}
              <span className="text-orange-400">"^4.18.2"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"postgresql"</span>:{" "}
              <span className="text-orange-400">"stable"</span>
              <br />
              {"  "}<span className="text-ansi-white">{"}"}</span>
              <br />
              <span className="text-ansi-white">{"}"}</span>
            </code>
          </div>

          {/* Certifications Section */}
          <div className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative col-span-1 lg:col-span-2 group hover:border-ansi-cyan/30 transition-colors">
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-cyan flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">description</span> certs.log
            </div>
            <div className="font-mono text-xs md:text-sm">
              <div className="flex gap-3 mb-2 border-b border-term-border pb-2 text-ansi-gray uppercase text-[10px] tracking-wider">
                <span className="w-24">Timestamp</span>
                <span className="w-16">Level</span>
                <span className="flex-1">Message</span>
                <span className="w-20 text-right">Status</span>
              </div>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex gap-3 py-1 hover:bg-term-panel rounded px-1 transition-colors ${cert.pulse ? "animate-pulse" : ""}`}
                >
                  <span className="text-ansi-gray w-24">{cert.date}</span>
                  <span className={`${cert.levelColor} font-bold w-16`}>{cert.level}</span>
                  <span className="text-ansi-white/80 flex-1">{cert.message}</span>
                  <span className={`${cert.statusColor} font-bold w-20 text-right`}>{cert.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Section */}
          <div className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative col-span-1 lg:col-span-2 group hover:border-orange-500/30 transition-colors">
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-orange-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">terminal</span> terminal
            </div>
            <div className="text-sm">
              <p className="mb-2">
                <span className="text-primary">➜</span>{" "}
                <span className="text-ansi-cyan">~</span>{" "}
                <span className="text-ansi-yellow">echo</span> $DEV_TOOLS
              </p>
              <p className="text-ansi-white/80 mb-4 break-words">
                Docker Kubernetes Git Linux_Bash Figma Postman VS_Code Jira
              </p>
              <p className="mb-2">
                <span className="text-primary">➜</span>{" "}
                <span className="text-ansi-cyan">~</span>{" "}
                <span className="text-ansi-yellow">cat</span> /etc/motd
              </p>
              <div className="p-3 bg-term-panel border border-l-4 border-l-primary border-y-0 border-r-0 text-ansi-gray italic">
                "Talk is cheap. Show me the code." - Linus Torvalds
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-primary">➜</span>
                <span className="text-ansi-cyan ml-2">~</span>
                <div className="w-2.5 h-5 bg-ansi-gray ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsContent;
