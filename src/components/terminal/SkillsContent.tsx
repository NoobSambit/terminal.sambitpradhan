import { useEffect, useState } from "react";

interface SkillsContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SkillsContent = ({ activeTab }: SkillsContentProps) => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    // Trigger skill bar animations after mount
    const timer = setTimeout(() => setAnimateSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    { date: "2024-08-12", level: "INFO", levelColor: "text-ansi-blue", message: "Generative AI using IBM Watsonx Studio", status: "VERIFIED", statusColor: "text-ansi-green" },
    { date: "2024-05-01", level: "INFO", levelColor: "text-ansi-blue", message: "LangChain & LLM Application Development", status: "VERIFIED", statusColor: "text-ansi-green" },
    { date: "2023-10-15", level: "INFO", levelColor: "text-ansi-blue", message: "AWS Cloud Fundamentals", status: "VERIFIED", statusColor: "text-ansi-green" },
    { date: "2023-08-02", level: "INFO", levelColor: "text-ansi-blue", message: "Meta Frontend Developer Program", status: "VERIFIED", statusColor: "text-ansi-green" },
    { date: "2024-02-28", level: "DEBUG", levelColor: "text-ansi-magenta", message: "AWS Solution Architect (In Progress)", status: "PENDING", statusColor: "text-ansi-yellow", pulse: true },
  ];

  const devTools = [
    "Docker", "Git", "Firebase", "Postman", "Vercel", "Netlify", 
    "VS_Code", "Cursor", "Replit", "Linux_Bash", "Figma", "Jira"
  ];

  const skillsData = {
    frontend: [
      { name: "React / Next.js", level: 90, color: "from-ansi-cyan to-ansi-blue" },
      { name: "TypeScript", level: 88, color: "from-ansi-yellow to-orange-500" },
      { name: "Tailwind CSS", level: 92, color: "from-ansi-cyan to-teal-400" },
      { name: "UI Animations (Framer)", level: 70, color: "from-ansi-magenta to-purple-400" },
      { name: "Data Visualization", level: 72, color: "from-ansi-green to-emerald-400" },
    ],
    backend: [
      { name: "Node.js / Express", level: 88, color: "from-ansi-green to-emerald-400" },
      { name: "API Design", level: 90, color: "from-ansi-blue to-cyan-400" },
      { name: "Auth Systems (Firebase/JWT)", level: 85, color: "from-ansi-red to-orange-400" },
      { name: "Database Modeling", level: 85, color: "from-ansi-magenta to-pink-400" },
      { name: "FastAPI / Python APIs", level: 72, color: "from-ansi-yellow to-amber-400" },
    ],
    ai: [
      { name: "LLM Integration", level: 88, color: "from-ansi-magenta to-purple-400" },
      { name: "LangChain", level: 85, color: "from-ansi-cyan to-blue-400" },
      { name: "Prompt Engineering", level: 90, color: "from-ansi-yellow to-orange-400" },
      { name: "RAG Pipelines", level: 70, color: "from-ansi-green to-teal-400" },
      { name: "OCR Pipelines", level: 68, color: "from-ansi-blue to-indigo-400" },
    ],
  };

  const getSkillLabel = (level: number) => {
    if (level >= 85) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Learning";
  };

  return (
    <section className="flex-1 flex flex-col bg-term-panel relative overflow-hidden">

      {/* Command Line */}
      <div className="px-6 py-3 border-b border-term-border/50 bg-term-panel opacity-0 animate-fade-in-left" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <p className="font-mono text-sm">
          <span className="text-ansi-green font-bold">sambit-pradhan@dev</span>:
          <span className="text-ansi-blue">~/skills</span>{" "}
          <span className="text-ansi-white">$</span>{" "}
          <span className="text-ansi-yellow">cat</span> {activeTab}
          <span className="animate-terminal-blink ml-1 text-ansi-cyan">▋</span>
        </p>
      </div>

      {/* Skill Summary */}
      <div className="px-6 py-3 bg-term-bg/50 border-b border-term-border/30 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <p className="text-ansi-white/80 text-sm">
          <span className="text-ansi-cyan">→</span> Backend-focused Full Stack Developer with strong experience in{" "}
          <span className="text-ansi-green text-glow-green">scalable APIs</span>,{" "}
          <span className="text-ansi-magenta text-glow-magenta">AI-powered systems</span>,{" "}
          <span className="text-ansi-yellow text-glow-yellow">real-time data platforms</span>, and modern frontend engineering.
        </p>
      </div>

      {/* Code Content Area */}
      <div className="flex-1 overflow-y-auto p-6 font-mono text-sm md:text-base leading-relaxed">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Languages Section */}
          <div id="languages.js" className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative group hover:border-ansi-yellow/30 transition-all duration-300 scroll-mt-6 terminal-card opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-yellow flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">javascript</span> languages.js
            </div>
            <code className="block text-sm">
              <span className="text-ansi-magenta">const</span>{" "}
              <span className="text-ansi-blue">coreStack</span>{" "}
              <span className="text-ansi-white">=</span>{" "}
              <span className="text-ansi-yellow">[</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"TypeScript"</span>,{" "}
              <span className="text-ansi-gray">// Primary language</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"JavaScript (ES6+)"</span>,
              <br />
              {"  "}<span className="text-ansi-cyan">"Python"</span>,{" "}
              <span className="text-ansi-gray">// AI, LangChain, FastAPI</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"SQL"</span>,{" "}
              <span className="text-ansi-gray">// PostgreSQL, Firestore</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"C / C++"</span>,{" "}
              <span className="text-ansi-gray">// Systems foundation</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"Java"</span>,{" "}
              <span className="text-ansi-gray">// DSA & backend</span>
              <br />
              {"  "}<span className="text-ansi-cyan">"HTML"</span>,
              <br />
              {"  "}<span className="text-ansi-cyan">"CSS"</span>
              <br />
              <span className="text-ansi-yellow">]</span>;
              <br /><br />
              <span className="text-ansi-magenta">export default</span>{" "}
              <span className="text-ansi-blue">coreStack</span>;
            </code>
          </div>

          {/* Frameworks Section */}
          <div id="frameworks.json" className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative group hover:border-ansi-magenta/30 transition-all duration-300 scroll-mt-6 terminal-card opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-magenta flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">data_object</span> frameworks.json
            </div>
            <code className="block text-sm">
              <span className="text-ansi-white">{"{"}</span>
              <br />
              {"  "}<span className="text-ansi-magenta">"frontend"</span>:{" "}
              <span className="text-ansi-yellow">[</span>
              <br />
              {"    "}<span className="text-ansi-cyan">"React.js"</span>, <span className="text-ansi-cyan">"Next.js"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"Tailwind CSS"</span>, <span className="text-ansi-cyan">"Framer Motion"</span>
              <br />
              {"  "}<span className="text-ansi-yellow">]</span>,
              <br />
              {"  "}<span className="text-ansi-magenta">"backend"</span>:{" "}
              <span className="text-ansi-yellow">[</span>
              <br />
              {"    "}<span className="text-ansi-cyan">"Node.js"</span>, <span className="text-ansi-cyan">"Express"</span>,
              <br />
              {"    "}<span className="text-ansi-cyan">"FastAPI"</span>, <span className="text-ansi-cyan">"Flask"</span>
              <br />
              {"  "}<span className="text-ansi-yellow">]</span>,
              <br />
              {"  "}<span className="text-ansi-magenta">"databases"</span>:{" "}
              <span className="text-ansi-yellow">[</span>
              <br />
              {"    "}<span className="text-ansi-cyan">"MongoDB"</span>, <span className="text-ansi-cyan">"Firebase"</span>, <span className="text-ansi-cyan">"PostgreSQL"</span>
              <br />
              {"  "}<span className="text-ansi-yellow">]</span>,
              <br />
              {"  "}<span className="text-ansi-magenta">"cloud_devops"</span>:{" "}
              <span className="text-ansi-yellow">[</span>
              <br />
              {"    "}<span className="text-ansi-cyan">"Vercel"</span>, <span className="text-ansi-cyan">"Netlify"</span>, <span className="text-ansi-cyan">"Docker"</span>
              <br />
              {"  "}<span className="text-ansi-yellow">]</span>
              <br />
              <span className="text-ansi-white">{"}"}</span>
            </code>
          </div>

          {/* Skills Meter Section */}
          <div id="skills_meter.tsx" className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative col-span-1 lg:col-span-2 group hover:border-ansi-green/30 transition-all duration-300 scroll-mt-6 terminal-card opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-green flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">speed</span> skills_meter.tsx
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-ansi-cyan font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">web</span>
                  Frontend
                </h4>
                <div className="space-y-3">
                  {skillsData.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-ansi-white/80">{skill.name}</span>
                        <span className="text-ansi-gray">{getSkillLabel(skill.level)}</span>
                      </div>
                      <div className="h-1.5 w-full bg-term-panel rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-ansi-green font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">dns</span>
                  Backend
                </h4>
                <div className="space-y-3">
                  {skillsData.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-ansi-white/80">{skill.name}</span>
                        <span className="text-ansi-gray">{getSkillLabel(skill.level)}</span>
                      </div>
                      <div className="h-1.5 w-full bg-term-panel rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Skills */}
              <div>
                <h4 className="text-ansi-magenta font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">psychology</span>
                  AI / Systems
                </h4>
                <div className="space-y-3">
                  {skillsData.ai.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-ansi-white/80">{skill.name}</span>
                        <span className="text-ansi-gray">{getSkillLabel(skill.level)}</span>
                      </div>
                      <div className="h-1.5 w-full bg-term-panel rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certs.log" className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative col-span-1 lg:col-span-2 group hover:border-ansi-cyan/30 transition-colors scroll-mt-6">
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-ansi-cyan flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span> certs.log
            </div>
            <div className="font-mono text-xs md:text-sm overflow-x-auto">
              <div className="flex gap-3 mb-2 border-b border-term-border pb-2 text-ansi-gray uppercase text-[10px] tracking-wider min-w-[600px]">
                <span className="w-24">TIMESTAMP</span>
                <span className="w-16">LEVEL</span>
                <span className="flex-1">MESSAGE</span>
                <span className="w-20 text-right">STATUS</span>
              </div>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex gap-3 py-1.5 hover:bg-term-panel rounded px-1 transition-colors min-w-[600px] ${cert.pulse ? "animate-pulse" : ""}`}
                >
                  <span className="text-ansi-gray w-24">{cert.date}</span>
                  <span className={`${cert.levelColor} font-bold w-16`}>{cert.level}</span>
                  <span className="text-ansi-white/80 flex-1">{cert.message}</span>
                  <span className={`${cert.statusColor} font-bold w-20 text-right`}>{cert.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div id="tools.sh" className="bg-term-bg border border-term-border rounded-lg p-5 shadow-lg relative col-span-1 lg:col-span-2 group hover:border-orange-500/30 transition-colors scroll-mt-6">
            <div className="absolute -top-3 left-4 bg-term-panel px-2 text-xs font-bold text-orange-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">terminal</span> tools.sh
            </div>
            <div className="text-sm">
              <p className="mb-3">
                <span className="text-ansi-green">➜</span>{" "}
                <span className="text-ansi-cyan">~</span>{" "}
                <span className="text-ansi-yellow">echo</span> $DEV_TOOLS
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {devTools.map((tool) => (
                  <span 
                    key={tool}
                    className="bg-term-panel border border-term-border px-3 py-1.5 rounded text-ansi-white/80 text-sm hover:border-ansi-cyan/50 hover:text-ansi-cyan transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mb-2">
                <span className="text-ansi-green">➜</span>{" "}
                <span className="text-ansi-cyan">~</span>{" "}
                <span className="text-ansi-yellow">cat</span> /etc/motd
              </p>
              <div className="p-3 bg-term-panel border border-l-4 border-l-ansi-cyan border-y-0 border-r-0 text-ansi-gray italic">
                "Talk is cheap. Show me the code." - Linus Torvalds
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-ansi-green">➜</span>
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
