import { ShieldCheck, CreditCard, Package, Info } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useNav } from '@/lib/nav-context';
import { Button } from '@/components/Button';

export function Subscriptions() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      <section className="bg-bg py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            Subscriptions
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl text-balance">
            DeskPro Service Plans
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/60 text-balance">
            Users first create an account and then purchase the annual DeskPro platform subscription for ₹499.
            The subscription is valid for one year from the applicable subscription start date and enables
            product registration and service requests through DeskPro.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="What Your Subscription Enables"
            description="The ₹499 annual subscription is a DeskPro platform/service subscription. It does not mean that all appliance repairs or spare parts are free. Service depends on product eligibility, warranty terms, and the repair required."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border-2 border-brand-200 bg-white p-8 shadow-card">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 shadow-brand">
                <ShieldCheck className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Warranty Service</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                For an eligible in-warranty product, the applicable service/labour charge is free. Warranty applicability remains subject to the manufacturer's warranty terms and inspection. You can raise a complaint through DeskPro, and a technician may be assigned to inspect and repair the appliance according to the applicable warranty terms. Spare parts may require payment when the replacement is not covered under the applicable warranty.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-navy/70">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" />
                  Service/labour charge is free where applicable; warranty terms still apply
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" />
                  Spare-parts availability and pricing depend on the required part
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-bg-soft bg-white p-8 shadow-card">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy shadow-soft">
                <CreditCard className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Out-of-Warranty Paid Service</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                For an out-of-warranty product, the customer pays the applicable service charge. The technician inspects the appliance and determines the required repair or service. The applicable service charge is payable to the technician when the technician reaches the customer's home. Spare-parts charges, if required, are additional and depend on the actual parts needed.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-navy/70">
                <li className="flex items-start gap-2">
                  <CreditCard className="mt-0.5 h-4 w-4 flex-none text-navy" />
                  The applicable service charge is paid at the technician home visit
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="mt-0.5 h-4 w-4 flex-none text-navy" />
                  The final cost depends on the service and repair requirements
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-bg-soft bg-white p-8 shadow-card">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                <Package className="h-7 w-7 text-brand-500" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Spare-Part Charges</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Spare-parts charges may apply in both warranty and out-of-warranty situations. In warranty,
                replacement parts may be chargeable when not covered by the applicable warranty. For
                out-of-warranty service, spare-parts charges are additional and depend on the parts required.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-navy/70">
                <li className="flex items-start gap-2">
                  <Package className="mt-0.5 h-4 w-4 flex-none text-brand-500" />
                  Spare-parts charges depend on the parts required
                </li>
                <li className="flex items-start gap-2">
                  <Package className="mt-0.5 h-4 w-4 flex-none text-brand-500" />
                  Applicable charges depend on warranty coverage and repair requirements
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <Info className="h-6 w-6 flex-none text-brand-500" />
            <p className="text-sm leading-relaxed text-navy/70">
              Product registration and service complaints are available after subscription. Product-category
              registration limits apply; after the applicable limit is reached, an additional product can
              be registered for ₹25. The subscription does not guarantee warranty coverage or free spare
              parts, and all applicable service and parts charges depend on the product and repair required.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" onClick={() => navigate('how-it-works')}>
              See How the Process Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
