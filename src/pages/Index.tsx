import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [homework, setHomework] = useState('');
  const [readingTest, setReadingTest] = useState('');

  const courses = [
    {
      id: 1,
      title: "Скорочтение: Основы",
      description: "Базовые техники увеличения скорости чтения в 3 раза",
      duration: "4 недели",
      lessons: 12,
      price: "1000₽",
      level: "Начинающий",
      features: ["Техники концентрации", "Упражнения для глаз", "Тесты скорости"]
    },
    {
      id: 2,
      title: "Продвинутое Скорочтение",
      description: "Профессиональные методы работы с текстом",
      duration: "6 недель",
      lessons: 18,
      price: "1000₽",
      level: "Продвинутый",
      features: ["Диагональное чтение", "Фоточтение", "Работа с таблицами"]
    },
    {
      id: 3,
      title: "Скорочтение для IT",
      description: "Быстрое усвоение технической документации",
      duration: "8 недель",
      lessons: 24,
      price: "1000₽",
      level: "Специализированный",
      features: ["Чтение кода", "API документация", "Техническая литература"]
    }
  ];

  const handlePayment = () => {
    alert(`Для доступа к курсам переведите 1000₽ на карту: 2200701050607560\n\nПосле оплаты личный кабинет откроется автоматически!`);
  };

  const checkHomework = () => {
    if (homework.trim()) {
      alert("✅ Домашнее задание проверено!\nОценка: Отлично\nКомментарий: Хорошее понимание материала");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1D29] via-[#0066FF]/10 to-[#00D4AA]/5">
      {/* Header */}
      <nav className="border-b border-[#0066FF]/20 bg-[#1A1D29]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0066FF] to-[#00D4AA] rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D4AA] bg-clip-text text-transparent">
                SpeedRead.AI
              </span>
            </div>
            <Button 
              onClick={() => setIsPaymentOpen(true)}
              className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
            >
              <Icon name="CreditCard" size={16} className="mr-2" />
              Получить доступ
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/10 to-[#00D4AA]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30">
                🚀 AI-Powered Learning
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Увеличь скорость
                <span className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] bg-clip-text text-transparent">
                  {" "}чтения в 5 раз
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Революционная система обучения скорочтению с ИИ-проверкой домашних заданий 
                и персональным трекингом прогресса
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handlePayment}
                  className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white text-lg px-8 py-6 border-0"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Начать обучение за 1000₽
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white text-lg px-8 py-6"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Демо урок
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/9d0b0923-20c5-48f8-acaa-0683843d4ccf.jpg" 
                  alt="AI Brain for Speed Reading" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-[#0066FF]/30"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0066FF]/20 to-[#00D4AA]/20 rounded-3xl blur-xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-[#0066FF]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Выпускников", icon: "Users" },
              { number: "500%", label: "Рост скорости", icon: "TrendingUp" },
              { number: "24/7", label: "ИИ поддержка", icon: "Bot" },
              { number: "98%", label: "Успешность", icon: "Award" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#00D4AA] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#00D4AA]/20 text-[#00D4AA] border-[#00D4AA]/30">
              💎 Премиум курсы
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Выберите свой путь к мастерству</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Каждый курс включает персонального ИИ-наставника и систему проверки заданий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-[#1A1D29]/80 border-[#0066FF]/30 hover:border-[#0066FF]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#0066FF]/20">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-[#00D4AA] text-[#00D4AA]">
                      {course.level}
                    </Badge>
                    <div className="text-2xl font-bold text-[#0066FF]">{course.price}</div>
                  </div>
                  <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-gray-400">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>📅 {course.duration}</span>
                      <span>📚 {course.lessons} уроков</span>
                    </div>
                    <div className="space-y-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Icon name="Check" size={16} className="text-[#00D4AA] mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={handlePayment}
                      className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
                    >
                      Выбрать курс
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Cabinet Demo */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF]/5 to-[#00D4AA]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30">
              🎯 Личный кабинет
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Ваш прогресс под контролем ИИ</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Демо-версия личного кабинета с проверкой домашних заданий
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="progress" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1A1D29]/80 border border-[#0066FF]/30">
                <TabsTrigger value="progress" className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white">
                  📊 Прогресс
                </TabsTrigger>
                <TabsTrigger value="homework" className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white">
                  📝 Домашка
                </TabsTrigger>
                <TabsTrigger value="tests" className="data-[state=active]:bg-[#0066FF] data-[state=active]:text-white">
                  🧪 Тесты
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="progress" className="mt-6">
                <Card className="bg-[#1A1D29]/80 border-[#0066FF]/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="BarChart" size={24} className="mr-2 text-[#0066FF]" />
                      Ваш прогресс обучения
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Скорость чтения</span>
                        <span className="text-[#00D4AA] font-bold">450 слов/мин (+280%)</span>
                      </div>
                      <Progress value={75} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Понимание текста</span>
                        <span className="text-[#00D4AA] font-bold">92%</span>
                      </div>
                      <Progress value={92} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Концентрация</span>
                        <span className="text-[#00D4AA] font-bold">88%</span>
                      </div>
                      <Progress value={88} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="homework" className="mt-6">
                <Card className="bg-[#1A1D29]/80 border-[#0066FF]/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="PenTool" size={24} className="mr-2 text-[#0066FF]" />
                      Проверка домашнего задания
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      ИИ проанализирует ваш ответ и даст персональную обратную связь
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="homework" className="text-gray-300">
                        Задание: Опишите 3 техники скорочтения, которые вы изучили
                      </Label>
                      <Textarea
                        id="homework"
                        value={homework}
                        onChange={(e) => setHomework(e.target.value)}
                        placeholder="Введите ваш ответ здесь..."
                        className="mt-2 bg-[#1A1D29] border-[#0066FF]/30 text-white placeholder-gray-500"
                        rows={6}
                      />
                    </div>
                    <Button 
                      onClick={checkHomework}
                      className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить на проверку ИИ
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tests" className="mt-6">
                <Card className="bg-[#1A1D29]/80 border-[#0066FF]/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Timer" size={24} className="mr-2 text-[#0066FF]" />
                      Тест скорости чтения
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-6 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Прочитайте следующий текст и ответьте на вопросы. Засекайте время!
                      </p>
                      <p className="text-white text-lg leading-relaxed">
                        Скорочтение — это навык быстрого восприятия текстовой информации. 
                        Средняя скорость чтения взрослого человека составляет 200-250 слов в минуту. 
                        При помощи специальных техник можно увеличить эту скорость в 3-5 раз, 
                        сохранив при этом высокий уровень понимания прочитанного.
                      </p>
                    </div>
                    <Input
                      placeholder="Сколько слов в минуту вы прочитали?"
                      value={readingTest}
                      onChange={(e) => setReadingTest(e.target.value)}
                      className="bg-[#1A1D29] border-[#0066FF]/30 text-white placeholder-gray-500"
                    />
                    <Button 
                      className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
                    >
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Проверить результат
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-[#1A1D29] border-[#0066FF]/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2 text-[#0066FF]" />
                  Доступ к курсам
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPaymentOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00D4AA] mb-2">1000₽</div>
                <p className="text-gray-400">Доступ ко всем курсам навсегда</p>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
                  <Label className="text-gray-300 text-sm">Номер карты для перевода:</Label>
                  <div className="text-xl font-mono text-[#0066FF] mt-1">2200 7010 5060 7560</div>
                </div>
                
                <div className="space-y-3">
                  {[
                    "✅ Все курсы скорочтения",
                    "✅ ИИ-проверка домашних заданий",
                    "✅ Персональный трекинг прогресса",
                    "✅ Сертификат о прохождении",
                    "✅ Доступ навсегда"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
              >
                <Icon name="Smartphone" size={16} className="mr-2" />
                Перевести 1000₽
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                После перевода доступ откроется автоматически в течение 5 минут
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;