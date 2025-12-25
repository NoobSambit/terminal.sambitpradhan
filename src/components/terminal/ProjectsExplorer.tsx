interface FileItem {
  name: string;
  type: "folder" | "file";
  icon: string;
  color: string;
  expanded?: boolean;
  children?: FileItem[];
  onClick?: () => void;
}

interface ProjectsExplorerProps {
  onFileClick?: (fileName: string) => void;
}

const ProjectsExplorer = ({ onFileClick }: ProjectsExplorerProps) => {
  const fileTree: FileItem[] = [
    {
      name: "portfolio",
      type: "folder",
      icon: "expand_more",
      color: "text-ansi-cyan",
      expanded: true,
      children: [
        { name: "assets", type: "folder", icon: "folder", color: "text-ansi-yellow" },
        { name: "components", type: "folder", icon: "folder", color: "text-ansi-yellow" },
        {
          name: "projects",
          type: "folder",
          icon: "expand_more",
          color: "text-ansi-cyan",
          expanded: true,
          children: [
            { name: "chatbot.js", type: "file", icon: "javascript", color: "text-ansi-magenta" },
            { name: "dashboard.html", type: "file", icon: "html", color: "text-ansi-cyan" },
            { name: "finance.css", type: "file", icon: "css", color: "text-ansi-yellow" },
          ],
        },
      ],
    },
  ];

  const renderFileItem = (item: FileItem, depth: number = 0) => {
    const paddingLeft = depth * 16;

    if (item.type === "folder") {
      return (
        <li key={item.name}>
          <div
            className="flex items-center gap-2"
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
            <span className={`material-symbols-outlined text-sm ${item.color}`}>
              {item.icon}
            </span>
            <span className={item.expanded ? "text-ansi-white font-bold" : "text-ansi-gray"}>
              {item.name}
            </span>
          </div>
          {item.expanded && item.children && (
            <ul className="space-y-2">
              {item.children.map((child) => renderFileItem(child, depth + 1))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li
        key={item.name}
        className="flex items-center gap-2 text-ansi-gray/60 hover:text-ansi-white cursor-pointer hover:bg-ansi-gray/10 rounded px-1 -ml-1 transition-colors"
        style={{ paddingLeft: `${paddingLeft + 20}px` }}
        onClick={() => onFileClick?.(item.name)}
      >
        <span className={`material-symbols-outlined text-sm ${item.color}`}>
          {item.icon}
        </span>
        <span>{item.name}</span>
      </li>
    );
  };

  return (
    <div className="border border-term-border bg-term-panel/50 p-4 rounded-lg">
      <div className="flex justify-between items-center border-b border-term-border pb-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-ansi-gray/60">
          EXPLORER
        </span>
        <span className="material-symbols-outlined text-xs text-ansi-gray/60">
          folder_open
        </span>
      </div>
      <ul className="text-sm space-y-2 font-mono text-ansi-gray/80">
        {fileTree.map((item) => renderFileItem(item))}
      </ul>
    </div>
  );
};

export default ProjectsExplorer;
