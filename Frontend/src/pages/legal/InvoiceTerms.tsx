const InvoiceTerms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-start justify-between mb-8 border-b pb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-1">SRIA Infotech Pvt. Ltd.</p>
            <h1 className="text-3xl font-bold text-slate-900">Terms &amp; Conditions</h1>
            <p className="text-sm text-slate-400 mt-1">Applicable to all invoices, product sales, and service engagements</p>
          </div>
          <div className="text-right text-xs text-slate-400 mt-1">
            <p>GSTIN: 36ABICS3346M1ZV</p>
            <p>Hyderabad, Telangana – 500049</p>
            <p>hr@sriainfotech.com</p>
          </div>
        </div>

        <div className="space-y-7 text-slate-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">1</span>
              Payment Terms
            </h2>
            <p>
              All invoices are due on the date specified as the <strong>Due Date</strong> on the invoice. Payment must be
              made in full in Indian Rupees (INR) via NEFT / RTGS / Cheque / Online Transfer to the bank account
              details provided on the invoice. A late payment interest of <strong>2% per month</strong> will be charged
              on outstanding amounts beyond the due date. SRIA Infotech reserves the right to withhold delivery of
              goods or services until full payment is received.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">2</span>
              Delivery of Products
            </h2>
            <p>
              Products are delivered to the billing address unless a separate shipping address is specified.
              Delivery timelines are estimates and SRIA Infotech shall not be liable for delays caused by the
              manufacturer, courier partner, or circumstances beyond our control. Risk of loss or damage transfers
              to the buyer upon delivery. The buyer must inspect goods at the time of receipt and report any
              visible damage within <strong>48 hours</strong> of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">3</span>
              Warranty
            </h2>
            <p>
              Hardware products carry the <strong>manufacturer's warranty</strong> as specified in the product
              description. SRIA Infotech acts as a reseller and does not provide any additional warranty beyond
              what the manufacturer offers. Warranty claims must be raised directly with the manufacturer or
              through the authorised service centre. SRIA Infotech will assist in facilitating warranty claims
              where possible but bears no liability for manufacturer decisions or timelines.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">4</span>
              Returns &amp; Cancellations
            </h2>
            <p>
              Orders once placed and confirmed cannot be cancelled unless agreed in writing by SRIA Infotech.
              Returns are accepted only in case of a manufacturing defect confirmed by the manufacturer or
              if the wrong product was delivered. Returns must be initiated within <strong>7 days</strong> of delivery
              in original, unopened packaging. No returns will be accepted for software, licenses, or
              custom-configured products. Refunds, if applicable, will be processed within 15 working days
              after the returned goods are received and inspected.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">5</span>
              Taxes &amp; GST
            </h2>
            <p>
              All prices are exclusive of GST unless explicitly stated otherwise. Applicable GST (CGST + SGST or
              IGST as per the place of supply) will be charged as per prevailing rates under the GST Act, 2017.
              The buyer is responsible for providing accurate GSTIN details for input tax credit eligibility.
              SRIA Infotech shall not be liable for any GST credit disallowance arising from incorrect or missing
              GSTIN information provided by the buyer.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">6</span>
              IT Services &amp; Consulting
            </h2>
            <p>
              For IT services, SAP consulting, and implementation engagements, the scope, milestones, and
              payment schedule shall be as agreed in the applicable Statement of Work (SOW) or Purchase Order
              (PO). Work completed and resources deployed cannot be recalled or reversed; partial deliveries
              will be billed proportionately. Any changes to scope must be agreed in writing before work
              commences.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">7</span>
              Limitation of Liability
            </h2>
            <p>
              SRIA Infotech's maximum liability under any invoice shall be limited to the invoice value of the
              specific product or service giving rise to the claim. SRIA Infotech shall not be liable for any
              indirect, incidental, special, or consequential losses including loss of profit, data, or business
              opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">8</span>
              Dispute Resolution &amp; Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising out of or in connection with
              any invoice or transaction shall first be attempted to be resolved amicably within <strong>30 days</strong>.
              If unresolved, disputes shall be subject to the exclusive jurisdiction of the competent courts in
              <strong> Hyderabad, Telangana</strong>.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-400">
          <p>SRIA Infotech Pvt. Ltd. &nbsp;·&nbsp; 303, 3ʳᵈFloor, Udaya Vensar Apartments, Rd Number 1, Hanuman Nagar, Kothaguda, Kondapur, Hyderabad, Telangana - 500084</p>
          <p className="sm:text-right whitespace-nowrap">© {new Date().getFullYear()} SRIA Infotech Pvt. Ltd.</p>
        </div>

      </div>
    </div>
  );
};

export default InvoiceTerms;
