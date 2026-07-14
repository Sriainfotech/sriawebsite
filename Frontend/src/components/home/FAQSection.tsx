import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What does Sria Infotech do?",
    answer:
      "Sria Infotech is a digital transformation company specializing in SAP consulting, implementation, rollouts, upgrades, and ongoing support, alongside custom application development and data analytics services for enterprises.",
  },
  {
    question: "Where is Sria Infotech located?",
    answer:
      "Sria Infotech is headquartered in Hyderabad, Telangana, India, and serves clients across India, the United States, Hong Kong, Kenya, and Belgium.",
  },
  {
    question: "Is Sria Infotech an SAP partner?",
    answer:
      "Yes, Sria Infotech is an SAP Gold certified partner, delivering SAP implementation, rollout, upgrade, and support services across SAP S/4HANA, BTP, CRM, ERP, and HXM solution areas.",
  },
  {
    question: "How many years of experience does Sria Infotech have?",
    answer:
      "Sria Infotech has over 8 years of experience delivering digital transformation and SAP consulting services to enterprises across 5 countries.",
  },
  {
    question: "Does Sria Infotech work with international clients?",
    answer:
      "Yes, Sria Infotech has delivered projects for clients across India, the United States, Hong Kong, Kenya, and Belgium, spanning industries from manufacturing to staffing and hospitality.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function FAQItemCard({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm sm:text-base">{faq.question}</span>
        <ChevronDown
          className={`w-4 h-4 text-orange-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-950 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-orange-500/60" />
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">FAQ</span>
            <span className="h-px w-8 bg-orange-500/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FAQItemCard
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
