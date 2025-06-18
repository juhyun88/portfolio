import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsChevronDown } from 'react-icons/bs';
import { EffectCoverflow } from 'swiper/modules';
import SwiperCore from 'swiper';

interface InterviewData {
  question: string;
  answer: string;
}

interface PreinterviewProps {
  datainfo: InterviewData[];
  id?: string;
  cls?: string;
}

const Preinterview: React.FC<PreinterviewProps> = ({ datainfo, id, cls }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [maxQHeight, setMaxQHeight] = useState(0);
  const [maxAHeight, setMaxAHeight] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const qRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aRefs = useRef<(HTMLDivElement | null)[]>([]);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    const qHeights = qRefs.current.map(ref => ref?.offsetHeight || 0);
    const aHeights = aRefs.current.map(ref => ref?.offsetHeight || 0);
    setMaxQHeight(Math.max(...qHeights));
    setMaxAHeight(Math.max(...aHeights));
  }, [datainfo]);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div id={id} className={`text-white py-20 ${cls}`}>
      <h3 className="text-3xl font-bold text-center mb-8">사전인터뷰</h3>

      <Swiper
        modules={[EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides
        loop
        grabCursor
        className="px-6"
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
      >
        {datainfo.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => toggleAnswer(i)}
              className={`
                p-5 cursor-pointer transition-all duration-300 ease-in-out
                flex flex-col justify-start h-full transform-gpu
                ${
                  currentSlide === i
                    ? 'bg-gradient-to-br from-[#1f2937] to-[#374151] scale-[1.05] -translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.4)]'
                    : 'bg-[#1f2937] scale-[0.95] translate-y-2 opacity-60'
                }
              `}
            >
              <div
                ref={el => (qRefs.current[i] = el)}
                className="text-lg font-semibold flex items-center justify-between"
                style={{ minHeight: maxQHeight }}
              >
                <span>{item.question}</span>
                <BsChevronDown
                  className={`transition-transform ml-2 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {openIndex === i && (
                <div
                  className="text-sm text-gray-300 mt-3 space-y-1"
                  style={{ minHeight: maxAHeight }}
                  ref={el => (aRefs.current[i] = el)}
                >
                  {item.answer.split('|').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 하단 진행 바 */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
            style={{
              width: `${(100 / datainfo.length) * (currentSlide + 1)}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preinterview;
