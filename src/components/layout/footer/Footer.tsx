import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto container-padding">
        {/* Основная часть футера */}
        <div className="grid md:grid-cols-4 gap-8 section-padding">
          {/* О компании */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <span className="text-xl font-bold">Imperium.mbl</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Премиум мебель для вашего идеального дома. Качество, стиль и комфорт в каждом изделии.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Каталог */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Каталог</h3>
            <div className="space-y-3">
              <Link href="/catalog/sofas" className="block text-neutral-400 hover:text-white transition-colors">
                Диваны
              </Link>
              <Link href="/catalog/chairs" className="block text-neutral-400 hover:text-white transition-colors">
                Стулья и кресла
              </Link>
              <Link href="/catalog/tables" className="block text-neutral-400 hover:text-white transition-colors">
                Столы
              </Link>
              <Link href="/catalog/wardrobes" className="block text-neutral-400 hover:text-white transition-colors">
                Шкафы
              </Link>
            </div>
          </div>
          
          {/* Информация */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-neutral-400 hover:text-white transition-colors">
                О компании
              </Link>
              <Link href="/delivery" className="block text-neutral-400 hover:text-white transition-colors">
                Доставка и оплата
              </Link>
              <Link href="/warranty" className="block text-neutral-400 hover:text-white transition-colors">
                Гарантия
              </Link>
              <Link href="/contacts" className="block text-neutral-400 hover:text-white transition-colors">
                Контакты
              </Link>
            </div>
          </div>
          
          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-neutral-400">+7 (777) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-neutral-400">info@imperium.mbl</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-1" />
                <span className="text-neutral-400">
                  г. Алматы, ул. Назарбаева 123
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © 2025 Imperium.mbl. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}