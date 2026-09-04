import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    if (videoRef.current) {
      videoRef.current.muted = false;
    }

    // Attempt to start video with sound after preloader (~2.3s)
    const playTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        }).catch(() => {
          // Browser may require a user gesture for unmuted audio
        });
      }
    }, 2300);

    // On user's first gesture anywhere on the window, ensure audio is unmuted and playing
    const handleFirstGesture = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        if (videoRef.current.paused) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture);
    window.addEventListener('touchstart', handleFirstGesture);
    window.addEventListener('keydown', handleFirstGesture);

    return () => {
      clearTimeout(playTimer);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  const togglePlay = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = isMuted;
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If unmuted playback was restricted, fallback to muted then unmute
          videoRef.current.muted = true;
          videoRef.current.play().then(() => {
            setIsPlaying(true);
            videoRef.current.muted = isMuted;
          });
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      // Auto play if paused when unmuting
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = percentage * videoRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black flex items-end">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 px-6 pb-20 md:pb-16 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full gap-8">
        
        {/* Left Side: Text, Status, and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          
          {/* Live Availability Pill */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-semibold backdrop-blur-md mb-5 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span className="text-white/90">Available for Freelance & Senior Roles</span>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-[1.08]"
          >
            Hi, I’m Pranto Das. <br />
            <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/80 text-sm md:text-lg font-medium mb-6 max-w-lg leading-relaxed drop-shadow-md"
          >
            Merging high-performance software engineering with cinematic visual storytelling. Crafting next-gen web applications, reactive user interfaces, and bespoke motion design.
          </p>

          {/* Key Metrics Strip */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70 mb-8 border-l-2 border-red-500 pl-3"
          >
            <div><span className="text-white font-bold text-sm">5+</span> Yrs Experience</div>
            <span className="text-white/30">•</span>
            <div><span className="text-white font-bold text-sm">40+</span> Shipped Apps</div>
            <span className="text-white/30">•</span>
            <div><span className="text-white font-bold text-sm">100%</span> Client Satisfaction</div>
          </div>

          {/* Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3.5 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects"
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(255,42,42,0.4)] flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact"
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side: Play Video & Sound Controls */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="500"
          className="mt-6 md:mt-0 flex flex-row md:flex-col items-center gap-4 self-start md:self-auto"
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="group flex flex-col items-center gap-2 focus:outline-none"
          >
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
              {!isPlaying ? (
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-[11px] font-mono tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              {!isPlaying ? "Play Reel" : "Pause"}
            </span>
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center gap-2 backdrop-blur-md text-xs font-mono transition-all duration-300"
          >
            {isMuted ? (
              <>
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span className="text-white/80">Unmute</span>
              </>
            ) : (
              <>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-red-400 wave-bar-1" />
                  <span className="w-0.5 bg-red-400 wave-bar-2" />
                  <span className="w-0.5 bg-red-400 wave-bar-3" />
                  <span className="w-0.5 bg-red-400 wave-bar-4" />
                </div>
                <span className="text-red-400 font-semibold">Sound On</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Video Progress Scrubber Bar */}
      <div 
        onClick={handleSeek}
        className="absolute bottom-0 left-0 w-full h-1.5 bg-white/15 cursor-pointer z-30 group"
        title="Seek Video"
      >
        <div 
          className="h-full bg-red-500 relative transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(255,42,42,0.8)]"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        aria-label="Scroll down to about section"
        className="hidden md:flex flex-col items-center absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300 group"
      >
        <div className="animate-bounce p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 group-hover:border-red-500">
          <svg 
            className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;
