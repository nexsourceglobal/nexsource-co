export const company = {
  name: "Nex Source Global Pvt. Limited",
  brand: "Nex Source Global",
  domain: "https://nexsource.co",
  email: "info@nexsource.co",
  phone: "+91 96231 32257",
  phoneRaw: "+919623132257",
  whatsapp: "919623132257",
  contactPerson: "Hiteshree Fichadia",
  address: {
    line1: "B64 / Block B",
    line2: "Sharda Puri, Ramesh Nagar",
    city: "New Delhi - 110015",
    country: "India",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    no: "01",
    title: "Global Sourcing",
    short: "Identify suitable manufacturers for your product, quality level, volumes and target market.",
    detail:
      "We map your requirement against manufacturing options, shortlist suppliers that fit your specification and commercial expectations, and present clear, comparable options.",
  },
  {
    no: "02",
    title: "Supplier Identification & Evaluation",
    short: "Research and assess suppliers on capability, experience and production capacity.",
    detail:
      "Every shortlist is reviewed against practical criteria — product experience, capacity, tooling, documentation and willingness to work at your volumes.",
  },
  {
    no: "03",
    title: "Procurement Support",
    short: "RFQs, supplier communication, commercial discussion and purchase coordination.",
    detail:
      "We keep the procurement workflow moving — quotations, clarifications, revisions and order coordination handled in one place.",
  },
  {
    no: "04",
    title: "Supplier Verification",
    short: "Background checks, documentation review and qualification support.",
    detail:
      "Before you commit, we help review company documentation, factory information and qualification requirements relevant to your purchase.",
  },
  {
    no: "05",
    title: "Quality & Inspection Coordination",
    short: "Coordinate quality checks, inspection requirements and production-stage communication.",
    detail:
      "We align your quality expectations with the supplier early, then coordinate the checks that matter at sampling and production stages.",
  },
  {
    no: "06",
    title: "Production Follow-Up",
    short: "Visibility across sampling, milestones, packaging and dispatch preparation.",
    detail:
      "Regular follow-up and status updates so production timelines and packaging requirements stay on track.",
  },
  {
    no: "07",
    title: "Supply Chain Support",
    short: "Sourcing diversification, supplier coordination and international requirements.",
    detail:
      "Support for businesses reducing dependence on a single supplier or region, and coordinating across multiple vendors.",
  },
  {
    no: "08",
    title: "Custom Sourcing Projects",
    short: "A sourcing workflow built around your product, geography and volumes.",
    detail:
      "Where a standard scope does not fit, we build a project plan around your objectives and work to it step by step.",
  },
];

export const industries = [
  "Home & Living",
  "Kitchenware",
  "Wellness & Personal Care",
  "Corporate Gifting",
  "Lifestyle Accessories",
  "Outdoor & Travel",
  "Retail Merchandise",
  "Private Label Product",
];

export const process = [
  { no: "01", title: "Understand", text: "Your product, specifications, volumes, target market and commercial requirements." },
  { no: "02", title: "Research", text: "Suitable suppliers and manufacturing options across relevant markets." },
  { no: "03", title: "Evaluate", text: "Supplier capability and suitability against the project requirement." },
  { no: "04", title: "Compare", text: "Commercial, technical and operational factors side by side." },
  { no: "05", title: "Coordinate", text: "Communication, sampling, procurement and production coordination." },
  { no: "06", title: "Deliver", text: "Follow-up through the agreed sourcing workflow until completion." },
];

export const regions = [
  "India",
  "China",
  "Vietnam",
  "Thailand",
  "Indonesia",
  "Malaysia",
  "Taiwan",
  "Mexico",
];

export const serviceOptions = [
  "Global Sourcing",
  "Supplier Identification",
  "Supplier Verification",
  "Procurement Support",
  "Quality Inspection",
  "Production Follow-Up",
  "Supply Chain Support",
  "Other",
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "supplier-shortlist-checklist",
    title: "How to Build a Supplier Shortlist That Actually Saves Time",
    category: "Global Sourcing",
    date: "12 August 2026",
    readTime: "6 min read",
    excerpt:
      "A long supplier list feels productive but slows decisions. Here is a practical way to reduce twenty options to three that are genuinely comparable.",
    body: [
      "Most sourcing delays are not caused by a shortage of suppliers. They are caused by comparing suppliers that were never comparable in the first place — different specifications, different volumes, different packaging assumptions.",
      "Start by writing the requirement in one page: product description, critical dimensions or performance points, target quantity, packaging, target market and any compliance expectation. Anything a supplier has to guess will come back as a price you cannot trust.",
      "Then filter on capability before price. A quotation from a factory that has never produced your category is a number, not an option. Ask what similar products they have made, at what volumes, and with which tooling.",
      "Finally, keep the shortlist to three or four suppliers and ask each the same set of questions in the same order. Comparable answers make the commercial decision fast.",
    ],
  },
  {
    slug: "reading-a-quotation-properly",
    title: "Reading a Manufacturing Quotation Properly",
    category: "Procurement",
    date: "29 July 2026",
    readTime: "5 min read",
    excerpt:
      "Unit price is the smallest part of a quotation. Tooling, MOQ, packaging and lead time usually decide whether a deal works.",
    body: [
      "Two quotations with the same unit price can have very different landed costs. The differences hide in tooling ownership, minimum order quantity, packaging specification, payment terms and lead time.",
      "Ask for the price to be broken down where possible: material, process, packaging and any one-time cost. This makes future negotiation about facts rather than pressure.",
      "Confirm what the price does not include — inspection, testing, certification, export documentation or freight. A quotation is only complete when both sides agree on what is excluded.",
      "Where volumes are likely to grow, ask for a tiered price at the next volume band. It tells you whether the supplier is planning for a relationship or a single order.",
    ],
  },
  {
    slug: "quality-expectations-before-production",
    title: "Setting Quality Expectations Before Production Starts",
    category: "Quality",
    date: "18 July 2026",
    readTime: "7 min read",
    excerpt:
      "Most quality disputes trace back to something that was never written down. Agreeing the standard early is cheaper than arguing later.",
    body: [
      "Quality problems are rarely a surprise to the factory. They are usually a difference of interpretation that nobody documented at the sampling stage.",
      "Define the acceptance standard in writing: critical dimensions, finish expectations, functional checks, tolerances and what constitutes a defect. Photographs of accepted and rejected samples help more than adjectives.",
      "Agree where inspection happens and who attends. In-line checks catch issues while they can still be corrected; a final inspection only tells you what already went wrong.",
      "Keep the approved sample sealed and referenced in the purchase order. It becomes the single point of truth for every following batch.",
    ],
  },
  {
    slug: "diversifying-supply-across-markets",
    title: "Diversifying Supply Across More Than One Market",
    category: "Supply Chain",
    date: "02 July 2026",
    readTime: "6 min read",
    excerpt:
      "Single-source dependence is efficient until it isn't. A staged approach to adding a second market keeps risk and cost under control.",
    body: [
      "Adding a second source is often treated as an emergency project. Done calmly, it is a normal part of supplier strategy.",
      "Begin with one product line rather than the whole catalogue. Choose something with stable demand and a specification that is well documented.",
      "Run the new supplier in parallel at a modest share of volume. You learn about communication, packaging and consistency without putting the main line at risk.",
      "Review after two or three cycles. If the second source performs, increase its share gradually; if not, you have lost very little.",
    ],
  },
  {
    slug: "working-with-a-sourcing-partner",
    title: "What a Sourcing Partner Should Actually Do For You",
    category: "Supplier Management",
    date: "20 June 2026",
    readTime: "5 min read",
    excerpt:
      "A sourcing partner is not a middleman with a supplier list. The value is in structure, comparison and follow-up.",
    body: [
      "The useful part of a sourcing partner is process. Requirements written clearly, suppliers researched against them, options compared on the same basis, and follow-up that does not depend on reminders.",
      "You should always know who the supplier is, what was quoted, and why one option was recommended over another. Transparency is the point, not a favour.",
      "Expect honest limits too. If a specification is unrealistic at the target price, it is better to hear that in week one than in month three.",
      "Good sourcing support ends with you holding a working supplier relationship, not a dependency.",
    ],
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
};

export const news: NewsItem[] = [
  {
    slug: "sourcing-desk-expansion",
    title: "Nex Source Global expands its sourcing desk capacity",
    category: "Company Update",
    date: "20 August 2026",
    summary:
      "Sample content. Additional sourcing coordination capacity has been added to support enquiries across industrial components and consumer products.",
  },
  {
    slug: "supplier-evaluation-framework",
    title: "Updated supplier evaluation framework introduced",
    category: "Company Update",
    date: "05 August 2026",
    summary:
      "Sample content. Our supplier evaluation checklist has been revised to give clients a clearer, more comparable view of shortlisted options.",
  },
  {
    slug: "diversification-demand",
    title: "Buyers continue to explore multi-market sourcing",
    category: "Industry Update",
    date: "22 July 2026",
    summary:
      "Sample content. Enquiries increasingly involve evaluating more than one manufacturing market before committing to a supplier.",
  },
  {
    slug: "packaging-cost-focus",
    title: "Packaging specification is drawing closer scrutiny",
    category: "Sourcing Insight",
    date: "08 July 2026",
    summary:
      "Sample content. Buyers are reviewing packaging earlier in the sourcing process to control landed cost and reduce transit damage.",
  },
];
