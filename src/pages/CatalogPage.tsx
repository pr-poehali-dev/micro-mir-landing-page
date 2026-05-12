import { useState } from 'react';
import Icon from '@/components/ui/icon';

const allModels = [
  { id: 1, name: 'Ferrari F40', brand: 'Bburago', scale: '1:18', type: 'Суперкар', price: 3200, inStock: true, new: true },
  { id: 2, name: 'Lamborghini Countach', brand: 'Maisto', scale: '1:18', type: 'Суперкар', price: 2800, inStock: true, new: false },
  { id: 3, name: 'Ford Mustang 1969', brand: 'Hot Wheels', scale: '1:64', type: 'Мышечный', price: 650, inStock: true, new: false },
  { id: 4, name: 'Porsche 911 RSR', brand: 'Bburago', scale: '1:48', type: 'Спорт', price: 1400, inStock: false, new: false },
  { id: 5, name: 'Mercedes 300SL', brand: 'AutoArt', scale: '1:18', type: 'Классика', price: 5600, inStock: true, new: false },
  { id: 6, name: 'Toyota Supra MK4', brand: 'Hot Wheels', scale: '1:64', type: 'JDM', price: 480, inStock: true, new: true },
  { id: 7, name: 'BMW M3 E30', brand: 'Maisto', scale: '1:48', type: 'Спорт', price: 1100, inStock: true, new: false },
  { id: 8, name: 'Chevrolet Camaro SS', brand: 'Matchbox', scale: '1:64', type: 'Мышечный', price: 420, inStock: true, new: false },
  { id: 9, name: 'Dodge Viper GTS', brand: 'Bburago', scale: '1:18', type: 'Суперкар', price: 2900, inStock: true, new: true },
  { id: 10, name: 'Nissan GT-R R35', brand: 'AutoArt', scale: '1:18', type: 'JDM', price: 6200, inStock: false, new: false },
  { id: 11, name: 'Volkswagen Golf GTI', brand: 'Maisto', scale: '1:64', type: 'Хэтчбек', price: 390, inStock: true, new: false },
  { id: 12, name: 'Audi RS6 Avant', brand: 'Bburago', scale: '1:48', type: 'Универсал', price: 1350, inStock: true, new: true },
  { id: 13, name: 'Alfa Romeo Giulia GTA', brand: 'Bburago', scale: '1:18', type: 'Классика', price: 3100, inStock: true, new: false },
  { id: 14, name: 'Subaru Impreza WRC', brand: 'Matchbox', scale: '1:64', type: 'Ралли', price: 510, inStock: true, new: false },
  { id: 15, name: 'Lancia Stratos', brand: 'AutoArt', scale: '1:48', type: 'Ралли', price: 2400, inStock: false, new: false },
  { id: 16, name: 'Jaguar E-Type', brand: 'Maisto', scale: '1:18', type: 'Классика', price: 2600, inStock: true, new: false },
];

const brands = ['Все', 'Bburago', 'Maisto', 'Hot Wheels', 'AutoArt', 'Matchbox'];
const scales = ['Все', '1:18', '1:48', '1:64'];
const types = ['Все', 'Суперкар', 'Классика', 'JDM', 'Мышечный', 'Спорт', 'Ралли', 'Хэтчбек', 'Универсал'];
const sortOptions = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Цена: по возрастанию' },
  { value: 'price-desc', label: 'Цена: по убыванию' },
  { value: 'name', label: 'По названию' },
];

const scaleColors: Record<string, string> = {
  '1:18': '#d4830a',
  '1:48': '#c45e20',
  '1:64': '#5a5a5a',
};

export default function CatalogPage() {
  const [brand, setBrand] = useState('Все');
  const [scale, setScale] = useState('Все');
  const [type, setType] = useState('Все');
  const [priceMax, setPriceMax] = useState(7000);
  const [sort, setSort] = useState('default');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = allModels
    .filter((m) => {
      if (brand !== 'Все' && m.brand !== brand) return false;
      if (scale !== 'Все' && m.scale !== scale) return false;
      if (type !== 'Все' && m.type !== type) return false;
      if (m.price > priceMax) return false;
      if (onlyInStock && !m.inStock) return false;
      if (onlyNew && !m.new) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const FilterPanel = () => (
    <div className="bg-[#0d0b09] border border-[#d4830a]/15 p-6 flex flex-col gap-6">
      {/* Scale */}
      <div>
        <p className="font-mono-ibm text-xs tracking-[0.2em] text-[#d4830a] uppercase mb-3">Масштаб</p>
        <div className="flex flex-wrap gap-2">
          {scales.map((s) => (
            <button
              key={s}
              onClick={() => setScale(s)}
              className={`scale-badge px-3 py-1.5 text-xs transition-colors ${
                scale === s
                  ? 'bg-[#d4830a] text-[#0d0b09]'
                  : 'bg-[#1a1612] text-muted-foreground hover:text-foreground border border-[#d4830a]/20'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <p className="font-mono-ibm text-xs tracking-[0.2em] text-[#d4830a] uppercase mb-3">Бренд</p>
        <div className="flex flex-col gap-1">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setBrand(b)}
              className={`text-left text-sm py-1 px-2 transition-colors ${
                brand === b ? 'text-[#d4830a]' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {brand === b && <span className="text-[#d4830a] mr-2">▶</span>}
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <p className="font-mono-ibm text-xs tracking-[0.2em] text-[#d4830a] uppercase mb-3">Тип</p>
        <div className="flex flex-col gap-1">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`text-left text-sm py-1 px-2 transition-colors ${
                type === t ? 'text-[#d4830a]' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {type === t && <span className="text-[#d4830a] mr-2">▶</span>}
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-mono-ibm text-xs tracking-[0.2em] text-[#d4830a] uppercase mb-3">
          Цена до: <span className="text-foreground">{priceMax.toLocaleString()} ₽</span>
        </p>
        <input
          type="range"
          min={400}
          max={7000}
          step={100}
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-[#d4830a]"
        />
      </div>

      {/* Toggles */}
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => setOnlyInStock(!onlyInStock)}
            className={`w-8 h-4 relative transition-colors ${onlyInStock ? 'bg-[#d4830a]' : 'bg-[#2a2a2a]'}`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
          >
            <div className={`absolute top-0.5 w-3 h-3 bg-[#0d0b09] transition-all ${onlyInStock ? 'left-4' : 'left-0.5'}`} />
          </div>
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Только в наличии</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => setOnlyNew(!onlyNew)}
            className={`w-8 h-4 relative transition-colors ${onlyNew ? 'bg-[#d4830a]' : 'bg-[#2a2a2a]'}`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
          >
            <div className={`absolute top-0.5 w-3 h-3 bg-[#0d0b09] transition-all ${onlyNew ? 'left-4' : 'left-0.5'}`} />
          </div>
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Только новинки</span>
        </label>
      </div>

      {/* Reset */}
      <button
        onClick={() => { setBrand('Все'); setScale('Все'); setType('Все'); setPriceMax(7000); setOnlyInStock(false); setOnlyNew(false); }}
        className="text-xs font-mono-ibm text-muted-foreground hover:text-[#d4830a] transition-colors tracking-wider uppercase text-left"
      >
        Сбросить фильтры
      </button>
    </div>
  );

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-10 border-b border-[#d4830a]/15 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-8 bg-[#d4830a]" />
              <span className="font-mono-ibm text-xs tracking-[0.25em] text-[#d4830a] uppercase">Ассортимент</span>
            </div>
            <h1 className="font-oswald font-bold text-5xl text-foreground">
              КАТАЛОГ<br /><span className="text-[#d4830a]">МОДЕЛЕЙ</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 border border-[#d4830a]/30 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Icon name="SlidersHorizontal" size={14} />
              Фильтры
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#0d0b09] border border-[#d4830a]/20 text-sm text-foreground px-4 py-2 font-mono-ibm focus:outline-none focus:border-[#d4830a]"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>

            <span className="font-mono-ibm text-xs text-muted-foreground">
              {filtered.length} / {allModels.length}
            </span>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters — desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile filters */}
          {filtersOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-[#0d0b09]/95 overflow-y-auto p-6 pt-20">
              <button onClick={() => setFiltersOpen(false)} className="absolute top-6 right-6">
                <Icon name="X" size={20} className="text-foreground" />
              </button>
              <FilterPanel />
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-muted-foreground">
                <Icon name="PackageSearch" size={48} className="mx-auto mb-4 opacity-30" />
                <p className="font-oswald text-xl">Модели не найдены</p>
                <p className="text-sm mt-2">Измените параметры фильтрации</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d4830a]/08">
                {filtered.map((model) => (
                  <div key={model.id}
                    className="bg-[#0f0d0b] group hover:bg-[#131109] transition-colors relative overflow-hidden cursor-pointer"
                  >
                    {/* Scale color bar */}
                    <div className="h-[2px]" style={{ background: scaleColors[model.scale] }} />

                    {/* Placeholder image area */}
                    <div className="h-40 bg-[#1a1612] flex items-center justify-center relative overflow-hidden">
                      <div className="font-oswald font-bold text-6xl opacity-5">{model.scale}</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="Car" size={48} className="text-[#d4830a]/20" />
                      </div>
                      {/* Badges */}
                      {model.new && (
                        <div className="absolute top-3 left-3 bg-[#d4830a] text-[#0d0b09] font-mono-ibm text-[10px] tracking-widest px-2 py-1 uppercase">
                          Новинка
                        </div>
                      )}
                      {!model.inStock && (
                        <div className="absolute top-3 right-3 bg-[#2a2a2a] text-muted-foreground font-mono-ibm text-[10px] tracking-widest px-2 py-1 uppercase">
                          Нет в наличии
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono-ibm text-xs tracking-wider"
                          style={{ color: scaleColors[model.scale] }}>
                          {model.scale}
                        </span>
                        <span className="font-mono-ibm text-xs text-muted-foreground">{model.brand}</span>
                      </div>
                      <h3 className="font-oswald font-semibold text-lg text-foreground mb-1 leading-tight group-hover:text-[#d4830a] transition-colors">
                        {model.name}
                      </h3>
                      <p className="font-mono-ibm text-xs text-muted-foreground mb-4">{model.type}</p>

                      <div className="flex items-center justify-between">
                        <span className="font-oswald font-bold text-xl text-[#d4830a]">
                          {model.price.toLocaleString()} ₽
                        </span>
                        <button
                          className={`flex items-center gap-2 text-xs font-mono-ibm tracking-wider px-4 py-2 transition-colors ${
                            model.inStock
                              ? 'bg-[#d4830a] text-[#0d0b09] hover:bg-[#c45e20]'
                              : 'bg-[#2a2a2a] text-muted-foreground cursor-not-allowed'
                          }`}
                          style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
                          disabled={!model.inStock}
                        >
                          {model.inStock ? (
                            <><Icon name="ShoppingCart" size={12} /> В корзину</>
                          ) : (
                            'Нет'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
