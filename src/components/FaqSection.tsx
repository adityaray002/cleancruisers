import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does CleanCruisers doorstep car wash work?",
    a: "It's simple! Call us or book online, choose your service (one-time wash, add-ons, or monthly package), and our trained professional arrives at your home, office, or society with all equipment. No water connection needed from your side. We handle everything and leave zero mess.",
  },
  {
    q: "What areas in West Delhi does CleanCruisers cover?",
    a: "We cover all major areas of Delhi including Dwarka (all sectors), Uttam Nagar, Janakpuri, Najafgarh, Punjabi Bagh, Rajouri Garden, Paschim Vihar, Vikaspuri, Tilak Nagar, Hari Nagar, Subhash Nagar, Kirti Nagar, Moti Nagar, Ramesh Nagar, Mayapuri, Tagore Garden, Shivaji Enclave, and Nangloi.",
  },
  {
    q: "What is the price for a doorstep car wash in Delhi?",
    a: "Our prices start at ₹299 for a basic exterior wash for hatchbacks and go up to ₹699 for SUVs. Complete car care services like rubbing, polishing, and waxing start at ₹149. Our monthly packages (3 washes) start at ₹1,399 – the most affordable regular car care option in West Delhi.",
  },
  ,
  {
    q: "How long does  car wash take at my doorstep?",
    a: "A standard car wash & care service takes 1–2 hours depending on car size and service type. Complete car care services like rubbing, waxing, or interior dry cleaning may take 2–3 hours. Monthly package washes are scheduled for 1–2 hours per visit.",
  },
  {
    q: "Is CleanCruisers eco-friendly?",
    a: "Yes! We use eco-friendly, biodegradable cleaning agents and water-efficient techniques. Our process uses significantly less water compared to traditional car washes, reducing both waste and environmental impact.",
  },
  {
    q: "What types of cars do you wash?",
    a: "We service all car types – hatchbacks (Swift, i20, Polo), sedans (City, Ciaz, Dzire), SUVs (Creta, Seltos, Fortuner), and luxury vehicles (Mercedes, BMW, Audi). Our team is trained to handle all paint types and car surfaces with care.",
  },
  {
    q: "Can I book a monthly car wash package?",
    a: "Absolutely! Our monthly package includes 3 premium washes per month starting at ₹1,399. It includes free tyre & black part polish, interior + exterior cleaning, and a free dustbin & air freshener. It's our most popular plan for regular car maintenance.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6"
      style={{ backgroundColor: "#0a0f0f" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Everything you need to know about our doorstep car wash service in
            West Delhi.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className={`bg-gray-800/60 border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-green-400/50"
                    : "border-gray-700/50 hover:border-gray-600"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span
                    className="text-white font-semibold text-sm md:text-base pr-4"
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div
                    className="px-5 pb-5"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="text-gray-300 text-sm md:text-base leading-relaxed"
                      itemProp="text"
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Still have questions?{" "}
          <a
            href="tel:8920230357"
            className="text-green-400 hover:underline font-medium"
          >
            Call us at 8920230357
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/918920230357"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline font-medium"
          >
            WhatsApp us
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default FaqSection;
