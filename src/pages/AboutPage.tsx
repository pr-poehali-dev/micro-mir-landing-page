export default function AboutPage() {
  const milestones = [
    { year: '2009', title: 'Основание', desc: 'Начали с небольшой витрины на блошином рынке. Первые 40 моделей Hot Wheels и Matchbox.' },
    { year: '2012', title: 'Первый магазин', desc: 'Открыли физический магазин в Москве. Расширили ассортимент до 500 позиций.' },
    { year: '2016', title: 'Онлайн-каталог', desc: 'Запустили интернет-магазин. Началась доставка по всей России.' },
    { year: '2019', title: 'Партнёрство', desc: 'Официальный дистрибьютор Bburago, Maisto и AutoArt в России.' },
    { year: '2022', title: 'Коллекция 1000+', desc: 'Преодолели отметку в 1000 уникальных моделей. Клуб коллекционеров МикроМир.' },
    { year: '2024', title: 'МикроМир сегодня', desc: '1200+ моделей, 8400 постоянных покупателей, доставка в 85 регионов России.' },
  ];

  const values = [
    { num: '01', title: 'Точность', desc: 'Каждая модель — сертифицированная копия реального автомобиля. Мы проверяем каждую позицию перед продажей.' },
    { num: '02', title: 'Страсть', desc: 'Мы сами коллекционеры. Понимаем ценность редкой модели и важность её сохранности.' },
    { num: '03', title: 'Сообщество', desc: 'Более 8000 коллекционеров объединились вокруг МикроМира. Встречи, обмены, выставки.' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/projects/f6cae005-1cfe-4cbe-9cc2-606d6839949f/files/75191ac2-a7c1-42fe-82f1-f4294ecb5275.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b09] to-transparent" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#d4830a]" />
            <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">О компании</span>
          </div>
          <h1 className="font-oswald font-bold text-6xl md:text-8xl text-foreground leading-none mb-6">
            ИСТОРИЯ<br />
            <span className="text-[#d4830a]">МИССИЯ</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            МикроМир — это больше чем магазин. Это место, где металл и пластик превращаются 
            в искусство. Где инженерная точность встречается с коллекционной страстью.
          </p>
        </div>
      </section>

      {/* Mission block */}
      <section className="bg-[#0d0b09] border-y border-[#d4830a]/15 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4830a]/10">
            {values.map((v) => (
              <div key={v.num} className="bg-[#0d0b09] p-10">
                <div className="font-mono-ibm text-5xl font-bold text-[#d4830a]/20 mb-4">{v.num}</div>
                <h3 className="font-oswald font-bold text-2xl text-[#d4830a] mb-3 tracking-wider">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#d4830a]" />
            <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">Хронология</span>
          </div>
          <h2 className="font-oswald font-bold text-5xl text-foreground">НАША<br /><span className="text-[#d4830a]">ИСТОРИЯ</span></h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[80px] top-0 bottom-0 w-[1px] bg-[#d4830a]/20 hidden md:block" />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={m.year}
                className={`relative flex gap-8 md:gap-16 items-start p-8 border-b border-[#d4830a]/10 group hover:bg-[#0f0d0b] transition-colors ${i === milestones.length - 1 ? 'bg-[#0f0d0b] border-[#d4830a]/30' : ''}`}
              >
                {/* Year */}
                <div className="shrink-0 w-16 md:w-20">
                  <span className="font-mono-ibm font-bold text-lg text-[#d4830a]">{m.year}</span>
                </div>

                {/* Dot on line */}
                <div className="hidden md:block absolute left-[76px] top-10 w-[9px] h-[9px] bg-[#d4830a] rotate-45 group-hover:scale-125 transition-transform" />

                {/* Content */}
                <div className="flex-1 pl-0 md:pl-8">
                  <h3 className="font-oswald font-semibold text-xl text-foreground mb-2 tracking-wide">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>

                {/* Current marker */}
                {i === milestones.length - 1 && (
                  <div className="shrink-0 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4830a] rounded-full animate-pulse" />
                    <span className="font-mono-ibm text-xs text-[#d4830a] tracking-wider">СЕЙЧАС</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
