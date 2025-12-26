interface ProjectCardProps {
  title: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  pid: string;
  status: string;
  statusColor: string;
  techStack: React.ReactNode;
  description: string;
  version: string;
  updated: string;
  primaryAction: {
    label: string;
    icon: string;
  };
  demoUrl?: string;
  repoUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  icon,
  imageSrc,
  imageAlt,
  pid,
  status,
  statusColor,
  techStack,
  description,
  version,
  updated,
  primaryAction,
  demoUrl,
  repoUrl,
  onClick,
}: ProjectCardProps) => {
  return (
    <article 
      className="group relative flex flex-col bg-term-panel border border-term-border rounded-lg overflow-hidden terminal-card cursor-pointer hover:border-ansi-cyan/40"
      onClick={onClick}
    >
      {/* Window Title Bar */}
      <div className="h-8 bg-ansi-gray/5 border-b border-term-border flex items-center justify-between px-3 group-hover:bg-ansi-gray/10 transition-colors">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-ansi-gray/70">
            {icon}
          </span>
          <span className="text-xs font-bold tracking-wider text-ansi-cyan">
            {title}
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="text-[10px] text-ansi-gray/40 hover:text-ansi-gray cursor-pointer">
            _
          </span>
          <span className="text-[10px] text-ansi-gray/40 hover:text-ansi-gray cursor-pointer">
            □
          </span>
          <span className="text-[10px] text-ansi-gray/40 hover:text-ansi-red cursor-pointer">
            x
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col h-full gap-4">
        {/* Image Preview */}
        <div className="relative w-full h-48 rounded overflow-hidden border border-term-border group-hover:border-ansi-cyan/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-term-panel via-transparent to-transparent opacity-80 z-10 group-hover:opacity-60 transition-opacity" />
          <img
            alt={imageAlt}
            className="w-full h-full object-cover filter grayscale contrast-125 sepia group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
            src={imageSrc}
          />
          <div className="absolute bottom-2 left-3 z-20 font-mono text-xs bg-black/80 px-2 py-0.5 border border-ansi-gray/30 rounded text-ansi-cyan">
            PID: {pid} | STATUS: <span className={statusColor}>{status}</span>
          </div>
        </div>

        {/* Tech Stack & Description */}
        <div className="flex flex-col gap-3 grow">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {techStack}
          </div>
          <p className="text-sm leading-relaxed text-ansi-gray font-normal border-l-2 border-ansi-gray/30 pl-3">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-term-border flex items-center justify-between">
          <div className="flex gap-4 text-xs font-mono text-ansi-gray/50">
            <span>{version}</span>
            <span>Updated: {updated}</span>
          </div>
          <div className="flex gap-2">
            {repoUrl && (
              <a 
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-bold bg-transparent border border-ansi-gray/50 text-ansi-gray hover:bg-ansi-gray hover:text-term-bg transition-colors rounded uppercase tracking-wider flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="material-symbols-outlined text-sm">code</span>
                Source
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-bold bg-ansi-gray text-term-bg hover:bg-ansi-white transition-colors rounded uppercase tracking-wider flex items-center gap-1 shadow-glow"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="material-symbols-outlined text-sm">
                  {primaryAction.icon}
                </span>
                {primaryAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
