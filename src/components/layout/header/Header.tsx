'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-neutral-200">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 hover-scale">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold gradient-text">Imperium.mbl</span>
          </Link>
          
          {/* Поиск - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
              <Input
                placeholder="Поиск товаров..."
                className="pl-10 bg-neutral-50 border-neutral-200 focus:bg-white"
              />
            </div>
          </div>
          
          {/* Навигация - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              Главная
            </Link>
            <Link 
              href="/catalog" 
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              Каталог
            </Link>
            <Link 
              href="/about" 
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              О нас
            </Link>
            <Link 
              href="/contacts" 
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              Контакты
            </Link>
          </nav>
          
          {/* Действия */}
          <div className="flex items-center gap-2">
            {/* Поиск - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Избранное */}
            <Button variant="ghost" size="icon" className="relative hover-lift">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                2
              </Badge>
            </Button>
            
            {/* Корзина */}
            <Button variant="ghost" size="icon" className="relative hover-lift">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-accent-500">
                3
              </Badge>
            </Button>
            
            {/* Профиль */}
            <Button variant="ghost" size="icon" className="hover-lift">
              <User className="h-5 w-5" />
            </Button>
            
            {/* Мобильное меню */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className="text-lg font-medium hover:text-primary-600 transition-colors">
                    Главная
                  </Link>
                  <Link href="/catalog" className="text-lg font-medium hover:text-primary-600 transition-colors">
                    Каталог
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary-600 transition-colors">
                    О нас
                  </Link>
                  <Link href="/contacts" className="text-lg font-medium hover:text-primary-600 transition-colors">
                    Контакты
                  </Link>
                  <div className="border-t pt-4">
                    <Link href="/profile" className="text-lg font-medium hover:text-primary-600 transition-colors">
                      Профиль
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Мобильный поиск */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-neutral-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
              <Input
                placeholder="Поиск товаров..."
                className="pl-10 bg-neutral-50 border-neutral-200"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}