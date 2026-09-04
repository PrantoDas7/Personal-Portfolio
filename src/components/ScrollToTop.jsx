import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-2xl group"
      >
        {/* Circular Progress Bar */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="text-white/10"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="text-red-500 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Arrow Icon */}
        <svg
          className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
