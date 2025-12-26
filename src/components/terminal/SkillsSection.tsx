import { Link } from "react-router-dom";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "web",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
      color: "ansi-cyan",
    },
    {
      title: "Backend",
      icon: "dns",
      skills: ["Node.js", "Express", "FastAPI", "Firebase", "MongoDB"],
      color: "ansi-green",
    },
    {
      title: "AI / Data",
      icon: "psychology",
      skills: ["LangChain", "LLM", "Prompt Eng", "RAG", "OCR"],
      color: "ansi-magenta",
    },
    {
      title: "Tools",
      icon: "build",
      skills: ["Git", "Docker", "Vercel", "Postman", "VS Code"],
      color: "ansi-yellow",
    },
  ];

  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm mb-3 sm:mb-4 font-bold overflow-x-auto">
        <span className="text-ansi-green whitespace-nowrap">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/skills</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow whitespace-nowrap">cat stack.json</span>
      </div>

      {/* Section Title */}
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-ansi-cyan mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <span className="material-symbols-outlined text-lg sm:text-2xl">terminal</span>
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-term-panel border border-term-border p-3 sm:p-5 rounded relative overflow-hidden hover:border-ansi-gray/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-1 sm:p-2 opacity-10">
              <span className="material-symbols-outlined text-[32px] sm:text-[64px]">{category.icon}</span>
            </div>
            <h4 className={`text-${category.color} text-[10px] sm:text-sm font-bold mb-2 sm:mb-4 uppercase tracking-wider border-b border-term-border pb-1.5 sm:pb-2 flex items-center gap-1 sm:gap-2`}>
              <span className="material-symbols-outlined text-[12px] sm:text-[18px]">{category.icon}</span>
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`bg-${category.color}/10 text-${category.color} border border-${category.color}/30 px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded text-[9px] sm:text-sm font-medium hover:bg-${category.color}/20 transition-colors cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Terminal Link */}
      <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-[10px] sm:text-sm font-mono">
          <span className="text-ansi-gray">---</span>
          <span className="text-ansi-cyan">more...</span>
          <span className="text-ansi-gray">---</span>
        </div>
        <Link 
          to="/skills"
          className="group flex items-center gap-2 text-xs sm:text-sm font-mono"
        >
          <span className="text-ansi-green">$</span>
          <span className="text-ansi-yellow group-hover:text-ansi-cyan transition-colors">
            cat ./skills --verbose
          </span>
          <span className="text-ansi-gray group-hover:text-ansi-magenta transition-colors animate-pulse">
            █
          </span>
        </Link>
        <Link
          to="/skills"
          className="px-4 sm:px-6 py-2 sm:py-3 border border-ansi-cyan/50 bg-ansi-cyan/10 text-ansi-cyan hover:bg-ansi-cyan hover:text-black font-bold text-xs sm:text-sm transition-all rounded flex items-center gap-2 shadow-[0_0_15px_rgba(139,233,253,0.2)] hover:shadow-[0_0_25px_rgba(139,233,253,0.4)]"
        >
          <span className="material-symbols-outlined text-sm sm:text-lg">code</span>
          EXPLORE FULL STACK
          <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
};

export default SkillsSection;
