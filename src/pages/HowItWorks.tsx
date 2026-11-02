import { CreditCard, PackagePlus, ClipboardList, UserCog } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useNav } from '@/lib/nav-context';
import { Button } from '@/components/Button';

const STEPS = [
  {
    num: '01',
    icon: CreditCard,
    title: 'Subscribe',
    desc: 'Purchase the annual DeskPro subscription for ₹499 to access product registration and service request features.',
  },
  {
    num: '02',
    icon: PackagePlus,
    title: 'Register Your Product',
    desc: 'Register eligible household appliances within the applicable product-category registration limits. Additional registrations after the applicable limit can be made for ₹25 per product.',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Raise a Complaint',
    desc: 'Raise a service complaint for a registered product, whether it is in warranty or out of warranty.',
  },
  {
    num: '04',
    icon: UserCog,
    title: 'Technician Service',
    desc: 'For in-warranty products, the applicable service/labour charge is free, while spare-parts charges may apply. For out-of-warranty products, applicable service and spare-parts charges are payable according to the repair requirements.',
  },
];

export function HowItWorks() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From Subscription to Service in 4 Steps"
            description="DeskPro makes appliance service management simple. Here's the full process from start to finish."
          />

          <div className="mt-16 space-y-6">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center gap-6 rounded-3xl bg-white p-8 shadow-card lg:flex-row"
              >
                <div className="flex flex-none items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 text-2xl font-extrabold text-brand-500">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-6 w-6 text-brand-500" />
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy/60 lg:ml-0">
                    {step.desc}
                  </p>
                </div>
                <div className="hidden flex-none lg:block">
                  <div className="h-32 w-px bg-gradient-to-b from-brand-200 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate('download-app')}>
              Download the App to Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
