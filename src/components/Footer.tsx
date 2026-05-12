interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080706] border-t border-[#d4830a]/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#d4830a] flex items-center justify-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                <span className="text-[#0d0b09] font-oswald font-bold text-sm">М</span>
              </div>
              <span className="font-oswald font-bold text-xl tracking-[0.15em]">МИКРОМИР</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Коллекционные масштабные модели автомобилей. Каждая деталь — точная копия оригинала. 
              Масштабы 1:18, 1:48, 1:64.
            </p>
            <div className="flex gap-4 mt-6">
              {['ВКонтакте', 'Telegram', 'WhatsApp'].map((s) => (
                <button key={s} className="text-muted-foreground hover:text-[#d4830a] text-xs font-mono-ibm transition-colors tracking-wide">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-oswald text-xs tracking-[0.2em] uppercase text-[#d4830a] mb-4">Разделы</p>
            <div className="flex flex-col gap-2">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'История' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-muted-foreground hover:text-foreground text-sm text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <p className="font-oswald text-xs tracking-[0.2em] uppercase text-[#d4830a] mb-4">Контакты</p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>+7 (495) 123-45-67</span>
              <span>info@mikromir.ru</span>
              <span>Москва, ул. Автомобильная, 1</span>
              <span className="font-mono-ibm text-xs">Пн–Пт: 10:00–20:00</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#d4830a]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-ibm text-xs text-muted-foreground tracking-wide">
            © 2024 МИКРОМИР. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <div className="flex gap-1 items-center">
            <div className="w-1.5 h-1.5 bg-[#d4830a] rounded-full" />
            <span className="font-mono-ibm text-xs text-muted-foreground tracking-widest ml-1">
              МАСШТАБ 1:18 · 1:48 · 1:64
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
