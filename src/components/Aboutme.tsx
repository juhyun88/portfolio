const Aboutme = () => {
  return (
    <section className="se03 bg-black">
      <div className="wrap">
        <dl className="text-center mb-[40px]">
          <dt className="text-subtitle text-gray-700">나를 표현하다</dt>
          <dd className="text-title text-primary">About ME</dd>
        </dl>
      </div>

      {/*  배경 이미지 + 텍스트 오버레이 영역 */}
      <div
        className="mainVisual relative h-[840px] w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/IMG_2599.JPG')" }}
      >
        {/*  어두운 배경 오버레이 */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/*  텍스트 콘텐츠 */}
        <div className="relative z-10 flex items-center h-full text-black text-center px-4">
          {/* 왼쪽 그룹: LIFELONG + 선 + 설명 */}
          <div className="relative flex items-center">
            <p className="mont text-title text-white">
              <span className="block">LIFELONG</span>
            </p>

            <div className="w-[380px] h-[1px] bg-white mx-4"></div>

            <div
              className="absolute top-1/2 left-1/2 transform translate-x-[97%] translate-y-[15%] text-white text-end z-10 px-4 max-w-4xl text-description"
              style={{ lineHeight: 1.6 }}
            >
              기술 트렌드에 대한 관심과<br />
              지속적인 학습
            </div>
          </div>

          {/* 오른쪽 그룹: LEARNER */}
          <div className="ml-auto">
            <span className="block mont text-title text-white">LEARNER</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutme;
