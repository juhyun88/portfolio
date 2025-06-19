

const ProjectFlow = () => {
  return (
    <div className="md:min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 pt-10 pb-20">
      <h2 className="font-pretendard md:text-[100px] text-[40px] mb-6 text-center">📊 PROJECT FLOW</h2>
      <p className="font-pretendard md:text-lg text-[15px] max-w-3xl text-center mb-10">
        이 프로젝트는 Vite + React + TypeScript + TailwindCSS 기반으로 구성되어 있으며,
        아래 다이어그램은 전체 페이지 구조와 데이터 흐름을 시각적으로 나타낸 것입니다.
      </p>

            {/* 이미지 및 GitHub 아이콘 위치 제어 컨테이너 */}
            <div className="md:w-full md:max-w-[1680px] md:mx-auto md:relative">
              {/* 이미지 */}
              <div className="group shadow-xl rounded-xl md:overflow-hidden 
                              md:w-[1680px] md:w-full md:px-4 md:px-0 md:mx-auto mx-0">
                <img
                  src="/dataflow.jpg"
                  alt="프로젝트 데이터 흐름 다이어그램"
                  className="
                    md:w-full
                    md:h-auto
                    md:object-contain
                    transition-transform duration-500 ease-in-out
                    group-hover:scale-105
                  "
                />
              </div>
       




        {/* GitHub 아이콘 - 이미지 바깥 오른쪽 하단 */}
        <a
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute md:bottom-1 md:-right-14 bg-white md:p-2 right-[65px] mt-[20px] rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <img src="/Vector.svg" alt="GitHub" className="md:w-6 md:h-6 w-[40px] h-[40px]" />
        </a>

        {/* 화살표 아이콘 - 이미지 오른쪽 아래 중앙쯤 */}
        <div className="absolute md:bottom-[10px] md:-right-20 text-white md:text-xl text-[40px] right-[15px] mt-[6px] pointer-events-none">
          <i className="bi bi-arrow-right" />
        </div>
      </div>
      </div>
  );
};

export default ProjectFlow;
