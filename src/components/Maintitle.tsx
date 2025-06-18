const Maintitle = () => {
    return (
        <section className="se02 relative overflow-hidden bg-black text-white py-16 sm:py-24">
            {/* 타이틀 */}
            <div className="motionTitle text-center z-10 relative px-4 sm:px-0">
                <strong className="grad text-3xl sm:text-5xl md:text-[130px] mt-20 sm:mt-[150px] font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent flex flex-col sm:flex-row items-center justify-center gap-2">
                    <svg
                        width="40"
                        height="28"
                        viewBox="0 0 50 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 sm:w-[50px] h-auto"
                    >
                        {/* (생략: SVG path 동일) */}
                    </svg>
                    <span>I BUILD INTERFACES</span>
                    <svg
                        width="40"
                        height="28"
                        viewBox="0 0 50 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 sm:w-[50px] h-auto"
                    >
                        {/* (생략: SVG path 동일) */}
                    </svg>
                </strong>
            </div>

            {/* 설명 */}
            <div className="wrap text-center z-10 relative mx-auto px-4 sm:px-0">
                <dl>
                    <dt className="text-xl sm:text-2xl md:text-[100px] mt-10 sm:mt-[66px] text-gray-300 leading-snug sm:leading-none">
                        FRONTEND DEVELOPMENT
                    </dt>
                    <dd className="mt-4 text-sm sm:text-lg md:text-xl leading-relaxed text-gray-400">
                        사용자 중심 UI, 반응형 웹, 인터랙션 중심의 프론트엔드 개발을 지향합니다. <br />
                        <span className="effect">
                            <span className="relative text-white font-[600]">
                                React, TypeScript, TailwindCSS 기반의 퍼포먼스 중심 프로젝트
                            </span>
                        </span>{' '}
                        경험을 바탕으로
                        <br className="hidden sm:block" />
                        실제 서비스에 기여할 수 있는 개발자가 되고자 합니다.
                    </dd>
                </dl>

                {/* 버튼 */}
                <div className="grad_btn mt-6 sm:mt-10 inline-block">
                    <a
                        href="#contact"
                        className="px-4 py-2 sm:px-6 sm:py-3 border border-gray-500 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
                    >
                        <span>면접 제안하기</span>
                        <div className="inline-flex items-center ml-1 sm:ml-2">
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
