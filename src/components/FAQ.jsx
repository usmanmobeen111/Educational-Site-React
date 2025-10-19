import React, { useState } from "react";
import { faqData } from "../data/faqData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20  pt-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-tertiary/10 via-transparent to-primary/10 blur-3xl opacity-70"></div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Frequently Asked{" "}
          <span className="text-tertiary">
            Questions
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-5">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm ${
                  isActive
                    ? "border-primary/60 shadow-primary/30 bg-white/70"
                    : "border-gray-200 bg-white/50 hover:border-primary/40"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 md:p-7 text-left focus:outline-none"
                >
                  <span
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 border-primary text-primary rotate-180"
                        : "border-gray-300 text-primary hover:bg-primary/5"
                    }`}
                  >
                    {isActive ? (
                      <AiOutlineMinus size={20} />
                    ) : (
                      <AiOutlinePlus size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive
                      ? "max-h-48 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-3"
                  }`}
                >
                  <div className="px-6 pb-6 md:px-7 md:pb-7 text-gray-700 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
