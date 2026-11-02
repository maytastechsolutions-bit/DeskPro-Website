import { NavProvider, useNav } from '@/lib/nav-context';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Subscriptions } from '@/pages/Subscriptions';
import { HowItWorks } from '@/pages/HowItWorks';
import { DownloadApp } from '@/pages/DownloadApp';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsAndConditions } from '@/pages/TermsAndConditions';
import type { PageId } from '@/lib/constants';

const PAGES: Record<PageId, React.ComponentType> = {
  home: Home,
  about: About,
  services: Services,
  subscriptions: Subscriptions,
  'how-it-works': HowItWorks,
  'download-app': DownloadApp,
  download: DownloadApp,
  'privacy-policy': PrivacyPolicy,
  'terms-and-conditions': TermsAndConditions,
};

function CurrentPage() {
  const { page } = useNav();
  const Page = PAGES[page] ?? Home;
  return <Page />;
}

function App() {
  return (
    <NavProvider>
      <div className="min-h-screen bg-bg">
        <Navbar />
        <main>
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </NavProvider>
  );
}

export default App;
