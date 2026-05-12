import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '1200+', label: 'Моделей в каталоге' },
  { value: '15', label: 'Лет на рынке' },
  { value: '8400', label: 'Коллекционеров' },
  { value: '3', label: 'Масштаба' },
];

const scales = [
  {
    scale: '1:18',
    title: 'Максимальная детализация',
    desc: 'Открывающиеся двери, капот, багажник. Точная копия интерьера и двигателя.',
    count: '320 моделей',
    color: '#d4830a',
  },
  {
    scale: '1:48',
    title: 'Идеальный баланс',
    desc: 'Детальные модели среднего размера — для витрины и тематических экспозиций.',
    count: '440 моделей',
    color: '#c45e20',
  },
  {
    scale: '1:64',
    title: 'Коллекционные серии',
    desc: 'Массовые серии от ведущих производителей. Редкие и лимитированные выпуски.',
    count: '490 моделей',
    color: '#8a8a8a',
  },
];

const features = [
  { icon: 'Shield', title: 'Гарантия оригинала', desc: 'Только лицензионные модели от официальных производителей' },
  { icon: 'Package', title: 'Бережная упаковка', desc: 'Специальная защитная упаковка для каждой модели' },
  { icon: 'Truck', title: 'Доставка по России', desc: 'Отправка в любой город СДЭК или Почтой России' },
  { icon: 'RotateCcw', title: 'Обмен и возврат', desc: '14 дней на возврат при несоответствии описанию' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/f6cae005-1cfe-4cbe-9cc2-606d6839949f/files/a5650999-b8a7-4ece-8735-2ad4821bda8a.jpg"
            alt="Коллекция моделей"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b09] via-[#0d0b09]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09] via-transparent to-transparent" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(rgba(212,131,10,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,131,10,0.06) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-[1px] w-12 bg-[#d4830a]" />
              <span className="font-mono-ibm text-xs tracking-[0.3em] text-[#d4830a] uppercase">
                Коллекционные модели
              </span>
            </div>

            {/* Title */}
            <h1 className="font-oswald font-bold leading-none mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <span className="block text-[72px] md:text-[110px] text-foreground tracking-tight">
                МИКРО
              </span>
              <span className="block text-[72px] md:text-[110px] text-[#d4830a] tracking-tight -mt-4">
                МИР
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Точные копии легендарных автомобилей. Масштабы{' '}
              <span className="text-[#d4830a] font-mono-ibm">1:18</span>,{' '}
              <span className="text-[#d4830a] font-mono-ibm">1:48</span>,{' '}
              <span className="text-[#d4830a] font-mono-ibm">1:64</span>{' '}
              — каждая деталь воссоздана с инженерной точностью.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <button
                onClick={() => onNavigate('catalog')}
                className="industrial-btn bg-[#d4830a] text-[#0d0b09] font-oswald font-bold text-base tracking-[0.12em] px-8 py-4 uppercase hover:bg-[#c45e20] transition-colors"
              >
                Открыть каталог
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border border-[#d4830a]/40 text-foreground font-oswald font-medium text-base tracking-[0.12em] px-8 py-4 uppercase hover:border-[#d4830a] hover:text-[#d4830a] transition-colors"
              >
                О проекте
              </button>
            </div>
          </div>

          {/* Scale badges */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
            {['1:18', '1:48', '1:64'].map((s, i) => (
              <div key={s}
                className="scale-badge px-4 py-2 text-center"
                style={{
                  background: i === 0 ? '#d4830a' : i === 1 ? '#c45e20' : '#2a2a2a',
                  color: i === 2 ? '#8a8a8a' : '#0d0b09',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4830a]/40 to-transparent" />
      </section>

      {/* STATS */}
      <section className="bg-[#0d0b09] border-y border-[#d4830a]/15 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#d4830a]/10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0d0b09] px-8 py-6 text-center">
                <div className="font-oswald font-bold text-4xl text-[#d4830a] mb-1">{stat.value}</div>
                <div className="font-mono-ibm text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCALES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#d4830a]" />
            <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">Масштабы</span>
          </div>
          <h2 className="font-oswald font-bold text-5xl md:text-6xl text-foreground">
            ВЫБЕРИТЕ<br />
            <span className="text-[#d4830a]">МАСШТАБ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4830a]/10">
          {scales.map((item) => (
            <div key={item.scale}
              className="bg-[#0f0d0b] p-8 relative group hover:bg-[#131109] transition-colors cursor-pointer"
              onClick={() => onNavigate('catalog')}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
              <div className="font-mono-ibm text-6xl font-bold mb-4"
                style={{ color: item.color, opacity: 0.25 }}>
                {item.scale}
              </div>
              <div className="font-mono-ibm text-lg font-bold mb-1" style={{ color: item.color }}>
                {item.scale}
              </div>
              <h3 className="font-oswald font-semibold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono-ibm text-xs text-muted-foreground tracking-wider">{item.count}</span>
                <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-[#d4830a] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HERO IMAGE 2 */}
      <section className="relative h-[500px] overflow-hidden mx-6 mb-24">
        <img
          src="https://cdn.poehali.dev/projects/f6cae005-1cfe-4cbe-9cc2-606d6839949f/files/6a829821-65f4-445b-a81f-51e5a660a760.jpg"
          alt="Коллекционная модель"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b09] via-transparent to-[#0d0b09]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono-ibm text-xs tracking-[0.4em] text-[#d4830a] uppercase mb-4">Топовые бренды</p>
            <h2 className="font-oswald font-bold text-4xl md:text-6xl text-foreground tracking-wide">
              HOTWHEELS · MAISTO<br />
              <span className="text-[#d4830a]">BBURAGO · AUTOART</span>
            </h2>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d4830a]/10">
          {features.map((f) => (
            <div key={f.title} className="bg-[#0f0d0b] p-8 group">
              <div className="w-10 h-10 bg-[#d4830a]/10 flex items-center justify-center mb-4 group-hover:bg-[#d4830a]/20 transition-colors"
                style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                <Icon name={f.icon as "Shield"} size={18} className="text-[#d4830a]" />
              </div>
              <h3 className="font-oswald font-semibold text-base text-foreground mb-2 tracking-wide">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="relative overflow-hidden p-12 bg-[#d4830a]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-oswald font-bold text-3xl md:text-4xl text-[#0d0b09] tracking-wide mb-2">
                НОВИНКИ ПОСТУПИЛИ В НАЛИЧИЕ
              </h2>
              <p className="text-[#0d0b09]/70 font-sans">Более 50 новых моделей — серия 2024 года</p>
            </div>
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-[#0d0b09] text-[#d4830a] font-oswald font-bold text-sm tracking-[0.15em] px-8 py-4 uppercase hover:bg-[#1a1612] transition-colors whitespace-nowrap"
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
            >
              Смотреть каталог →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
