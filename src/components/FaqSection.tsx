import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What Types Of Content Can The Tools Generate?",
    answer:
      "Sparkvia AI offers 11 distinct, AI-powered tools across 6 categories to accelerate your writing and content-creation workflows. You can generate blog posts, articles, emails, ad copy, social media posts, product descriptions, and more.",
  },
  {
    question: "Is A Trial Version Available Before Purchasing Spark Credits?",
    answer: "Yes. New users receive 100 free Spark credits upon signup. Once your free credits are exhausted, you can purchase additional credits with XRP. After SPARK tokens launch on the XRP Ledger, all credit purchases will be made using SPARK tokens.",
  },
  {
    question: "What Kind Of Customer Support Is Available?",
    answer: "We provide a ticket-based support system via our Discord server. If you encounter any issues, simply join our Discord and open a support ticket.",
  },
  {
    question: "What Security Measures Protect My Data And Content?",
    answer: "We take data security and privacy seriously. All data and content are encrypted in transit and at rest, and we implement strict access controls. We also conduct regular security audits and follow industry best practices.",
  },
  {
    question: "Can I Use Other Currencies To Purchase Spark Credits?",
    answer: "At launch, Spark credits can be purchased using XRP. Once SPARK tokens are trading live, all credit purchases must be made with SPARK tokens.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="flex justify-center text-white py-16">
      <div className=" container flex justify-between flex-col md:flex-row px-[6%]">
        <div>
          <h2
            style={{ fontFamily: "Gilda Display" }}
            className="text-4xl md:text-[60px] font-normal leading-[110.00000000000001%]"
          >
            Frequently <br /> Asked Questions
          </h2>
          <p className="text-[#FFFFFF66] font-normal text-[20px] mt-4">Everything you need to know</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#FFFFFF1A] border-dashed pb-4 cursor-pointer w-[500px]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start">
                <h4 className="text-[#FFFFFF] text-base font-semibold leading-snug max-w-sm">
                  {faq.question}
                </h4>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
              {openIndex === index && faq.answer && (
                <p className="text-[#FFFFFF99] text-[14px] mt-3 leading-[140%] max-w-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
