export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Which products does ShivShankar Enterprises currently export?',
    answer:
      'We currently focus on three core commodities: rice (basmati and non-basmati), semi-husked coconut, and graded metal scrap. Each is sourced, quality-checked, and packed according to export-grade specifications.',
  },
  {
    question: 'How is pricing determined for each shipment?',
    answer:
      'Pricing depends on the specific grade or specification requested, order quantity, current market conditions, and the agreed shipping terms (such as FOB or CIF). We provide a formal quotation once your requirement is confirmed through an enquiry.',
  },
  {
    question: 'Is there a minimum order quantity?',
    answer:
      'Minimum order quantities vary by product and shipping method — for example, full-container-load shipments have different thresholds than smaller trial orders. Share your target volume through the contact form and we will confirm feasible order sizes.',
  },
  {
    question: 'What quality documentation is provided with a shipment?',
    answer:
      'Depending on the product and destination market, shipments are typically accompanied by a commercial invoice, packing list, certificate of origin, and relevant quality or phytosanitary certification. Specific document requirements are confirmed at the time of order based on the destination country.',
  },
  {
    question: 'Which shipping terms (Incoterms) do you work with?',
    answer:
      'We are able to work with commonly used terms such as FOB, CIF, and CFR, depending on the buyer\'s preference and logistics arrangement. This is agreed as part of the order confirmation process.',
  },
  {
    question: 'Can I request a sample before placing a full order?',
    answer:
      'Yes. For most products we can arrange representative samples ahead of a full order so that buyers can verify grade and quality against their own requirements.',
  },
  {
    question: 'What is the typical lead time from order confirmation to dispatch?',
    answer:
      'Lead times vary by product, order size, and current sourcing availability. We provide an estimated production and dispatch timeline as part of every order confirmation.',
  },
  {
    question: 'Do you handle logistics and freight, or is that arranged by the buyer?',
    answer:
      'We can coordinate shipping on the buyer\'s behalf under CIF/CFR terms, or hand over the consignment at the port of origin under FOB terms if the buyer prefers to manage their own freight forwarding.',
  },
]
