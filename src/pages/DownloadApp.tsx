import { Download, Smartphone, QrCode, ExternalLink } from 'lucide-react';
import { APP_DOWNLOAD_URL, PLAY_STORE_URL } from '@/lib/constants';
import { QRCodeSVG } from 'qrcode.react';

const PHONE_IMG = 'https://images.pexels.com/photos/4724370/pexels-photo-4724370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';


export function DownloadApp() {
  return (
    <div className="pt-20">
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <img
              src="/deskpro.png"
              alt="DeskPro Logo"
              className="h-24 w-24 object-contain"
            />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
                Download App
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl text-balance">
                Download DeskPro
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy/60 text-balance">
                Scan the QR code with your phone camera to download DeskPro from Google Play Store.
              </p>

              <div className="mt-8 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-bg-soft bg-white shadow-card p-4">
                    <QRCodeSVG
                      value={PLAY_STORE_URL}
                      size={160}
                      level="H"
                      includeMargin={false}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-navy/60">Scan to download DeskPro</p>
                  <p className="text-xs text-navy/40 text-center max-w-[250px]">
                    Scan the QR code with your phone camera to download DeskPro.
                  </p>
                </div>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-6 py-3 text-white shadow-soft transition-all hover:bg-brand-600 hover:shadow-card active:scale-[0.98]"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="text-base font-bold">Get it on Google Play</span>
                </a>

                <a
                  href={APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border-2 border-brand-200 px-6 py-3 text-brand-600 transition-all hover:bg-brand-50 hover:border-brand-300 active:scale-[0.98]"
                >
                  <Download className="h-5 w-5" />
                  <span className="text-base font-bold">Download APK (Fallback)</span>
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-bg-soft bg-white p-4">
                <p className="text-xs text-navy/50">
                  Google Play Store:{' '}
                  <code className="rounded bg-bg-soft px-2 py-0.5 text-brand-600">{PLAY_STORE_URL}</code>
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-brand-100/40 blur-3xl" />
                <div className="relative rounded-[2.5rem] border-8 border-navy bg-navy p-2 shadow-hover">
                  <div className="rounded-[2rem] bg-white overflow-hidden">
                    <img
                      src={PHONE_IMG}
                      alt="DeskPro app on a smartphone"
                      className="h-[500px] w-[260px] object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 left-1/2 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-navy" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Smartphone, title: 'Manage Anywhere', desc: 'Register products, raise complaints, and track service from your phone.' },
              { icon: Download, title: 'Easy Setup', desc: 'Download, sign in, and start managing your appliance service in minutes.' },
              { icon: QrCode, title: 'Quick Access', desc: 'Scan the QR code to jump straight to the download page.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <f.icon className="h-6 w-6 text-brand-500" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-navy/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
