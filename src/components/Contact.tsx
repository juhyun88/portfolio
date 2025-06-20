import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-mail', form);
      alert('메일이 전송되었습니다!');
    } catch (err) {
      alert('이메일 전송 실패');
      console.error(err);
    }
  };

  return (
    <section className="se05 bg-black">
      <div className="contact flex md:flex-row flex-col" data-aos="fade-up" data-aos-duration="800">
        <div className="imgWrap md:w-[50%] w-[100%] mb-[85px]">
          <img src="/contact.jpg" alt="" />
        </div>
        <div className="textWrap md:w-[50%]">
          <p className="mont title">Contact us</p>
          <form onSubmit={handleSubmit}>
            <ul className="typeTable">
              <li className="flex_sb">
                <label className='w-[100%]'>
                  <input
                    type="text"
                    className="input_ty1 text-white placeholder-white "
                    name="name"
                    placeholder="이름 *"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </label>
              </li>
              <li className="flex_sb">
              <label className='w-[100%]'>
                <input
                  type="email"
                  className="input_ty1 text-white placeholder-white"
                  name="email" // ✅ name="email" 반드시 포함
                  placeholder="이메일 *"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
              </label>
            </li>
              <li className="flex_sb">
                <label className='w-[100%]'>
                  <input
                    type="tel"
                    className="input_ty1 text-white placeholder-white"
                    name="phone"
                    placeholder="연락처 *"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </label>
              </li>
              <li className="flex_sb">
                <label className='w-[100%]'>
                  <input
                    type="text"
                    className="input_ty1 text-white placeholder-white"
                    name="subject"
                    placeholder="제목 *"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </label >
              </li>
              <li className="textArea">
                <label className='w-[100%]'>
                  <textarea
                    name="message"
                    className="ta_ty1"
                    placeholder="내용 *"
                    required
                    onChange={handleChange}
                  ></textarea>
                </label>
              </li>
              <li className="inquiry_agree">
                <label>
                  <input type="checkbox" name="user_agree" value="Y" required />
                  <span className="text-white">개인정보 수집 및 이용에 동의합니다.</span>
                </label>
                <a href="/policy/privacy.php" className="link text-white">
                  개인정보처리방침
                </a>
              </li>
              <div className="submitBox grad_btn mt-10 flex justify-center">
                <button
                  type="submit"
                  className="relative flex items-center justify-end w-[272px] px-[25px] py-[30px] box-border border border-gray-500 overflow-hidden transition duration-400 group"
                >
                  {/* 그라디언트 배경 (hover 시 오른쪽으로 슬라이드) */}
                  <span className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 z-0 bg-gradient-to-r from-[#b31ff1] to-[#d56d92]"></span>

                  {/* 버튼 텍스트 */}
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white text-[20px] font-light z-10">
                    보내기
                  </span>

                  {/* 아이콘 */}
                  <div className="inline-flex items-center ml-2 z-10">
                    <i className="xi-angle-right-min text-white group-hover:text-black transition duration-300"></i>
                    <i className="xi-angle-right-min text-white group-hover:text-black transition duration-300"></i>
                  </div>
                </button>
              </div>

            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
