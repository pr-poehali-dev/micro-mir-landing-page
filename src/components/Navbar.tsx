import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import Logo from '@/components/Logo';
import WheelButton from '@/components/WheelButton';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'История' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0b09]/95 backdrop-blur-sm border-b border-[#d4830a]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Logo size="md" onClick={() => onNavigate('home')} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`font-oswald text-sm tracking-[0.12em] uppercase transition-colors relative pb-1 ${
                currentPage === item.id
                  ? 'text-[#d4830a]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d4830a]" />
              )}
            </button>
          ))}
        </div>

        {/* CTA — wheel button */}
        <div className="hidden md:flex items-center">
          <WheelButton
            label="Каталог"
            size="sm"
            onClick={() => onNavigate('catalog')}
          />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0b09]/98 border-t border-[#d4830a]/20 px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`font-oswald text-base tracking-[0.12em] uppercase text-left transition-colors ${
                currentPage === item.id ? 'text-[#d4830a]' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#d4830a]/10">
            <WheelButton
              label="Открыть каталог"
              size="sm"
              onClick={() => { onNavigate('catalog'); setMenuOpen(false); }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
