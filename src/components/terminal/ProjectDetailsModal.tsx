import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectFeature {
  name: string;
  status: boolean;
  provider?: string;
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
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 bg-term-bg border-term-border overflow-hidden font-mono">
        {/* Window Title Bar */}
        <DialogHeader className="h-10 flex flex-row items-center justify-between px-4 bg-term-panel border-b border-term-border m-0 space-y-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
            <DialogTitle className="text-ansi-gray text-sm font-display font-medium tracking-wide">
              ~/projects/portfolio/details.json — vim
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#fa7a18] opacity-70 hover:opacity-100 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#f4bf4f] opacity-70 hover:opacity-100 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#ec5f57] opacity-70 hover:opacity-100 transition-opacity"></div>
          </div>
        </DialogHeader>

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden h-[calc(90vh-40px-24px)]">
          {/* Sidebar / Tree View */}
          <aside className="hidden md:flex w-64 flex-col border-r border-term-border bg-term-panel/50 backdrop-blur-sm">
            <div className="p-3 text-xs font-bold text-ansi-gray/60 uppercase tracking-widest font-display">Project Explorer</div>
            <div className="flex flex-col gap-0.5 font-display text-sm">
              <button className="px-4 py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                <span className="material-symbols-outlined text-[16px]">folder</span>
                .config
              </button>
              <button className="px-4 py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                <span className="material-symbols-outlined text-[16px]">folder_open</span>
                src
              </button>
              <div className="flex flex-col ml-4 border-l border-term-border">
                <button className="px-4 py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                  <span className="material-symbols-outlined text-[16px] text-syntax-func">javascript</span>
                  index.js
                </button>
                <button className="px-4 py-1.5 bg-[#21262d] text-ansi-white border-r-2 border-primary flex items-center gap-2 transition-colors text-left">
                  <span className="material-symbols-outlined text-[16px] text-ansi-yellow">data_object</span>
                  details.json
                </button>
                <button className="px-4 py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                  <span className="material-symbols-outlined text-[16px] text-ansi-cyan">css</span>
                  styles.css
                </button>
              </div>
              <button className="px-4 py-1.5 text-ansi-gray hover:bg-[#21262d] hover:text-ansi-white flex items-center gap-2 transition-colors text-left">
                <span className="material-symbols-outlined text-[16px] text-ansi-gray/60">info</span>
                README.md
              </button>
            </div>
            <div className="mt-auto p-4 border-t border-term-border">
              <div className="text-xs text-ansi-gray/60 mb-2 font-display">GIT STATUS</div>
              <div className="flex items-center justify-between text-xs text-ansi-gray font-mono">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-ansi-green">check</span> Clean
                </span>
                <span>master*</span>
              </div>
            </div>
          </aside>

          {/* Code Editor Area */}
          <main className="flex-1 flex flex-col bg-term-bg relative overflow-hidden">
            {/* Editor Tabs */}
            <div className="flex border-b border-term-border bg-term-panel/30 text-sm overflow-x-auto">
              <div className="px-4 py-2 border-r border-term-border bg-term-bg text-ansi-gray border-t-2 border-t-primary flex items-center gap-2 min-w-fit font-display">
                <span className="text-ansi-yellow text-xs">{"{ }"}</span> details.json
                <span className="material-symbols-outlined text-[14px] ml-2 text-ansi-gray/60 hover:text-ansi-white cursor-pointer rounded hover:bg-white/10 p-0.5">close</span>
              </div>
              <div className="px-4 py-2 border-r border-term-border text-ansi-gray/60 hover:bg-term-panel/50 hover:text-ansi-gray cursor-pointer flex items-center gap-2 min-w-fit font-display transition-colors">
                <span className="text-ansi-cyan text-xs">#</span> styles.css
              </div>
            </div>

            {/* Breadcrumb Path */}
            <div className="px-4 py-2 text-xs text-ansi-gray/60 flex items-center gap-2 font-mono bg-term-bg border-b border-term-border/30">
              portfolio <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              src <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="text-ansi-gray">details.json</span>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-6 custom-scrollbar">
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
                  <span className="text-syntax-comment">// Core project metadata and stats</span>
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
                  <span className="text-syntax-comment">// Technology stack used in build</span>
                </CodeLine>
                <CodeLine num={14} indent={1}>
                  <span className="text-syntax-var">stack</span>: [{project.stack.map((tech, i) => (
                    <span key={tech}>
                      <span className="text-syntax-string">"{tech}"</span>
                      {i < project.stack.length - 1 && ", "}
                    </span>
                  ))}],
                </CodeLine>
                <CodeLine num={15} />
                <CodeLine num={16} indent={1}>
                  <span className="text-syntax-var">description</span>: <span className="text-syntax-string">`</span>
                </CodeLine>
                <CodeLine num={17} indent={2}>
                  <span className="text-ansi-gray/80">{project.description}</span>
                </CodeLine>
                <CodeLine num={18} indent={1}>
                  <span className="text-syntax-string">`</span>,
                </CodeLine>
                <CodeLine num={19} />
                <CodeLine num={20} indent={1}>
                  <span className="text-syntax-var">features</span>: [
                </CodeLine>
                {project.features.map((feature, i) => (
                  <CodeLine key={feature.name} num={21 + i} indent={2}>
                    {"{ "}
                    <span className="text-syntax-var">name</span>: <span className="text-syntax-string">"{feature.name}"</span>,{" "}
                    <span className="text-syntax-var">status</span>: <span className={feature.status ? "text-ansi-green" : "text-syntax-keyword"}>{feature.status ? "true" : "false"}</span>
                    {feature.provider && (
                      <>, <span className="text-syntax-var">provider</span>: <span className="text-syntax-string">"{feature.provider}"</span></>
                    )}
                    {" }"},
                  </CodeLine>
                ))}
                <CodeLine num={21 + project.features.length} indent={1}>],</CodeLine>
                <CodeLine num={22 + project.features.length} />
                <CodeLine num={23 + project.features.length} indent={1}>
                  <span className="text-syntax-func">renderButtons</span>() {"{"}
                </CodeLine>
                <CodeLine num={24 + project.features.length} indent={2}>
                  <div className="flex flex-wrap gap-4 py-2">
                    <button className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded transition-all group">
                      <span className="text-syntax-keyword">return</span>
                      <span className="font-bold">"Live Demo"</span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
                    </button>
                    <button className="flex items-center gap-2 bg-ansi-gray/10 hover:bg-ansi-gray/20 text-ansi-gray border border-ansi-gray/40 px-3 py-1.5 rounded transition-all">
                      <span className="text-syntax-keyword">return</span>
                      <span className="font-bold">"GitHub Repo"</span>
                      <span className="material-symbols-outlined text-[16px]">code</span>
                    </button>
                  </div>
                </CodeLine>
                <CodeLine num={25 + project.features.length} indent={1}>{"}"}</CodeLine>
                <CodeLine num={26 + project.features.length}>{"}"};</CodeLine>
                <CodeLine num={27 + project.features.length}>
                  <span className="text-syntax-keyword">export default</span> <span className="text-syntax-func">projectConfig</span>;
                </CodeLine>
                <CodeLine num={28 + project.features.length}>
                  <span className="inline-block w-2 h-5 bg-ansi-gray/60 align-middle animate-pulse"></span>
                </CodeLine>
              </div>
            </div>

            {/* Embedded Terminal Footer */}
            <div className="border-t border-term-border bg-term-panel p-2 flex flex-col font-mono text-sm">
              <div className="flex items-center justify-between px-2 pb-2 text-xs text-ansi-gray/60 border-b border-term-border/50 mb-2">
                <span>TERMINAL</span>
                <div className="flex gap-2">
                  <span className="hover:text-ansi-white cursor-pointer">+</span>
                  <span className="hover:text-ansi-white cursor-pointer">^</span>
                  <span className="hover:text-ansi-white cursor-pointer">x</span>
                </div>
              </div>
              <div className="px-2 text-ansi-gray flex items-center gap-2">
                <span className="text-ansi-green">➜</span>
                <span className="text-syntax-string">~/portfolio</span>
                <span className="text-syntax-var">git</span> commit -m <span className="text-syntax-string">"Viewed details"</span>
              </div>
              <div className="px-2 text-ansi-gray/60 text-xs mt-1">
                [master 8f2a1b] Viewed details<br/>
                1 file changed, 42 insertions(+)
              </div>
              <div className="px-2 text-ansi-gray flex items-center gap-2 mt-1">
                <span className="text-ansi-green">➜</span>
                <span className="text-syntax-string">~/portfolio</span>
                <span className="animate-pulse w-2 h-4 bg-ansi-gray/60 block"></span>
              </div>
            </div>
          </main>
        </div>

        {/* App Status Bar */}
        <footer className="h-6 bg-primary text-white text-[10px] sm:text-xs flex items-center justify-between px-3 font-display select-none">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-blue-700 px-2 h-full">
              <span className="material-symbols-outlined text-[12px]">remote_gen</span>
              <span>SSH: REMOTE</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">code_off</span>
              <span>0 Errors</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Ln 32, Col 54</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span>JavaScript</span>
            <span className="material-symbols-outlined text-[12px]">notifications</span>
          </div>
        </footer>
      </DialogContent>
    </Dialog>
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
  const paddingLeft = indent * 16;
  
  return (
    <div className="flex text-ansi-gray">
      <span className="w-10 text-right mr-6 text-ansi-gray/40 select-none text-sm">{num}</span>
      <span style={{ paddingLeft: `${paddingLeft}px` }}>{children}</span>
    </div>
  );
};

export type { ProjectData };
export default ProjectDetailsModal;
