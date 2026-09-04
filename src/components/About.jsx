import { useState } from 'react';
import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [copiedResume, setCopiedResume] = useState(false);

  const skillsData = {
    frontend: [
      { name: 'React 19', level: 'Expert', icon: '⚡' },
      { name: 'TypeScript', level: 'Advanced', icon: '📘' },
      { name: 'Next.js', level: 'Advanced', icon: '▲' },
      { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
      { name: 'Framer Motion', level: 'Advanced', icon: '✨' },
      { name: 'Three.js / WebGL', level: 'Intermediate', icon: '🌐' },
    ],
    backend: [
      { name: 'Node.js', level: 'Expert', icon: '🟢' },
      { name: 'Express / Fastify', level: 'Expert', icon: '🚀' },
      { name: 'MongoDB', level: 'Advanced', icon: '🍃' },
      { name: 'PostgreSQL', level: 'Advanced', icon: '🐘' },
      { name: 'GraphQL & REST', level: 'Advanced', icon: '📡' },
      { name: 'Docker & AWS', level: 'Intermediate', icon: '🐳' },
    ],
    creative: [
      { name: 'Video Editing & Directing', level: 'Expert', icon: '🎬' },
      { name: 'DaVinci Resolve & Premiere', level: 'Expert', icon: '🎞️' },
      { name: 'After Effects & Motion', level: 'Advanced', icon: '💥' },
      { name: 'Sound Design & Mixing', level: 'Advanced', icon: '🎧' },
      { name: 'Color Grading', level: 'Expert', icon: '🌈' },
      { name: 'Blender 3D Concepting', level: 'Intermediate', icon: '🧊' },
    ],
  };

  const handleDownloadCV = () => {
    // Generate simulated download or link
    const element = document.createElement('a');
    const file = new Blob([
      `PRANTO DAS - FULL STACK DEVELOPER & CREATIVE DIRECTOR\n\n` +
      `Email: hello@prantodas.com\n` +
      `Portfolio: https://prantodas.dev\n` +
      `Location: San Francisco, CA & Remote Worldwide\n\n` +
      `SUMMARY:\nFull-stack engineer with 5+ years specializing in high-performance web applications and cinematic creative technology.\n\n` +
      `CORE STACK:\nReact 19, TypeScript, Next.js, Node.js, MongoDB, PostgreSQL, Tailwind CSS, Framer Motion, Video Production.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Pranto_Das_Developer_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 3000);
  };

  return (
    <section id="about" className="bg-[#ff2a2a] pt-28 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge with 3D Tilt Effect */}
        <div className="flex flex-col items-center w-full md:w-[360px] shrink-0 mt-8 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full group perspective-1000">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-7 h-12 bg-gradient-to-b from-gray-200 to-gray-400 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <div className="w-3 h-1 bg-black/40 rounded-full" />
            </div>
            
            {/* Badge Card with hover interactive feel */}
            <div className="bg-neutral-900 border border-neutral-700 w-full max-w-[290px] rounded-2xl p-3.5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 cursor-pointer">
              {/* Cutout Hole */}
              <div className="absolute -top-3.5 left-1/2 w-16 h-6 bg-neutral-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-neutral-700">
                <div className="w-8 h-2 bg-black/60 rounded-full shadow-inner" />
              </div>

              {/* Developer Badge Header */}
              <div className="flex justify-between items-center px-2 pt-2 pb-3 border-b border-neutral-800 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified
                </span>
                <span>ID: PDS-2026</span>
              </div>

              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-800 my-2 relative group-hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-shadow">
                <img 
                  src={stackImage} 
                  alt="Pranto Das Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-left">
                  <p className="text-white font-black text-lg leading-tight">Pranto Das</p>
                  <p className="text-red-400 text-xs font-mono">Full Stack &amp; Reel Director</p>
                </div>
              </div>

              {/* Card Footer Barcode simulated */}
              <div className="flex items-center justify-between px-2 pt-1">
                <div className="flex gap-0.5 items-center h-6 opacity-60">
                  <span className="w-1 h-full bg-white" />
                  <span className="w-0.5 h-full bg-white" />
                  <span className="w-1.5 h-full bg-white" />
                  <span className="w-0.5 h-full bg-white" />
                  <span className="w-2 h-full bg-white" />
                  <span className="w-1 h-full bg-white" />
                  <span className="w-0.5 h-full bg-white" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400">CREATIVE CODE</span>
              </div>
            </div>
          </div>

          {/* Quick Resume Button */}
          <button
            onClick={handleDownloadCV}
            className="mt-8 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-mono font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {copiedResume ? (
              <>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">CV Downloaded!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV / Resume</span>
              </>
            )}
          </button>
        </div>

        {/* Right Side: Bio, Extended Skills Tabs & Logos */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-4 md:mt-0 relative z-20">
          
          {/* Location / Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-black/20 text-xs font-bold text-white mb-4">
            <span>📍 San Francisco, CA &amp; Remote</span>
            <span className="text-black/40">•</span>
            <span className="text-black font-extrabold uppercase text-[10px] tracking-wider">Available Worldwide</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            Design. Code. Direct.
          </h2>

          <p className="text-base md:text-lg font-medium mb-6 leading-relaxed max-w-2xl text-red-50">
            Hi, I’m <span className="text-black font-black uppercase mx-1 underline decoration-black underline-offset-4">Pranto Das</span>. 
            I bridge the gap between heavy software engineering and cinematic visual art. Whether developing ultra-responsive React web apps, architecting reliable APIs, or producing high-impact video reels, I deliver work that turns visitors into brand believers.
          </p>

          {/* Primary Core Logos Row */}
          <div className="flex items-center gap-8 my-6 bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-black/10 max-w-xl">
            <div className="flex items-center gap-6">
              <div className="group flex flex-col items-center gap-1">
                <img 
                  data-aos="zoom-in" data-aos-delay="300"
                  src={reactImage} 
                  alt="React" 
                  className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl" 
                />
                <span className="text-[10px] font-mono text-black font-bold">React 19</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <img 
                  data-aos="zoom-in" data-aos-delay="400"
                  src={nodeImage} 
                  alt="Node.js" 
                  className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl" 
                />
                <span className="text-[10px] font-mono text-black font-bold">Node.js</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <img 
                  data-aos="zoom-in" data-aos-delay="500"
                  src={mongoImage} 
                  alt="MongoDB" 
                  className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl" 
                />
                <span className="text-[10px] font-mono text-black font-bold">MongoDB</span>
              </div>
            </div>

            <div className="hidden sm:block border-l border-black/20 pl-6">
              <p className="text-black font-black text-sm">Full-Stack Mastery</p>
              <p className="text-red-100 text-xs font-medium">Production tested architectures, sub-second load times &amp; responsive UX.</p>
            </div>
          </div>

          {/* Extended Interactive Tech Skills Tabs */}
          <div className="mt-8 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setActiveTab('frontend')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === 'frontend'
                    ? 'bg-black text-white shadow-md'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                Frontend &amp; UI
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === 'backend'
                    ? 'bg-black text-white shadow-md'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                Backend &amp; Cloud
              </button>
              <button
                onClick={() => setActiveTab('creative')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === 'creative'
                    ? 'bg-black text-white shadow-md'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                Creative &amp; Motion
              </button>
            </div>

            {/* Skill Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {skillsData[activeTab].map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-black/25 backdrop-blur-sm border border-black/10 rounded-xl px-3 py-2 flex items-center justify-between hover:bg-black/35 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-xs font-bold text-white">{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-black font-black bg-white/70 px-1.5 py-0.5 rounded">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
