const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "web",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "ansi-cyan",
    },
    {
      title: "Backend",
      icon: "dns",
      skills: ["Node.js", "Express", "FastAPI", "Firebase", "MongoDB", "SQL"],
      color: "ansi-green",
    },
    {
      title: "AI / Data",
      icon: "psychology",
      skills: ["LangChain", "LLM Integration", "Prompt Engineering", "RAG", "OCR Pipelines"],
      color: "ansi-magenta",
    },
    {
      title: "Tools",
      icon: "build",
      skills: ["Git", "Docker", "Vercel", "Netlify", "Postman", "Cursor", "VS Code"],
      color: "ansi-yellow",
    },
  ];

  return (
    <section>
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~/skills</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">cat stack.json</span>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-ansi-cyan mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined">terminal</span>
        Tech Stack Snapshot
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-term-panel border border-term-border p-5 rounded relative overflow-hidden hover:border-ansi-gray/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <span className="material-symbols-outlined text-[64px]">{category.icon}</span>
            </div>
            <h4 className={`text-${category.color} text-sm font-bold mb-4 uppercase tracking-wider border-b border-term-border pb-2 flex items-center gap-2`}>
              <span className="material-symbols-outlined text-[18px]">{category.icon}</span>
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`bg-${category.color}/10 text-${category.color} border border-${category.color}/30 px-3 py-1.5 rounded text-sm font-medium hover:bg-${category.color}/20 transition-colors cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
