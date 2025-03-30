import React from 'react';
import Link from '@docusaurus/Link';

const FAQList = [
    {
      question: 'How much does inZOI cost? Where to download inZOI?',
      answer: 'inZOI is priced at $39.99 for Early Access on Steam. Console, PS, XBOX versions coming Q4 2025.',
      link: '/docs/get-start/download'
    },
    {
      question: 'What jobs are available in inZOI?',
      answer: 'Explore various career paths including business, creative, and service jobs.',
      link: '/docs/jobs_and_careers/introduction'
    },
    {
      question: 'How to install inZOI mods?',
      answer: 'Find and install community mods to enhance your gameplay experience.',
      link: '/mods'
    },
    {
      question: 'Where to find inZOI guides and resources?',
      answer: 'Access comprehensive inzoi guides, inzoi wiki, and inzoi resources here.',
      link: '/docs/intro'
    },
    {
      question: 'How to use Canvas in inZOI?',
      answer: 'Learn to create custom artwork using inZOI Canvas system.',
      link: '/docs/get-start/canvas'
    }
  ];

export default function HomepageFAQ() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-8">
          {FAQList.map((faq, idx) => (
            <Link 
              key={idx}
              to={faq.link}
              className="no-underline hover:no-underline"
            >
              <div className="p-6 border rounded-xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}