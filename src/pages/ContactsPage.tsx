import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Вопрос', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contacts = [
    { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67', sub: 'Пн–Пт: 10:00–20:00' },
    { icon: 'Mail', label: 'Email', value: 'info@mikromir.ru', sub: 'Ответ в течение 2 часов' },
    { icon: 'MapPin', label: 'Шоу-рум', value: 'Москва, ул. Автомобильная, 1', sub: 'Пн–Сб: 11:00–19:00' },
    { icon: 'MessageCircle', label: 'Telegram', value: '@mikromir_ru', sub: 'Чат для коллекционеров' },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-10 border-b border-[#d4830a]/15 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#d4830a]" />
            <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">Связаться с нами</span>
          </div>
          <h1 className="font-oswald font-bold text-6xl text-foreground">
            КОНТАКТЫ<br /><span className="text-[#d4830a]">И ОБРАТНАЯ<br />СВЯЗЬ</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Form */}
          <div>
            <h2 className="font-oswald font-bold text-2xl text-foreground mb-8 tracking-wider">НАПИСАТЬ НАМ</h2>

            {sent ? (
              <div className="border border-[#d4830a]/40 p-12 text-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                <div className="w-14 h-14 bg-[#d4830a]/10 flex items-center justify-center mx-auto mb-4"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                  <Icon name="CheckCircle" size={28} className="text-[#d4830a]" />
                </div>
                <p className="font-oswald font-bold text-2xl text-foreground mb-2">Сообщение отправлено</p>
                <p className="text-muted-foreground text-sm">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono-ibm text-xs text-[#d4830a] hover:underline tracking-wider"
                >
                  Отправить ещё одно
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono-ibm text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Имя *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      className="w-full bg-[#0d0b09] border border-[#d4830a]/20 text-foreground px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#d4830a] transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="font-mono-ibm text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#0d0b09] border border-[#d4830a]/20 text-foreground px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#d4830a] transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="font-mono-ibm text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Телефон</label>
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0d0b09] border border-[#d4830a]/20 text-foreground px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#d4830a] transition-colors placeholder:text-muted-foreground/40"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono-ibm text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Тема</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0d0b09] border border-[#d4830a]/20 text-foreground px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#d4830a] transition-colors"
                  >
                    <option>Вопрос</option>
                    <option>Заказ модели под запрос</option>
                    <option>Доставка и оплата</option>
                    <option>Возврат и обмен</option>
                    <option>Оптовые заявки</option>
                    <option>Другое</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono-ibm text-[11px] tracking-[0.2em] text-muted-foreground uppercase block mb-2">Сообщение *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, чем можем помочь..."
                    className="w-full bg-[#0d0b09] border border-[#d4830a]/20 text-foreground px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#d4830a] transition-colors placeholder:text-muted-foreground/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="industrial-btn bg-[#d4830a] text-[#0d0b09] font-oswald font-bold text-sm tracking-[0.15em] py-4 uppercase hover:bg-[#c45e20] transition-colors"
                >
                  Отправить сообщение →
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-oswald font-bold text-2xl text-foreground mb-8 tracking-wider">КАК С НАМИ СВЯЗАТЬСЯ</h2>

            <div className="flex flex-col gap-px bg-[#d4830a]/10 mb-10">
              {contacts.map((c) => (
                <div key={c.label} className="bg-[#0f0d0b] p-6 flex items-start gap-4 group hover:bg-[#131109] transition-colors">
                  <div className="w-10 h-10 bg-[#d4830a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d4830a]/20 transition-colors"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <Icon name={c.icon as "Phone"} size={16} className="text-[#d4830a]" />
                  </div>
                  <div>
                    <p className="font-mono-ibm text-[11px] tracking-[0.2em] text-muted-foreground uppercase mb-1">{c.label}</p>
                    <p className="font-oswald font-semibold text-base text-foreground mb-0.5">{c.value}</p>
                    <p className="font-mono-ibm text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-[#0f0d0b] border border-[#d4830a]/15 h-48 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(212,131,10,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,131,10,0.2) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="relative z-10 text-center">
                <Icon name="MapPin" size={32} className="text-[#d4830a] mx-auto mb-2" />
                <p className="font-oswald font-semibold text-sm text-foreground">Шоу-рум МикроМир</p>
                <p className="font-mono-ibm text-xs text-muted-foreground mt-1">Москва, ул. Автомобильная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
