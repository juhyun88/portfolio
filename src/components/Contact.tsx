import React from 'react';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 여기에 폼 제출 로직 추가
    };

    return (
        <section className="se05 bg-black">
        <div className="contact flex aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
        <div className="imgWrap"><img src="http://mnow.kr/images/main/contact.jpg" alt="" /></div>
        <div className="textWrap">
            <p className="mont title">Contact us</p>
            <form name="frm_ins" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                <ul className="typeTable">
                    <li className="flex_sb">
                        <label><input type="text" className="input_ty1" name="etc_4" maxLength={50} required placeholder="이름 *" autoComplete="off" /></label>
                        
                    </li>
                    <li className="flex_sb">
                        <label><input type="tel" className="input_ty1" name="etc_2" maxLength={50} required placeholder="연락처 *" autoComplete="off" /></label>
                        
                    </li>
                    <li className="flex_sb">
                        <label><input type="text" className="input_ty1" name="subject" maxLength={100} required placeholder="제목 *" autoComplete="off" /></label>
                    </li>
                    <li className="textArea">
                        <label><textarea name="content" id="content_" className="ta_ty1" required placeholder="내용 *"></textarea></label>
                    </li>
                    <li className="inquiry_agree">
                        <label><input type="checkbox" id="user_agree" name="user_agree" value="Y" /><span>개인정보 수집 및 이용에 동의합니다.</span></label>
                        <a href="/policy/privacy.php" className="link">개인정보처리방침</a>
                    </li>
                    <li className="submitBox">
                        <input type="submit" id="button_submit" value="SEND" className="sendBtn mont circleBox mint" />
                    </li>
                </ul>
            </form>
        </div>
    </div>
    </section>
    );
};

export default Contact;