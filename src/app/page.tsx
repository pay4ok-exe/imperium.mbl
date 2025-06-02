import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, ArrowRight, CheckCircle, Truck, Shield, Palette } from 'lucide-react';
import { featuredProducts, categories, testimonials } from '@/lib/mock-data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg section-padding overflow-hidden">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-accent-500 text-white text-sm px-4 py-2">
                  Премиум коллекция 2025
                </Badge>
                <h1 className="text-gradient leading-tight">
                  Мебель премиум класса
                  <br />
                  <span className="text-primary-600">для вашего идеального дома</span>
                </h1>
                <p className="text-lg text-neutral-700 max-w-xl leading-relaxed">
                  Создайте уютное пространство с нашей коллекцией качественной мебели из натуральных материалов. 
                  Высокое качество, стильный дизайн и доступные цены.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary group">
                  Смотреть каталог
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="btn-outline">
                  Связаться с нами
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">1000+</div>
                  <div className="text-sm text-neutral-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">5★</div>
                  <div className="text-sm text-neutral-600">Средняя оценка</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">3 года</div>
                  <div className="text-sm text-neutral-600">На рынке</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 hover-lift">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                  alt="Премиум мебель"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-large object-cover"
                  priority
                />
              </div>
              {/* Декоративные элементы */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-200 rounded-full blur-2xl opacity-60 animate-bounce-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-200 rounded-full blur-2xl opacity-60 animate-bounce-gentle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gradient">Категории товаров</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Выберите категорию мебели, которая подойдет именно для вашего дома
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                href={`/catalog/${category.slug}`}
                className="group"
              >
                <Card className="product-card h-full">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium">
                        {category.productsCount} товаров
                      </span>
                      <ArrowRight className="h-5 w-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gradient">Рекомендуемые товары</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Самые популярные позиции нашего каталога с отличными отзывами
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="product-card h-full">
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount && (
                    <Badge className="absolute top-4 left-4 bg-accent-500 text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                  <Button 
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover-lift bg-white/90 backdrop-blur-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-neutral-500">
                      ({product.reviewsCount} отзывов)
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {product.discount ? (
                        <>
                          <span className="text-2xl font-bold text-primary-600">
                            {Math.round(product.price * (1 - product.discount / 100)).toLocaleString()} ₸
                          </span>
                          <span className="text-lg text-neutral-400 line-through">
                            {product.price.toLocaleString()} ₸
                          </span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-primary-600">
                          {product.price.toLocaleString()} ₸
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="btn-primary flex-1">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        В корзину
                      </Button>
                      <Button variant="outline" size="icon" className="shrink-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="btn-outline">
              Посмотреть все товары
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gradient">Почему выбирают нас</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Мы предлагаем не просто мебель, а комплексные решения для вашего комфорта
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Премиум качество",
                description: "Только натуральные материалы и проверенные технологии производства"
              },
              {
                icon: Truck,
                title: "Быстрая доставка",
                description: "Доставим вашу мебель в течение 1-3 дней по всему Казахстану"
              },
              {
                icon: Shield,
                title: "Гарантия 5 лет",
                description: "Полная гарантия на всю продукцию с бесплатным сервисом"
              },
              {
                icon: Palette,
                title: "Индивидуальный дизайн",
                description: "Создаем мебель под ваши размеры и предпочтения"
              }
            ].map((feature, index) => (
              <Card key={index} className="card text-center group hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-gradient">Отзывы наших клиентов</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Узнайте, что говорят о нас те, кто уже выбрал нашу мебель
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto container-padding relative z-10">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готовы создать дом мечты?
            </h2>
            <p className="text-xl opacity-90">
              Свяжитесь с нами для бесплатной консультации и подбора идеальной мебели для вашего интерьера
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Посмотреть каталог
              </Button>
            </div>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}