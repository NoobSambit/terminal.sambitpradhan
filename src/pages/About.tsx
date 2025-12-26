import { useState } from "react";
import TerminalHeader from "@/components/terminal/TerminalHeader";
import StatusBar from "@/components/terminal/StatusBar";
import AboutSidebar from "@/components/terminal/AboutSidebar";
import AboutContent from "@/components/terminal/AboutContent";

const About = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-term-bg text-ansi-white font-mono flex flex-col relative overflow-hidden">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12 mt-12 sm:mt-14 md:mt-16">
        {/* Terminal Header */}
        <TerminalHeader activePage="about" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row border-x border-b border-term-border bg-term-panel rounded-b-lg overflow-hidden relative">
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden border-b border-term-border">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-ansi-cyan/10 via-term-panel to-ansi-cyan/10 hover:from-ansi-cyan/20 hover:to-ansi-cyan/20 transition-all duration-300 border-b border-ansi-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.15)]"
            >
              <span className="flex items-center gap-2 text-sm font-bold text-ansi-cyan animate-pulse">
                <span className="material-symbols-outlined text-lg">person</span>
                TAP TO VIEW PROFILE
              </span>
              <span className={`material-symbols-outlined text-ansi-cyan transition-transform duration-300 text-xl animate-bounce ${sidebarOpen ? 'rotate-180 animate-none' : ''}`}>
                expand_more
              </span>
            </button>
            {sidebarOpen && (
              <div className="animate-fade-in-down max-h-[60vh] overflow-y-auto">
                <AboutSidebar />
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <AboutSidebar />
          </div>

          {/* Right Content Pane */}
          <AboutContent />
        </main>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default About;
