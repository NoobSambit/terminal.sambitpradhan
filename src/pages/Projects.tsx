import { useState } from "react";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import ProjectsExplorer from "@/components/terminal/ProjectsExplorer";
import SystemMonitor from "@/components/terminal/SystemMonitor";
import ProjectCard from "@/components/terminal/ProjectCard";
import StatusBar from "@/components/terminal/StatusBar";
import ProjectDetailsModal, { ProjectData } from "@/components/terminal/ProjectDetailsModal";

// Hardcoded project data - will be made dynamic later
const projectsData = [
  {
    id: "PRJ-001",
    title: "E_COMMERCE.JSX",
    icon: "shopping_cart",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg_TFtVZsywJoYPZKJiFZyTnfi7XXcW_i3PMjpeteYdd8fxVUZ0QVTA1ycEGBk_M5IuoWs7mu5d2vboU8XMFwdNTKJFRhEAmR9KFF_NF3JRB2s0YIw6YzMfhF51orX_OnjbGCiAuCxbIERItKCcDNO4BU_iTytMU3gIgRU_krhp2xXTb_Cy93quxHo03JYYmAU0Q1Z9AHaHgeVZVFp3FQKarmajqyW3EMCc1tVW0Pi9ih50NgvMFiaHjhXFkl2b339LHGLMCgDqYeC",
    imageAlt: "E-commerce Platform",
    pid: "9921",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;React</span>{" "}
        <span className="text-ansi-yellow">Node.js</span>{" "}
        <span className="text-ansi-cyan">MongoDB</span> /&gt;
      </>
    ),
    description:
      "A comprehensive e-commerce solution designed with a focus on scalability and security. Features include real-time inventory tracking via WebSockets.",
    version: "v1.0.4",
    updated: "2h ago",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    // Modal data
    modalData: {
      id: "PRJ-001",
      name: "E-Commerce Platform v1.0",
      version: "1.0.4",
      metadata: {
        role: "Lead Developer",
        timeline: "3 Months",
        status: "Active Production",
      },
      stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      description: "A comprehensive e-commerce solution designed with a focus on scalability and security. Features include real-time inventory tracking via WebSockets, O-Auth integration for secure user authentication, and a custom-built payment gateway wrapper.",
      features: [
        { name: "Auth", status: true },
        { name: "Payments", status: true, provider: "Stripe" },
        { name: "Analytics", status: false },
      ],
    },
  },
  {
    id: "PRJ-002",
    title: "AI_CHATBOT.EXE",
    icon: "terminal",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAtE8ltjyUnAvSU-l1vD8AX-20z8kvdb8pl6J7y0GFQnOctFdRj0IXxNLqejDS8lUX3cD3Qzrh6-v0c5XZy_RwdmqF3Eks0git6ybv7uUHmRGG70gKgqbi8STRSTopsXqj8-HANr1PpotjmdXnuIz5igFW67POntqPqydgt31w_E49SMBvBUkkBcNu6rwiE99dbQtmwi5Kb3A8BjKyY832XDB-FqW1gTm-pF6tP8So3VCPCWB6fXe5E9FZ0ac-DFaz5_ChwCd3Eie0",
    imageAlt: "AI Chatbot Preview",
    pid: "8472",
    status: "COMPILING...",
    statusColor: "text-ansi-yellow",
    techStack: (
      <>
        <span className="text-ansi-magenta">const</span>{" "}
        <span className="text-ansi-white">stack</span> = [
        <span className="text-ansi-yellow">'Python'</span>,{" "}
        <span className="text-ansi-yellow">'TensorFlow'</span>];
      </>
    ),
    description:
      "An advanced AI chatbot designed to simulate human conversation using natural language processing. Features context awareness and sentiment analysis modules.",
    version: "v2.1.0",
    updated: "1d ago",
    primaryAction: { label: "Launch", icon: "play_arrow" },
    modalData: {
      id: "PRJ-002",
      name: "AI Chatbot v2.1",
      version: "2.1.0",
      metadata: {
        role: "ML Engineer",
        timeline: "4 Months",
        status: "In Development",
      },
      stack: ["Python", "TensorFlow", "NLP", "FastAPI", "Redis"],
      description: "An advanced AI chatbot designed to simulate human conversation using natural language processing. Features context awareness, sentiment analysis modules, and multi-language support.",
      features: [
        { name: "NLP Engine", status: true },
        { name: "Sentiment Analysis", status: true },
        { name: "Voice Support", status: false },
      ],
    },
  },
  {
    id: "PRJ-003",
    title: "MARKET_WATCH.SH",
    icon: "monitoring",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn8iU0nlYHjZBN-IWJy7KBxp4zfvbQYMwW5UC0FBCZ87ikGxOBv80qhncUfAvr8eYBGVITx9iimFn326TReOrQfK5_hSIPw3b4oeXM-SNzu7cIAYzwzj_JbjuqgP4NqxshHx6xkKszA8enI6AGAT27_FCGg6xpsvr3hIP1PKwWPQMBwsdbtYl4yOvWSKBck_dpTOoqZcTVjJjWmLmM9oYRxTMcTb_biQ1WXNqvcVuypOQB8ha0X74YrRiNHmZxJPbmNTZ5FoC9hIl_",
    imageAlt: "Crypto Tracker",
    pid: "1024",
    status: "STOPPED",
    statusColor: "text-ansi-white",
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
    updated: "5d ago",
    primaryAction: { label: "Demo", icon: "visibility" },
    modalData: {
      id: "PRJ-003",
      name: "Market Watch Dashboard",
      version: "1.0.4-beta",
      metadata: {
        role: "Full Stack Developer",
        timeline: "2 Months",
        status: "Beta Testing",
      },
      stack: ["React", "WebSockets", "D3.js", "Node.js", "PostgreSQL"],
      description: "Real-time cryptocurrency tracking dashboard using WebSockets for live data feeds. Implements custom charting library, low-latency updates, and price alerts.",
      features: [
        { name: "Real-time Data", status: true },
        { name: "Price Alerts", status: true },
        { name: "Portfolio Tracking", status: false },
      ],
    },
  },
  {
    id: "PRJ-004",
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
    modalData: {
      id: "PRJ-004",
      name: "Data Pipeline ETL",
      version: "0.9.1",
      metadata: {
        role: "Data Engineer",
        timeline: "6 Months",
        status: "Maintenance",
      },
      stack: ["Python", "Pandas", "Apache Airflow", "PostgreSQL", "D3.js"],
      description: "Automated ETL pipeline for processing large datasets. Includes visualization components built with D3.js, scheduled jobs with Airflow, and backend processing with Python Pandas.",
      features: [
        { name: "ETL Processing", status: true },
        { name: "Scheduling", status: true, provider: "Airflow" },
        { name: "Real-time Sync", status: false },
      ],
    },
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFileClick = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project.modalData);
      setModalOpen(true);
    }
  };

  const handleProjectClick = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project.modalData);
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-term-bg text-ansi-gray font-mono flex flex-col relative overflow-hidden selection:bg-ansi-gray selection:text-term-bg">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 md:p-6">
        <TerminalHeader activePage="projects" />

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

      </div>

      <StatusBar />
      
      <ProjectDetailsModal 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
        project={selectedProject} 
      />
    </div>
  );
};

export default Projects;
