import Icon from '@/components/ui/icon';

const deliveryMethods = [
  {
    icon: 'Truck',
    title: 'СДЭК',
    subtitle: '2–5 рабочих дней',
    desc: 'Доставка в любой пункт выдачи СДЭК по всей России. Удобное отслеживание посылки.',
    price: 'от 300 ₽',
    free: 'Бесплатно от 5 000 ₽',
  },
  {
    icon: 'Package',
    title: 'Почта России',
    subtitle: '5–14 рабочих дней',
    desc: 'Отправка в самые отдалённые регионы. Подходит для крупных и тяжёлых заказов.',
    price: 'от 250 ₽',
    free: 'Бесплатно от 7 000 ₽',
  },
  {
    icon: 'Zap',
    title: 'Курьер по Москве',
    subtitle: 'В день заказа',
    desc: 'Доставка курьером в пределах МКАД. Заказ до 12:00 — доставка в тот же день.',
    price: '450 ₽',
    free: 'Бесплатно от 4 000 ₽',
  },
  {
    icon: 'MapPin',
    title: 'Самовывоз',
    subtitle: 'Бесплатно',
    desc: 'Забрать заказ в нашем шоу-руме в Москве. Проверка при получении.',
    price: 'Бесплатно',
    free: 'Москва, ул. Автомобильная, 1',
  },
];

const paymentMethods = [
  { icon: 'CreditCard', title: 'Банковская карта', desc: 'Visa, Mastercard, МИР — безопасная оплата через защищённый шлюз' },
  { icon: 'Smartphone', title: 'СБП', desc: 'Система быстрых платежей — оплата по QR-коду через ваш банк' },
  { icon: 'Wallet', title: 'ЮMoney / QIWI', desc: 'Электронные кошельки — мгновенное зачисление' },
  { icon: 'Building2', title: 'Безналичный расчёт', desc: 'Для юридических лиц и ИП. Выставляем счёт на оплату' },
];

const faqItems = [
  { q: 'Как упакованы модели при доставке?', a: 'Каждая модель дополнительно оборачивается в пузырчатую плёнку и помещается в плотную коробку с наполнителем. Хрупкие позиции маркируются соответствующим образом.' },
  { q: 'Можно ли вернуть модель, если она не понравилась?', a: 'Да, в течение 14 дней при условии сохранения оригинальной упаковки и товарного вида. Возврат оформляется через форму на сайте или по телефону.' },
  { q: 'Доставляете ли вы за рубеж?', a: 'На данный момент доставка осуществляется только по территории России. Доставка в Казахстан, Беларусь и Армению — по запросу.' },
  { q: 'Как отследить посылку?', a: 'После отправки вы получите SMS и email с трек-номером. Отслеживание доступно на сайте перевозчика или в личном кабинете.' },
];

export default function DeliveryPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-10 border-b border-[#d4830a]/15 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#d4830a]" />
            <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">Логистика</span>
          </div>
          <h1 className="font-oswald font-bold text-6xl text-foreground">
            ДОСТАВКА<br /><span className="text-[#d4830a]">И ОПЛАТА</span>
          </h1>
        </div>

        {/* Delivery methods */}
        <section className="mb-20">
          <h2 className="font-oswald font-bold text-3xl text-foreground mb-8 tracking-wide">СПОСОБЫ ДОСТАВКИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d4830a]/10">
            {deliveryMethods.map((m) => (
              <div key={m.title} className="bg-[#0f0d0b] p-8 relative group hover:bg-[#131109] transition-colors">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#d4830a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d4830a]/20 transition-colors"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <Icon name={m.icon as "Truck"} size={20} className="text-[#d4830a]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-oswald font-bold text-xl text-foreground tracking-wide">{m.title}</h3>
                      <span className="font-mono-ibm text-sm text-[#d4830a]">{m.price}</span>
                    </div>
                    <p className="font-mono-ibm text-xs text-[#d4830a]/70 tracking-wider mb-3">{m.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{m.desc}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#d4830a]" />
                      <span className="font-mono-ibm text-xs text-muted-foreground">{m.free}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery zones */}
        <section className="mb-20 bg-[#0d0b09] border border-[#d4830a]/15 p-10">
          <h2 className="font-oswald font-bold text-2xl text-foreground mb-6 tracking-wide">СРОКИ ПО РЕГИОНАМ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#d4830a]/10">
            {[
              { region: 'Москва / МО', days: '1–2 дня' },
              { region: 'Города-миллионники', days: '2–4 дня' },
              { region: 'Региональные центры', days: '3–7 дней' },
              { region: 'Отдалённые районы', days: '7–14 дней' },
            ].map((z) => (
              <div key={z.region} className="bg-[#0d0b09] p-6 text-center">
                <div className="font-oswald font-bold text-2xl text-[#d4830a] mb-1">{z.days}</div>
                <div className="font-mono-ibm text-xs text-muted-foreground tracking-wider">{z.region}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment */}
        <section className="mb-20">
          <h2 className="font-oswald font-bold text-3xl text-foreground mb-8 tracking-wide">СПОСОБЫ ОПЛАТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d4830a]/10">
            {paymentMethods.map((p) => (
              <div key={p.title} className="bg-[#0f0d0b] p-7 group hover:bg-[#131109] transition-colors">
                <div className="w-10 h-10 bg-[#d4830a]/10 flex items-center justify-center mb-4 group-hover:bg-[#d4830a]/20 transition-colors"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                  <Icon name={p.icon as "CreditCard"} size={18} className="text-[#d4830a]" />
                </div>
                <h3 className="font-oswald font-semibold text-base text-foreground mb-2 tracking-wide">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="font-oswald font-bold text-3xl text-foreground mb-8 tracking-wide">ЧАСТЫЕ ВОПРОСЫ</h2>
          <div className="flex flex-col gap-px bg-[#d4830a]/10">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-[#0f0d0b] p-8 group">
                <div className="flex gap-4">
                  <span className="font-mono-ibm text-[#d4830a] text-sm mt-0.5 shrink-0">Q:</span>
                  <div>
                    <p className="font-oswald font-semibold text-base text-foreground mb-2 tracking-wide">{item.q}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
