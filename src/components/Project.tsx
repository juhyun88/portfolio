import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

 
            
            function Program() {
                const fadeInLeft1 = useScrollFadeIn("left", 1.2, 0);
                const fadeInLeft2 = useScrollFadeIn("left", 1.2, 0.3);

                return (
                    <div>
                        <section className="se04">
                <div className="wrap">

                    <dl>
                        <dt>PawFectWave & VIP</dt>
                        <dd >PROJECT</dd>
                    </dl>

                    <article className="bx _1"  {...fadeInLeft1}>
                        <span className="linetop" ></span>
                        <div className="obj">
                            <img src="https://juhyun88.github.io/pawfect-wave-dothome/icon.png" alt="object" />
                        </div>

                        <div className="lbx">
                            <dl>
                               
                                <dd >PawFectWave</dd>
                            </dl>
                            <strong >장례서비스</strong>
                            <a href="https://vite-react-paw.vercel.app" className="morebtn group">
                                <span>Learn more</span>
                                <i className="xi-long-arrow-right text-white group-hover:text-black transition-colors duration-300"></i>
                            </a>

                            <img src="https://www.inzent-iss.com/asset/img/main/se04_star_purple.png" alt="object"></img>
                        </div>

                        <div className="rbx">
                            <ul className="sessions">
                                <li >
                                    <span>SESSION 01</span>
                                    <dl>
                                        <dt>추억의시작</dt>
                                        <dd>소중한 반려동물과의 마지막 순간, 진심을 담아 준비합니다.</dd>
                                    </dl>
                                </li>
                                <li >
                                    <span>SESSION 02</span>
                                    <dl>
                                        <dt>정성의 의식</dt>
                                        <dd>전문가의 세심한 장례 절차로 반려동물의 평안을 기원합니다.</dd>
                                    </dl>
                                </li>
                                <li >
                                    <span>SESSION 03</span>
                                    <dl>
                                        <dt>기억의 공간</dt>
                                        <dd>영원히 간직할 수 있도록 메모리얼 공간을 제공합니다.</dd>
                                    </dl>
                                </li>
                            </ul>


                        </div>
                    </article>

                    <article className="bx _2" {...fadeInLeft2}>
                        <span className="linetop" ></span>
                        <div className="obj">
                            <img src="/vip.jpg" alt="object" />
                        </div>

                        <div className="lbx">
                            <dl>
                               
                                <dd >VIP 동물의료센터</dd>
                            </dl>
                            <strong >동물의료센터</strong>
                            <a href="https://www.i-web.kr/green19/" className="morebtn" >
                                <span>Learn more</span>
                                <i className="xi-long-arrow-right"></i>
                            </a>
                            <img src="https://www.inzent-iss.com/asset/img/main/se04_star_yellow.png" alt="object" />
                        </div>

                        <div className="rbx">
                            <ul className="sessions">
                                <li >
                                    <span>SESSION 01</span>
                                    <dl>
                                        <dt>전문 의료진 케어</dt>
                                        <dd>국내 최고 수준의 수의사들이 정밀 진단과 맞춤 치료를 제공합니다.</dd>
                                    </dl>
                                </li>
                                <li >
                                    <span>SESSION 02</span>
                                    <dl>
                                        <dt>첨단 진료 시스템</dt>
                                        <dd>최신 의료 장비와 스마트 시스템으로 정확하고 빠른 진료를 실현합니다.</dd>
                                    </dl>
                                </li>
                                <li >
                                    <span>SESSION 03</span>
                                    <dl>
                                        <dt>평생 건강관리 프로그램</dt>
                                        <dd>예방부터 회복까지, 반려동물의 생애주기에 맞춘 통합 관리 서비스를 제공합니다.</dd>
                                    </dl>
                                </li>
                            </ul>


                        </div>
                        <span className="linetop _b" ></span>
                    </article>

                </div>
            </section>
                    </div>
                );
            }
            
            export default Program;