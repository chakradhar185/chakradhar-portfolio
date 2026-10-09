import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link cleanly
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Trigger mailto link in browser
    window.location.href = `mailto:chakradharmandadapu@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Feel free to reach out for internship opportunities, hackathons, AI & ML projects, or software engineering discussions.
          </p>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              href="mailto:chakradharmandadapu@gmail.com"
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:scale-[1.01] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-cyan-400 light:text-indigo-600" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block">
                  Email Address
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  chakradharmandadapu@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:8341490409"
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:scale-[1.01] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-indigo-400 light:text-cyan-600" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block">
                  Phone Number
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                  +91 8341490409
                </span>
              </div>
            </a>

            {/* Social Connect Buttons */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <span className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 block">
                Connect via Social Profiles:
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/chakradhar185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/50 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/chakradhar-mandadapu-639671370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-sky-500/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6">
              Send a Direct Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>Your email client has been opened to dispatch the message!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
