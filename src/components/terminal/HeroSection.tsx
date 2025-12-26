import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="animate-fade-in relative group">
      <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-ansi-gray/20"></div>
      
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-sm mb-4 font-bold">
        <span className="text-ansi-green">sambit-pradhan@dev</span>
        <span className="text-ansi-white">:</span>
        <span className="text-ansi-blue">~</span>
        <span className="text-ansi-white">$</span>
        <span className="text-ansi-yellow">./init_system.sh</span>
        <span className="text-ansi-gray">--verbose</span>
      </div>

      {/* Welcome message */}
      <div className="pl-4 border-l-2 border-ansi-cyan/30 ml-1 py-2">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Building <span className="text-ansi-cyan">Scalable Systems</span>,{" "}
          <span className="text-ansi-magenta">Intelligent Products</span>, and{" "}
          <span className="text-ansi-yellow">Real-World Platforms</span>
        </h1>

        <p className="text-lg md:text-xl text-ansi-gray mb-4 max-w-3xl">
          Full Stack Developer focused on backend engineering, AI-powered applications, and performance-driven systems.
        </p>

        <p className="text-ansi-white/70 mb-8 max-w-4xl text-base md:text-lg leading-relaxed">
          I design and build production-grade web platforms — from hyperlocal marketplaces and AI document systems 
          to fan analytics engines — with a strong emphasis on scalability, clean architecture, and real-world constraints.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a href="#projects">
            <Button className="bg-ansi-cyan hover:bg-ansi-cyan/80 text-black font-bold px-6 py-2 transition-all hover:shadow-[0_0_20px_rgba(139,233,253,0.5)]">
              <span className="material-symbols-outlined text-[18px] mr-2">folder_open</span>
              View Projects
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-ansi-green text-ansi-green hover:bg-ansi-green hover:text-black font-bold px-6 py-2 transition-all">
              <span className="material-symbols-outlined text-[18px] mr-2">download</span>
              Download Resume
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="border-ansi-magenta text-ansi-magenta hover:bg-ansi-magenta hover:text-black font-bold px-6 py-2 transition-all">
              <span className="material-symbols-outlined text-[18px] mr-2">mail</span>
              Contact Me
            </Button>
          </a>
        </div>

        {/* Loading logs */}
        <div className="font-mono text-sm md:text-base space-y-1 mt-8">
          <div className="flex gap-2">
            <span className="text-ansi-gray">[10:04:23]</span>
            <span className="text-ansi-blue">INFO</span>
            <span className="text-ansi-white/80">Loading modules: Backend_Engineering...</span>
            <span className="text-ansi-green font-bold">DONE</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ansi-gray">[10:04:24]</span>
            <span className="text-ansi-blue">INFO</span>
            <span className="text-ansi-white/80">Loading modules: AI_Integration...</span>
            <span className="text-ansi-green font-bold">DONE</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ansi-gray">[10:04:25]</span>
            <span className="text-ansi-blue">INFO</span>
            <span className="text-ansi-white/80">Loading modules: System_Architecture...</span>
            <span className="text-ansi-green font-bold">DONE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
