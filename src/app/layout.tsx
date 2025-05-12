import type { Metadata } from "next";
import { Martel, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({});
const martel = Martel({ weight: "700", variable: "--font-martel" });
const poppins = Poppins({ weight: "400", variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title:
    "Gabriel Cansanção - Advogado Especialista em Direito Médico e da Saúde.",
  description:
    "Gabriel Cansanção é um Advogado Especialista em Direito Médico e da Saúde, oferecendo consultoria jurídica personalizada e representação em litígios.",
  openGraph: {
    title:
      "Gabriel Cansanção - Advogado Especialista em Direito Médico e da Saúde.",
    description:
      "Gabriel Cansanção é um Advogado Especialista em Direito Médico e da Saúde, oferecendo consultoria jurídica personalizada e representação em litígios.",
    url: "https://localhost:3000/",
    siteName: "Gabriel Cansanção",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Cansanção - Advogado Especialista em Direito Médico e da Saúde",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scrollbar scrollbar-track-transparent scrollbar-thumb-brand-400 scrollbar-thumb-rounded-full scroll-smooth"
    >
      <body
        className={`${openSans.className} ${martel.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
