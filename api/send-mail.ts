import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

// Vercel은 dotenv 자동 지원 (환경변수는 Dashboard에서 설정)
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
  }

  const { name, email, message, phone } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: '모든 필드를 입력해주세요.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      to: 'tls839@naver.com',
      replyTo: email,
      subject: `[포트폴리오 문의] ${name}`,
      html: `
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>연락처:</strong> ${phone || '없음'}</p>
        <p><strong>내용:</strong><br/>${message}</p>
      `,
    })

    return res.status(200).json({ success: true, message: '메일이 전송되었습니다.' })
  } catch (error) {
    console.error('메일 전송 오류:', error)
    return res.status(500).json({ error: '메일 전송 중 오류 발생' })
  }
}
