import { useNav } from '@/lib/nav-context';
import { COMPANY, NAV_ITEMS, type PageId } from '@/lib/constants';
import { Mail, Phone, Wrench } from 'lucide-react';

const LEGAL: { id: PageId; label: string }[] = [
  { id: 'privacy-policy', label: 'Privacy Policy' },
  { id: 'terms-and-conditions', label: 'Terms & Conditions' },
];

export function Footer() {
  const { navigate } = useNav();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/deskpro.png"
              alt="DeskPro appliance care made simple"
              className="h-14 w-auto max-w-[210px] object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigate(item.id)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('download-app')}
                  className="text-sm text-white/60 transition-colors hover:text-brand-400"
                >
                  Download App
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Legal</h3>
            <ul className="mt-4 space-y-3">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.id)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 text-brand-400" />
                {COMPANY.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 text-brand-400" />
                {COMPANY.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Wrench className="h-4 w-4 text-brand-400" />
                Service available for major household appliances
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Built by{' '}
            <span className="font-semibold text-white/70">{COMPANY.parent}</span>. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Smart Service & Product Management
          </p>
        </div>
      </div>
    </footer>
  );
}
