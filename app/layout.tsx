import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-dm_sans'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psicologaelianealano.com'),
  title: "Psicóloga Eliane Alano - Vitória/ES",
  description: "A psicóloga Eliane Alano é Psicóloga Clínica com foco em Psicologia Corporal em Vitória/ES",
  keywords: ["Psicoterapia", "Terapia", "Psicologia", "Eliane Alano", "Psicóloga Clínica", "Vitória", "cidade de Vitória", "ES", "Estado do Espírito Santo", "Psicóloga Clínica em Vitória/ES", "Terapia em Vitória/ES", "Psicoterapia em Vitória/ES", "Ansiedade", "Transtornos de ansiedade", "Psicoterapia para ansiedade", "Depressão", "Psicoterapia para depressão", "Autoconhecimento", "Psicoterapia para autoconhecimento", "Desenvolvimento pessoal", "Psicoterapia para desenvolvimento pessoal", "adultos", "Psicoterapia para adultos", "Problemas comportamentais", "Transtorno do Déficit de Atenção", "TDA", "Transtorno do Déficit de Atenção e Hiperatividade", "TDAH", "Psicoterapia para TDAH", "Orientação de pais e responsáveis", "Transtornos do neurodesenvolvimento", "Distúrbios do neurodesenvolvimento", "Transtorno Obsessivo Compulsivo", "TOC", "Traumas", "Transtornos relacionados a traumas", "Distúrbio do sono", "Comportamento alimentar", "Distúrbio alimentar", "Autoestima", "Autocuidado", "Relacionamentos familiares", "relacionamentos interpessoais", "online", "Atendimento online", "presencial", "Atendimento presencial", "Saúde mental", "Qualidade de vida", "Abordagens inovadoras", "Terapia individualizada", "Ambiente acolhedor", "Psicóloga Qualificada", "Psicóloga Empática", "Psicóloga de confiança"],
  openGraph: {
    title: "Psicóloga Eliane Alano - Vitória/ES",
    description: "Psicóloga Clínica com foco em Psicologia Corporal em Vitória/ES",
    url: "https://www.psicologaandreiataufner.com.br",
    siteName: "Psicóloga Eliane Alano",
    images: [
      {
        url: "/openGraphImage.jpeg",
        alt: "Esta é uma fotografia da psicóloga Eliane Alano sentada em uma cadeira de madeira, estofada com um tecido bege claro e com uma almofada vermelha colocada no encosto. Ela está vestindo calças brancas largas e uma blusa verde escura com mangas compridas. Ela tem cabelos castanhos escuros e está sorrindo para a câmera. Ela está sentada de pernas cruzadas, com o braço esquerdo apoiado na cadeira e o braço direito com o cotovelo apoiado na perna e a mão apoiando o queixo. O piso é de madeira de cor clara."
      }
    ],
    locale: "pt-BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} ${poppins.variable} w-full max-w-[1920px] mx-auto bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
