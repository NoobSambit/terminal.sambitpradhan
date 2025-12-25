const SkillsStatusBar = () => {
  return (
    <footer className="h-8 bg-primary text-white flex items-center justify-between px-4 text-xs font-bold select-none shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">call_split</span>
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">sync</span>
          <span>0</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">error</span>
          <span>0</span>
          <span className="material-symbols-outlined text-[14px]">warning</span>
          <span>0</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline">Ln 42, Col 18</span>
        <span className="hidden md:inline">UTF-8</span>
        <span className="hidden md:inline">JavaScript</span>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">notifications</span>
          <span>Prettier</span>
        </div>
      </div>
    </footer>
  );
};

export default SkillsStatusBar;
