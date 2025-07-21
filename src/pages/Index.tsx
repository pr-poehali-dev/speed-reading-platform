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
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [homework, setHomework] = useState('');
  const [readingTest, setReadingTest] = useState('');
  const [demoStartTime, setDemoStartTime] = useState<number | null>(null);
  const [demoText, setDemoText] = useState('');
  const [demoQuestions, setDemoQuestions] = useState<{question: string, answers: string[], correct: number}[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [demoAnswers, setDemoAnswers] = useState<number[]>([]);
  const [demoFinished, setDemoFinished] = useState(false);
  const [readingSpeed, setReadingSpeed] = useState(0);

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
    setIsPaymentOpen(true);
  };

  const checkPassword = () => {
    if (password === '1234') {
      setIsLoggedIn(true);
      setIsPaymentOpen(false);
      setPassword('');
    } else {
      alert('Неверный пароль доступа!');
    }
  };

  const startDemo = () => {
    const text = `Скорочтение — это навык быстрого восприятия и понимания текстовой информации без потери качества усвоения материала. Обычный человек читает со скоростью 200-250 слов в минуту, при этом усваивает около 60-70% прочитанного. 

Однако с помощью специальных техник можно увеличить скорость чтения до 800-1200 слов в минуту, сохранив понимание на уровне 80-90%. Основные принципы скорочтения включают: устранение внутреннего проговаривания, расширение угла зрения, работу с ключевыми словами и развитие периферического зрения.

Важно понимать, что скорочтение — это не просто быстрое перелистывание страниц, а системный подход к обработке информации. Мозг человека способен воспринимать информацию значительно быстрее, чем мы привыкли читать. Современные техники скорочтения основаны на научных исследованиях работы мозга и зрительного восприятия.`;
    
    const questions = [
      {
        question: "Какова обычная скорость чтения человека?",
        answers: ["100-150 слов/мин", "200-250 слов/мин", "300-400 слов/мин", "500-600 слов/мин"],
        correct: 1
      },
      {
        question: "До какой скорости можно увеличить чтение с помощью техник?",
        answers: ["400-500 слов/мин", "600-700 слов/мин", "800-1200 слов/мин", "1500-2000 слов/мин"],
        correct: 2
      },
      {
        question: "Какой принцип НЕ относится к основам скорочтения?",
        answers: ["Устранение внутреннего проговаривания", "Расширение угла зрения", "Медленное и вдумчивое чтение", "Работа с ключевыми словами"],
        correct: 2
      }
    ];
    
    setDemoText(text);
    setDemoQuestions(questions);
    setCurrentQuestion(0);
    setDemoAnswers([]);
    setDemoFinished(false);
    setReadingSpeed(0);
    setIsDemoOpen(true);
    setDemoStartTime(Date.now());
  };

  const finishReading = () => {
    if (demoStartTime) {
      const timeSpent = (Date.now() - demoStartTime) / 1000 / 60; // в минутах
      const wordCount = demoText.split(' ').length;
      const speed = Math.round(wordCount / timeSpent);
      setReadingSpeed(speed);
    }
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...demoAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setDemoAnswers(newAnswers);
    
    if (currentQuestion < demoQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Завершаем тест
      const correct = demoQuestions.filter((q, i) => q.correct === newAnswers[i]).length;
      const percentage = Math.round((correct / demoQuestions.length) * 100);
      setDemoFinished(true);
      alert(`Тест завершён!\nВаша скорость: ${readingSpeed} слов/мин\nПонимание: ${percentage}%\n\nЭто отличный результат для начала!`);
    }
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
                  onClick={startDemo}
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
      <section className="py-16 border-y border-[#0066FF]/20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Выпускников", icon: "Users" },
              { number: "500%", label: "Рост скорости", icon: "TrendingUp" },
              { number: "24/7", label: "ИИ поддержка", icon: "Bot" },
              { number: "98%", label: "Успешность", icon: "Award" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#00D4AA] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={stat.icon as any} size={24} className="text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D4AA] bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-200 font-medium text-lg">{stat.label}</div>
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
                  onClick={() => {setIsPaymentOpen(false); setPassword('');}}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
                <h3 className="text-white font-semibold mb-2">Реквизиты для оплаты:</h3>
                <div className="space-y-2 text-gray-300">
                  <div>💳 Карта: <span className="font-mono text-[#00D4AA]">2200701050607560</span></div>
                  <div>💰 Сумма: <span className="text-[#0066FF] font-bold">1000₽</span></div>
                  <div>📝 Назначение: Скорочтение</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="password" className="text-white mb-2 block">
                    Пароль доступа (получите после оплаты):
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                    className="bg-[#0F1419] border-[#0066FF]/30 text-white placeholder-gray-500"
                    onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
                  />
                </div>
                
                <Button
                  onClick={checkPassword}
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
                  disabled={!password}
                >
                  <Icon name="Unlock" size={20} className="mr-2" />
                  Войти в кабинет
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  💡 Пароль придёт сразу после перевода на указанную карту
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Personal Dashboard */}
      {isLoggedIn && (
        <div className="fixed inset-0 bg-[#0F1419] z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Icon name="BookOpen" size={32} className="mr-3 text-[#0066FF]" />
                Личный кабинет
              </h1>
              <Button
                variant="outline"
                onClick={() => setIsLoggedIn(false)}
                className="border-[#0066FF]/30 text-[#0066FF] hover:bg-[#0066FF] hover:text-white"
              >
                <Icon name="LogOut" size={20} className="mr-2" />
                Выйти
              </Button>
            </div>

            {/* Progress Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-[#1A1D29] border-[#0066FF]/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Target" size={24} className="text-[#0066FF]" />
                    <Badge className="bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30">
                      В процессе
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Прогресс обучения</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Пройдено уроков</span>
                      <span className="text-white">8 из 12</span>
                    </div>
                    <Progress value={67} className="h-2" />
                    <p className="text-gray-400 text-sm">67% завершено</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1D29] border-[#00D4AA]/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Zap" size={24} className="text-[#00D4AA]" />
                    <Badge className="bg-[#00D4AA]/20 text-[#00D4AA] border-[#00D4AA]/30">
                      +150%
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Скорость чтения</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#00D4AA]">620 сл/мин</div>
                    <p className="text-gray-400 text-sm">Было: 250 сл/мин</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1D29] border-[#FF6B6B]/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Brain" size={24} className="text-[#FF6B6B]" />
                    <Badge className="bg-[#FF6B6B]/20 text-[#FF6B6B] border-[#FF6B6B]/30">
                      Отлично
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Понимание</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#FF6B6B]">89%</div>
                    <p className="text-gray-400 text-sm">Средний результат тестов</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Course Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Lessons */}
              <Card className="bg-[#1A1D29] border-[#0066FF]/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="PlayCircle" size={24} className="mr-2 text-[#0066FF]" />
                    Уроки курса
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: 1, title: "Основы скорочтения", completed: true, duration: "15 мин" },
                    { id: 2, title: "Устранение проговаривания", completed: true, duration: "20 мин" },
                    { id: 3, title: "Расширение угла зрения", completed: true, duration: "25 мин" },
                    { id: 4, title: "Техники концентрации", completed: false, duration: "18 мин", current: true },
                    { id: 5, title: "Работа с таблицами", completed: false, duration: "22 мин" }
                  ].map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`p-4 rounded-lg border flex items-center justify-between ${
                        lesson.completed
                          ? 'bg-[#00D4AA]/10 border-[#00D4AA]/30'
                          : lesson.current
                          ? 'bg-[#0066FF]/10 border-[#0066FF]/30'
                          : 'bg-[#1A1D29] border-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon
                          name={lesson.completed ? "CheckCircle" : lesson.current ? "Play" : "Lock"}
                          size={20}
                          className={`mr-3 ${
                            lesson.completed
                              ? 'text-[#00D4AA]'
                              : lesson.current
                              ? 'text-[#0066FF]'
                              : 'text-gray-500'
                          }`}
                        />
                        <div>
                          <h4 className="text-white font-medium">{lesson.title}</h4>
                          <p className="text-gray-400 text-sm">{lesson.duration}</p>
                        </div>
                      </div>
                      {lesson.current && (
                        <Button size="sm" className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
                          Продолжить
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Homework & Tests */}
              <div className="space-y-6">
                <Card className="bg-[#1A1D29] border-[#00D4AA]/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="FileText" size={24} className="mr-2 text-[#00D4AA]" />
                      Домашние задания
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={homework}
                      onChange={(e) => setHomework(e.target.value)}
                      placeholder="Опишите свой прогресс, трудности и результаты тренировок..."
                      className="bg-[#0F1419] border-[#00D4AA]/30 text-white placeholder-gray-500 min-h-[120px]"
                    />
                    <Button className="mt-4 w-full bg-[#00D4AA] hover:bg-[#00B8AA] text-white">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить задание
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A1D29] border-[#FF6B6B]/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Timer" size={24} className="mr-2 text-[#FF6B6B]" />
                      Тест скорости
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-[#FF6B6B]/10 rounded-lg">
                        <span className="text-white">Последний результат:</span>
                        <span className="text-[#FF6B6B] font-bold">620 сл/мин</span>
                      </div>
                      <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
                        <Icon name="Play" size={20} className="mr-2" />
                        Начать новый тест
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Lesson Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl bg-[#1A1D29] border-[#0066FF]/30 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Icon name="Play" size={24} className="mr-2 text-[#0066FF]" />
                  Демо урок: Основы скорочтения
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDemoOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {!demoFinished ? (
                <>
                  {currentQuestion === 0 && readingSpeed === 0 ? (
                    <div className="space-y-6">
                      <div className="p-6 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-[#00D4AA]/20 text-[#00D4AA] border-[#00D4AA]/30">
                            📖 Читайте внимательно
                          </Badge>
                          <div className="text-[#0066FF] font-mono text-sm">
                            Слов: {demoText.split(' ').length}
                          </div>
                        </div>
                        <div className="text-white text-lg leading-relaxed whitespace-pre-line">
                          {demoText}
                        </div>
                      </div>
                      <div className="text-center">
                        <Button
                          onClick={finishReading}
                          size="lg"
                          className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
                        >
                          <Icon name="CheckCircle" size={20} className="mr-2" />
                          Я прочитал текст
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl text-white">
                          Вопрос {currentQuestion + 1} из {demoQuestions.length}
                        </h3>
                        <Badge className="bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30">
                          Скорость: {readingSpeed} слов/мин
                        </Badge>
                      </div>
                      
                      <div className="p-6 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
                        <h4 className="text-lg text-white mb-6">
                          {demoQuestions[currentQuestion]?.question}
                        </h4>
                        <div className="space-y-3">
                          {demoQuestions[currentQuestion]?.answers.map((answer, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="w-full text-left justify-start p-4 h-auto border-[#0066FF]/30 text-gray-300 hover:bg-[#0066FF]/20 hover:text-white hover:border-[#0066FF]"
                              onClick={() => selectAnswer(index)}
                            >
                              <span className="bg-[#0066FF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                                {String.fromCharCode(65 + index)}
                              </span>
                              {answer}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0066FF] to-[#00D4AA] rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Trophy" size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Поздравляем с завершением демо урока!
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-[#0066FF]/10 rounded-lg border border-[#0066FF]/30">
                      <div className="text-2xl font-bold text-[#0066FF] mb-2">{readingSpeed}</div>
                      <div className="text-gray-300">слов/мин</div>
                    </div>
                    <div className="p-4 bg-[#00D4AA]/10 rounded-lg border border-[#00D4AA]/30">
                      <div className="text-2xl font-bold text-[#00D4AA] mb-2">
                        {Math.round((demoQuestions.filter((q, i) => q.correct === demoAnswers[i]).length / demoQuestions.length) * 100)}%
                      </div>
                      <div className="text-gray-300">понимание</div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Отличный результат! В полных курсах вы научитесь читать ещё быстрее.
                  </p>
                  <Button
                    onClick={handlePayment}
                    size="lg"
                    className="bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:from-[#0052CC] hover:to-[#00B8AA] text-white border-0"
                  >
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Получить полный доступ за 1000₽
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;