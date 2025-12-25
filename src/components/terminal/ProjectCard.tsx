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
  onClick,
}: ProjectCardProps) => {
  return (
    <article 
      className="group relative flex flex-col bg-term-panel border border-term-border rounded-lg overflow-hidden transition-all duration-300 hover:border-ansi-gray/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
      onClick={onClick}
    >
      {/* Window Title Bar */}
      <div className="h-8 bg-ansi-gray/5 border-b border-term-border flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-ansi-gray/70">
            {icon}
          </span>
          <span className="text-xs font-bold tracking-wider text-ansi-gray/90">
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
        <div className="relative w-full h-48 rounded overflow-hidden border border-term-border group-hover:border-ansi-gray/40 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-t from-term-panel via-transparent to-transparent opacity-80 z-10" />
          <img
            alt={imageAlt}
            className="w-full h-full object-cover filter grayscale contrast-125 sepia hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
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
          <p className="text-sm leading-relaxed text-ansi-gray/70 font-normal border-l-2 border-ansi-gray/20 pl-3">
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
            <button 
              className="px-3 py-1.5 text-xs font-bold bg-transparent border border-ansi-gray/50 text-ansi-gray hover:bg-ansi-gray hover:text-term-bg transition-colors rounded uppercase tracking-wider flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="material-symbols-outlined text-sm">code</span>
              Source
            </button>
            <button 
              className="px-3 py-1.5 text-xs font-bold bg-ansi-gray text-term-bg hover:bg-ansi-white transition-colors rounded uppercase tracking-wider flex items-center gap-1 shadow-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="material-symbols-outlined text-sm">
                {primaryAction.icon}
              </span>
              {primaryAction.label}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
