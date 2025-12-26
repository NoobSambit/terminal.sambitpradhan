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
  {
    id: "PRJ-DAANSETU-001",
    title: "DAANSETU.APP",
    icon: "volunteer_activism",
    imageSrc: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
    imageAlt: "DaanSetu Platform",
    pid: "5001",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;Next.js</span>{" "}
        <span className="text-ansi-yellow">Supabase</span>{" "}
        <span className="text-ansi-cyan">Razorpay</span>{" "}
        <span className="text-ansi-green">Gemini</span> /&gt;
      </>
    ),
    description:
      "Comprehensive platform connecting donors, NGOs, volunteers, and corporates for maximizing social impact across India.",
    version: "v1.0.0",
    updated: "Ongoing",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://daansetu.vercel.app",
    repoUrl: "https://github.com/NoobSambit/DaanSetu",
    modalData: {
      id: "PRJ-DAANSETU-001",
      name: "DaanSetu v1.0",
      version: "1.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "Ongoing",
        status: "Active Development",
      },
      stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay", "Google Gemini AI", "Vercel"],
      description: "DaanSetu is a comprehensive platform built to connect donors, NGOs, volunteers, and corporates at scale with the goal of maximizing social impact across India. It includes donation processing, AI-powered recommendations, volunteer and campaign management, social engagement features, and corporate CSR support.",
      features: [
        { name: "Smart Donation System", status: true, details: "Secure payment processing using Razorpay for donor contributions" },
        { name: "AI-Powered Recommendations", status: true, details: "Personalized NGO and campaign suggestions using Google Gemini AI" },
        { name: "Volunteer Management", status: true, details: "Find and apply for volunteer opportunities based on user skills" },
        { name: "Campaign Management", status: true, details: "NGOs can create, manage, and track fundraising campaigns" },
        { name: "Social Engagement", status: true, details: "Users can follow organizations, like and comment on posts" },
        { name: "Corporate CSR Module", status: true, details: "Corporate users can manage employee donations and CSR initiatives" },
        { name: "Leaderboards & Gamification", status: true, details: "Earn badges and climb contribution leaderboards" },
        { name: "Analytics Dashboard", status: true, details: "Insights for NGOs and donors with real-time tracking" },
        { name: "Real-Time Updates", status: true, details: "Supabase real-time subscriptions for interactive UI updates" },
        { name: "Responsive, Mobile-First Design", status: true, details: "Responsive UI with Tailwind CSS for optimal experience" },
        { name: "Rate Limiting & Error Handling", status: true, details: "API protection with rate limiting and graceful error boundaries" },
        { name: "Roadmap Planned Features", status: false, details: "Extended analytics, deeper AI personalization, enhanced social features" },
      ],
      demoUrl: "https://daansetu.vercel.app",
      repoUrl: "https://github.com/NoobSambit/DaanSetu",
    },
  },
  {
    id: "PRJ-KIRANA-001",
    title: "KIRANA_CORNER.TSX",
    icon: "storefront",
    imageSrc: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
    imageAlt: "Kirana Corner Platform",
    pid: "6001",
    status: "RUNNING",
    statusColor: "text-ansi-green animate-pulse",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;React</span>{" "}
        <span className="text-ansi-yellow">Firebase</span>{" "}
        <span className="text-ansi-cyan">Leaflet</span>{" "}
        <span className="text-ansi-green">Vite</span> /&gt;
      </>
    ),
    description:
      "Hyperlocal shop-to-home marketplace helping neighborhood kirana stores go online with map-centered discovery and real-time inventory.",
    version: "v1.0.0",
    updated: "Ongoing",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://kirana-corner.vercel.app",
    repoUrl: "https://github.com/NoobSambit/KIRANA-CORNER",
    modalData: {
      id: "PRJ-KIRANA-001",
      name: "KIRANA-CORNER v1.0",
      version: "1.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "Ongoing",
        status: "Active Development",
      },
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase (Firestore & Auth)", "React Leaflet", "Vercel (Serverless)", "Firestore Realtime"],
      description: "KIRANA-CORNER is a hyperlocal shop-to-home marketplace designed to help neighborhood kirana stores go online without relying on centralized warehouses. It empowers shop owners to list products and manage inventory while enabling customers to discover nearby shops, browse products, place orders, and track deliveries within their area.",
      features: [
        { name: "Map-First Shop Discovery", status: true, details: "Interactive React Leaflet map shows nearby shops with dynamic radius filtering" },
        { name: "Role-Based Authentication", status: true, details: "Firebase Auth with protected routes for customer and shop owner experiences" },
        { name: "Shop Profile & Inventory Management", status: true, details: "Shop owners can add/edit shop details, manage product listings, and update inventory in bulk" },
        { name: "Real-Time Firestore Data Sync", status: true, details: "Products, orders, and inventory updates sync live using Firestore subscriptions" },
        { name: "Cart & Checkout Flow", status: true, details: "Customers can browse products, add to cart, update quantities, and simulate checkout" },
        { name: "Order Tracking", status: true, details: "Customers can view order history and status updates within the app" },
        { name: "Address Book", status: true, details: "Users can save multiple delivery addresses for quick checkout" },
        { name: "Responsive UI / UX", status: true, details: "Mobile-friendly design styled with Tailwind CSS and interactive components" },
        { name: "Protected Routing", status: true, details: "Routes guarded by role and auth status to secure shop dashboards and actions" },
        { name: "Serverless API Endpoints", status: true, details: "Vercel serverless functions support backend logic and test APIs" },
        { name: "Future Enhancements", status: false, details: "Planned features include advanced shop stats, promotions, in-app messaging, and delivery tracking" },
      ],
      demoUrl: "https://kirana-corner.vercel.app",
      repoUrl: "https://github.com/NoobSambit/KIRANA-CORNER",
    },
  },
  {
    id: "PRJ-EMBEDDED-001",
    title: "ARDUINO_SAFETY.INO",
    icon: "developer_board",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    imageAlt: "Arduino Embedded Systems",
    pid: "7001",
    status: "COMPLETED",
    statusColor: "text-ansi-cyan",
    techStack: (
      <>
        <span className="text-ansi-magenta">&lt;Arduino</span>{" "}
        <span className="text-ansi-yellow">C++</span>{" "}
        <span className="text-ansi-cyan">GSM</span>{" "}
        <span className="text-ansi-green">GPS</span> /&gt;
      </>
    ),
    description:
      "Real-world embedded system projects for vehicle safety: alcohol detection with engine lock and crash detection with SMS alerts.",
    version: "v1.0.0",
    updated: "Academic",
    primaryAction: { label: "Docs", icon: "description" },
    demoUrl: "https://github.com/NoobSambit/Embedded-System-Project#readme",
    repoUrl: "https://github.com/NoobSambit/Embedded-System-Project",
    modalData: {
      id: "PRJ-EMBEDDED-001",
      name: "Arduino Embedded Safety Systems v1.0",
      version: "1.0.0",
      metadata: {
        role: "Embedded Systems Developer",
        timeline: "Semester / Academic Project",
        status: "Completed (Demo/Prototype)",
      },
      stack: ["Arduino Uno", "Arduino Nano", "C++ (Arduino IDE)", "MQ-3 Alcohol Sensor", "Relay Module", "ADXL335 Accelerometer", "SIM800L GSM Module", "NEO-6M GPS Module", "LCD Display"],
      description: "This repository contains two real-world embedded system projects developed with Arduino hardware and sensors to enhance vehicle safety. Project 1 detects driver alcohol levels and automatically locks the engine before start. Project 2 detects crashes using an accelerometer and sends emergency SMS alerts with GPS coordinates.",
      features: [
        { name: "Alcohol Detection & Auto-Lock System", status: true, details: "Monitors breath alcohol concentration and locks vehicle ignition when levels exceed a safety threshold" },
        { name: "Accident Detection & Alert System", status: true, details: "Detects sudden impact via accelerometer and sends GPS location via SMS to emergency contacts" },
        { name: "Real-Time Alerts", status: true, details: "SMS alerts with live GPS coordinates using SIM800L GSM module" },
        { name: "Sensor Integration", status: true, details: "Integrates MQ-3 alcohol sensor and ADXL335 accelerometer with MCU input logic" },
        { name: "User Feedback Display", status: true, details: "Status and warnings shown in real time on LCD" },
        { name: "Hardware Safety Logic", status: true, details: "Engine lock via relay and audible buzzer alerts for critical events" },
        { name: "Academic Prototype", status: true, details: "Designed and tested as embedded systems learning projects with real sensor modules" },
        { name: "Future Enhancements", status: false, details: "Integration with mobile dashboards, cloud telemetry, advanced algorithmic detection" },
      ],
      demoUrl: "https://github.com/NoobSambit/Embedded-System-Project#readme",
      repoUrl: "https://github.com/NoobSambit/Embedded-System-Project",
    },
  },
  {
    id: "PRJ-FANGATE-001",
    title: "FANGATE.APP",
    icon: "music_note",
    imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    imageAlt: "BTS Fan Verification App",
    pid: "8001",
    status: "ACTIVE",
    statusColor: "text-ansi-green",
    techStack: (
      <>
        <span className="text-ansi-blue">&lt;Next.js</span>{" "}
        <span className="text-ansi-cyan">Prisma</span>{" "}
        <span className="text-ansi-magenta">PostgreSQL</span>{" "}
        <span className="text-ansi-yellow">NextAuth</span> /&gt;
      </>
    ),
    description:
      "Interactive BTS fan verification via Last.fm analytics and real-time multiplayer quiz battles with downloadable scorecards.",
    version: "v1.0.0",
    updated: "2024",
    primaryAction: { label: "Demo", icon: "play_arrow" },
    demoUrl: "https://fangate.netlify.app",
    repoUrl: "https://github.com/NoobSambit/FANGATE",
    modalData: {
      id: "PRJ-FANGATE-001",
      name: "FANGATE — BTS Fan Verification & Quiz Battle v1.0",
      version: "1.0.0",
      metadata: {
        role: "Full Stack Developer",
        timeline: "Ongoing",
        status: "Active Development",
      },
      stack: ["Next.js 14 (App Router)", "React 18", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "NextAuth.js", "html2canvas", "Cloudflare Pages", "Last.fm API", "Twitter Intent API"],
      description: "FANGATE is an interactive web application built for BTS ARMY fans to prove their fandom via listening analytics and trivia challenges before accessing ticketing pages. It combines Last.fm listening history analysis with a multiplayer real-time quiz battle, downloadable scorecards, social sharing, and a polished BTS-themed UI.",
      features: [
        { name: "Last.fm Fan Verification", status: true, details: "Username-based Last.fm listening history analysis with fan score calculation" },
        { name: "Scoring Algorithm", status: true, details: "Combined scoring system with 40% Last.fm history + 60% quiz performance" },
        { name: "Single-Player Quiz", status: true, details: "10 BTS trivia questions with a 5-minute timer and progress tracking" },
        { name: "Multiplayer Quiz Battles", status: true, details: "Real-time battle sessions for up to 5 players with synchronized start and live leaderboard" },
        { name: "Battle Lobby & Matchmaking", status: true, details: "Create/join battles with unique 6-char codes and manage participants" },
        { name: "Downloadable Scorecards", status: true, details: "Client-side HTML2Canvas exports of result scorecards as high-quality images" },
        { name: "Twitter Social Sharing", status: true, details: "One-click sharing with prefilled tweets for verification and battle results" },
        { name: "Armstrong-Themed UI Design", status: true, details: "Dark UI with gradients, animations, and confetti for winning moments" },
        { name: "Authentication Support", status: true, details: "NextAuth.js with optional Spotify integration for alternative verification" },
        { name: "Real-Time Multiplayer Logic", status: true, details: "Client-driven polls and graceful battle state transitions" },
        { name: "Backend & Database", status: true, details: "Next.js API Routes + Prisma with PostgreSQL for persistence and quiz storage" },
        { name: "Future Enhancements", status: false, details: "Planned features include deeper Spotify mode, live sockets, and fan tournaments" },
      ],
      demoUrl: "https://fangate.netlify.app",
      repoUrl: "https://github.com/NoobSambit/FANGATE",
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

  const [explorerOpen, setExplorerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-term-bg text-ansi-gray font-mono flex flex-col relative overflow-hidden selection:bg-ansi-gray selection:text-term-bg">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12 mt-12 sm:mt-14 md:mt-16">
        <TerminalHeader activePage="projects" />

        <main className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto p-2 sm:p-4 md:p-6 gap-4 sm:gap-6 relative">
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline z-0 opacity-10 pointer-events-none h-full w-full" />

          {/* Mobile Explorer Toggle */}
          <div className="lg:hidden z-10">
            <button
              onClick={() => setExplorerOpen(!explorerOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-ansi-cyan/10 via-term-panel to-ansi-cyan/10 border border-ansi-cyan/30 rounded-lg hover:from-ansi-cyan/20 hover:to-ansi-cyan/20 transition-all duration-300 mb-4 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            >
              <span className="flex items-center gap-2 text-sm font-bold text-ansi-cyan animate-pulse">
                <span className="material-symbols-outlined text-lg">folder_open</span>
                TAP TO EXPLORE FILES
              </span>
              <span className={`material-symbols-outlined text-ansi-cyan transition-transform duration-300 text-xl animate-bounce ${explorerOpen ? 'rotate-180 animate-none' : ''}`}>
                expand_more
              </span>
            </button>
            {explorerOpen && (
              <div className="animate-fade-in-down mb-4 flex flex-col gap-4">
                <ProjectsExplorer onFileClick={handleFileClick} />
                <SystemMonitor />
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex flex-col w-56 xl:w-64 shrink-0 gap-6 z-10">
            <ProjectsExplorer onFileClick={handleFileClick} />
            <SystemMonitor />
          </aside>

          {/* Main Content */}
          <section className="flex-1 flex flex-col gap-4 sm:gap-6 z-10 min-w-0">
            {/* Command Header */}
            <div className="bg-term-panel border border-term-border p-3 sm:p-4 rounded-lg shadow-glow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-2">
                <h2 className="text-base sm:text-xl md:text-2xl font-bold flex items-center gap-2 sm:gap-3 text-ansi-white">
                  <span className="text-ansi-cyan">&gt;</span>
                  <span className="hidden xs:inline">ls -la</span>
                  <span className="xs:hidden">ls</span>
                  <span className="text-ansi-yellow">./projects/</span>
                  <span className="w-2 sm:w-3 h-4 sm:h-6 bg-ansi-gray animate-pulse ml-1 inline-block" />
                </h2>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono opacity-80">
                  <span className="text-term-bg bg-ansi-gray px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-bold">
                    --view=grid
                  </span>
                  <span className="text-term-bg bg-ansi-gray/70 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-bold hidden sm:inline">
                    --sort=date
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-mono text-ansi-gray/50 border-t border-term-border pt-2 mt-2">
                Total: {projectsData.length} projects | <span className="hidden sm:inline">disk usage: 128MB</span>
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
              {projectsData.map((project, index) => (
                <div key={project.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                  <ProjectCard
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
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center py-4 sm:py-6">
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-term-panel border border-ansi-gray/40 hover:bg-ansi-gray hover:text-term-bg hover:shadow-glow transition-all rounded text-xs sm:text-sm font-bold uppercase tracking-widest text-ansi-gray">
                <span className="material-symbols-outlined text-base sm:text-lg animate-pulse">
                  download
                </span>
                Load More
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
