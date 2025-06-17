import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, phone, subject, message } = req.body;
    console.log('받은 값:', { name, phone, subject, message });
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      secure: false,
      auth: {
        user: 'tls839@naver.com',
        pass: 'CJQLBW266LZQ',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    const mailOptions = {
      from: 'tls839@naver.com',
      to: 'tls839@naver.com',
      subject: `💌 [${name}] ${subject}`,
      text: `연락처: ${phone}\n\n${message}`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ success: true, message: '메일이 전송되었습니다.' });
    } catch (error) {
      console.error('메일 전송 오류:', error);  // <- error.message 추가
      res.status(500).send({ success: false, message: '메일 전송 실패', error: error.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
