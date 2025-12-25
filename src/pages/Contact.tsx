import ContactHeader from "@/components/terminal/ContactHeader";
import ContactCodeViewer from "@/components/terminal/ContactCodeViewer";
import ContactForm from "@/components/terminal/ContactForm";
import ContactStatusBar from "@/components/terminal/ContactStatusBar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-term-bg font-mono text-ansi-white flex flex-col selection:bg-primary/30 selection:text-ansi-white">
      <ContactHeader activePage="contact" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-term-panel">
        {/* Left Pane: Code Viewer */}
        <ContactCodeViewer />

        {/* Right Pane: Contact Form */}
        <ContactForm />
      </div>

      <ContactStatusBar />
    </div>
  );
};

export default Contact;
