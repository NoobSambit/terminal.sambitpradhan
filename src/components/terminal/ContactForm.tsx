import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Will be connected to backend later
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex-1 flex flex-col bg-term-bg">
      {/* Pane Header */}
      <div className="px-4 py-2 bg-term-panel/80 border-b border-term-border flex justify-between items-center text-xs text-ansi-gray/60">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[14px] text-ansi-green">play_arrow</span>
          <span>initiate_contact.sh</span>
        </div>
        <span className="text-ansi-yellow uppercase text-[10px] font-bold border border-ansi-yellow px-1 rounded">
          BASH
        </span>
      </div>

      {/* CLI Form */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-ansi-white tracking-tight flex items-center gap-2">
            <span className="text-primary">&gt;</span> Send Message
          </h1>
          <p className="text-ansi-gray/60 text-sm">Fill out the parameters to execute the send command.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg mt-4">
          {/* Name Field */}
          <div className="group">
            <label className="block text-syntax-string text-xs font-mono mb-1 ml-1">
              // Enter your name identifier
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-ansi-gray/60 font-mono text-sm">$</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-term-panel border border-term-border rounded p-2.5 pl-7 text-sm text-ansi-white font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-ansi-gray/40"
                placeholder="guest_user"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="block text-syntax-string text-xs font-mono mb-1 ml-1">
              // Enter return address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-ansi-gray/60 font-mono text-sm">$</span>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-term-panel border border-term-border rounded p-2.5 pl-7 text-sm text-ansi-white font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-ansi-gray/40"
                placeholder="guest@domain.com"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="group">
            <label className="block text-syntax-string text-xs font-mono mb-1 ml-1">
              // Define packet subject
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-ansi-gray/60 font-mono text-sm">$</span>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-term-panel border border-term-border rounded p-2.5 pl-7 text-sm text-ansi-white font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-ansi-gray/40"
                placeholder="project_inquiry"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="group">
            <label className="block text-syntax-string text-xs font-mono mb-1 ml-1">
              // Input payload data (message)
            </label>
            <div className="relative">
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-term-panel border border-term-border rounded p-3 text-sm text-ansi-white font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-ansi-gray/40"
                placeholder="Type your message stream here..."
                rows={6}
              />
              <div className="absolute bottom-2 right-2 text-[10px] text-ansi-gray/40 pointer-events-none">
                EOF
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-4 text-xs text-ansi-gray/60 font-mono">
              <span className="hover:text-ansi-white cursor-pointer transition-colors">[ --help ]</span>
              <button
                type="button"
                onClick={handleClear}
                className="hover:text-ansi-white cursor-pointer transition-colors"
              >
                [ --clear ]
              </button>
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary text-primary hover:text-ansi-white px-6 py-2.5 rounded text-sm font-bold tracking-wide transition-all overflow-hidden"
            >
              <span className="relative z-10 font-mono flex items-center gap-2">
                [ EXECUTE_SEND ]
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          </div>
        </form>

        {/* Output Simulation */}
        <div className="mt-auto p-3 border border-term-border border-dashed rounded bg-term-bg/50">
          <p className="font-mono text-xs text-ansi-gray/60">
            <span className="text-ansi-green">root@portfolio</span>:
            <span className="text-ansi-cyan">~/contact</span> ${" "}
            <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
