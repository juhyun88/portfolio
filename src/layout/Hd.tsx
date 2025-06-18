import { useEffect, useState } from "react";


function Hd() {
  // ✅ 스크롤 여부만 확인하는 상태
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // 10px 이상이면 적용
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/30 border-b border-gray-300" : ""}
      `}
    >
      <div className="wrap max-w-screen-2xl mx-auto">
        <nav>
          <ul className="menu text-white">
          <li className="d-none">
              <a href="#project" className="text-white hover:text-black transition duration-300">
                PROJECT
              </a>
             
              <ul className="submenu">
           
                <li>
                  <a href="#team" className="text-white hover:text-black transition duration-300">
                    <em></em><span>TEAM</span>
                  </a>
                </li>
                <li>
                  <a href="#personal" className="text-white hover:text-black transition duration-300">
                    <em></em><span>PERSONAL</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
                <a href="#projectflow" className="text-white hover:text-black transition duration-300">
                  PROJECTFLOW
                </a>
              </li>
            <li>
              <a href="#aboutme" className="text-white hover:text-black transition duration-300">
                ABOUTME
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-black transition duration-300">
                CONTACT
              </a>
            </li>
           
            <li>
              <a href="#preinterview" className="text-white hover:text-black transition duration-300">
                PRE-INTERVIEW
              </a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <span>Shin Ju Hyun</span>
        </div>

        <div className="hamWrap">
          <div className="hambtn">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hd;
