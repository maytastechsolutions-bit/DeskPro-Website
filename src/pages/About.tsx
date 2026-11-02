import {
  PackagePlus,
  ClipboardList,
  CalendarCheck,
  UserCog,
  CreditCard,
  BellRing,
  Sparkles,
  Users,
  Target,
  Rocket,
} from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { useNav } from '@/lib/nav-context';
import { COMPANY } from '@/lib/constants';
import { Button } from '@/components/Button';

const FEATURES = [
  {
    icon: PackagePlus,
    title: 'Product Registration',
    desc: 'After purchasing the annual subscription, register eligible household appliances within the applicable product-category limits.',
  },
  {
    icon: ClipboardList,
    title: 'Complaint Management',
    desc: 'Raise and manage service complaints for your registered products with a structured, trackable process.',
  },
  {
    icon: CalendarCheck,
    title: 'Service Bookings',
    desc: 'Book service appointments at your convenience and receive updates as your request progresses.',
  },
  {
    icon: UserCog,
    title: 'Technician Visits',
    desc: 'Technicians inspect registered appliances based on availability and location, with visit details tracked through the platform.',
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    desc: 'Track the annual subscription, additional product-registration charges, service charges, and spare-parts payments.',
  },
  {
    icon: BellRing,
    title: 'Service Notifications',
    desc: 'Get real-time alerts about complaint status, technician assignments, and service updates.',
  },
];

export function About() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      {/* About DeskPro Introduction */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            About DeskPro
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl text-balance">
            A Smart Service & Product Management Platform
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-navy/60 text-balance">
            DeskPro is designed to simplify how customers manage appliance repair
            and service requests. After creating an account and purchasing the
            annual subscription, customers can register eligible products, raise
            complaints, and track technician visits through one platform.
          </p>
        </div>
      </section>

      {/* Leadership & Our Team */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mb-12">
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              About Us
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
              Leadership <span className="text-brand-500">&</span>{' '}
              <span className="text-brand-500">Our Team</span>
            </h2>

            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-navy/60">
              Meet the founder and the team behind DeskPro, working together to
              make appliance care simple, reliable, and customer-focused.
            </p>
          </div>

          {/* Founder and Team Layout */}
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Founder Card */}
            <div className="rounded-3xl border border-bg-soft bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-7">
              {/* Founder Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/prawin.png"
                  alt="Prawin Kota, Founder of Maytas Tech Solutions"
                  className="h-[320px] w-full object-cover object-center sm:h-[400px]"
                />
              </div>

              {/* Founder Name */}
              <div className="relative -mt-7 px-4">
                <div className="rounded-xl bg-brand-500 px-5 py-3 text-center shadow-brand">
                  <h3 className="text-2xl font-extrabold text-white">
                    Prawin Kota
                  </h3>
                </div>
              </div>

              {/* Founder Designation */}
              <div className="mt-3 text-center">
                <span className="inline-block rounded-full bg-brand-50 px-5 py-2 text-sm font-bold text-navy">
                  Founder, Maytas Tech Solutions
                </span>
              </div>

              <div className="my-6 border-t border-bg-soft" />

              {/* Founder Description */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Rocket className="h-5 w-5 text-brand-500" />
                  </span>

                  <h4 className="text-xl font-extrabold text-navy">
                    About the Founder
                  </h4>
                </div>

                <p className="mt-4 text-base leading-7 text-navy/70">
                  Prawin Kota is the Founder of{' '}
                  <span className="font-bold text-brand-600">
                    Maytas Tech Solutions
                  </span>{' '}
                  and the driving force behind{' '}
                  <span className="font-bold text-brand-600">DeskPro</span>.
                  He envisioned DeskPro as a smart, all-in-one platform where
                  users can register their appliances, track warranty details,
                  request services, and manage complaints in one place. His
                  vision is to make appliance ownership simpler, more organized,
                  and completely hassle-free.
                </p>
              </div>
            </div>

            {/* Our Team and Vision */}
            <div className="flex flex-col gap-8">
              {/* Our Team Card */}
              <div className="rounded-3xl border border-bg-soft bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-7">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                    <Users className="h-7 w-7 text-brand-500" />
                  </span>

                  <h3 className="text-3xl font-extrabold text-navy">
                    Our Team
                  </h3>
                </div>

                {/* Team Member */}
                <div className="grid items-center gap-6 rounded-2xl border border-brand-100 bg-brand-50/30 p-4 sm:p-5 md:grid-cols-[220px_1fr]">
                  {/* Replace this image with the exact team photo you provide */}
                  <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-soft sm:h-56 sm:w-56 md:h-48 md:w-48">
                    <img
                      src="/balusa-likhitha.png"
                      alt="Balusa Likhitha, Core Team at DeskPro"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Team Member Details */}
                  <div className="min-w-0">
                    <h4 className="text-2xl font-extrabold text-brand-500">
                      Balusa Likhitha
                    </h4>

                    <p className="mt-1 text-sm font-semibold text-navy/70">
                      Core Team, DeskPro
                    </p>

                    <div className="my-4 h-1 w-20 rounded-full bg-brand-500" />

                    <h5 className="text-lg font-extrabold leading-snug text-navy">
                      Turning the Founder’s Ideation into a Real-World Platform
                    </h5>

                    <p className="mt-3 text-sm leading-6 text-navy/70">
                      Balusa Likhitha transformed Prawin’s vision for DeskPro
                      into a practical, user-friendly platform — from
                      requirement analysis and design to development and a
                      seamless user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder's Vision Card */}
              <div className="rounded-3xl border border-bg-soft bg-brand-50/50 p-6 shadow-soft sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500 shadow-brand">
                    <Target className="h-7 w-7 text-white" />
                  </span>

                  <div>
                    <h3 className="text-2xl font-extrabold text-navy sm:text-3xl">
                      Our Founder’s Vision
                    </h3>

                    <p className="mt-4 text-base leading-7 text-navy/70 sm:text-lg">
                      To build a trusted, technology-driven platform that makes
                      appliance care simple, reliable, and worry-free for every
                      home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing DeskPro Features */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What DeskPro Does"
            title="Everything You Need to Manage Appliance Service"
            description="DeskPro covers the service journey — from annual subscription and product registration to complaints, technician visits, and payment tracking."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-bg-soft bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-500">
                  <f.icon className="h-7 w-7 text-brand-500 transition-colors group-hover:text-white" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-navy">
                  {f.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Closing Section */}
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 shadow-brand">
            <Sparkles className="h-8 w-8 text-white" />
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
            Simplifying Service Management
          </h2>

          <p className="mt-4 text-base leading-relaxed text-navy/60 text-balance">
            DeskPro was built to make appliance service easier to manage.
            Product registration, complaints, technician visits, warranty-related
            service, and payments stay organized and accessible.
          </p>

          <div className="mt-8 rounded-2xl border border-bg-soft bg-white p-6 shadow-soft">
            <p className="text-sm text-navy/70">
              DeskPro is built and launched by{' '}
              <span className="font-bold text-brand-600">
                {COMPANY.parent}
              </span>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('services')}>
              Explore Services
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate('download-app')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}