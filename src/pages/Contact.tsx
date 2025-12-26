import { useState } from "react";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import ContactCodeViewer from "@/components/terminal/ContactCodeViewer";
import ContactForm from "@/components/terminal/ContactForm";
import StatusBar from "@/components/terminal/StatusBar";

const Contact = () => {
  const [codeViewerOpen, setCodeViewerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-term-bg font-mono text-ansi-white flex flex-col relative overflow-hidden selection:bg-primary/30 selection:text-ansi-white">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12">
        <TerminalHeader activePage="contact" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row border-x border-b border-term-border bg-term-panel rounded-b-lg overflow-hidden relative">
          {/* Mobile Code Viewer Toggle */}
          <div className="lg:hidden border-b border-term-border">
            <button
              onClick={() => setCodeViewerOpen(!codeViewerOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-ansi-cyan/10 via-term-panel to-ansi-cyan/10 hover:from-ansi-cyan/20 hover:to-ansi-cyan/20 transition-all duration-300 border-b border-ansi-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.15)]"
            >
              <span className="flex items-center gap-2 text-sm font-bold text-ansi-cyan animate-pulse">
                <span className="material-symbols-outlined text-lg">code</span>
                TAP TO VIEW CONFIG
              </span>
              <span className={`material-symbols-outlined text-ansi-cyan transition-transform duration-300 text-xl animate-bounce ${codeViewerOpen ? 'rotate-180 animate-none' : ''}`}>
                expand_more
              </span>
            </button>
            {codeViewerOpen && (
              <div className="animate-fade-in-down max-h-[50vh] overflow-y-auto border-b border-term-border">
                <ContactCodeViewer />
              </div>
            )}
          </div>

          {/* Desktop Code Viewer */}
          <div className="hidden lg:block lg:w-1/2">
            <ContactCodeViewer />
          </div>

          {/* Right Pane: Contact Form */}
          <ContactForm />
        </main>
      </div>

      <StatusBar />
    </div>
  );
};

export default Contact;
