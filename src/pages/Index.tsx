import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CatalogPage from '@/pages/CatalogPage';
import DeliveryPage from '@/pages/DeliveryPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactsPage from '@/pages/ContactsPage';

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = ({
      home: 'МикроМир — Коллекционные модели автомобилей',
      about: 'История и миссия — МикроМир',
      catalog: 'Каталог моделей — МикроМир',
      delivery: 'Доставка и оплата — МикроМир',
      reviews: 'Отзывы коллекционеров — МикроМир',
      contacts: 'Контакты — МикроМир',
    } as Record<string, string>)[currentPage] || 'МикроМир';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage />;
      case 'catalog': return <CatalogPage />;
      case 'delivery': return <DeliveryPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contacts': return <ContactsPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
