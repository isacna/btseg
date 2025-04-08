import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface EmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const data: EmailData = await request.json();

  // Configuração do transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });


  const mail = await transporter.sendMail({
    from: 'contato@example.com',
    to: 'contato@example.com',
    subject: 'Contato do site',
    text: `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\nServiço: ${data.service}\nMensagem: ${data.message}`,
  });

  if(mail.accepted) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }

} 