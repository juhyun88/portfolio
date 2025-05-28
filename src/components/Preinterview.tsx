import React, { useState } from 'react';

import { AccordionBody } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';

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
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setActiveKey(prev => (prev === key ? null : key));
  };

  return (
    <div id={id} className={cls}>
      <h3 className="section-title text-center mt-5 pt-5 text-white">사전인터뷰</h3>
      <div className="accordion-custom">
        {datainfo.map((v, i) => {
          const key = i.toString();
          const isActive = activeKey === key;

          return (
            <div className="accordion-item border mb-2 rounded" key={key}>
              <button
                className="accordion-header-custom w-100 text-start px-4 py-3 d-flex align-items-center"
                onClick={() => toggleAccordion(key)}
              >
                <span className="flex-grow-1">{v.question}</span>
                <BsChevronDown
                  className={`arrow-icon transition-transform ${
                    isActive ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isActive && (
                <AccordionBody className="px-4 pb-3">
                  {v.answer.split('|').map((vv, ii) => (
                    <span className="d-lg-block" key={ii}>
                      {vv}
                    </span>
                  ))}
                </AccordionBody>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preinterview;
