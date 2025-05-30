import { useEffect, useRef, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const sections = ["home", "about", "projects", "contact"];

  const containerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const linkRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (linkRefs.current[index]) {
      const link = linkRefs.current[index];
      const container = containerRef.current;
      const left = link.offsetLeft;
      const width = link.offsetWidth;

      setUnderlineStyle({ left, width, opacity: 1 });
    }
  };

  const handleMouseLeave = () => {
    setUnderlineStyle((style) => ({ ...style, opacity: 0 }));
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative" ref={containerRef}>
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            <span className="text-cyan-400">Kamal</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 relative">
            {sections.map((section, index) => (
              <a
                key={section}
                href={`#${section}`}
                ref={(el) => (linkRefs.current[index] = el)}
                className="text-white font-bold relative z-10 cursor-pointer transition-colors hover:text-cyan-400"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            {/* Sliding underline */}
            <span
              className="absolute bottom-0 h-0.5 bg-cyan-400 rounded transition-all duration-300 ease-in-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                opacity: underlineStyle.opacity,
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
