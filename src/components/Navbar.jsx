import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills & Process', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4 shadow-2xl'
          : isScrolled 
            ? 'backdrop-blur-xl bg-black/75 border-b border-white/10 py-3.5 shadow-2xl' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Brand */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight group flex items-center gap-1">
            <span>Pranto Das</span>
            <span className="text-red-500 group-hover:scale-125 inline-block transition-transform duration-300">.</span>
            <span className="hidden sm:inline-block ml-3 px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-widest bg-white/10 text-white/70 border border-white/10">
              Dev &amp; Reel
            </span>
          </a>
        </div>

        {/* Center: Desktop Menu Links with Active Spy Indicator */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-black/40 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                  isActive 
                    ? 'text-white bg-[#ff2a2a] shadow-[0_0_15px_rgba(255,42,42,0.5)]' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-[#ff2a2a] text-white text-xs font-bold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span>Hire Me</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-5 opacity-100 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold pb-2 border-b border-white/10 transition-colors flex justify-between items-center ${
                activeSection === link.id ? 'text-red-500' : 'text-white/80 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              {activeSection === link.id && (
                <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono">Current</span>
              )}
            </a>
          ))}
          <div className="pt-3 pb-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-colors w-full text-center shadow-lg text-sm"
             >
               Start a Project / Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
