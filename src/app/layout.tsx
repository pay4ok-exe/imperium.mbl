import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

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
        <header className="sticky top-0 z-50 glass-effect border-b border-neutral-200">
          <div className="container mx-auto container-padding">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <span className="text-xl font-bold text-gradient">Imperium.mbl</span>
              </div>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="/" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Главная
                </a>
                <a href="/catalog" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Каталог
                </a>
                <a href="/about" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  О нас
                </a>
                <a href="/contacts" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Контакты
                </a>
              </nav>
              
              <div className="flex items-center gap-4">
                <button className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Корзина (0)
                </button>
              </div>
            </div>
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-neutral-900 text-white section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
                <span className="text-xl font-bold">Imperium.mbl</span>
              </div>
              <p className="text-neutral-400">
                © 2025 Imperium.mbl. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
        
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}