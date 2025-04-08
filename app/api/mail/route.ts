import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

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
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Novo contato de ${data.name}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Serviço de Interesse:</strong> ${data.service}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (mail.accepted) {
      return NextResponse.json({ type: "success" });
    } else {
      return NextResponse.json({ type: "error" });
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ type: "error" });
  }
} 