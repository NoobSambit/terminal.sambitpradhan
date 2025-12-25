import ProjectsHeader from "@/components/terminal/ProjectsHeader";
import ProjectsExplorer from "@/components/terminal/ProjectsExplorer";
import SystemMonitor from "@/components/terminal/SystemMonitor";
import ProjectCard from "@/components/terminal/ProjectCard";
import ProjectsStatusBar from "@/components/terminal/ProjectsStatusBar";

// Hardcoded project data - will be made dynamic later
const projectsData = [
  {
    id: "chatbot",
    title: "AI_CHATBOT.EXE",
    icon: "terminal",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAtE8ltjyUnAvSU-l1vD8AX-20z8kvdb8pl6J7y0GFQnOctFdRj0IXxNLqejDS8lUX3cD3Qzrh6-v0c5XZy_RwdmqF3Eks0git6ybv7uUHmRGG70gKgqbi8STRSTopsXqj8-HANr1PpotjmdXnuIz5igFW67POntqPqydgt31w_E49SMBvBUkkBcNu6rwiE99dbQtmwi5Kb3A8BjKyY832XDB-FqW1gTm-pF6tP8So3VCPCWB6fXe5E9FZ0ac-DFaz5_ChwCd3Eie0",
    imageAlt: "AI Chatbot Preview",
    pid: "8472",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">const</span>{" "}
        <span className="text-ansi-white">stack</span> = [
        <span className="text-ansi-yellow">'Python'</span>,{" "}
        <span className="text-ansi-yellow">'TensorFlow'</span>,{" "}
        <span className="text-ansi-yellow">'NLP'</span>];
      </>
    ),
    description:
      "An advanced AI chatbot designed to simulate human conversation using natural language processing. Features context awareness and sentiment analysis modules.",
    version: "v2.1.0",
    updated: "2h ago",
    primaryAction: { label: "Launch", icon: "play_arrow" },
  },
  {
    id: "market-watch",
    title: "MARKET_WATCH.SH",
    icon: "monitoring",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn8iU0nlYHjZBN-IWJy7KBxp4zfvbQYMwW5UC0FBCZ87ikGxOBv80qhncUfAvr8eYBGVITx9iimFn326TReOrQfK5_hSIPw3b4oeXM-SNzu7cIAYzwzj_JbjuqgP4NqxshHx6xkKszA8enI6AGAT27_FCGg6xpsvr3hIP1PKwWPQMBwsdbtYl4yOvWSKBck_dpTOoqZcTVjJjWmLmM9oYRxTMcTb_biQ1WXNqvcVuypOQB8ha0X74YrRiNHmZxJPbmNTZ5FoC9hIl_",
    imageAlt: "Crypto Tracker",
    pid: "1024",
    status: "COMPILING...",
    statusColor: "text-ansi-yellow",
    techStack: (
      <>
        <span className="text-ansi-magenta">import</span> {"{"}{" "}
        <span className="text-ansi-white">Socket</span> {"}"}{" "}
        <span className="text-ansi-magenta">from</span>{" "}
        <span className="text-ansi-yellow">'WebSockets'</span>;
      </>
    ),
    description:
      "Real-time cryptocurrency tracking dashboard using WebSockets for live data feeds. Implements custom charting library and low-latency updates.",
    version: "v1.0.4-beta",
    updated: "1d ago",
    primaryAction: { label: "Demo", icon: "visibility" },
  },
  {
    id: "store-front",
    title: "STORE_FRONT.JSX",
    icon: "shopping_cart",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg_TFtVZsywJoYPZKJiFZyTnfi7XXcW_i3PMjpeteYdd8fxVUZ0QVTA1ycEGBk_M5IuoWs7mu5d2vboU8XMFwdNTKJFRhEAmR9KFF_NF3JRB2s0YIw6YzMfhF51orX_OnjbGCiAuCxbIERItKCcDNO4BU_iTytMU3gIgRU_krhp2xXTb_Cy93quxHo03JYYmAU0Q1Z9AHaHgeVZVFp3FQKarmajqyW3EMCc1tVW0Pi9ih50NgvMFiaHjhXFkl2b339LHGLMCgDqYeC",
    imageAlt: "E-commerce Store",
    pid: "9921",
    status: "STOPPED",
    statusColor: "text-ansi-white",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;React</span>{" "}
        <span className="text-ansi-yellow">Tailwind</span>{" "}
        <span className="text-ansi-cyan">NextJS</span> /&gt;
      </>
    ),
    description:
      "A full-stack e-commerce platform featuring a custom CMS, Stripe integration, and a responsive design system built with utility-first CSS.",
    version: "v3.0.0",
    updated: "5d ago",
    primaryAction: { label: "Visit", icon: "open_in_new" },
  },
  {
    id: "data-pipeline",
    title: "DATA_PIPELINE.PY",
    icon: "pie_chart",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    imageAlt: "Data Pipeline",
    pid: "3341",
    status: "IDLE",
    statusColor: "text-ansi-magenta",
    techStack: (
      <>
        <span className="text-ansi-magenta">def</span>{" "}
        <span className="text-ansi-white">process_data</span>(df:{" "}
        <span className="text-ansi-yellow">Pandas</span>):
      </>
    ),
    description:
      "Automated ETL pipeline for processing large datasets. Includes visualization components built with D3.js and backend processing with Python Pandas.",
    version: "v0.9.1",
    updated: "1wk ago",
    primaryAction: { label: "Details", icon: "info" },
  },
];

const Projects = () => {
  const handleFileClick = (fileName: string) => {
    console.log("File clicked:", fileName);
    // Will open modal later
  };

  const handleProjectClick = (projectId: string) => {
    console.log("Project clicked:", projectId);
    // Will open modal later
  };

  return (
    <div className="min-h-screen bg-term-bg text-ansi-gray font-mono flex flex-col selection:bg-ansi-gray selection:text-term-bg">
      <ProjectsHeader activePage="projects" />

      <main className="flex-1 flex flex-col md:flex-row max-w-[1600px] w-full mx-auto p-4 md:p-6 gap-6 relative">
        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline z-0 opacity-10 pointer-events-none h-full w-full" />

        {/* Left Sidebar */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 gap-6 z-10">
          <ProjectsExplorer onFileClick={handleFileClick} />
          <SystemMonitor />
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-6 z-10 min-w-0">
          {/* Command Header */}
          <div className="bg-term-panel border border-term-border p-4 rounded-lg shadow-glow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-ansi-white">
                <span className="text-ansi-cyan">&gt;</span>
                ls -la <span className="text-ansi-yellow">./projects/</span>
                <span className="w-3 h-6 bg-ansi-gray animate-pulse ml-1 inline-block" />
              </h2>
              <div className="flex items-center gap-4 text-sm font-mono opacity-80">
                <span className="text-term-bg bg-ansi-gray px-2 py-1 rounded font-bold">
                  --view=grid
                </span>
                <span className="text-term-bg bg-ansi-gray/70 px-2 py-1 rounded font-bold">
                  --sort=date
                </span>
              </div>
            </div>
            <p className="text-sm font-mono text-ansi-gray/50 border-t border-term-border pt-2 mt-2">
              Total found: 3 directories, 12 files | disk usage: 482MB
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                icon={project.icon}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                pid={project.pid}
                status={project.status}
                statusColor={project.statusColor}
                techStack={project.techStack}
                description={project.description}
                version={project.version}
                updated={project.updated}
                primaryAction={project.primaryAction}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center py-6">
            <button className="flex items-center gap-2 px-6 py-3 bg-term-panel border border-ansi-gray/40 hover:bg-ansi-gray hover:text-term-bg hover:shadow-glow transition-all rounded text-sm font-bold uppercase tracking-widest text-ansi-gray">
              <span className="material-symbols-outlined text-lg animate-pulse">
                download
              </span>
              Load More Data
            </button>
          </div>
        </section>
      </main>

      <ProjectsStatusBar />
    </div>
  );
};

export default Projects;
