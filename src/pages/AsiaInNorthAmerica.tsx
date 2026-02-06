import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Utensils, Languages, Train } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import heroNA from "@/assets/hero-northamerica.jpg";

const programs = [
  {
    city: "New York City",
    area: "Flushing Chinatown",
    description: "Explore the ultimate highlights of Chinese culture in NYC's Flushing district. Practice Mandarin where English isn't even needed!",
    features: ["Chinese American immigration experience", "Authentic regional cuisine", "Full language immersion", "Cultural workshops"],
  },
  {
    city: "San Francisco",
    area: "Historic Chinatown",
    description: "Walk through the oldest Chinatown in North America and discover the rich history of Chinese immigrants on the West Coast.",
    features: ["Historical walking tours", "Dim sum experiences", "Cultural heritage sites", "Art galleries"],
  },
  {
    city: "Vancouver",
    area: "Asian Communities",
    description: "Experience the vibrant and diverse Asian communities of Vancouver, one of the most multicultural cities in North America.",
    features: ["Richmond night markets", "Japanese & Korean districts", "Multicultural dining", "Cultural festivals"],
  },
];

const highlights = [
  { icon: Languages, text: "Full Mandarin immersion without leaving North America" },
  { icon: Utensils, text: "Authentic Asian cuisine representing diverse regional traditions" },
  { icon: MapPin, text: "Deep dive into Asian American history and culture" },
  { icon: Train, text: "Compact 3-5 day programs, easy logistics" },
];

const AsiaInNorthAmerica = () => {
  return (
    <div>
      <HeroSection
        image={heroNA}
        title="Asia in North America"
        subtitle="Experience authentic Asian language, culture, food, and community — all without leaving North America."
        height="h-[75vh]"
      />

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <SectionHeading
            label="Stateside Programs"
            title="Asia Is Closer Than You Think"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed font-body"
          >
            Instead of going all the way to Asia, you've got flourishing, immersive Asian communities
            right here in the US and Canada. The Flushing district in New York, for instance, is a
            collection of the ultimate highlights of Chinese culture from all over Asia. For as compact
            as 3 to 5 days, take your students on a powerful cultural journey.
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 p-4"
              >
                <highlight.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm font-body">{highlight.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Programs"
            title="Choose Your North American Adventure"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-lg border border-border"
              >
                <span className="text-xs uppercase tracking-wider text-primary font-semibold font-body">{program.area}</span>
                <h3 className="font-display text-2xl font-semibold text-foreground mt-2 mb-3">{program.city}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Explore Asia in North America?
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-8 font-body">
            Let us create a compact, immersive experience right here at home.
          </p>
          <Link
            to="/plan-your-trip"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-md hover:bg-primary-foreground/90 transition-all text-sm font-body"
          >
            Plan Your Trip
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AsiaInNorthAmerica;
