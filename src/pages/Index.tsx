import TerminalHeader from "@/components/terminal/TerminalHeader";
import HeroSection from "@/components/terminal/HeroSection";
import AboutSection from "@/components/terminal/AboutSection";
import SkillsSection from "@/components/terminal/SkillsSection";
import ProjectsSection from "@/components/terminal/ProjectsSection";
import ContactSection from "@/components/terminal/ContactSection";
import CommandInput from "@/components/terminal/CommandInput";
import StatusBar from "@/components/terminal/StatusBar";

const Index = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-term-bg text-term-fg font-mono overflow-x-hidden selection:bg-ansi-magenta selection:text-white">
      {/* CRT effects */}
      <div className="scanlines"></div>
      <div className="crt-flicker"></div>

      {/* Main layout */}
      <div className="layout-container flex h-full grow flex-col relative z-10 bg-grid-pattern">
        <TerminalHeader />

        <main className="flex-1 justify-center py-8 px-4 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-16">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <CommandInput />
          </div>
        </main>

        <StatusBar />
      </div>
    </div>
  );
};

export default Index;
