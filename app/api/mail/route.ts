import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Schema de validação
const emailSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  service: z.string().min(2).max(100),
  message: z.string().min(10).max(1000),
});

// Lista de palavras proibidas para prevenir spam
const spamKeywords = [
  'viagra', 'casino', 'gambling', 'lottery', 'loan',
  'credit', 'debt', 'insurance', 'investment', 'bitcoin',
  'crypto', 'forex', 'trading', 'porn', 'xxx', 'sex',
  'adult', 'nude', 'naked', 'escort', 'dating', 'hookup',
];

export async function POST(request: NextRequest) {
  try {
    // Verifica o método da requisição
    if (request.method !== 'POST') {
      return NextResponse.json(
        { type: "error", message: "Método não permitido" },
        { status: 405 }
      );
    }

    // Verifica o content-type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { type: "error", message: "Content-Type inválido" },
        { status: 400 }
      );
    }

    // Obtém e valida os dados
    const body = await request.json();
    const validationResult = emailSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { type: "error", message: "Dados inválidos" },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Verifica spam
    const messageContent = `${data.name} ${data.company} ${data.message}`.toLowerCase();
    const hasSpam = spamKeywords.some(keyword => messageContent.includes(keyword));

    if (hasSpam) {
      return NextResponse.json(
        { type: "error", message: "Mensagem contém conteúdo suspeito" },
        { status: 400 }
      );
    }

    // Configura o transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Envia o email
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
      return NextResponse.json(
        { type: "error", message: "Erro ao enviar email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { type: "error", message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
} 