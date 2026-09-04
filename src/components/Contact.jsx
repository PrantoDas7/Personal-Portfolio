import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Full-Stack Web App',
    message: '',
    permission: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill out your First Name, Email, and Message.');
      return;
    }

    setIsSubmitting(true);
    // Simulate server communication
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: 'Full-Stack Web App',
        message: '',
        permission: true,
      });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@prantodas.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/90 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[88%] lg:w-[78%] p-8 md:p-16 text-white flex flex-col justify-between shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
        >
          {/* Top Bar with Quick Copy & Availability */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/20">
            <div className="text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Initiate Transmission</span>
            </div>

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="px-4 py-1.5 rounded-full bg-black/30 hover:bg-black/50 border border-white/30 text-xs font-mono font-bold flex items-center gap-2 transition-all"
            >
              <span>hello@prantodas.com</span>
              <span className="text-[10px] uppercase bg-white/20 px-2 py-0.5 rounded">
                {copiedEmail ? 'Copied!' : 'Copy'}
              </span>
            </button>
          </div>

          {/* Submitted Success Notice */}
          {isSubmitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-white text-[#ff2a2a] flex items-center justify-center mb-6 shadow-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-3">Transmission Received!</h3>
              <p className="text-white/90 text-sm md:text-base max-w-md font-medium mb-8">
                Thank you for reaching out. I personally review all incoming project proposals and will respond within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 rounded-full bg-black hover:bg-neutral-900 text-white font-bold text-xs font-mono transition-all shadow-lg"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
                
                {/* Left Column: Names & Email */}
                <div className="flex-1 flex flex-col gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="First Name *" 
                      className="w-full bg-transparent border-b border-white/50 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                    />
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/50 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                    />
                  </div>

                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email Address *" 
                      className="w-full bg-transparent border-b border-white/50 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="relative">
                    <label htmlFor="service" className="text-[11px] font-mono uppercase tracking-wider block mb-1 text-white/80">
                      Service Scope
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/50 pb-2 text-base text-white focus:outline-none focus:border-white cursor-pointer font-medium"
                    >
                      <option value="Full-Stack Web App" className="text-black">Full-Stack Web App Development</option>
                      <option value="Commercial Video & Reel" className="text-black">Commercial Video &amp; Reel Direction</option>
                      <option value="Creative WebGL & 3D" className="text-black">Creative WebGL &amp; 3D Experience</option>
                      <option value="Architecture Advisory" className="text-black">Technical Advisory &amp; Code Review</option>
                    </select>
                  </div>
                </div>

                {/* Right Column: Message */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative h-full flex flex-col min-h-[160px]">
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project, timeline, and vision *" 
                      className="w-full h-full min-h-[160px] bg-transparent border-b border-white/50 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                    />
                  </div>

                  {/* Social links bar */}
                  <div className="pt-6 flex items-center gap-4 text-xs font-mono text-white/90">
                    <span className="opacity-70">Direct Connect:</span>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="underline hover:text-black transition-colors">GitHub</a>
                    <span>•</span>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline hover:text-black transition-colors">LinkedIn</a>
                    <span>•</span>
                    <a href="https://x.com" target="_blank" rel="noreferrer" className="underline hover:text-black transition-colors">X (Twitter)</a>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between pt-4 border-t border-white/20">
                {/* Left text */}
                <div className="flex items-start gap-3 text-xs font-medium text-white/90">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    checked={formData.permission}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 rounded-sm border-white/50 bg-transparent text-black focus:ring-white cursor-pointer" 
                    style={{ accentColor: "black" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[320px] leading-relaxed">
                    I agree to receive communications regarding this project inquiry. Strict zero-spam policy.
                  </label>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-10 py-3.5 rounded-full bg-white text-[#ff2a2a] hover:bg-black hover:text-white font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#ff2a2a] border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;
