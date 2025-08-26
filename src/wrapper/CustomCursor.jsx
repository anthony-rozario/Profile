import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      if (!isVisible) {
        // Reset follower position immediately when re-entering
        setFollowerPos(newPos);
        setIsVisible(true);
      }


      const target = e.target;
      // Check if the target is a button or a child of a button
      // If the target is a button or a child of a button, set isHoveringButton to true
      // Otherwise, set it to false
      // This will ensure that the follower size changes only when hovering over a button
      const buttonsLinks = target.tagName === 'BUTTON' || target.closest('button') || target.tagName === 'A' || target.closest('a');
      if ((mousePos.x === followerPos.x && mousePos.y === followerPos.y) && buttonsLinks) {
        setIsHoveringButton(true);
      } else {
        setIsHoveringButton(false);
      }


    };

    



    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth follower animation
  useEffect(() => {
    let animationFrameId;

    const follow = () => {
      setFollowerPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      {/* Red Dot */}
      <div
        style={{
          position: 'fixed',
          top: mousePos.y,
          left: mousePos.x,
          width: '14px',
          height: '14px',
          backgroundColor: isHoveringButton ? 'green' : 'red',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Gray Follower */}
      <div
        style={{
          position: 'fixed',
          top: followerPos.y,
          left: followerPos.x,
          width: isHoveringButton ? '32px' : '16px',
          height: isHoveringButton ? '32px' : '16px',
          backgroundColor: 'rgba(128, 128, 128, 0.3)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
}
