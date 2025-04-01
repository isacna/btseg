# BTSEG - Assessoria em Segurança do Trabalho

![BTSEG Banner](public/banner.png)

## 📋 Sobre o Projeto

Este é o site institucional da BTSEG - Assessoria em Segurança do Trabalho, desenvolvido com Next.js 14 e Tailwind CSS. O site apresenta informações sobre os serviços de segurança do trabalho e medicina ocupacional oferecidos pela empresa.

### 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)
- [Shadcn/ui](https://ui.shadcn.com/)

## 🖼️ Screenshots

### Página Inicial
![Página Inicial](public/screenshots/home.png)

### Seção de Serviços
![Serviços](public/screenshots/services.png)

### Modal de Detalhes
![Modal](public/screenshots/modal.png)

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/isacna/btseg
cd btseg
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar o servidor de produção:

```bash
npm run start
# ou
yarn start
```

## 📁 Estrutura do Projeto

```
btseg/
├── app/
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── modal.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── about-section.tsx
│   └── contact-section.tsx
├── public/
│   ├── banner.png
│   ├── logo.svg
│   └── whatsapp.svg
└── styles/
    └── globals.css
```
