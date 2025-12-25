const ContactStatusBar = () => {
  return (
    <footer className="bg-primary text-white px-3 py-1 text-[11px] font-mono flex justify-between items-center shrink-0 w-full select-none">
      <div className="flex items-center gap-4">
        <span className="font-bold flex items-center gap-1 bg-white/20 px-1.5 rounded-sm">
          <span className="material-symbols-outlined text-[12px]">terminal</span>
          NORMAL
        </span>
        <span className="flex items-center gap-1 opacity-80">
          <span className="material-symbols-outlined text-[12px]">code_blocks</span>
          master*
        </span>
        <span className="opacity-80">server-01</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="opacity-80 hidden sm:inline">utf-8</span>
        <span className="opacity-80 hidden sm:inline">javascript</span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]">notifications</span>
          0 errors, 0 warnings
        </span>
        <span className="font-bold bg-white/20 px-1.5 rounded-sm">Ln 42, Col 12</span>
      </div>
    </footer>
  );
};

export default ContactStatusBar;
