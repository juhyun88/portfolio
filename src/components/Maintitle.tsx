const Maintitle = () => {
    return (
        <section className="se02 relative overflow-hidden bg-black text-white py-24">
            {/* 배경 이미지 */}
            

            {/* 타이틀 */}
            <div className="motionTitle text-center z-10 relative">
                <strong className="grad text-5xl md:text-[130px] mt-[150px] font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    "I BUILD INTERFACES"
                </strong>
            </div>

            {/* 설명 */}
            <div className="wrap text-center z-10 relative mx-auto">
                <dl>
                    <dt className="text-2xl md:text-[100px] md:mt-[66px] text-gray-300">
                        FRONTEND DEVELOPMENT
                    </dt>
                    <dd className="mt-4 text-lg md:text-xl leading-relaxed text-gray-400">
                        사용자 중심 UI, 반응형 웹, 인터랙션 중심의 프론트엔드 개발을 지향합니다. <br />
                        <span className="effect">
                            <span className="relative text-white font-[600]">React, TypeScript, TailwindCSS 기반의 퍼포먼스 중심 프로젝트
                            </span>
                        </span> 경험을 바탕으로<br />
                        실제 서비스에 기여할 수 있는 개발자가 되고자 합니다.
                    </dd>
                </dl>

                {/* 버튼 */}
                <div className="grad_btn mt-10 inline-block">
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gray-500 text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span>면접 제안하기</span>
                        <div className="inline-flex items-center ml-2">
                            <i className="xi-angle-right-min"></i>
                            <i className="xi-angle-right-min"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Maintitle;
