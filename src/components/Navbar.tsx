import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download,
  Home,
  Info,
  Wrench,
  CreditCard,
  HelpCircle,
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { useNav } from '@/lib/nav-context';
import { NAV_ITEMS, type PageId } from '@/lib/constants';

export function Navbar() {
  const { page, navigate } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: PageId) => {
    navigate(id);
    setMenuOpen(false);
  };
  const getNavIcon = (label: string) => {
  switch (label) {
    case 'Home':
      return <Home className="h-4 w-4 text-white" />;

    case 'About Us':
      return <Info className="h-4 w-4 text-white" />;

    case 'Services':
      return <Wrench className="h-4 w-4 text-white" />;

    case 'Subscriptions':
      return <CreditCard className="h-4 w-4 text-white" />;

    case 'How It Works':
      return <HelpCircle className="h-4 w-4 text-white" />;

    default:
      return null;
  }
};

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-soft backdrop-blur-md'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo onClick={() => handleNav('home')} />

        <div className="hidden items-center gap-3 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-medium text-white shadow-brand transition-all duration-200 hover:bg-brand-600 hover:-translate-y-0.5"
            >
              {getNavIcon(item.label)}
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button size="sm" onClick={() => handleNav('download-app')}>
            <Download className="h-4 w-4" />
            Download App
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-screen border-t border-bg-soft' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 bg-white px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <button
               key={item.id}
               onClick={() => handleNav(item.id)}
              className="flex w-full items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-left text-sm font-medium text-white shadow-brand transition-all duration-200 hover:bg-brand-600"
            >
              {getNavIcon(item.label)}
              {item.label}
            </button>
          ))}
          <div className="pt-2 space-y-2">
            <Button size="sm" className="w-full" onClick={() => handleNav('download-app')}>
              <Download className="h-4 w-4" />
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
