const ContactCodeViewer = () => {
  return (
    <div className="flex-1 lg:border-r border-term-border overflow-y-auto flex flex-col bg-term-panel max-h-full">
      {/* Pane Header */}
      <div className="px-3 sm:px-4 py-2 bg-term-panel/80 border-b border-term-border flex justify-between items-center text-[10px] sm:text-xs text-ansi-gray/60">
        <span className="truncate">user_config.json</span>
        <span>1.4 KB</span>
      </div>

      {/* Code Block */}
      <div className="p-6 font-mono text-sm leading-relaxed flex-1">
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
          <span className="text-ansi-green">"Remote / Worldwide"</span>,
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
          <span className="text-ansi-green">"hello@developer.com"</span>,
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
          <span className="text-ansi-green">"@dev_portfolio"</span>
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
          <span className="text-ansi-green">"/in/dev_expert"</span>
        </CodeLine>
        <CodeLine num={20} indent={2}>
          <span className="text-syntax-func">{"}"}</span>
        </CodeLine>
        <CodeLine num={21} indent={1}>
          <span className="text-syntax-func">]</span>,
        </CodeLine>
        <CodeLine num={22} indent={1}>
          <span className="text-syntax-string">"availability"</span>:{" "}
          <span className="text-ansi-yellow">checkAvailability</span>
          <span className="text-syntax-func">()</span>
        </CodeLine>
        <CodeLine num={23}>
          <span className="text-syntax-func">{"}"}</span>;
        </CodeLine>
        <CodeLine num={24} />
        <CodeLine num={25}>
          <span className="text-syntax-comment">{"/*"}</span>
        </CodeLine>
        <CodeLine num={26}>
          <span className="text-syntax-comment"> * Execute communication protocols below</span>
        </CodeLine>
        <CodeLine num={27}>
          <span className="text-syntax-comment"> * or parse system config for direct links.</span>
        </CodeLine>
        <CodeLine num={28}>
          <span className="text-syntax-comment"> */</span>
        </CodeLine>
      </div>

      {/* System Stats */}
      <div className="p-6 border-t border-term-border bg-term-panel/80 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-ansi-gray/60 uppercase tracking-widest">System Load</span>
          <div className="h-1 w-full bg-ansi-gray/30 rounded-full overflow-hidden">
            <div className="h-full bg-ansi-green w-[42%]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-ansi-gray/60 uppercase tracking-widest">Memory</span>
          <div className="h-1 w-full bg-ansi-gray/30 rounded-full overflow-hidden">
            <div className="h-full bg-ansi-magenta w-[78%]"></div>
          </div>
        </div>
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
      <span className="w-8 text-right mr-4 text-syntax-comment select-none text-sm">{num}</span>
      <span style={{ paddingLeft: `${paddingLeft}px` }}>{children}</span>
    </div>
  );
};

export default ContactCodeViewer;
