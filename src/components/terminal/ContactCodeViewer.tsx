const ContactCodeViewer = () => {
  return (
    <div className="flex-1 lg:border-r border-term-border overflow-y-auto flex flex-col bg-term-panel max-h-full">
      {/* Pane Header */}
      <div className="px-3 sm:px-4 py-2 bg-term-panel/80 border-b border-term-border flex justify-between items-center text-[10px] sm:text-xs text-ansi-gray/60">
        <span className="truncate">user_config.json</span>
        <span>1.2 KB</span>
      </div>

      {/* Code Block */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed flex-1">
        <CodeLine num={1}>
          <span className="text-syntax-comment">// Loading user profile configuration...</span>
        </CodeLine>
        <CodeLine num={2}>
          <span className="text-syntax-keyword">const</span>{" "}
          <span className="text-ansi-white">Profile</span>{" "}
          <span className="text-syntax-keyword">=</span>{" "}
          <span className="text-syntax-func">{"{"}</span>
        </CodeLine>
        <CodeLine num={3} indent={1}>
          <span className="text-syntax-string">"status"</span>:{" "}
          <span className="text-ansi-green">"open_to_work"</span>,
        </CodeLine>
        <CodeLine num={4} indent={1}>
          <span className="text-syntax-string">"location"</span>:{" "}
          <span className="text-ansi-green">"India / Remote-Friendly"</span>,
        </CodeLine>
        <CodeLine num={5} indent={1}>
          <span className="text-syntax-string">"contact_methods"</span>:{" "}
          <span className="text-syntax-func">[</span>
        </CodeLine>
        
        {/* Email Item */}
        <CodeLine num={6} indent={2}>
          <span className="text-syntax-func">{"{"}</span>
        </CodeLine>
        <CodeLine num={7} indent={3}>
          <span className="text-syntax-string">"protocol"</span>:{" "}
          <span className="text-ansi-green">"SMTP"</span>,
        </CodeLine>
        <CodeLine num={8} indent={3}>
          <span className="text-syntax-string">"address"</span>:{" "}
          <span className="text-ansi-green">"sambitpradhan.dev2004@gmail.com"</span>,
        </CodeLine>
        <CodeLine num={9} indent={3}>
          <span className="text-syntax-string">"priority"</span>:{" "}
          <span className="text-syntax-func">true</span>
        </CodeLine>
        <CodeLine num={10} indent={2}>
          <span className="text-syntax-func">{"}"}</span>,
        </CodeLine>

        {/* GitHub Item */}
        <CodeLine num={11} indent={2}>
          <span className="text-syntax-func">{"{"}</span>
        </CodeLine>
        <CodeLine num={12} indent={3}>
          <span className="text-syntax-string">"protocol"</span>:{" "}
          <span className="text-ansi-green">"HTTPS"</span>,
        </CodeLine>
        <CodeLine num={13} indent={3}>
          <span className="text-syntax-string">"platform"</span>:{" "}
          <span className="text-ansi-green">"GitHub"</span>,
        </CodeLine>
        <CodeLine num={14} indent={3}>
          <span className="text-syntax-string">"handle"</span>:{" "}
          <span className="text-ansi-green">"@NoobSambit"</span>
        </CodeLine>
        <CodeLine num={15} indent={2}>
          <span className="text-syntax-func">{"}"}</span>,
        </CodeLine>

        {/* LinkedIn Item */}
        <CodeLine num={16} indent={2}>
          <span className="text-syntax-func">{"{"}</span>
        </CodeLine>
        <CodeLine num={17} indent={3}>
          <span className="text-syntax-string">"protocol"</span>:{" "}
          <span className="text-ansi-green">"HTTPS"</span>,
        </CodeLine>
        <CodeLine num={18} indent={3}>
          <span className="text-syntax-string">"platform"</span>:{" "}
          <span className="text-ansi-green">"LinkedIn"</span>,
        </CodeLine>
        <CodeLine num={19} indent={3}>
          <span className="text-syntax-string">"handle"</span>:{" "}
          <span className="text-ansi-green">"/in/sambit-pradhan"</span>
        </CodeLine>
        <CodeLine num={20} indent={2}>
          <span className="text-syntax-func">{"}"}</span>
        </CodeLine>
        <CodeLine num={21} indent={1}>
          <span className="text-syntax-func">]</span>,
        </CodeLine>
        <CodeLine num={22} indent={1}>
          <span className="text-syntax-string">"availability"</span>:{" "}
          <span className="text-ansi-green">"Internships | Full-Time | Collaborations"</span>
        </CodeLine>
        <CodeLine num={23}>
          <span className="text-syntax-func">{"}"}</span>;
        </CodeLine>
      </div>

      {/* Status Badges */}
      <div className="p-4 sm:p-6 border-t border-term-border bg-term-panel/80 flex flex-wrap gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-ansi-green/10 border border-ansi-green/30 rounded text-[10px] sm:text-xs text-ansi-green font-mono">
          <span className="w-1.5 h-1.5 bg-ansi-green rounded-full animate-pulse"></span>
          Open to Work
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-ansi-cyan/10 border border-ansi-cyan/30 rounded text-[10px] sm:text-xs text-ansi-cyan font-mono">
          <span className="material-symbols-outlined text-[10px] sm:text-xs">public</span>
          India / Remote
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-ansi-magenta/10 border border-ansi-magenta/30 rounded text-[10px] sm:text-xs text-ansi-magenta font-mono">
          <span className="material-symbols-outlined text-[10px] sm:text-xs">work</span>
          Backend • Full Stack • AI
        </span>
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
  const paddingLeft = indent * 16;
  
  return (
    <div className="flex text-ansi-gray/90">
      <span className="w-6 sm:w-8 text-right mr-2 sm:mr-4 text-syntax-comment select-none text-xs sm:text-sm">{num}</span>
      <span style={{ paddingLeft: `${paddingLeft}px` }}>{children}</span>
    </div>
  );
};

export default ContactCodeViewer;
