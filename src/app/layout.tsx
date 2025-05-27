import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { LoginForm } from "@/components/auth/login/LoginForm";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "falabella.com",
  description: "Falabella clone, hecho por motivos educativos",
  icons: {
    icon: "https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt3433851e0d3bd3d0/falabella.com@16px.png",
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
        className={`${lato.variable} font-sans antialiased flex space-between flex-col min-h-screen overflow-x-hidden`}
      >
        {children}
        <LoginForm />
      </body>
    </html>
  );
}
