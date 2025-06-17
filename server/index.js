import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact-241ksd', async (req, res) => {
  const { name, phone, subject, message } = req.body;
  console.log('받은 값:', { name, phone, subject, message });

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({ success: false, message: "메일 계정 정보 누락" });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `💌 [${name}] ${subject}`,
    text: `연락처: ${phone}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ 메일 전송 성공');
    res.status(200).send({ success: true, message: '메일이 전송되었습니다.' });
  } catch (error: any) {
    console.error('❌ 메일 전송 오류:', error);
    res.status(500).send({ success: false, message: '메일 전송 실패', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
