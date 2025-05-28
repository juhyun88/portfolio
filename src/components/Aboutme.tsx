

const Aboutme = () => {
    return (
      <section className="se03 bg-black">
        <div className="wrap">
          <dl className="text-center mb-8">
            <dt className="text-subtitle text-gray-700">나를 표현하다</dt>
            <dd className="text-title text-primary">About ME</dd>
          </dl>
        </div>
          {/* ✅ 배경 이미지 + 텍스트 오버레이 영역 */}
          <div
            className="mainVisual relative h-[840px] w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/IMG_2599.JPG')" }}
          >
            {/* ✅ 오버레이: 어두운 배경 필터 (선택사항) */}
            <div className="absolute bg-black/40 z-0"></div>
  
            {/* ✅ 텍스트 콘텐츠 */}
            <div className="relative z-10 flex items-center h-full text-black text-center px-4">
              <p className="mont text-title">
                <span className="block">LIFELONG</span>
                
              </p>
              <div className="relative w-[380px] h-[1px] bg-black items-center left-0 top-3"></div>
                <span className="block mont text-title ml-auto">LEARNER</span>
             
                <div className="absolute top-[calc(58%)] text-black text-center z-10 px-4 max-w-4xl text-description items-center">
                기술 트렌드에 대한 관심과 지속적인 학습
              
            
          </div>
              
            </div>
  
            {/* ✅ 하단 텍스트 */}
            
        </div>
      </section>
    );
  };
  
  export default Aboutme;
  