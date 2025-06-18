import { useEffect, useState } from "react";

function Hd() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/30 border-b border-gray-300" : ""}
      `}
    >
      <div className="wrap max-w-screen-2xl mx-auto px-4 flex items-center justify-between h-16">
        {/* 왼쪽: 햄버거 (모바일만 보임) */}
        <div className="hamWrap md:hidden" onClick={toggleMenu}>
          <div className="hambtn w-6 h-5 flex flex-col justify-between cursor-pointer">
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
          </div>
        </div>

        {/* 가운데: 메뉴 (PC에서만 보임) */}
        <nav className="hidden md:block">
          <ul className="menu text-white flex gap-6">
            <li className="d-none relative group">
              <a href="#project" className="text-white hover:text-black transition duration-300">
                PROJECT
              </a>
            </li>
            <li><a href="#projectflow" className="text-white hover:text-black transition duration-300">PROJECTFLOW</a></li>
            <li><a href="#aboutme" className="text-white hover:text-black transition duration-300">ABOUTME</a></li>
            <li><a href="#contact" className="text-white hover:text-black transition duration-300">CONTACT</a></li>
            <li><a href="#preinterview" className="text-white hover:text-black transition duration-300">PRE-INTERVIEW</a></li>
          </ul>
        </nav>

        {/* 오른쪽: 로고 (항상 우측) */}
        <div className="logo ml-auto text-white text-lg">
          <span>Shin Ju Hyun</span>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-center gap-6 text-xl z-40 md:hidden">
          <a href="#project" onClick={toggleMenu}>PROJECT</a>
          <a href="#projectflow" onClick={toggleMenu}>PROJECTFLOW</a>
          <a href="#aboutme" onClick={toggleMenu}>ABOUTME</a>
          <a href="#contact" onClick={toggleMenu}>CONTACT</a>
          <a href="#preinterview" onClick={toggleMenu}>PRE-INTERVIEW</a>
        </div>
      )}
    </header>
  );
}

export default Hd;
