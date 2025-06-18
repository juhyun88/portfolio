const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 이름 or 로고 */}
        <div className="text-lg font-semibold">© 2025 Juhyun Portfolio</div>

        {/* 네비게이션 링크 */}
        <div className="flex space-x-4 text-sm">
        <a href="#project" className="hover:underline">Project</a>
        <a href="#projectflow" className="hover:underline">ProjectFlow</a>
          <a href="#aboutme" className="hover:underline">About</a>
          
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* 소셜 링크 */}
        <div className="flex space-x-4">
        <a href="https://github.com/juhyun88/portfolio" className="morebtn flex items-center space-x-9">
               
                    <img
                        src="/Vector.svg"
                        alt="아이콘"
                        className="w-[33px] h-[33px] invert"
                    />
                   
              
                    </a>
                    <a href="https://vite-react-paw.vercel.app" className="morebtn flex items-center space-x-6">
              
                    <img
                        src="/logowhite.svg"
                        alt="아이콘"
                        className="w-[33px] h-[33px]"
                    />
                
                </a>
                <a href="https://www.i-web.kr/green19/" className="morebtn flex items-center space-x-6">
                   
                    <img
                        src="/viplogo.svg"
                        alt="아이콘"
                        className="w-[33px] h-[33px]"
                    />
                  
                </a>
          {/* 필요시 LinkedIn 등 추가 가능 */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
