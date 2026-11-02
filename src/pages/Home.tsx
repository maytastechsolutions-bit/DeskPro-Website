import { ShieldCheck, Wrench, Clock, Bell, CreditCard, Smartphone, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/Button';
import { useNav } from '@/lib/nav-context';
import { PLAY_STORE_URL } from '@/lib/constants';

const HERO_IMG = '/image.png';

const BENEFITS = [
  { icon: ShieldCheck, title: 'Warranty Service', desc: 'Raise complaints for eligible in-warranty registered products. The applicable service/labour charge is free, while spare parts may be chargeable.' },
  { icon: Wrench, title: 'Expert Technicians', desc: 'Qualified technicians assigned to inspect and repair your appliances with care.' },
  { icon: Clock, title: 'Quick Response', desc: 'Track your service requests and get timely updates from booking to completion.' },
  { icon: Bell, title: 'Service Notifications', desc: 'Stay informed with real-time alerts about your complaints and technician visits.' },
  { icon: CreditCard, title: 'Transparent Payments', desc: 'Track the annual subscription, registration charges, service charges, and spare-parts payments.' },
  { icon: Smartphone, title: 'Manage From Your Phone', desc: 'Register products, raise complaints, and track service — all from the DeskPro app.' },
];

export function Home() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-bg pt-12 lg:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-50 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-600">
              <ShieldCheck className="h-4 w-4" />
              Smart Service & Product Management
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
              Your Appliances.{' '}
              <span className="text-brand-500">Our Responsibility.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/60 text-balance">
              DeskPro is a service-management platform that helps customers create an account, subscribe,
              register eligible appliances, raise complaints, and track technician visits and payments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate('services')}>
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-6 py-3 text-white shadow-soft transition-all hover:bg-brand-600 hover:shadow-card active:scale-[0.98]"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="text-base font-bold">Get it on Google Play</span>
              </a>
              <Button size="lg" variant="outline" onClick={() => navigate('download-app')}>
                <Download className="h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <img
              src={HERO_IMG}
              alt="Technician repairing a wall-mounted air conditioner"
              className="w-full rounded-3xl object-contain shadow-card"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-bg-soft bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-500">
                  <b.icon className="h-7 w-7 text-brand-500 transition-colors group-hover:text-white" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WarrantyVsPaid />
      <HowItWorksPreview />
      <AppCTA />
    </div>
  );
}

function WarrantyVsPaid() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            Service Model
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl text-balance">
            Warranty Service vs. Paid Service
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60 text-balance">
            DeskPro supports two service paths depending on your coverage. Here's how each works.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-card">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 shadow-brand">
                <ShieldCheck className="h-7 w-7 text-white" />
              </span>
              <h3 className="text-xl font-bold text-navy">Warranty Service</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy/60">
              For an eligible in-warranty product, the applicable service/labour charge is free. Warranty
              applicability remains subject to the manufacturer's warranty terms and inspection. Spare-parts
              charges may apply when the replacement is not covered under the applicable warranty.
            </p>
            <ul className="mt-6 space-y-3">
              {['Raise complaints for eligible in-warranty products', 'Service/labour charge is free where applicable', 'Spare-parts charges may apply'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-card">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy shadow-soft">
                <CreditCard className="h-7 w-7 text-white" />
              </span>
              <h3 className="text-xl font-bold text-navy">Out-of-Warranty Paid Service</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy/60">
              For an out-of-warranty product, the customer pays the applicable service charge. The technician
              inspects the appliance and determines the required service or repair. The applicable service
              charge is payable to the technician when the technician reaches the customer's home, and
              spare-parts charges may be additional.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Service charge applies to out-of-warranty service',
                'Service charge is payable at the technician home visit',
                'Spare-parts charges depend on the parts required',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-navy/10">
                    <CreditCard className="h-3.5 w-3.5 text-navy" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center">
          <p className="text-sm text-navy/70">
            <strong className="text-brand-600">Note:</strong> The ₹499 annual subscription is for the DeskPro
            platform and does not make all appliance repairs or spare parts free. Applicable service
            charges and spare-parts charges depend on warranty coverage and the repair required.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorksPreview() {
  const steps = [
    { num: '01', title: 'Subscribe', desc: 'Purchase the annual DeskPro subscription for ₹499 to access product registration and service request features.' },
    { num: '02', title: 'Register Your Product', desc: 'Register eligible household appliances within the applicable product-category limits. Additional registrations after the applicable limit can be made for ₹25 per product.' },
    { num: '03', title: 'Raise a Complaint', desc: 'Raise a service complaint for a registered product, whether it is in warranty or out of warranty.' },
    { num: '04', title: 'Technician Service', desc: 'In-warranty service/labour charges may be free where applicable, while out-of-warranty service and spare-parts charges depend on the repair required.' },
  ];
  const { navigate } = useNav();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            How It Works
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl text-balance">
            From Subscription to Service in 4 Steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="rounded-2xl border border-bg-soft bg-white p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-1">
                <span className="text-3xl font-extrabold text-brand-100">{s.num}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-brand-200 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" onClick={() => navigate('how-it-works')}>
            Learn More About the Process
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function AppCTA() {
  const { navigate } = useNav();
  const PHONE_IMG = 'https://images.pexels.com/photos/4724370/pexels-photo-4724370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-navy px-6 py-12 shadow-card sm:px-12 lg:px-16 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
                Manage Your Appliances on the Go
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60 text-balance">
                Download the DeskPro app to register products, raise complaints, track technician
                visits, and manage payments — all from your phone.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-navy shadow-soft transition-all hover:bg-white/90 hover:shadow-card active:scale-[0.98]"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="text-base font-bold">Get it on Google Play</span>
                </a>
                <Button size="lg" variant="light" onClick={() => navigate('download-app')}>
                  <Download className="h-5 w-5" />
                  Download App
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => navigate('subscriptions')}>
                  View Subscriptions
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative hidden justify-center lg:flex">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-brand-500/20 blur-2xl" />
                <img
                  src={PHONE_IMG}
                  alt="DeskPro app on a smartphone"
                  className="relative h-[400px] rounded-3xl object-cover shadow-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
