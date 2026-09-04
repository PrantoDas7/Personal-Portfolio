import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Pranto Das delivers that rare hybrid of high-level full-stack engineering and genuine cinematic design sensibility. Our platform conversion doubled within weeks of launch.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Vortex Media Labs",
    rating: 5,
    tag: "Full-Stack & WebGL",
  },
  {
    id: 2,
    quote: "Working with Pranto Das on our commercial brand launch was frictionless. The attention to sound design, frame timing, and responsive web performance is unmatched in the industry.",
    author: "Marcus Vance",
    role: "Creative Director",
    company: "Aura Soundworks",
    rating: 5,
    tag: "Commercial Film & UI",
  },
  {
    id: 3,
    quote: "The React 19 architecture Pranto Das implemented easily handled over 10,000 real-time telemetry events per second without dropping a single frame. An absolute engineering powerhouse.",
    author: "Dr. David Chen",
    role: "CTO & Co-Founder",
    company: "Krypton Global Systems",
    rating: 5,
    tag: "React 19 & WebSockets",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#0e0e0e] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/10">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-neutral-300 uppercase tracking-widest mb-4">
            <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Trusted by Visionary Founders &amp; Directors
          </h2>
        </div>

        {/* Testimonial Card Slider */}
        <div data-aos="zoom-in" className="relative bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-md max-w-3xl mx-auto">
          
          {/* Quote Icon */}
          <div className="text-red-500 text-6xl font-serif leading-none mb-4 select-none opacity-50">
            “
          </div>

          {/* Quote text */}
          <p className="text-lg md:text-2xl font-medium leading-relaxed text-neutral-100 mb-8 min-h-[90px]">
            {current.quote}
          </p>

          {/* Author info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-white tracking-wide">{current.author}</h4>
              <p className="text-xs font-mono text-neutral-400">
                {current.role} • <span className="text-red-400 font-semibold">{current.company}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono">
                {current.tag}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-[#ff2a2a] hover:border-[#ff2a2a] text-white flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-1.5 px-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-6 bg-red-500' : 'w-2 bg-neutral-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-[#ff2a2a] hover:border-[#ff2a2a] text-white flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
