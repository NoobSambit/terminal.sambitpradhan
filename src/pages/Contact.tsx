import TerminalHeader from "@/components/terminal/TerminalHeader";
import ContactCodeViewer from "@/components/terminal/ContactCodeViewer";
import ContactForm from "@/components/terminal/ContactForm";
import StatusBar from "@/components/terminal/StatusBar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-term-bg font-mono text-ansi-white flex flex-col relative overflow-hidden selection:bg-primary/30 selection:text-ansi-white">
      {/* CRT Effects */}
      <div className="pointer-events-none fixed inset-0 z-50 scanline opacity-20"></div>
      <div className="pointer-events-none fixed inset-0 z-40 crt-flicker"></div>

      <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6 pb-12">
        <TerminalHeader activePage="contact" />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row border-x border-b border-term-border bg-term-panel rounded-b-lg overflow-hidden relative">
          {/* Left Pane: Code Viewer - Hidden on mobile */}
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
