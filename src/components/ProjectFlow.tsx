

const ProjectFlow = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <h2 className="font-pretendard text-[100px] mb-6 text-center">📊 PROJECT FLOW</h2>
      <p className="font-pretendard text-lg max-w-3xl text-center mb-10">
        이 프로젝트는 Vite + React + TypeScript + TailwindCSS 기반으로 구성되어 있으며,
        아래 다이어그램은 전체 페이지 구조와 데이터 흐름을 시각적으로 나타낸 것입니다.
      </p>

      {/* 이미지 및 GitHub 아이콘 위치 제어 컨테이너 */}
      <div className="w-full max-w-[1680px] relative">
        {/* 이미지 */}
        <div className="group shadow-xl rounded-xl overflow-hidden">
          <img
            src="/dataflow.jpg"
            alt="프로젝트 데이터 흐름 다이어그램"
            className="transition-transform duration-500 ease-in-out group-hover:scale-105 w-full h-auto object-contain"
          />
        </div>

        {/* GitHub 아이콘 - 이미지 바깥 오른쪽 하단 */}
        <a
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-1 -right-14 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <img src="/Vector.svg" alt="GitHub" className="w-6 h-6" />
        </a>

        {/* 화살표 아이콘 - 이미지 오른쪽 아래 중앙쯤 */}
        <div className="absolute bottom-[10px] -right-20 text-white text-xl pointer-events-none">
          <i className="bi bi-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default ProjectFlow;
