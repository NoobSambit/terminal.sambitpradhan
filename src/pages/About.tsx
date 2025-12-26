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

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12">
        {/* Terminal Header */}
        <TerminalHeader activePage="about" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row border-x border-b border-term-border bg-term-panel rounded-b-lg overflow-hidden relative">
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden border-b border-term-border">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-[#0d120d] hover:bg-term-panel/50 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-bold text-ansi-cyan">
                <span className="material-symbols-outlined text-lg">person</span>
                USER_PROFILE
              </span>
              <span className={`material-symbols-outlined text-ansi-gray transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}>
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
