import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ["400", "700"], // Include weights you might use
  variable: "--font-merriweather" 
});

export const metadata: Metadata = {
  title: "Mentoria Especializada MP-MA | Prof. Leonardo Aquino",
  description: "Otimize seu tempo e maximize seus acertos no concurso do MP-MA com a mentoria de resultado do Prof. Leonardo Aquino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="bg-background text-text-light font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
