import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [typedCommand, setTypedCommand] = useState("");
  const [showLogs, setShowLogs] = useState([false, false, false]);
  
  const command = "./init_system.sh --verbose";
  
  useEffect(() => {
    // Typing animation for command
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= command.length) {
        setTypedCommand(command.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Show logs sequentially after typing completes
        setTimeout(() => setShowLogs([true, false, false]), 300);
        setTimeout(() => setShowLogs([true, true, false]), 800);
        setTimeout(() => setShowLogs([true, true, true]), 1300);
      }
    }, 50);
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const logs = [
    { module: "Backend_Engineering", delay: "stagger-1" },
    { module: "AI_Integration", delay: "stagger-2" },
    { module: "System_Architecture", delay: "stagger-3" },
  ];

  return (
    <section className="relative group px-2 sm:px-0">
      <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ansi-cyan/50 via-ansi-magenta/50 to-ansi-yellow/50 animate-glow hidden sm:block"></div>
      
      {/* Command prompt */}
      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-3 sm:mb-4 font-bold opacity-0 animate-fade-in-up overflow-x-auto">
        <span className="text-ansi-green text-glow-green whitespace-nowrap">sambit@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow whitespace-nowrap">{typedCommand}</span>
        <span className={`text-ansi-cyan ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▋</span>
      </div>

      {/* Welcome message */}
      <div className="pl-2 sm:pl-4 border-l-2 border-ansi-cyan/30 ml-0 sm:ml-1 py-2">
        {/* Profile Photo + Intro */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 opacity-0 animate-fade-in-up stagger-1">
            <div className="absolute inset-0 border-2 border-ansi-cyan rounded-full animate-pulse opacity-50"></div>
            <div className="absolute inset-1 bg-term-panel rounded-full overflow-hidden border border-term-border">
              <img src={profilePhoto} alt="Sambit" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-ansi-green rounded-full border-2 border-term-bg"></div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-white opacity-0 animate-fade-in-up stagger-2">
              Building <span className="text-ansi-cyan text-glow-cyan transition-all duration-300 hover:scale-105 inline-block">Scalable Systems</span>,{" "}
              <span className="text-ansi-magenta text-glow-magenta transition-all duration-300 hover:scale-105 inline-block">Intelligent Products</span>, and{" "}
              <span className="text-ansi-yellow text-glow-yellow transition-all duration-300 hover:scale-105 inline-block">Real-World Platforms</span>
            </h1>
          </div>
        </div>

        <p className="text-sm sm:text-lg md:text-xl text-ansi-gray mb-3 sm:mb-4 max-w-3xl opacity-0 animate-fade-in-up stagger-3">
          Full Stack Developer focused on backend engineering, AI-powered applications, and performance-driven systems.
        </p>

        <p className="text-ansi-white/70 mb-6 sm:mb-8 max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed opacity-0 animate-fade-in-up stagger-4">
          I design and build production-grade web platforms — from hyperlocal marketplaces and AI document systems 
          to fan analytics engines — with a strong emphasis on scalability, clean architecture, and real-world constraints.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 opacity-0 animate-fade-in-up stagger-5">
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-ansi-cyan hover:bg-ansi-cyan/80 text-black font-bold px-4 sm:px-6 py-2.5 sm:py-2 btn-glow transition-all hover:shadow-[0_0_30px_rgba(139,233,253,0.6)] hover:scale-105 text-sm sm:text-base">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] mr-2">folder_open</span>
              View Projects
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-ansi-green text-ansi-green hover:bg-ansi-green hover:text-black font-bold px-4 sm:px-6 py-2.5 sm:py-2 btn-glow transition-all hover:shadow-[0_0_30px_rgba(80,250,123,0.4)] hover:scale-105 text-sm sm:text-base">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] mr-2">download</span>
              Download Resume
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-ansi-magenta text-ansi-magenta hover:bg-ansi-magenta hover:text-black font-bold px-4 sm:px-6 py-2.5 sm:py-2 btn-glow transition-all hover:shadow-[0_0_30px_rgba(255,121,198,0.4)] hover:scale-105 text-sm sm:text-base">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] mr-2">mail</span>
              Contact Me
            </Button>
          </a>
        </div>

        {/* Loading logs with staggered animation */}
        <div className="font-mono text-xs sm:text-sm md:text-base space-y-1 mt-6 sm:mt-8 overflow-x-auto">
          {logs.map((log, index) => (
            <div 
              key={log.module}
              className={`flex gap-1 sm:gap-2 transition-all duration-500 whitespace-nowrap ${showLogs[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              <span className="text-ansi-gray">[10:04:{23 + index}]</span>
              <span className="text-ansi-blue">INFO</span>
              <span className="text-ansi-white/80 hidden sm:inline">Loading modules: {log.module}...</span>
              <span className="text-ansi-white/80 sm:hidden">{log.module}...</span>
              <span className={`text-ansi-green font-bold ${showLogs[index] ? 'animate-scale-in' : 'opacity-0'}`}>DONE</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
