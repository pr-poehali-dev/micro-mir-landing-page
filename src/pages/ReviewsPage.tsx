const reviews = [
  {
    id: 1,
    name: 'Артём Волков',
    city: 'Москва',
    rating: 5,
    scale: '1:18',
    model: 'Ferrari F40 · Bburago',
    date: 'Ноябрь 2024',
    text: 'Модель пришла в идеальном состоянии, упаковка просто отличная. Ferrari F40 в масштабе 1:18 — это произведение искусства. Открываются двери, капот, стёкла прозрачные. Стоит у меня на витрине как главный экспонат. Рекомендую МикроМир всем коллекционерам.',
    verified: true,
    experience: '3 года покупаю здесь',
  },
  {
    id: 2,
    name: 'Дмитрий Краснов',
    city: 'Санкт-Петербург',
    rating: 5,
    scale: '1:64',
    model: 'Hot Wheels Toyota Supra',
    date: 'Октябрь 2024',
    text: 'Заказал несколько моделей Hot Wheels из серии Premium. Доставка СДЭК — 3 дня, всё аккуратно упаковано. Цены ниже, чем в обычных магазинах, а выбор несравнимо больше. Особенно порадовала редкая Supra в синем цвете — давно её искал.',
    verified: true,
    experience: '1 год покупаю здесь',
  },
  {
    id: 3,
    name: 'Сергей Михайлов',
    city: 'Екатеринбург',
    rating: 5,
    scale: '1:18',
    model: 'Mercedes 300SL · AutoArt',
    date: 'Сентябрь 2024',
    text: 'AutoArt — это вообще другой уровень. Mercedes 300SL Gullwing в 1:18 — детализация феноменальная. Тканевый интерьер, открываются двери-крылья, правильный руль, дворники двигаются. МикроМир — один из немногих, кто возит AutoArt в Россию. Брал уже три модели, претензий нет.',
    verified: true,
    experience: 'Постоянный клиент',
  },
  {
    id: 4,
    name: 'Николай Борисов',
    city: 'Казань',
    rating: 4,
    scale: '1:48',
    model: 'Porsche 911 RSR · Bburago',
    date: 'Август 2024',
    text: 'Порш пришёл без повреждений, спасибо за хорошую упаковку. Единственное — на сайте была указана неверная расцветка, но поддержка оперативно ответила и предложила обмен. Оценка 4 только из-за этого казуса, сам магазин очень достойный.',
    verified: true,
    experience: '6 месяцев покупаю',
  },
  {
    id: 5,
    name: 'Павел Никитин',
    city: 'Новосибирск',
    rating: 5,
    scale: '1:64',
    model: 'Matchbox Ford Mustang',
    date: 'Июль 2024',
    text: 'Купил подарок сыну-коллекционеру. Выбор огромный, описания подробные. Заказ обработали быстро, трек-номер пришёл на следующий день. Сын в восторге — говорит, что МикроМир лучший магазин. Теперь и сам начал интересоваться коллекционными моделями.',
    verified: false,
    experience: 'Первая покупка',
  },
  {
    id: 6,
    name: 'Алексей Громов',
    city: 'Ростов-на-Дону',
    rating: 5,
    scale: '1:18',
    model: 'Dodge Viper GTS · Bburago',
    date: 'Июнь 2024',
    text: 'Давний коллекционер, покупаю в разных местах. МикроМир выделяется хорошим сервисом и честными ценами. Viper GTS пришёл раньше срока, модель в безупречном состоянии. Уже присматриваю следующую — Lamborghini Countach.',
    verified: true,
    experience: '2 года покупаю здесь',
  },
];

const scaleColors: Record<string, string> = {
  '1:18': '#d4830a',
  '1:48': '#c45e20',
  '1:64': '#5a5a5a',
};

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  const fiveStars = reviews.filter((r) => r.rating === 5).length;

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-10 border-b border-[#d4830a]/15 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#d4830a]" />
            <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">Клиенты о нас</span>
          </div>
          <h1 className="font-oswald font-bold text-6xl text-foreground">
            ОТЗЫВЫ<br /><span className="text-[#d4830a]">КОЛЛЕКЦИОНЕРОВ</span>
          </h1>
        </div>

        {/* Summary */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4830a]/10">
            <div className="bg-[#0f0d0b] p-10 text-center">
              <div className="font-oswald font-bold text-7xl text-[#d4830a] mb-2">{avgRating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-[#d4830a] text-xl">★</span>
                ))}
              </div>
              <div className="font-mono-ibm text-xs text-muted-foreground tracking-wider uppercase">Средняя оценка</div>
            </div>
            <div className="bg-[#0f0d0b] p-10 text-center">
              <div className="font-oswald font-bold text-7xl text-[#d4830a] mb-2">{reviews.length * 230}+</div>
              <div className="font-mono-ibm text-xs text-muted-foreground tracking-wider uppercase mt-2">Всего отзывов</div>
            </div>
            <div className="bg-[#0f0d0b] p-10 text-center">
              <div className="font-oswald font-bold text-7xl text-[#d4830a] mb-2">
                {Math.round((fiveStars / reviews.length) * 100)}%
              </div>
              <div className="font-mono-ibm text-xs text-muted-foreground tracking-wider uppercase mt-2">Оценка 5 звёзд</div>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d4830a]/10">
            {reviews.map((r) => (
              <div key={r.id} className="bg-[#0f0d0b] p-8 relative group hover:bg-[#131109] transition-colors">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-24 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${scaleColors[r.scale]}, transparent)` }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {/* Avatar */}
                      <div className="w-8 h-8 bg-[#d4830a]/10 flex items-center justify-center font-oswald font-bold text-sm text-[#d4830a]"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                        {r.name[0]}
                      </div>
                      <div>
                        <span className="font-oswald font-semibold text-sm text-foreground">{r.name}</span>
                        <span className="font-mono-ibm text-xs text-muted-foreground ml-2">· {r.city}</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5 ml-10">
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} className={`text-sm ${s <= r.rating ? 'text-[#d4830a]' : 'text-[#2a2a2a]'}`}>★</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="scale-badge px-2 py-1 text-[10px] mb-2"
                      style={{
                        background: scaleColors[r.scale],
                        color: r.scale === '1:64' ? '#8a8a8a' : '#0d0b09',
                        clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                      }}>
                      {r.scale}
                    </div>
                    <div className="font-mono-ibm text-[10px] text-muted-foreground">{r.date}</div>
                  </div>
                </div>

                {/* Model */}
                <div className="font-mono-ibm text-xs text-[#d4830a]/70 tracking-wider mb-3">{r.model}</div>

                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.text}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="font-mono-ibm text-xs text-muted-foreground">{r.experience}</span>
                  {r.verified && (
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-500/60 rounded-full" />
                      <span className="font-mono-ibm text-[10px] text-muted-foreground tracking-wider">Верифицировано</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Write review CTA */}
        <section className="mb-24">
          <div className="border border-[#d4830a]/25 p-10 text-center">
            <p className="font-mono-ibm text-xs tracking-[0.3em] text-[#d4830a] uppercase mb-4">Ваш опыт важен</p>
            <h2 className="font-oswald font-bold text-3xl text-foreground mb-4">ПОДЕЛИТЕСЬ ОТЗЫВОМ</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
              Купили у нас? Расскажите другим коллекционерам о своём опыте — это помогает всему сообществу.
            </p>
            <button className="industrial-btn bg-[#d4830a] text-[#0d0b09] font-oswald font-bold text-sm tracking-[0.12em] px-8 py-4 uppercase hover:bg-[#c45e20] transition-colors">
              Написать отзыв
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
