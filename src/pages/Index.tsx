import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Index() {
  const scheduleData = [
    { day: "Понедельник - Пятница", time: "08:00 - 20:00" },
    { day: "Суббота", time: "09:00 - 18:00" },
    { day: "Воскресенье", time: "10:00 - 16:00" },
  ];

  const symptoms = [
    { icon: "Thermometer", title: "Повышенная температура", description: "Жар и лихорадочные состояния" },
    { icon: "Activity", title: "Головная боль", description: "Различные виды болевого синдрома" },
    { icon: "AlertCircle", title: "Воспаление", description: "Воспалительные процессы" },
    { icon: "Zap", title: "Общая слабость", description: "Астенические состояния" },
  ];

  const indications = [
    "Острые респираторные вирусные инфекции (ОРВИ)",
    "Грипп и его осложнения",
    "Воспалительные заболевания верхних дыхательных путей",
    "Лихорадочный синдром различной этиологии",
    "Болевой синдром слабой и умеренной интенсивности",
    "Профилактика сезонных заболеваний",
  ];

  const faqData = [
    {
      question: "Как правильно принимать препарат?",
      answer: "Препарат принимается внутрь после еды, запивая достаточным количеством воды. Взрослым и детям старше 12 лет - по 1-2 таблетки 2-3 раза в день. Максимальная суточная доза не должна превышать 6 таблеток."
    },
    {
      question: "Есть ли противопоказания?",
      answer: "Противопоказания включают: индивидуальную непереносимость компонентов, тяжелые заболевания печени и почек, беременность и период грудного вскармливания, детский возраст до 12 лет."
    },
    {
      question: "Можно ли принимать с другими лекарствами?",
      answer: "Перед одновременным применением с другими препаратами необходимо проконсультироваться с врачом. Особую осторожность следует соблюдать при приеме антикоагулянтов и других НПВС."
    },
    {
      question: "Как долго можно принимать препарат?",
      answer: "Без консультации врача препарат можно принимать не более 5-7 дней. При сохранении симптомов необходимо обратиться к врачу."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">МедиКор</h1>
              <p className="text-xs text-muted-foreground">Забота о здоровье</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О препарате</a>
            <a href="#symptoms" className="text-sm font-medium hover:text-primary transition-colors">Симптомы</a>
            <a href="#indications" className="text-sm font-medium hover:text-primary transition-colors">Показания</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Сертифицированный препарат
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              МедиКор
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Эффективное решение для борьбы с симптомами простуды и гриппа
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="text-sm font-medium">Быстрое действие</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="text-sm font-medium">Безопасность</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="CheckCircle" size={20} className="text-primary" />
                <span className="text-sm font-medium">Проверено временем</span>
              </div>
            </div>
            <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">О препарате</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
            </div>
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Состав и действие</CardTitle>
                <CardDescription className="text-base">
                  Комплексный препарат для лечения симптомов простуды и гриппа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Pill" size={20} className="text-primary" />
                    Активные компоненты
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1" />
                      <span>Парацетамол 500 мг - жаропонижающее и обезболивающее действие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1" />
                      <span>Аскорбиновая кислота 200 мг - укрепление иммунитета</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1" />
                      <span>Фенилэфрин 10 мг - устранение заложенности носа</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Activity" size={20} className="text-primary" />
                    Механизм действия
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    МедиКор оказывает комплексное действие на организм: снижает температуру тела, 
                    уменьшает головную боль и мышечные боли, облегчает носовое дыхание, 
                    укрепляет защитные силы организма. Препарат начинает действовать уже через 
                    30 минут после приема, обеспечивая быстрое облегчение симптомов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="symptoms" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Симптомы для применения</h2>
              <p className="text-muted-foreground text-lg">
                МедиКор эффективен при следующих симптомах
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={symptom.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{symptom.title}</h3>
                    <p className="text-sm text-muted-foreground">{symptom.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="indications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Показания к применению</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
            </div>
            <Card className="border-2 shadow-lg">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {indications.map((indication, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <p className="text-muted-foreground">{indication}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={24} className="text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900 mb-1">Важная информация</p>
                      <p className="text-sm text-amber-800">
                        Перед применением проконсультируйтесь с врачом. Имеются противопоказания. 
                        Не является лекарственным средством. БАД.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground text-lg">
                Ответы на самые популярные вопросы о препарате
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы готовы ответить на ваши вопросы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+78001234567" className="text-primary hover:underline">
                        +7 (800) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground">Бесплатный звонок по России</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@medikor.ru" className="text-primary hover:underline">
                        info@medikor.ru
                      </a>
                      <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Медицинская, д. 15<br />
                        БЦ "Здоровье", офис 301
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold mb-3">Мы в социальных сетях</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="MessageCircle" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="Send" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="Share2" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="MessageSquare" size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Card className="shadow-lg mb-6">
                  <CardHeader>
                    <CardTitle>Расписание работы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {scheduleData.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                          <span className="font-medium">{schedule.day}</span>
                          <span className="text-primary font-semibold">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-0">
                    <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d86d1b8e4c0d8a3c6e3a5e0f7c0f8e8e8e8e8e8e8e8e8e&amp;source=constructor"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Карта"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">МедиКор</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Забота о вашем здоровье - наш главный приоритет. Качественные препараты 
              для эффективного лечения и профилактики заболеваний.
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="text-sm text-white/60">
                © 2024 МедиКор. Все права защищены. Информация на сайте не является публичной офертой.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
