import { ShieldCheck, Database, Eye, Lock, Mail, Phone, ChevronRight } from 'lucide-react';

const COLLECTED_DATA = [
  'Name',
  'Phone Number',
  'Registered Products',
  'Complaint Details',
  'Address',
  'Payment History',
];

const SECTIONS = [
  {
    icon: Database,
    title: 'Information We Collect',
    body: (
      <ul className="space-y-2.5">
        {COLLECTED_DATA.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm leading-relaxed text-navy/70">
            <ChevronRight className="h-4 w-4 flex-none text-brand-500" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    body: (
      <p className="text-sm leading-relaxed text-navy/70">
        Your information is used only to provide product registration, complaint tracking,
        technician assignment and customer support.
      </p>
    ),
  },
  {
    icon: Lock,
    title: 'Data Security',
    body: (
      <p className="text-sm leading-relaxed text-navy/70">
        We use secure storage practices to protect your information. We never sell your data to
        third parties.
      </p>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section className="bg-bg py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            Privacy Policy
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl text-balance">
            DeskPro Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/60 text-balance">
            At DeskPro, we value your privacy and are committed to protecting your personal
            information.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-bg-soft bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                  <section.icon className="h-5 w-5 text-brand-500" />
                </span>
                <h2 className="text-xl font-bold text-navy">{section.title}</h2>
              </div>
              <div className="mt-5">{section.body}</div>
            </div>
          ))}

          <div className="rounded-2xl border border-bg-soft bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                <Mail className="h-5 w-5 text-brand-500" />
              </span>
              <h2 className="text-xl font-bold text-navy">Contact Us</h2>
            </div>
            <div className="mt-5 space-y-3">
              <a
                href="mailto:deskpro.admin@gmail.com"
                className="flex items-center gap-3 text-sm text-navy/70 transition-colors hover:text-brand-600"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                deskpro.admin@gmail.com
              </a>
              <a
                href="tel:+919494348719"
                className="flex items-center gap-3 text-sm text-navy/70 transition-colors hover:text-brand-600"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                +91 9494348719
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <ShieldCheck className="h-6 w-6 flex-none text-brand-500" />
            <p className="text-sm leading-relaxed text-navy/70">
              This privacy policy describes how DeskPro handles your personal information. If you
              have any questions about this policy, please contact us using the details above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
