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
  {
    id: "PRJ-ARMY-002",
    title: "ARMYBATTLES.EXE",
    icon: "sports_esports",
    imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
    imageAlt: "ARMYBATTLES Platform",
    pid: "2002",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;Next.js</span>{" "}
        <span className="text-ansi-yellow">MongoDB</span>{" "}
        <span className="text-ansi-cyan">Last.fm</span>{" "}
        <span className="text-ansi-green">Spotify</span> /&gt;
      </>
    ),
    description:
      "Production-grade real-time music competing platform. Users compete via Spotify playlists and earn leaderboard rankings using Last.fm scrobbles.",
    version: "v2.0.0",
    updated: "5+ Months",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://armybattles.netlify.app",
    repoUrl: "https://github.com/NoobSambit/ARMYBATTLES",
    modalData: {
      id: "PRJ-ARMY-002",
      name: "ARMYBATTLES v2.0",
      version: "2.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "5+ Months",
        status: "Production Ready",
      },
      stack: ["Next.js", "React", "Tailwind CSS", "Node.js (API Routes)", "MongoDB", "Mongoose", "Last.fm API", "Spotify Web API", "Recharts", "Netlify Serverless"],
      description: "ARMYBATTLES is a production-grade real-time music competing platform built for the BTS/ARMY community. Users compete by listening to Spotify playlists and earn leaderboard rankings using Last.fm scrobbles. The platform includes battle lifecycle management, team mechanics, advanced host controls, cheat detection, analytics dashboards, and scalable serverless deployment.",
      features: [
        { name: "User Authentication", status: true, details: "Username-only login with Last.fm integration and secure sessions" },
        { name: "Real-time Leaderboards", status: true, details: "Live polling every 2 minutes with normalized track matching" },
        { name: "Battle Lifecycle Management", status: true, details: "Automatic transitions between upcoming → active → ended states" },
        { name: "Team Mode", status: true, details: "Create, invite, join, and track teams with aggregated scoring" },
        { name: "Host Controls", status: true, details: "Kick participants, extend battles, manual end, activity logs" },
        { name: "Cheat Detection & Security", status: true, details: "Rate limiting, anomaly detection, audit trails, input validation" },
        { name: "Battle Analytics Dashboard", status: true, details: "Real-time participation metrics and detailed statistics" },
        { name: "Responsive UI with BTS Theme", status: true, details: "Dark, gradient-accented layout optimized for all screen sizes" },
        { name: "Serverless Deployment Optimized", status: true, details: "Netlify-ready with GitHub Actions for automated cron verification" },
        { name: "Scrobble Verification System", status: true, details: "Cron-based Last.fm scrobble fetching and playlist matching logic" },
        { name: "Future Enhancements Planned", status: false, details: "Team chat, multi-battle stats, avatars & battle templates" },
      ],
      demoUrl: "https://armybattles.netlify.app",
      repoUrl: "https://github.com/NoobSambit/ARMYBATTLES",
    },
  },
  {
    id: "PRJ-DBLDR-001",
    title: "DOCBUILDER.AI",
    icon: "description",
    imageSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    imageAlt: "AI Document Builder",
    pid: "3001",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;Next.js</span>{" "}
        <span className="text-ansi-yellow">FastAPI</span>{" "}
        <span className="text-ansi-cyan">LangChain</span>{" "}
        <span className="text-ansi-green">Llama</span> /&gt;
      </>
    ),
    description:
      "Enterprise-grade AI-powered tool for generating professional DOCX and PPTX documents using LLM orchestration and RAG.",
    version: "v1.0.0",
    updated: "Ongoing",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://docbuilder-pearl.vercel.app",
    repoUrl: "https://github.com/NoobSambit/docbuilder",
    modalData: {
      id: "PRJ-DBLDR-001",
      name: "AI Document & Presentation Builder v1.0",
      version: "1.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "Ongoing",
        status: "Active Development",
      },
      stack: ["Next.js", "React", "FastAPI", "Python", "LangChain", "Firebase", "Groq Llama 3.3 70B", "FAISS", "Google CSE", "Vercel", "Railway", "Tailwind CSS"],
      description: "AI Document & Presentation Builder is an enterprise-grade AI-powered tool for generating professional DOCX and PPTX documents using LLM orchestration and retrieval-augmented generation (RAG). Built with a full API, context-aware refinement, section-level intelligence, and export capabilities, the system supports both structured outline generation and deep content creation for business reports, academic papers, and presentations.",
      features: [
        { name: "AI Outline Generation", status: true, details: "Generates professional document structure based on type and topic" },
        { name: "RAG-Enhanced Content Generation", status: true, details: "Web search + embeddings for factual, context-aware content" },
        { name: "Context-Aware Refinement", status: true, details: "Improves and expands sections with adjacent context and history" },
        { name: "Document Export", status: true, details: "Export to DOCX and PPTX with multiple professional themes" },
        { name: "Full API Backend", status: true, details: "FastAPI backend with JWT auth, LangChain orchestration, and REST endpoints" },
        { name: "Authentication & Security", status: true, details: "Firebase JWT authentication and secure user access control" },
        { name: "Drag & Drop Editor", status: true, details: "Rich text editor in frontend with interactive section controls" },
        { name: "Vector Search Engine (FAISS)", status: true, details: "Embeddings stored and searched for RAG retrieval" },
        { name: "Deployment Ready", status: true, details: "Configured for Vercel frontend and Railway backend" },
        { name: "Roadmap Features", status: false, details: "Collaborative editing, custom KB upload, analytics dashboard, PDF export" },
      ],
      demoUrl: "https://docbuilder-pearl.vercel.app",
      repoUrl: "https://github.com/NoobSambit/docbuilder",
    },
  },
  {
    id: "PRJ-CAREER-001",
    title: "CAREER_AI.TSX",
    icon: "work",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    imageAlt: "AI Career Assistant",
    pid: "4001",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;Next.js</span>{" "}
        <span className="text-ansi-yellow">TypeScript</span>{" "}
        <span className="text-ansi-cyan">LangChain</span>{" "}
        <span className="text-ansi-green">Gemini</span> /&gt;
      </>
    ),
    description:
      "Comprehensive career development platform for resume enhancement, email crafting, and interview prep using LangChain and Google Gemini.",
    version: "v1.0.0",
    updated: "Ongoing",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://ai-career-assistant-sigma.vercel.app",
    repoUrl: "https://github.com/NoobSambit/AI-Career-Assistant",
    modalData: {
      id: "PRJ-CAREER-001",
      name: "AI Career Assistant v1.0",
      version: "1.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "Ongoing",
        status: "Production Ready",
      },
      stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Shadcn/ui", "LangChain", "Google Gemini API", "Vercel"],
      description: "AI Career Assistant is a comprehensive career development platform built to help professionals enhance resumes, craft effective emails, and prepare for interviews leveraging advanced AI integration via LangChain and the Google Gemini API. The system provides deep analysis, personalized feedback, and deployable APIs for real-world usage.",
      features: [
        { name: "Resume Enhancement", status: true, details: "ATS optimization, skills assessment, structure analysis, and career guidance" },
        { name: "Email Optimization", status: true, details: "Tone analysis, deliverability checks with alternative suggestions" },
        { name: "Interview Preparation", status: true, details: "Personalized STAR method coaching with behavioral question practice" },
        { name: "LangChain AI Orchestration", status: true, details: "Structured pipelines, reusable prompts, and type-safe chains for robust outputs" },
        { name: "Responsive UI / UX", status: true, details: "Modern dark theme interface with drag-and-drop file uploads and progress indicators" },
        { name: "API Backend", status: true, details: "REST endpoints for resume, email, and interview analysis" },
        { name: "Deployment & Monitoring", status: true, details: "Vercel deployment with LangSmith monitoring ready" },
        { name: "Security & Validation", status: true, details: "Rate limiting, input validation, CORS configuration, and sanitized file processing" },
        { name: "Roadmap Enhancements", status: false, details: "Future analytics dashboards and extended personalization features" },
      ],
      demoUrl: "https://ai-career-assistant-sigma.vercel.app",
      repoUrl: "https://github.com/NoobSambit/AI-Career-Assistant",
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
