import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.dataset.cursorHover === 'true'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot follower */}
      <div
        className="fixed pointer-events-none z-[99999] rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '48px' : '10px',
          height: isHovered ? '48px' : '10px',
          backgroundColor: isHovered ? 'rgba(255, 42, 42, 0.25)' : '#ff2a2a',
          border: isHovered ? '1.5px solid #ff2a2a' : 'none',
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
          mixBlendMode: 'difference',
        }}
      />
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[99998] rounded-full transition-all duration-300 ease-out hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.4 : 1})`,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          opacity: isHovered ? 0 : 0.6,
        }}
      />
    </>
  );
};

export default CustomCursor;
