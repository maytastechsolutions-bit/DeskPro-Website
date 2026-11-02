import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { PageId } from '@/lib/constants';

interface NavContextValue {
  page: PageId;
  navigate: (page: PageId) => void;
}

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    return hash || 'home';
  });

  const navigate = (next: PageId) => {
    setPage(next);
    window.location.hash = next;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash) setPage(hash);
      else setPage('home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return <NavContext.Provider value={{ page, navigate }}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');
  return ctx;
}
