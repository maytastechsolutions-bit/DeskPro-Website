import { Wind, Refrigerator, WashingMachine, MoreHorizontal } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const SERVICES = [
  {
    icon: Wind,
    title: 'AC Service & Repair',
    desc: 'Professional air conditioner servicing, inspection, and repair — from cooling issues to maintenance and part replacements.',
    img: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator Service & Repair',
    desc: 'Comprehensive refrigerator repair and servicing for cooling problems, compressor issues, and general maintenance.',
    img: 'https://images.pexels.com/photos/6593607/pexels-photo-6593607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Service & Repair',
    desc: 'Expert washing machine repair covering drum issues, drainage problems, electrical faults, and routine servicing.',
    img: 'https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: MoreHorizontal,
    title: 'Other Appliance Services',
    desc: 'Service and repair support for additional household appliances. Contact us to check if your appliance is covered.',
    img: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function Services() {
  return (
    <div className="pt-20">
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Appliance Service & Repair"
            description="DeskPro facilitates service requests for a range of household appliances. Applicable warranty, service, and spare-parts charges depend on the product and repair required."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 shadow-card backdrop-blur">
                    <s.icon className="h-6 w-6 text-brand-500" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center">
            <p className="text-sm text-navy/70">
              Service availability may vary by location, technician availability, and appliance type. In-warranty service/labour charges may be free where applicable, while spare parts and out-of-warranty service charges may apply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
