import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Felipe Sunakozawa | Portfólio",
  description:
    "Portfólio pessoal de Felipe Sunakozawa, reunindo meus melhores trabalhos em desenvolvimento front-end.",
  openGraph: {
    title: "Felipe Sunakozawa | Portfólio",
    description:
      "Meus melhores trabalhos, projetos reais e experiências em desenvolvimento front-end.",
    url: "https://felipesunakozawa.com",
    siteName: "Felipe Sunakozawa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Felipe Sunakozawa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Sunakozawa | Portfólio",
    description:
      "Meus melhores trabalhos, projetos reais e experiências em desenvolvimento front-end.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
