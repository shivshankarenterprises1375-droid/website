export interface ArticleBlock {
  type: 'p' | 'h3' | 'ul'
  text?: string
  items?: string[]
}

export interface Article {
  slug: string
  title: string
  category: string
  readTime: string
  excerpt: string
  content: ArticleBlock[]
}

export const articles: Article[] = [
  {
    slug: 'rice-export-quality-grades',
    title: 'Understanding Quality Grades in Rice Exports',
    category: 'Grains & Commodities',
    readTime: '5 min read',
    excerpt:
      'A breakdown of the parameters that determine rice grade for export — grain length, broken percentage, moisture content, and why they matter to buyers.',
    content: [
      {
        type: 'p',
        text: 'Rice is traded internationally against a defined set of physical and quality parameters, not simply by variety name. Buyers evaluating a consignment typically look past the label of "basmati" or "non-basmati" and assess a specific set of measurable characteristics that determine cooking quality, shelf stability, and market value.',
      },
      {
        type: 'h3',
        text: 'Grain length and uniformity',
      },
      {
        type: 'p',
        text: 'Grain length is measured in millimeters and classified into categories such as extra-long, long, medium, and short grain. For basmati varieties, both raw grain length and the extension ratio after cooking are relevant, since elongation without excessive breakage is a defining trait buyers pay a premium for. Uniformity within a lot matters as much as the average length — a consignment with mixed grain sizes is generally valued lower than a uniform one, even if the average measurement is similar.',
      },
      {
        type: 'h3',
        text: 'Broken percentage',
      },
      {
        type: 'p',
        text: 'Broken grains occur during milling and handling and are usually expressed as a percentage of total weight. Export contracts commonly specify an upper limit — for instance, 5% broken for premium grades versus 25% or higher for economy grades. This single figure has an outsized effect on price, since broken rice cooks differently and is often diverted to different end uses (including flour, snacks, or animal feed) rather than direct table consumption.',
      },
      {
        type: 'h3',
        text: 'Moisture content and shelf stability',
      },
      {
        type: 'p',
        text: 'Moisture content is typically specified within a narrow band, often 12–14% for export shipments. Rice above this range is prone to mould growth and insect infestation during long sea transit, while rice that is too dry can become brittle and generate more broken grains during handling. Moisture testing at the point of loading is one of the more consequential quality checks in an export consignment.',
      },
      {
        type: 'h3',
        text: 'Other parameters buyers commonly specify',
      },
      {
        type: 'ul',
        items: [
          'Chalkiness — the percentage of grains with an opaque, starchy core, which affects visual appeal and cooking behavior.',
          'Foreign matter and admixture — presence of stones, husk, or other grain varieties, usually capped at a fraction of a percent.',
          'Aroma and age — particularly relevant for basmati, where aged stock is valued for its aroma and reduced stickiness after cooking.',
          'Milling degree — the extent of bran removal, ranging from brown rice through to well-milled white rice.',
        ],
      },
      {
        type: 'p',
        text: 'For an exporter, consistency across shipments is often as important to a buyer as any single specification. Establishing repeatable sourcing, sampling, and testing processes at each stage — from paddy procurement through to pre-shipment inspection — is what allows a supplier to reliably meet a stated grade, shipment after shipment.',
      },
    ],
  },
  {
    slug: 'coconut-husk-to-coir',
    title: 'Coconut Husk to Coir: A Primer on a Growing Industrial By-Product',
    category: 'Industrial Commodities',
    readTime: '4 min read',
    excerpt:
      'How a by-product of coconut processing has become a globally traded input for horticulture, geotextiles, and manufacturing.',
    content: [
      {
        type: 'p',
        text: 'Coconut husk, the fibrous layer between the outer skin and the hard shell of the coconut, was historically treated as agricultural waste. Over recent decades it has developed into a genuine industrial commodity, traded both in semi-processed husk form and as further-processed coir fiber and coir pith.',
      },
      {
        type: 'h3',
        text: 'From husk to usable fiber',
      },
      {
        type: 'p',
        text: 'Semi-husked coconuts retain a portion of the natural fiber attached to the shell, which simplifies handling and downstream processing compared to fully separated husk. The husk is typically retted (soaked to loosen fiber from the pith) and then mechanically defibered to separate long bristle fiber from shorter mattress-grade fiber and the fine pith by-product.',
      },
      {
        type: 'h3',
        text: 'Where coir is used',
      },
      {
        type: 'ul',
        items: [
          'Geotextiles and erosion control — coir netting and matting are used to stabilize slopes and riverbanks while supporting vegetation growth.',
          'Horticulture — coir pith is a widely used growing medium and soil amendment due to its water retention and aeration properties.',
          'Manufactured goods — rope, brushes, mats, and mattress padding are traditional uses for bristle and mattress-grade fiber.',
          'Composite materials — coir fiber is increasingly used as a reinforcing material in biodegradable and low-carbon composites.',
        ],
      },
      {
        type: 'h3',
        text: 'Why buyers care about husk quality',
      },
      {
        type: 'p',
        text: 'For semi-husked coconut shipments specifically, buyers typically assess fiber retention, moisture level, freedom from mould, and consistency of size. Because the material is bulky relative to its value, freight efficiency and packing density are practical considerations that affect landed cost as much as the raw material price itself.',
      },
      {
        type: 'p',
        text: 'As industries look for renewable, biodegradable alternatives to synthetic fiber and packaging materials, demand for coir and husk-based products has broadened beyond its traditional base — making consistent, well-graded supply an increasingly valuable position for exporters to hold.',
      },
    ],
  },
  {
    slug: 'metal-scrap-circular-economy',
    title: 'Metal Scrap and the Circular Economy: What Exporters Should Know',
    category: 'Recycling & Sustainability',
    readTime: '5 min read',
    excerpt:
      'An overview of how metal scrap is graded and traded, and why recycled metal plays a growing role in industrial supply chains.',
    content: [
      {
        type: 'p',
        text: 'Metal scrap sits at the intersection of waste management and industrial raw material supply. Rather than being discarded, ferrous and non-ferrous metal recovered from manufacturing, construction, and end-of-life products is graded, processed, and reintroduced into production — reducing the need for virgin ore extraction and the energy associated with primary metal production.',
      },
      {
        type: 'h3',
        text: 'Ferrous versus non-ferrous scrap',
      },
      {
        type: 'p',
        text: 'Ferrous scrap (iron and steel-based) is generally categorized by source and composition — for example, heavy melting steel, structural steel, or shredded scrap — and is a key input for electric-arc-furnace steelmaking. Non-ferrous scrap, including aluminium, copper, brass, and zinc, is typically higher in value per tonne and is sorted more granularly by alloy type, since even small compositional differences affect suitability for remelting.',
      },
      {
        type: 'h3',
        text: 'Grading and quality control',
      },
      {
        type: 'ul',
        items: [
          'Composition — the metal type and alloy grade, since mixed or contaminated loads reduce processing value.',
          'Size and density — scrap is often specified by dimension or bale density to suit furnace loading requirements.',
          'Contamination — presence of non-metallic material, coatings, or hazardous residues, which buyers commonly restrict by contract.',
          'Moisture and oxidation — surface rust and moisture content affect weight-based pricing and processing yield.',
        ],
      },
      {
        type: 'h3',
        text: 'Why recycled metal matters industrially',
      },
      {
        type: 'p',
        text: 'Producing metal from recycled scrap generally consumes substantially less energy than primary production from ore, and reduces the extraction footprint associated with mining. As manufacturers face growing pressure to lower the embodied carbon of their inputs, recycled-content metal has moved from a cost consideration to a specification requirement in many supply contracts.',
      },
      {
        type: 'p',
        text: 'For exporters, this has raised the importance of traceability and documentation alongside physical grading — buyers increasingly want assurance not just of material composition, but of sourcing and processing practices in line with environmental and safety regulations in both the origin and destination markets.',
      },
    ],
  },
  {
    slug: 'export-documentation-guide',
    title: 'A Practical Guide to Export Documentation for Agricultural Commodities',
    category: 'Trade & Compliance',
    readTime: '6 min read',
    excerpt:
      'The core set of documents involved in a typical agricultural or commodity export shipment, and what each one is used for.',
    content: [
      {
        type: 'p',
        text: 'International trade in agricultural products and commodities involves a standard set of documents that accompany a shipment from origin to destination. While specific requirements vary by product, destination country, and payment method, the following documents form the backbone of most export transactions.',
      },
      {
        type: 'h3',
        text: 'Commercial documents',
      },
      {
        type: 'ul',
        items: [
          'Commercial Invoice — states the transaction value, terms of sale, and buyer/seller details; used for customs valuation on both sides.',
          'Packing List — itemizes shipment contents, weights, and package counts, supporting customs inspection and logistics handling.',
          'Certificate of Origin — confirms the country in which the goods were produced, which can affect duty rates under trade agreements.',
        ],
      },
      {
        type: 'h3',
        text: 'Regulatory and quality documents',
      },
      {
        type: 'ul',
        items: [
          'Phytosanitary Certificate — required for most plant-based agricultural exports, confirming the shipment is free from regulated pests and diseases.',
          'Fumigation Certificate — evidences pest-control treatment applied to the cargo or packaging material, often required alongside the phytosanitary certificate.',
          'Quality/Inspection Certificate — issued by an independent inspection agency confirming the shipment meets the contracted grade and specification.',
        ],
      },
      {
        type: 'h3',
        text: 'Logistics and financial documents',
      },
      {
        type: 'ul',
        items: [
          'Bill of Lading (or Airway Bill) — issued by the carrier as a receipt of goods and a document of title, essential for cargo release at destination.',
          'Insurance Certificate — evidences marine or transit insurance cover for the shipment, particularly under CIF-type terms.',
          'Letter of Credit documentation — where payment is secured via LC, a full set of compliant documents is required to be presented to the bank within the stipulated timeframe.',
        ],
      },
      {
        type: 'h3',
        text: 'Why documentation accuracy matters',
      },
      {
        type: 'p',
        text: 'Discrepancies between the physical shipment and its accompanying paperwork are one of the most common causes of customs delays, demurrage costs, and payment disputes in international trade. Exporters that maintain disciplined, standardized documentation processes reduce friction at every stage — from bank negotiation to customs clearance to final delivery.',
      },
    ],
  },
  {
    slug: 'evaluating-an-export-partner',
    title: "How to Evaluate a Reliable Export Partner: A Buyer's Checklist",
    category: 'Trade & Compliance',
    readTime: '4 min read',
    excerpt:
      'Practical questions buyers can use to assess whether a prospective supplier is set up to deliver consistent, compliant shipments.',
    content: [
      {
        type: 'p',
        text: 'For buyers sourcing agricultural products or industrial commodities internationally, the choice of export partner affects far more than unit price. Consistency, compliance, and communication over the life of a relationship typically matter more than the terms of a single transaction. The following areas are worth evaluating before committing to a new supplier relationship.',
      },
      {
        type: 'h3',
        text: 'Sourcing and quality control',
      },
      {
        type: 'p',
        text: 'Ask how the supplier sources raw material — directly from producers, through aggregators, or a mix of both — and what quality checks are applied at each stage, from procurement through to pre-shipment inspection. Suppliers with documented, repeatable quality processes are generally better positioned to deliver consistent grades shipment after shipment.',
      },
      {
        type: 'h3',
        text: 'Documentation and compliance track record',
      },
      {
        type: 'p',
        text: 'A supplier experienced in the destination market should be able to speak fluently about the specific certificates, labeling, and regulatory requirements involved — phytosanitary rules, fumigation standards, or scrap import restrictions, depending on the commodity. Ask for sample documentation from prior shipments where appropriate.',
      },
      {
        type: 'h3',
        text: 'Logistics capability',
      },
      {
        type: 'ul',
        items: [
          'Can the supplier reliably meet stated production and dispatch timelines?',
          'What container or bulk shipping options do they typically work with, and to which ports?',
          'How do they handle exceptions — delays, quality disputes, or documentation issues — when they arise?',
        ],
      },
      {
        type: 'h3',
        text: 'Communication and responsiveness',
      },
      {
        type: 'p',
        text: 'Trade relationships are tested most during exceptions, not routine transactions. A supplier\'s responsiveness to queries, willingness to share documentation proactively, and clarity in communication during the enquiry stage is often a reasonable indicator of how they will behave once a shipment is underway.',
      },
      {
        type: 'p',
        text: 'Starting with a smaller trial order before scaling volume is a common and sensible way for buyers to validate a new supplier relationship against all of the above before committing to long-term contracts.',
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}
