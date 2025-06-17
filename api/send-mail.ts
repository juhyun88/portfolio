// api/send-mail.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

// Vercel은 dotenv 자동 지원 (환경변수는 Dashboard에서 설정)
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST 요청만 허용됩니다.' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: '모든 필드를 입력해주세요.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Naver',
      host: 'smtp.naver.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'tls839@naver.com',
      subject: `[포트폴리오 문의] ${name}`,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    })

    return res.status(200).json({ success: true, message: '메일이 전송되었습니다.' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: '메일 전송 중 오류 발생' })
  }
}
