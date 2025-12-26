import { useState } from "react";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import ProjectsExplorer from "@/components/terminal/ProjectsExplorer";
import SystemMonitor from "@/components/terminal/SystemMonitor";
import ProjectCard from "@/components/terminal/ProjectCard";
import StatusBar from "@/components/terminal/StatusBar";
import ProjectDetailsModal, { ProjectData } from "@/components/terminal/ProjectDetailsModal";

// Project data
const projectsData = [
  {
    id: "PRJ-ARMY-001",
    title: "ARMYVERSE.JSX",
    icon: "music_note",
    imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    imageAlt: "ARMYVERSE Platform",
    pid: "2001",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;Next.js</span>{" "}
        <span className="text-ansi-yellow">React</span>{" "}
        <span className="text-ansi-cyan">MongoDB</span>{" "}
        <span className="text-ansi-green">Gemini</span> /&gt;
      </>
    ),
    description:
      "BTS-focused analytics and fan engagement platform. Real-time Spotify/YouTube insights, AI playlist generation, and modern fan-centric UI.",
    version: "v2.0.0",
    updated: "Ongoing",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://armyverse.vercel.app",
    repoUrl: "https://github.com/NoobSambit/ARMYVERSE2",
    modalData: {
      id: "PRJ-ARMY-001",
      name: "ARMYVERSE v2.0",
      version: "2.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "Ongoing",
        status: "Active Development",
      },
      stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Recharts", "Tailwind CSS", "Gemini API"],
      description: "ARMYVERSE is a BTS-focused analytics and fan engagement platform built for ARMYs. The application provides real-time and historical insights into BTS Spotify and YouTube performance, AI-powered playlist generation, and a modern fan-centric UI. The system is architected with scalable routing, modular components, and clean API integration to support future social and competitive features.",
      features: [
        { name: "Spotify Analytics Dashboard", status: true, details: "Daily, monthly, yearly song, album, and group-level streaming stats" },
        { name: "YouTube Trending Tracker", status: true, details: "Real-time trending videos with dedicated routing and views" },
        { name: "AI Playlist Generator", status: true, details: "Prompt-based playlist generation using LLM integration" },
        { name: "Manual Playlist Builder", status: true, details: "User-curated playlists with structured track management" },
        { name: "Advanced Routing System", status: true, details: "Clean Next.js routing for analytics, playlists, and trending views" },
        { name: "Interactive Data Visualizations", status: true, details: "Charts and graphs implemented using Recharts" },
        { name: "Modern Dark UI / UX", status: true, details: "Dark purple-black gradient theme with neon and glassmorphism effects" },
        { name: "Backend Integration Ready", status: true, details: "Prepared API contracts for future social and competitive features" },
        { name: "Microblogging / Social Layer", status: false, details: "Planned fan interaction and engagement features" },
      ],
      demoUrl: "https://armyverse.vercel.app",
      repoUrl: "https://github.com/NoobSambit/ARMYVERSE2",
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
              Total found: {projectsData.length} directories, {projectsData.length * 4} files | disk usage: 128MB
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
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
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
