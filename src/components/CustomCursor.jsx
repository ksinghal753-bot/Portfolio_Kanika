import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // default, hover, project, text
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouch());

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Determine what element is hovered
      const target = e.target;
      if (!target) return;

      if (target.closest('[data-cursor="project"]')) {
        setCursorState('project');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor="pointer"]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      ) {
        setCursorState('hover');
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorState === 'hover' ? 0.5 : cursorState === 'project' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      >
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#A855F7]" />
      </motion.div>

      {/* Outer Magnetic Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        animate={{
          x: mousePosition.x - (cursorState === 'project' ? 36 : cursorState === 'hover' ? 24 : 16),
          y: mousePosition.y - (cursorState === 'project' ? 36 : cursorState === 'hover' ? 24 : 16),
          width: cursorState === 'project' ? 72 : cursorState === 'hover' ? 48 : 32,
          height: cursorState === 'project' ? 72 : cursorState === 'hover' ? 48 : 32,
          backgroundColor:
            cursorState === 'project'
              ? 'rgba(139, 92, 246, 0.25)'
              : cursorState === 'hover'
              ? 'rgba(59, 130, 246, 0.15)'
              : 'rgba(139, 92, 246, 0.05)',
          borderColor:
            cursorState === 'project'
              ? 'rgba(168, 85, 247, 0.9)'
              : cursorState === 'hover'
              ? 'rgba(96, 165, 250, 0.8)'
              : 'rgba(139, 92, 246, 0.35)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.2 }}
        style={{
          borderRadius: '50%',
          borderWidth: '1.5px',
          backdropFilter: cursorState === 'project' ? 'blur(4px)' : 'none',
        }}
      >
        {cursorState === 'project' && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase drop-shadow-[0_0_6px_#A855F7]">
            VIEW
          </span>
        )}
      </motion.div>
    </>
  );
}
