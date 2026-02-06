import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import heroK16 from "@/assets/hero-k16.jpg";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground text-sm leading-relaxed font-body whitespace-pre-line">
          {answer}
        </p>
      </div>
    </motion.div>
  );
};

const faqData = [
  {
    question: "What's included in the trip?",
    answer:
      "Our trips include comprehensive travel logistics: flight booking assistance, hotel reservations, domestic transport, local guides, tips for guides/drivers, and all meal arrangements.\n\nStudents also get hands-on experiential education including workshops, activities, tours and excursions, school visits, all meals and snacks, and lifetime memories.",
  },
  {
    question: "Who can go on these trips?",
    answer:
      "Our trips are designed for K-12 students, college and university students, MBA/EMBA cohorts, and faculty-led groups. We typically require a minimum group size of 10 participants, but we can accommodate groups of all sizes.",
  },
  {
    question: "How much do trips cost?",
    answer:
      "Trip costs vary depending on the destination, duration, group size, and specific activities included. We provide customized quotes based on your requirements. Contact us for a detailed proposal tailored to your group's needs and budget.",
  },
  {
    question: "How far in advance should we plan?",
    answer:
      "We recommend beginning the planning process 6-12 months before your desired travel dates. This allows ample time for visa processing, flight booking, and thorough preparation. However, we can sometimes accommodate shorter timelines depending on the destination.",
  },
  {
    question: "Is it safe to travel with students?",
    answer:
      "Safety is our top priority. We have organized 500+ trips with zero accidents. Our experienced team provides 24/7 support, in-country bilingual guides, comprehensive travel insurance guidance, and detailed safety protocols. We also provide a 'Trip Survival Guide' to fully prepare you for your journey.",
  },
  {
    question: "What destinations do you offer?",
    answer:
      "We specialize in trips across Asia including China mainland, Taiwan, Singapore, Malaysia, Japan, South Korea, Hong Kong, Vietnam, UAE, Thailand, Indonesia, and others. We also offer 'Asia in North America' programs in New York, San Francisco, and Vancouver.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes! We assist with the visa application process for all destinations. Our team is well-versed in the requirements for each country and will guide you through every step, from gathering documentation to submission.",
  },
  {
    question: "Can trips be customized?",
    answer:
      "Absolutely. Every trip we organize is fully customized to match your educational goals, student interests, budget, and timeline. Whether you want to focus on language, business, culture, or a combination — we build the itinerary around you.",
  },
  {
    question: "What about pre-trip preparation?",
    answer:
      "We provide comprehensive pre-trip support including in-person pre-trip orientations at your school, promotional materials for students and parents, a detailed Trip Survival Guide, cultural and language preparation activities, and full logistical briefings.",
  },
];

const FAQ = () => {
  return (
    <div>
      <HeroSection
        image={heroK16}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about planning your Asia experience."
        height="h-[50vh]"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Common Questions"
            description="These FAQs cover the most common questions before registration and during early trip preparation."
          />
          <div className="mt-8">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6 font-body">
            Our team is happy to answer any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@realasia.travel"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all text-sm font-body"
            >
              Email Us
            </a>
            <a
              href="tel:+17202664666"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-md hover:bg-secondary transition-all text-sm font-body"
            >
              Call +1-720-266-4666
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
