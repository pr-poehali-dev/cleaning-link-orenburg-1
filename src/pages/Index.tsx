import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState([50]);
  const [rooms, setRooms] = useState([2]);
  const [serviceType, setServiceType] = useState<'general' | 'current'>('general');

  const calculatePrice = () => {
    const basePrice = serviceType === 'general' ? 80 : 50;
    const roomPrice = rooms[0] * 300;
    const areaPrice = area[0] * basePrice;
    return roomPrice + areaPrice;
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">Линк Чистоты</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Услуги', 'О компании', 'Калькулятор', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                Оренбург
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональная
                <span className="gradient-text"> уборка </span>
                вашего дома
              </h1>
              <p className="text-xl text-muted-foreground">
                Генеральная и текущая уборка квартир и домов с гарантией качества
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => scrollToSection('калькулятор')}
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('услуги')}>
                  Наши услуги
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Cleaning"
                className="relative rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная уборка любой сложности для вашего комфорта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Генеральная уборка</CardTitle>
                <CardDescription className="text-base">
                  Комплексная глубокая уборка всех помещений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    'Влажная уборка всех поверхностей',
                    'Мытье окон и зеркал',
                    'Чистка сантехники',
                    'Уборка труднодоступных мест',
                    'Удаление стойких загрязнений',
                    'Дезинфекция помещений',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <div className="text-3xl font-bold gradient-text">от 80₽/м²</div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-secondary transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-400 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Home" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Текущая уборка</CardTitle>
                <CardDescription className="text-base">
                  Поддерживающая уборка для чистоты каждый день
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    'Уборка пыли с поверхностей',
                    'Влажная уборка полов',
                    'Уборка кухни',
                    'Уборка санузлов',
                    'Вынос мусора',
                    'Смена постельного белья',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <div className="text-3xl font-bold gradient-text">от 50₽/м²</div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-secondary to-primary">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Линк Чистоты — это команда профессионалов с 5-летним опытом работы в сфере клининговых услуг в Оренбурге
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: 'Shield',
                    title: 'Гарантия качества',
                    desc: 'Если результат вас не устроит — переделаем бесплатно',
                  },
                  {
                    icon: 'Users',
                    title: 'Опытные специалисты',
                    desc: 'Обученный персонал с опытом работы от 2 лет',
                  },
                  {
                    icon: 'Leaf',
                    title: 'Эко-средства',
                    desc: 'Используем безопасные гипоаллергенные средства',
                  },
                  {
                    icon: 'Clock',
                    title: 'Точно в срок',
                    desc: 'Приезжаем вовремя и укладываемся в оговоренные сроки',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop"
                alt="Team"
                className="relative rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="калькулятор" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Калькулятор</Badge>
            <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость</h2>
            <p className="text-xl text-muted-foreground">
              Узнайте предварительную стоимость уборки за 30 секунд
            </p>
          </div>

          <Card className="animate-scale-in border-2">
            <CardHeader>
              <CardTitle>Параметры уборки</CardTitle>
              <CardDescription>Настройте параметры для расчета стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Button
                  variant={serviceType === 'general' ? 'default' : 'outline'}
                  className={
                    serviceType === 'general'
                      ? 'h-auto p-6 bg-gradient-to-r from-primary to-secondary'
                      : 'h-auto p-6'
                  }
                  onClick={() => setServiceType('general')}
                >
                  <div className="text-left w-full">
                    <div className="font-bold text-lg mb-2">Генеральная уборка</div>
                    <div className="text-sm opacity-90">Глубокая уборка всех помещений</div>
                    <div className="text-xl font-bold mt-2">80₽/м²</div>
                  </div>
                </Button>
                <Button
                  variant={serviceType === 'current' ? 'default' : 'outline'}
                  className={
                    serviceType === 'current'
                      ? 'h-auto p-6 bg-gradient-to-r from-secondary to-primary'
                      : 'h-auto p-6'
                  }
                  onClick={() => setServiceType('current')}
                >
                  <div className="text-left w-full">
                    <div className="font-bold text-lg mb-2">Текущая уборка</div>
                    <div className="text-sm opacity-90">Поддерживающая уборка</div>
                    <div className="text-xl font-bold mt-2">50₽/м²</div>
                  </div>
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold mb-4 block">
                    Площадь помещения: {area[0]} м²
                  </Label>
                  <Slider
                    value={area}
                    onValueChange={setArea}
                    min={20}
                    max={200}
                    step={5}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>20 м²</span>
                    <span>200 м²</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 block">
                    Количество комнат: {rooms[0]}
                  </Label>
                  <Slider
                    value={rooms}
                    onValueChange={setRooms}
                    min={1}
                    max={6}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 комната</span>
                    <span>6 комнат</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <div className="text-sm text-muted-foreground mb-2">Итоговая стоимость</div>
                <div className="text-5xl font-bold gradient-text mb-4">{calculatePrice()}₽</div>
                <div className="text-sm text-muted-foreground mb-6">
                  {serviceType === 'general' ? 'Генеральная' : 'Текущая'} уборка • {area[0]} м² •{' '}
                  {rooms[0]} {rooms[0] === 1 ? 'комната' : 'комнаты'}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать уборку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Ответим на все вопросы и проконсультируем по услугам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-up">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground mb-2">Звоните с 8:00 до 20:00</p>
                      <a href="tel:+73532123456" className="text-xl font-bold text-primary hover:underline">
                        +7 (3532) 12-34-56
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground mb-2">Ответим в течение часа</p>
                      <a
                        href="mailto:info@link-clean.ru"
                        className="text-xl font-bold text-secondary hover:underline"
                      >
                        info@link-clean.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground mb-2">Работаем по всему Оренбургу</p>
                      <p className="text-xl font-bold">г. Оренбург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-scale-in border-2">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <Input id="service" placeholder="Генеральная уборка" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите подробнее о вашем запросе..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Линк Чистоты</h3>
              <p className="text-slate-400">
                Профессиональная клининговая компания в Оренбурге
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Генеральная уборка</li>
                <li>Текущая уборка</li>
                <li>Уборка квартир</li>
                <li>Уборка домов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+7 (3532) 12-34-56</li>
                <li>info@link-clean.ru</li>
                <li>г. Оренбург</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            © 2024 Линк Чистоты. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;