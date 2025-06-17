import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
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
      await axios.post('https://portfolio-nine-xi-83.vercel.app/api/contact-241ksd', form);
      alert('문의가 성공적으로 전송되었습니다!');
    } catch (err) {
      alert('이메일 전송 실패');
      console.error(err);
    }
  };

  return (
    <section className="se05 bg-black">
      <div className="contact flex" data-aos="fade-up" data-aos-duration="800">
        <div className="imgWrap">
          <img src="https://mnow.kr/images/main/contact.jpg" alt="" />
        </div>
        <div className="textWrap">
          <p className="mont title">Contact us</p>
          <form onSubmit={handleSubmit}>
            <ul className="typeTable">
              <li className="flex_sb">
                <label>
                  <input
                    type="text"
                    className="input_ty1 text-white placeholder-white"
                    name="name"
                    placeholder="이름 *"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </label>
              </li>
              <li className="flex_sb">
                <label>
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
                <label>
                  <input
                    type="text"
                    className="input_ty1 text-white placeholder-white"
                    name="subject"
                    placeholder="제목 *"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </label>
              </li>
              <li className="textArea">
                <label>
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
              <li className="submitBox">
                <input
                  type="submit"
                  value="SEND"
                  className="sendBtn mont circleBox mint text-white"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
