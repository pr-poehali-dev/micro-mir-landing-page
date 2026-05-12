import { useState, useEffect, useCallback, useRef } from 'react';
import GearButton from '@/components/GearButton';

interface Slide {
  id: number;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  scale: string;
  brand: string;
  image: string;
  stat: string;
  statLabel: string;
  cta: string;
  ctaPage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    label: 'Масштаб 1:18',
    title: 'ИНЖЕНЕРНАЯ',
    titleAccent: 'ТОЧНОСТЬ',
    subtitle: 'Открывающиеся двери, капот, багажник. Детализированный интерьер и двигатель — всё как в оригинале.',
    scale: '1:18',
    brand: 'AutoArt · Bburago',
    image: 'https://cdn.poehali.dev/projects/f6cae005-1cfe-4cbe-9cc2-606d6839949f/files/6a829821-65f4-445b-a81f-51e5a660a760.jpg',
    stat: '320',
    statLabel: 'моделей',
    cta: 'Смотреть коллекцию',
    ctaPage: 'catalog',
  },
  {
    id: 2,
    label: 'Масштаб 1:64',
    title: 'ЛЕГЕНДЫ',
    titleAccent: 'В ЛАДОНИ',
    subtitle: 'Коллекционные серии Hot Wheels и Matchbox. Редкие выпуски, лимитированные серии, эксклюзивные цвета.',
    scale: '1:64',
    brand: 'Hot Wheels · Matchbox',
    image: 'https://cdn.poehali.dev/projects/f6cae005-1cfe-4cbe-9cc2-606d6839949f/files/75191ac2-a7c1-42fe-82f1-f4294ecb5275.jpg',
    stat: '490',
    statLabel: 'моделей',
    cta: 'В каталог 1:64',
    ctaPage: 'catalog',
  },
  {
    id: 3,
    label: 'Весь каталог',
    title: 'МИРОВЫЕ',
    titleAccent: 'БРЕНДЫ',
    subtitle: 'Bburago, Maisto, AutoArt, Hot Wheels, Matchbox — официальные поставки с гарантией оригинала.',
    scale: '1:18 · 1:48 · 1:64',
    brand: 'Все производители',
    image: 'https://cdn.poehali.dev/projects/f6cae005-1cfe-4cbe-9cc2-606d6839949f/files/a5650999-b8a7-4ece-8735-2ad4821bda8a.jpg',
    stat: '1200+',
    statLabel: 'позиций',
    cta: 'Открыть каталог',
    ctaPage: 'catalog',
  },
];

interface HeroSliderProps {
  onNavigate: (page: string) => void;
}

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<'right' | 'left'>('right');
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number, direction: 'right' | 'left') => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 450);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'left');
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, 5500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  const slide = slides[current];
  const contentClass = animating
    ? dir === 'right' ? 'slide-enter-right' : 'slide-enter-left'
    : '';

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 transition-opacity duration-700">
        <img
          key={slide.id}
          src={slide.image}
          alt=""
          className="w-full h-full object-cover opacity-18"
          style={{ opacity: 0.18 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b09] via-[#0d0b09]/85 to-[#0d0b09]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09] via-transparent to-transparent" />
        {/* Grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,131,10,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(212,131,10,0.05) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative big gear — top right */}
      <div className="absolute -top-16 -right-16 opacity-[0.04] pointer-events-none"
        style={{ animation: 'gear-cw 40s linear infinite', transformOrigin: 'center' }}>
        <svg width="420" height="420" viewBox="0 0 420 420">
          <GearDecor cx={210} cy={210} r={190} teeth={28} />
        </svg>
      </div>
      {/* Decorative small gear — bottom left */}
      <div className="absolute -bottom-10 -left-10 opacity-[0.04] pointer-events-none"
        style={{ animation: 'gear-ccw 25s linear infinite', transformOrigin: 'center' }}>
        <svg width="240" height="240" viewBox="0 0 240 240">
          <GearDecor cx={120} cy={120} r={108} teeth={18} />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-8">
        <div className={`max-w-2xl ${contentClass}`} key={`${slide.id}-${dir}`}>
          {/* Label row */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-10 bg-[#d4830a]" />
            <span className="font-mono-ibm text-[11px] tracking-[0.35em] text-[#d4830a] uppercase">{slide.label}</span>
            <div className="ml-2 scale-badge px-2 py-0.5 text-[10px] bg-[#d4830a]/10 text-[#d4830a] border border-[#d4830a]/30">
              {slide.scale}
            </div>
          </div>

          {/* Title */}
          <h1 className="font-oswald font-bold leading-none mb-6">
            <span className="block text-[68px] md:text-[100px] text-foreground tracking-tight leading-none">
              {slide.title}
            </span>
            <span className="block text-[68px] md:text-[100px] text-[#d4830a] tracking-tight leading-none -mt-3">
              {slide.titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-4">
            {slide.subtitle}
          </p>

          {/* Brand tag */}
          <p className="font-mono-ibm text-xs text-[#d4830a]/60 tracking-[0.2em] uppercase mb-10">
            {slide.brand}
          </p>

          {/* CTA */}
          <button
            onClick={() => onNavigate(slide.ctaPage)}
            className="industrial-btn bg-[#d4830a] text-[#0d0b09] font-oswald font-bold text-sm tracking-[0.15em] px-8 py-4 uppercase hover:bg-[#c45e20] transition-colors"
          >
            {slide.cta} →
          </button>
        </div>

        {/* Stat — right side */}
        <div className={`hidden lg:flex flex-col items-center absolute right-12 top-1/2 -translate-y-1/2 ${contentClass}`}
          key={`stat-${slide.id}-${dir}`}>
          <div className="w-[1px] h-16 bg-[#d4830a]/20 mb-4" />
          <div className="font-oswald font-bold text-6xl text-[#d4830a]">{slide.stat}</div>
          <div className="font-mono-ibm text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">{slide.statLabel}</div>
          <div className="w-[1px] h-16 bg-[#d4830a]/20 mt-4" />
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-10">
        <div className="flex items-center justify-between border-t border-[#d4830a]/15 pt-6">

          {/* Gear prev */}
          <GearButton direction="prev" onClick={prev} label="Назад" />

          {/* Progress dots */}
          <div className="flex items-center gap-4">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                className="flex items-center gap-2 group"
              >
                <div
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-[2px] bg-[#d4830a]'
                      : 'w-3 h-[2px] bg-[#d4830a]/25 group-hover:bg-[#d4830a]/50'
                  }`}
                />
                <span className={`font-mono-ibm text-[10px] tracking-widest transition-colors ${
                  i === current ? 'text-[#d4830a]' : 'text-muted-foreground/40'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            ))}

            {/* Auto-progress bar */}
            <div className="w-20 h-[1px] bg-[#d4830a]/10 relative ml-2 overflow-hidden">
              <div
                key={current}
                className="absolute top-0 left-0 h-full bg-[#d4830a]/50"
                style={{ animation: 'slideProgress 5.5s linear forwards' }}
              />
            </div>
          </div>

          {/* Gear next */}
          <GearButton direction="next" onClick={next} label="Далее" />
        </div>
      </div>

      {/* Bottom amber line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4830a]/30 to-transparent" />

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes gear-cw  { to { transform: rotate(360deg); } }
        @keyframes gear-ccw { to { transform: rotate(-360deg); } }
      `}</style>
    </section>
  );
}

/* Decorative gear path for background */
function GearDecor({ cx, cy, r, teeth }: { cx: number; cy: number; r: number; teeth: number }) {
  const inner = r * 0.78;
  const hole  = r * 0.22;
  const pts: string[] = [];

  for (let i = 0; i < teeth; i++) {
    const a  = (i / teeth) * 2 * Math.PI - Math.PI / 2;
    const na = ((i + 1) / teeth) * 2 * Math.PI - Math.PI / 2;
    const m  = a + (na - a) / 2;
    const hw = 0.18;

    pts.push(`${cx + inner * Math.cos(a - hw * 0.5)},${cy + inner * Math.sin(a - hw * 0.5)}`);
    pts.push(`${cx + inner * Math.cos(a + hw * 0.3)},${cy + inner * Math.sin(a + hw * 0.3)}`);
    pts.push(`${cx + r * Math.cos(m - hw * 0.55)},${cy + r * Math.sin(m - hw * 0.55)}`);
    pts.push(`${cx + r * Math.cos(m + hw * 0.55)},${cy + r * Math.sin(m + hw * 0.55)}`);
    pts.push(`${cx + inner * Math.cos(na - hw * 0.3)},${cy + inner * Math.sin(na - hw * 0.3)}`);
  }

  return (
    <>
      <polygon points={pts.join(' ')} fill="#d4830a" />
      <circle cx={cx} cy={cy} r={hole} fill="#0d0b09" />
    </>
  );
}
