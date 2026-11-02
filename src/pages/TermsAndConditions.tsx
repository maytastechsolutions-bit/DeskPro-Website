import { Info } from 'lucide-react';

const CLAUSES: { number: string; title: string; text: string }[] = [
  {
    number: '1',
    title: 'Platform Overview',
    text: 'DeskPro is a service-management and facilitation platform. It helps customers create accounts, register eligible household products, raise service complaints, and coordinate technician visits. DeskPro does not manufacture the products it facilitates service for.',
  },
  {
    number: '2',
    title: 'Account Creation',
    text: 'Users must first create an account in the DeskPro application. Customers are responsible for providing accurate account and product information and for keeping their account details secure.',
  },
  {
    number: '3',
    title: 'Annual Subscription – ₹499',
    text: 'To register products and raise service complaints or requests through DeskPro, the user must purchase an annual DeskPro subscription of ₹499. The subscription is valid for one year from the applicable subscription start date. This is a DeskPro platform/service subscription and does not mean that all appliance repairs or spare parts are free.',
  },
  {
    number: '4',
    title: 'Product Registration',
    text: 'After purchasing the annual subscription, users can register eligible household appliances or products in their DeskPro account. Product registration is subject to the applicable product and category requirements.',
  },
  {
    number: '5',
    title: 'Product Registration Limits',
    text: 'Product registration limits may differ by product category. If the applicable registration limit for a product category has been reached, an additional product in that category can be registered by paying ₹25 per additional product registration. DeskPro does not state a single registration limit for every customer or category.',
  },
  {
    number: '6',
    title: 'Service Complaints',
    text: 'After registering a product, the user can raise a service complaint or request for that registered product. Complaints can be raised for both in-warranty and out-of-warranty products.',
  },
  {
    number: '7',
    title: 'In-Warranty Service',
    text: "For an eligible in-warranty product, the applicable service/labour charge is free. Warranty applicability remains subject to the manufacturer's warranty terms and inspection. If spare parts are required and the replacement is not covered under the applicable warranty, the customer may have to pay the applicable spare-parts charges. Spare-parts availability and pricing depend on the required part and applicable manufacturer or service-provider charges.",
  },
  {
    number: '8',
    title: 'Out-of-Warranty Service',
    text: "For an out-of-warranty product, the customer must pay the applicable service charge. The technician will inspect the appliance and determine the required repair or service. The applicable service charge is payable to the technician when the technician reaches the customer's home, according to the DeskPro service process. Spare-parts charges, if required, are additional and depend on the actual parts needed. The final repair cost can depend on the service charge, spare parts, and the repair required.",
  },
  {
    number: '9',
    title: 'Spare Parts and Charges',
    text: 'Spare-parts charges may apply in both warranty and non-warranty situations depending on warranty coverage and the parts required. Spare-parts availability and pricing depend on the required part and applicable manufacturer or service-provider charges. The ₹499 subscription does not make every spare part free.',
  },
  {
    number: '10',
    title: 'Technician Home Visit',
    text: 'Technician visits are scheduled based on technician or service-provider availability and customer location. A specific arrival time is not guaranteed unless the appointment has been explicitly confirmed. The customer must provide reasonable access to the appliance and a safe environment for the technician.',
  },
  {
    number: '11',
    title: 'Cancellation of Service',
    text: 'A service request can be cancelled only before a technician has been assigned to the service request. Once a technician has been assigned, cancellation through the normal service process is no longer available. For a cancellation or exceptional request after technician assignment, the customer should contact DeskPro support through the official email or support phone number.',
  },
  {
    number: '12',
    title: 'Refund Requests',
    text: 'For subscription fees, additional product-registration charges, or other payments, customers who want to request a refund should contact DeskPro through the official support email. The customer should provide relevant transaction or payment details and the reason for the refund request. Refund requests are subject to review according to the applicable DeskPro refund policy. Refund approval is not guaranteed.',
  },
  {
    number: '13',
    title: 'Payment Terms',
    text: 'The annual subscription, additional product-registration charges, applicable service charges, and spare-parts charges are separate payment items. For out-of-warranty service, the applicable service charge is payable to the technician at the home visit according to the DeskPro service process. Spare-parts charges are additional when applicable.',
  },
  {
    number: '14',
    title: 'Customer Responsibilities',
    text: 'Customers must provide accurate information, keep registered product details current, provide reasonable access to the appliance, and maintain a safe environment for the technician. Customers must also cooperate with the service process and make applicable payments.',
  },
  {
    number: '15',
    title: 'Data and Privacy',
    text: 'DeskPro handles customer information as described in its Privacy Policy. Customer information may be used to support account creation, product registration, complaint tracking, technician assignment, service coordination, payments, and customer support.',
  },
  {
    number: '16',
    title: 'Call Recording',
    text: 'Calls with DeskPro support or service personnel may be recorded where call recording is used for service, quality, training, or support purposes.',
  },
  {
    number: '17',
    title: 'Prohibited Activities',
    text: 'Customers must not submit false or fraudulent complaints, misuse the DeskPro platform, provide misleading product information, or abuse, threaten, or harass DeskPro staff, technicians, or service partners. DeskPro may restrict service access where the platform or service process is misused.',
  },
  {
    number: '18',
    title: 'Changes to Terms',
    text: 'DeskPro may update these terms when its platform, service process, or applicable policies change. The updated terms will apply to future use of DeskPro services after they are made available through the website or application.',
  },
  {
    number: '19',
    title: 'Contact Us',
    text: 'For questions about account registration, the annual subscription, product registration limits, service complaints, warranty-related service, out-of-warranty service, payments, cancellation, or refund requests, contact DeskPro through the official support email or support phone number shown on the website.',
  },
];

export function TermsAndConditions() {
  return (
    <div className="pt-20">
      <section className="bg-bg py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            Terms &amp; Conditions
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl text-balance">
            DeskPro Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/60 text-balance">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8">
          {CLAUSES.map((clause) => (
            <div
              key={clause.number}
              className="rounded-2xl border border-bg-soft bg-white p-6 shadow-soft transition-all hover:shadow-card sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-500 text-sm font-extrabold text-white shadow-brand">
                  {clause.number}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-navy">{clause.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{clause.text}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <Info className="h-6 w-6 flex-none text-brand-500" />
            <p className="text-sm leading-relaxed text-navy/70">
              By using DeskPro services, you agree to these terms and conditions. Please contact our
              support team if you have any questions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
