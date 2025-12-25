const ProjectsStatusBar = () => {
  return (
    <footer className="bg-term-dim border-t border-ansi-gray/20 py-2 px-4 text-xs font-mono flex items-center justify-between z-20 sticky bottom-0 text-ansi-gray/70">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-ansi-cyan">
            wifi
          </span>
          <span>CONNECTED</span>
        </div>
        <span className="text-ansi-gray/30">|</span>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-ansi-yellow">
            folder_open
          </span>
          <span>main*</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-ansi-gray/60">
        <span className="hidden md:inline">Ln 42, Col 12</span>
        <span>UTF-8</span>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-ansi-gray rounded-full animate-pulse" />
          <span>Online</span>
        </div>
      </div>
    </footer>
  );
};

export default ProjectsStatusBar;
