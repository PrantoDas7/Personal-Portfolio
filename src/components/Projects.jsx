import { useState, useEffect, useRef } from 'react';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const projectsData = [
  {
    id: 'hyperion',
    title: 'Hyperion AI — Video Synthesis Platform',
    category: 'fullstack',
    categoryName: 'Full Stack',
    badge: 'Live App',
    metrics: '+180% Engagement',
    duration: '2:15 Reel',
    description: 'An AI-powered video generation suite featuring interactive timeline scrubbers, WebGL preview shaders, and an asynchronous queue-based rendering backend.',
    problem: 'Creators struggled with sluggish rendering workflows and cumbersome desktop software for generative AI video.',
    solution: 'Engineered a reactive React 19 web interface backed by a Node.js microservice cluster, cutting render turnaround by 65%.',
    tech: ['React 19', 'Node.js', 'WebGL', 'Tailwind CSS', 'Redis', 'Python'],
    videoUrl: heroVideo,
    gradient: 'from-purple-900 via-indigo-950 to-black',
    accentColor: '#8b5cf6',
    liveUrl: 'https://example.com/hyperion',
    githubUrl: 'https://github.com/example/hyperion-ai',
  },
  {
    id: 'aura',
    title: 'Aura Soundworks — Spatial Audio Brand Reel',
    category: 'commercial',
    categoryName: 'Commercial / Reels',
    badge: '4K Cinema',
    metrics: '2.4M+ Impressions',
    duration: '1:45 Reel',
    description: 'Full creative direction, shooting, color grading, and spatial audio mastering for an innovative audio engineering studio.',
    problem: 'Aura required a cinematic visual identity that conveyed pure acoustic fidelity through digital screens.',
    solution: 'Designed and shot a high-contrast 4K commercial piece using anamorphic lenses, matched with bespoke sound design and custom Web Audio player.',
    tech: ['DaVinci Resolve', 'Premiere Pro', 'Spatial Audio', 'React', 'Web Audio API'],
    videoUrl: heroVideo,
    gradient: 'from-amber-950 via-red-950 to-black',
    accentColor: '#f59e0b',
    liveUrl: 'https://example.com/aura',
    githubUrl: 'https://github.com/example/aura-soundworks',
  },
  {
    id: 'neon-horizon',
    title: 'Neon Horizon — Interactive 3D Experience',
    category: 'creative',
    categoryName: 'Creative & 3D',
    badge: 'WebGL 60FPS',
    metrics: '< 0.4s First Paint',
    duration: '0:58 Clip',
    description: 'An interactive browser-based 3D cyberpunk cityscape with procedural neon lighting, post-processing bloom, and reactive audio pulses.',
    problem: 'Standard 3D web applications often suffer from steep GPU load and poor mobile battery performance.',
    solution: 'Implemented custom GLSL fragment shaders and instanced mesh rendering in Three.js, achieving locked 60 FPS across desktop and mobile.',
    tech: ['Three.js', 'React', 'GLSL Shaders', 'Framer Motion', 'Vite'],
    videoUrl: heroVideo,
    gradient: 'from-cyan-950 via-blue-950 to-black',
    accentColor: '#06b6d4',
    liveUrl: 'https://example.com/neon-horizon',
    githubUrl: 'https://github.com/example/neon-horizon',
  },
  {
    id: 'pulse-commerce',
    title: 'Pulse — Headless Ultra-Fast E-Commerce',
    category: 'fullstack',
    categoryName: 'Full Stack',
    badge: 'Lighthouse 99',
    metrics: '+140% Conversion',
    duration: '1:20 Demo',
    description: 'Enterprise-tier e-commerce engine with sub-second page transitions, edge-cached product catalogs, and streamlined one-click checkout.',
    problem: 'Client suffered high cart abandonment due to multi-step legacy checkout and slow mobile catalog loads.',
    solution: 'Re-architected the frontend using Next.js with optimistic UI updates and MongoDB aggregation pipelines, speeding checkout by 3.2x.',
    tech: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    videoUrl: heroVideo,
    gradient: 'from-emerald-950 via-teal-950 to-black',
    accentColor: '#10b981',
    liveUrl: 'https://example.com/pulse',
    githubUrl: 'https://github.com/example/pulse-commerce',
  },
  {
    id: 'vortex-identity',
    title: 'Vortex Global — Kinetic Launch Film',
    category: 'commercial',
    categoryName: 'Commercial / Reels',
    badge: 'Featured Work',
    metrics: 'Winner Best Motion 2025',
    duration: '2:30 Reel',
    description: 'A punchy, cinematic launch campaign blending 3D logo deconstruction, dynamic typography kinetics, and live-action tech cinematography.',
    problem: 'A Series-B tech brand needed an impactful reveal for their global product announcement during Keynote 2025.',
    solution: 'Scripted, directed, and composited a high-energy 150-second launch film combining After Effects typography with hyper-detailed sound design.',
    tech: ['After Effects', 'Cinema 4D', 'Sound Design', 'DaVinci Resolve'],
    videoUrl: heroVideo,
    gradient: 'from-rose-950 via-neutral-950 to-black',
    accentColor: '#f43f5e',
    liveUrl: 'https://example.com/vortex',
    githubUrl: 'https://github.com/example/vortex-film',
  },
  {
    id: 'krypton-telemetry',
    title: 'Krypton — Real-Time Financial Telemetry',
    category: 'fullstack',
    categoryName: 'Full Stack',
    badge: 'WebSocket Stream',
    metrics: '10K msgs/sec',
    duration: '1:10 Demo',
    description: 'High-frequency market monitoring console with customizable widget grids, depth charts, and automated threshold alerts.',
    problem: 'Traders needed instant visual feedback on volatility shifts without browser memory leaks during 8-hour sessions.',
    solution: 'Created zero-render chart pipelines with Canvas2D and binary WebSocket payloads, sustaining 60fps throughput indefinitely.',
    tech: ['React 19', 'Node.js', 'WebSockets', 'Canvas API', 'Docker'],
    videoUrl: heroVideo,
    gradient: 'from-blue-950 via-slate-950 to-black',
    accentColor: '#3b82f6',
    liveUrl: 'https://example.com/krypton',
    githubUrl: 'https://github.com/example/krypton-telemetry',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack Web Apps' },
  { id: 'commercial', label: 'Commercial & Reels' },
  { id: 'creative', label: 'Creative 3D & Motion' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  const [isModalMuted, setIsModalMuted] = useState(false);
  const modalVideoRef = useRef(null);

  const toggleModalPlay = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setIsModalPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setIsModalPlaying(false);
      }
    }
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#0c0c0c] text-white py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/10">
      {/* Anchor for #work in case user clicks footer link */}
      <div id="work" className="absolute -top-20" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold mb-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Featured Work &amp; <br />
              <span className="bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent">
                Cinematic Reels
              </span>
            </h2>
          </div>

          <p data-aos="fade-up" data-aos-delay="150" className="text-neutral-400 max-w-md text-sm md:text-base font-medium leading-relaxed">
            Every project is engineered with obsession over performance, modern reactivity, and compelling visual narrative. Click any card to preview the full case study &amp; reel.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap items-center gap-2.5 mb-12 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto hidden lg:inline-block text-xs font-mono text-neutral-500">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => setSelectedProject(project)}
              className="group bg-neutral-900/70 border border-neutral-800 hover:border-red-500/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              {/* Media Preview Box */}
              <div className={`relative w-full aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between`}>
                
                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Top badges */}
                <div className="relative z-10 flex justify-between items-center w-full">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-white/80">
                    {project.duration}
                  </span>
                </div>

                {/* Center Play Graphic on Hover */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto transition-transform duration-500 group-hover:scale-110">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:bg-[#ff2a2a] group-hover:shadow-[0_0_25px_rgba(255,42,42,0.8)] transition-all">
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-2 text-[10px] font-mono tracking-wider uppercase text-white/80 group-hover:text-white font-bold">
                    Watch Reel &amp; Case Study
                  </span>
                </div>

                {/* Bottom Metric Pill */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    ⚡ {project.metrics}
                  </span>
                  <span className="text-[10px] text-white/60 font-mono">
                    {project.categoryName}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2 mb-4 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-neutral-500 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Cinema Modal & Case Study Player */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-fade-in cursor-pointer"
        >
          
          {/* Modal Container */}
          <div 
            className="bg-neutral-950 border border-neutral-800 w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-y-auto shadow-2xl flex flex-col relative cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Bar */}
            <div className="flex justify-between items-center p-5 md:px-8 border-b border-neutral-800 bg-neutral-900/60 sticky top-0 z-30 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-red-600/20 text-red-400 text-xs font-mono font-bold">
                  {selectedProject.categoryName}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white truncate max-w-md">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player Box */}
            <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-neutral-800">
              <video
                ref={modalVideoRef}
                src={selectedProject.videoUrl}
                autoPlay
                loop
                muted={isModalMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Player Controls Overlay */}
              <div className="absolute bottom-4 inset-x-4 flex justify-between items-center bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 z-20">
                <div className="flex items-center gap-3 text-xs font-mono text-white">
                  <span className={`w-2 h-2 rounded-full ${isModalPlaying ? 'bg-red-500 animate-pulse' : 'bg-neutral-500'}`} />
                  <span>{isModalPlaying ? 'PLAYING REEL' : 'PAUSED'}</span>
                  <span className="text-white/40">•</span>
                  <span>{selectedProject.duration}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleModalPlay}
                    className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs text-white font-mono flex items-center gap-1.5 transition-colors"
                  >
                    {isModalPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button
                    onClick={() => setIsModalMuted(!isModalMuted)}
                    className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs text-white font-mono flex items-center gap-1.5 transition-colors"
                  >
                    {isModalMuted ? 'Unmute' : 'Mute'}
                  </button>
                </div>
              </div>
            </div>

            {/* Case Study Deep-Dive */}
            <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
              
              {/* Highlight Metric */}
              <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">Key Business Impact</span>
                  <span className="text-xl md:text-2xl font-black text-emerald-400">{selectedProject.metrics}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Visit Live Site</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/50 border border-neutral-800/80 p-5 rounded-2xl">
                  <h4 className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>⚠️ The Challenge</span>
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800/80 p-5 rounded-2xl">
                  <h4 className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>💡 The Engineering Solution</span>
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                  Technologies &amp; Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-mono text-white font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
