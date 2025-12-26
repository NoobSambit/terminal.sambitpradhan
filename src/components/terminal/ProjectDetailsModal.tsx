import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectFeature {
  name: string;
  status: boolean;
  details?: string;
}

interface ProjectData {
  id: string;
  name: string;
  version: string;
  metadata: {
    role: string;
    timeline: string;
    status: string;
  };
  stack: string[];
  description: string;
  features: ProjectFeature[];
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectData | null;
}

const ProjectDetailsModal = ({ open, onOpenChange, project }: ProjectDetailsModalProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] sm:w-[90vw] h-[85vh] sm:h-[90vh] p-0 bg-term-bg border-term-border overflow-hidden font-mono">
        {/* Window Title Bar */}
        <DialogHeader className="h-9 sm:h-10 flex flex-row items-center justify-between px-2 sm:px-4 bg-term-panel border-b border-term-border m-0 space-y-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] shrink-0">terminal</span>
            <DialogTitle className="text-ansi-gray text-xs sm:text-sm font-display font-medium tracking-wide truncate">
              <span className="hidden sm:inline">~/projects/portfolio/</span>details.json
            </DialogTitle>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#fa7a18] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f4bf4f] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ec5f57] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
          </div>
        </DialogHeader>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden h-[calc(85vh-36px-24px)] sm:h-[calc(90vh-40px-24px)]">
          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden border-b border-term-border">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-term-panel/50 hover:bg-term-panel transition-colors"
            >
              <span className="flex items-center gap-2 text-xs font-bold text-ansi-cyan">
                <span className="material-symbols-outlined text-base">folder_open</span>
                PROJECT EXPLORER
              </span>
              <span className={`material-symbols-outlined text-ansi-gray transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {sidebarOpen && (
              <div className="animate-fade-in-down max-h-[40vh] overflow-y-auto bg-term-panel/50">
                <MobileSidebar project={project} onClose={() => setSidebarOpen(false)} />
              </div>
            )}
          </div>

          {/* Desktop Sidebar / Tree View */}
          <aside className="hidden md:flex w-48 lg:w-64 flex-col border-r border-term-border bg-term-panel/50 backdrop-blur-sm shrink-0">
            <div className="p-2 lg:p-3 text-[10px] lg:text-xs font-bold text-ansi-gray/60 uppercase tracking-widest font-display">Project Explorer</div>
            <div className="flex flex-col gap-0.5 font-display text-xs lg:text-sm">
              <button className="px-3 lg:px-4 py-1 lg:py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                <span className="material-symbols-outlined text-[14px] lg:text-[16px]">folder</span>
                .config
              </button>
              <button className="px-3 lg:px-4 py-1 lg:py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                <span className="material-symbols-outlined text-[14px] lg:text-[16px]">folder_open</span>
                src
              </button>
              <div className="flex flex-col ml-3 lg:ml-4 border-l border-term-border">
                <button className="px-3 lg:px-4 py-1 lg:py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                  <span className="material-symbols-outlined text-[14px] lg:text-[16px] text-syntax-func">javascript</span>
                  index.js
                </button>
                <button className="px-3 lg:px-4 py-1 lg:py-1.5 bg-[#21262d] text-ansi-white border-r-2 border-primary flex items-center gap-2 transition-colors text-left">
                  <span className="material-symbols-outlined text-[14px] lg:text-[16px] text-ansi-yellow">data_object</span>
                  details.json
                </button>
                <button className="px-3 lg:px-4 py-1 lg:py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                  <span className="material-symbols-outlined text-[14px] lg:text-[16px] text-ansi-cyan">css</span>
                  styles.css
                </button>
              </div>
              <button className="px-3 lg:px-4 py-1 lg:py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                <span className="material-symbols-outlined text-[14px] lg:text-[16px] text-ansi-gray/60">info</span>
                README.md
              </button>
            </div>
            <div className="mt-auto p-3 lg:p-4 border-t border-term-border">
              <div className="text-[10px] lg:text-xs text-ansi-gray/60 mb-2 font-display">GIT STATUS</div>
              <div className="flex items-center justify-between text-[10px] lg:text-xs text-ansi-gray font-mono">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] lg:text-[14px] text-ansi-green">check</span> Clean
                </span>
                <span>master*</span>
              </div>
            </div>
          </aside>

          {/* Code Editor Area */}
          <main className="flex-1 flex flex-col bg-term-bg relative overflow-hidden min-w-0">
            {/* Editor Tabs */}
            <div className="flex border-b border-term-border bg-term-panel/30 text-xs sm:text-sm overflow-x-auto shrink-0">
              <div className="px-2 sm:px-4 py-1.5 sm:py-2 border-r border-term-border bg-term-bg text-ansi-gray border-t-2 border-t-primary flex items-center gap-1 sm:gap-2 min-w-fit font-display">
                <span className="text-ansi-yellow text-[10px] sm:text-xs">{"{ }"}</span>
                <span className="hidden xs:inline">details.json</span>
                <span className="xs:hidden">details</span>
                <span className="material-symbols-outlined text-[12px] sm:text-[14px] ml-1 sm:ml-2 text-ansi-gray/60 hover:text-ansi-white cursor-pointer rounded hover:bg-white/10 p-0.5">close</span>
              </div>
              <div className="hidden sm:flex px-4 py-2 border-r border-term-border text-ansi-gray/60 hover:bg-term-panel/50 hover:text-ansi-gray cursor-pointer items-center gap-2 min-w-fit font-display transition-colors">
                <span className="text-ansi-cyan text-xs">#</span> styles.css
              </div>
            </div>

            {/* Breadcrumb Path */}
            <div className="px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-ansi-gray/60 flex items-center gap-1 sm:gap-2 font-mono bg-term-bg border-b border-term-border/30 overflow-x-auto shrink-0">
              <span className="hidden sm:inline">portfolio</span>
              <span className="material-symbols-outlined text-[8px] sm:text-[10px] hidden sm:inline">chevron_right</span>
              src <span className="material-symbols-outlined text-[8px] sm:text-[10px]">chevron_right</span>
              <span className="text-ansi-gray">details.json</span>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 font-mono text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6 custom-scrollbar">
              <div className="space-y-0">
                <CodeLine num={1}>
                  <span className="text-syntax-keyword">const</span> <span className="text-syntax-func">projectConfig</span> <span className="text-syntax-keyword">=</span> {"{"}
                </CodeLine>
                <CodeLine num={2} indent={1}>
                  <span className="text-syntax-var">id</span>: <span className="text-syntax-string">"{project.id}"</span>,
                </CodeLine>
                <CodeLine num={3} indent={1}>
                  <span className="text-syntax-var">name</span>: <span className="text-syntax-string">"{project.name}"</span>,
                </CodeLine>
                <CodeLine num={4} indent={1}>
                  <span className="text-syntax-var">version</span>: <span className="text-primary font-bold">{project.version}</span>,
                </CodeLine>
                <CodeLine num={5} />
                <CodeLine num={6} indent={1}>
                  <span className="text-syntax-comment">// Core metadata</span>
                </CodeLine>
                <CodeLine num={7} indent={1}>
                  <span className="text-syntax-var">metadata</span>: {"{"}
                </CodeLine>
                <CodeLine num={8} indent={2}>
                  <span className="text-syntax-var">role</span>: <span className="text-syntax-string">"{project.metadata.role}"</span>,
                </CodeLine>
                <CodeLine num={9} indent={2}>
                  <span className="text-syntax-var">timeline</span>: <span className="text-syntax-string">"{project.metadata.timeline}"</span>,
                </CodeLine>
                <CodeLine num={10} indent={2}>
                  <span className="text-syntax-var">status</span>: <span className="text-ansi-green">"{project.metadata.status}"</span>,
                </CodeLine>
                <CodeLine num={11} indent={1}>{"}"},</CodeLine>
                <CodeLine num={12} />
                <CodeLine num={13} indent={1}>
                  <span className="text-syntax-comment">// Tech stack</span>
                </CodeLine>
                <CodeLine num={14} indent={1}>
                  <span className="text-syntax-var">stack</span>: [
                  <span className="hidden sm:inline">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span key={tech}>
                        <span className="text-syntax-string">"{tech}"</span>
                        {i < Math.min(project.stack.length, 4) - 1 && ", "}
                      </span>
                    ))}
                    {project.stack.length > 4 && <span className="text-ansi-gray">...</span>}
                  </span>
                  <span className="sm:hidden text-ansi-gray">...</span>
                  ],
                </CodeLine>
                <CodeLine num={15} />
                <CodeLine num={16} indent={1}>
                  <span className="text-syntax-var">description</span>: <span className="text-syntax-string">`</span>
                </CodeLine>
                <CodeLine num={17} indent={2}>
                  <span className="text-ansi-gray/80 break-words">{project.description.slice(0, 150)}{project.description.length > 150 ? '...' : ''}</span>
                </CodeLine>
                <CodeLine num={18} indent={1}>
                  <span className="text-syntax-string">`</span>,
                </CodeLine>
                <CodeLine num={19} />
                <CodeLine num={20} indent={1}>
                  <span className="text-syntax-var">features</span>: [ <span className="text-ansi-gray">// {project.features.length} items</span>
                </CodeLine>
                {project.features.slice(0, 5).map((feature, i) => (
                  <CodeLine key={feature.name} num={21 + i} indent={2}>
                    {"{ "}
                    <span className="text-syntax-var">name</span>: <span className="text-syntax-string truncate">"{feature.name.slice(0, 25)}"</span>,{" "}
                    <span className="text-syntax-var">done</span>: <span className={feature.status ? "text-ansi-green" : "text-ansi-yellow"}>{feature.status ? "✓" : "○"}</span>
                    {" }"},
                  </CodeLine>
                ))}
                {project.features.length > 5 && (
                  <CodeLine num={26} indent={2}>
                    <span className="text-ansi-gray">// ... {project.features.length - 5} more features</span>
                  </CodeLine>
                )}
                <CodeLine num={27} indent={1}>],</CodeLine>
                <CodeLine num={28} />
                <CodeLine num={29} indent={1}>
                  <span className="text-syntax-func">actions</span>() {"{"}
                </CodeLine>
                <CodeLine num={30} indent={2}>
                  <div className="flex flex-wrap gap-2 sm:gap-4 py-1 sm:py-2">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-all group text-[10px] sm:text-sm"
                      >
                        <span className="font-bold">Demo</span>
                        <span className="material-symbols-outlined text-[14px] sm:text-[16px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 bg-ansi-gray/10 hover:bg-ansi-gray/20 text-ansi-gray border border-ansi-gray/40 px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-all text-[10px] sm:text-sm"
                      >
                        <span className="font-bold">GitHub</span>
                        <span className="material-symbols-outlined text-[14px] sm:text-[16px]">code</span>
                      </a>
                    )}
                  </div>
                </CodeLine>
                <CodeLine num={31} indent={1}>{"}"}</CodeLine>
                <CodeLine num={32}>{"}"};</CodeLine>
                <CodeLine num={33}>
                  <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-ansi-gray/60 align-middle animate-pulse"></span>
                </CodeLine>
              </div>
            </div>

            {/* Embedded Terminal Footer - Hidden on mobile */}
            <div className="hidden sm:block border-t border-term-border bg-term-panel p-2 font-mono text-xs">
              <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-ansi-gray/60 border-b border-term-border/50 mb-2">
                <span>TERMINAL</span>
                <div className="flex gap-2">
                  <span className="hover:text-ansi-white cursor-pointer">+</span>
                  <span className="hover:text-ansi-white cursor-pointer">x</span>
                </div>
              </div>
              <div className="px-2 text-ansi-gray flex items-center gap-2 text-[11px]">
                <span className="text-ansi-green">➜</span>
                <span className="text-syntax-string">~/portfolio</span>
                <span className="animate-pulse w-2 h-3 bg-ansi-gray/60 block"></span>
              </div>
            </div>
          </main>
        </div>

        {/* App Status Bar */}
        <footer className="h-5 sm:h-6 bg-primary text-white text-[9px] sm:text-[10px] md:text-xs flex items-center justify-between px-2 sm:px-3 font-display select-none">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-1 bg-blue-700 px-2 h-full">
              <span className="material-symbols-outlined text-[10px] sm:text-[12px]">remote_gen</span>
              <span>SSH</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[10px] sm:text-[12px]">code_off</span>
              <span>0 Errors</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden md:inline">Ln 32, Col 54</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span>JavaScript</span>
          </div>
        </footer>
      </DialogContent>
    </Dialog>
  );
};

// Mobile sidebar component
const MobileSidebar = ({ project, onClose }: { project: ProjectData; onClose: () => void }) => {
  return (
    <div className="p-3 space-y-3">
      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-term-bg p-2 rounded border border-term-border">
          <span className="text-ansi-gray/60 text-[10px]">Version</span>
          <p className="text-primary font-bold">{project.version}</p>
        </div>
        <div className="bg-term-bg p-2 rounded border border-term-border">
          <span className="text-ansi-gray/60 text-[10px]">Status</span>
          <p className="text-ansi-green font-bold">{project.metadata.status}</p>
        </div>
      </div>
      
      {/* File Tree */}
      <div className="space-y-1 text-xs">
        <div className="text-ansi-gray/60 text-[10px] uppercase tracking-wider mb-2">Files</div>
        <button onClick={onClose} className="w-full px-3 py-1.5 text-ansi-gray hover:bg-term-bg hover:text-ansi-white flex items-center gap-2 rounded transition-colors text-left">
          <span className="material-symbols-outlined text-[14px]">folder</span> .config
        </button>
        <button onClick={onClose} className="w-full px-3 py-1.5 bg-term-bg text-ansi-white border-l-2 border-primary flex items-center gap-2 rounded-r transition-colors text-left">
          <span className="material-symbols-outlined text-[14px] text-ansi-yellow">data_object</span> details.json
        </button>
        <button onClick={onClose} className="w-full px-3 py-1.5 text-ansi-gray hover:bg-term-bg hover:text-ansi-white flex items-center gap-2 rounded transition-colors text-left">
          <span className="material-symbols-outlined text-[14px] text-ansi-gray/60">info</span> README.md
        </button>
      </div>

      {/* Git Status */}
      <div className="flex items-center justify-between text-[10px] text-ansi-gray pt-2 border-t border-term-border">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px] text-ansi-green">check</span> Git: Clean
        </span>
        <span>master*</span>
      </div>
    </div>
  );
};

// Helper component for code lines
const CodeLine = ({ 
  num, 
  indent = 0, 
  children 
}: { 
  num: number; 
  indent?: number; 
  children?: React.ReactNode 
}) => {
  const paddingLeft = indent * 12;
  
  return (
    <div className="flex text-ansi-gray">
      <span className="w-6 sm:w-10 text-right mr-2 sm:mr-4 text-ansi-gray/40 select-none text-[10px] sm:text-sm shrink-0">{num}</span>
      <span style={{ paddingLeft: `${paddingLeft}px` }} className="min-w-0">{children}</span>
    </div>
  );
};

export type { ProjectData };
export default ProjectDetailsModal;
