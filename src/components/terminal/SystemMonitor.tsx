const SystemMonitor = () => {
  const stats = [
    { label: "CPU_LOAD", value: "12%", color: "text-ansi-red", progress: 12 },
    { label: "MEM_USAGE", value: "64%", color: "text-ansi-yellow", progress: 64 },
  ];

  return (
    <div className="border border-term-border bg-term-panel/50 p-4 rounded-lg font-mono text-xs">
      <div className="flex justify-between items-center border-b border-term-border pb-2 mb-3">
        <span className="font-bold uppercase tracking-wider text-ansi-gray/60">
          SYS_MONITOR
        </span>
        <span className="material-symbols-outlined text-xs animate-spin text-ansi-gray/60">
          settings
        </span>
      </div>
      <div className="space-y-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between mb-1">
              <span className="text-ansi-gray/70">{stat.label}</span>
              <span className={stat.color}>{stat.value}</span>
            </div>
            <div className="w-full bg-ansi-gray/10 h-2 rounded-sm overflow-hidden">
              <div
                className={`h-full ${stat.label === "CPU_LOAD" ? "bg-ansi-gray/60 animate-pulse" : "bg-ansi-yellow"}`}
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          </div>
        ))}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-ansi-gray/70">UPTIME</span>
            <span className="text-ansi-cyan">104d 2h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;
