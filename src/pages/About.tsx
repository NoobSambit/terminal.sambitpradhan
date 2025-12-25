import TerminalHeader from "@/components/terminal/TerminalHeader";
import StatusBar from "@/components/terminal/StatusBar";
import AboutSidebar from "@/components/terminal/AboutSidebar";
import AboutContent from "@/components/terminal/AboutContent";

const About = () => {
  return (
    <div className="min-h-screen bg-term-bg text-ansi-white font-mono flex flex-col relative overflow-hidden">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 md:p-6 lg:h-screen lg:max-h-screen">
        {/* Terminal Header */}
        <TerminalHeader activePage="about" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row border-x border-b border-term-border bg-term-panel rounded-b-lg overflow-hidden relative">
          {/* Left Sidebar */}
          <AboutSidebar />

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
