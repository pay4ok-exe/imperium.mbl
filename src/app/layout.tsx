import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Imperium.mbl - Премиум мебель для вашего дома",
  description: "Качественная мебель из натуральных материалов. Диваны, стулья, столы и шкафы премиум класса с доставкой по Казахстану.",
  keywords: "мебель, диваны, стулья, столы, шкафы, премиум, Казахстан, интерьер",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}