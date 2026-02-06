import { motion } from "framer-motion";
import { Check, Users, Globe2, BookOpen, Languages, MapPin, Compass, Plane, Heart } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import heroWhy from "@/assets/hero-why.jpg";

const reasons = [
  { icon: Globe2, text: "Asia-focused since 2005" },
  { icon: Heart, text: "Dedicated unconditional trip support, from start to finish" },
  { icon: MapPin, text: "Specialized trips to China, Taiwan, Singapore, Japan, South Korea, Vietnam, and more" },
  { icon: Languages, text: "Each team member is bilingual in English and an Asian language" },
  { icon: BookOpen, text: "Pre-trip and in-trip educational activities with a strong focus on language and culture" },
  { icon: Users, text: "Wide array of company and school visits, plus service-learning projects" },
  { icon: Compass, text: "In-person pre-trip orientations — we will visit your school!" },
  { icon: Plane, text: "Customized itineraries matching students', teachers', and parents' needs" },
  { icon: Check, text: "Experienced professional staff with up-to-date destination knowledge" },
];

const WhyRealAsia = () => {
  return (
    <div>
      <HeroSection
        image={heroWhy}
        title="Why Real Asia"
        subtitle="We don't just plan trips — we create transformative experiences that bridge cultures and broaden perspectives."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Difference"
            title="What Sets Us Apart"
            description="With nearly two decades of experience, we've perfected the art of educational travel across Asia."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border"
              >
                <reason.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm leading-relaxed font-body">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading
            label="Our Mission"
            title="Bridging Cultures Through Travel"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-center"
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              We believe that it is principally through travel that one can gain fresh perspectives
              and understanding in the world we live in. Our goal is to share our passion for Asia
              and its diverse cultures with US teachers and students, and to utilize travel as a
              means to deepen the understanding between us and the destinations we visit.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body mt-6">
              Every trip we organize goes far beyond tourist sites — we create immersive experiences
              that combine language practice, cultural exchange, service learning, and genuine human
              connections that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prestigious Clients */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Trusted By"
            title="Partnered with Top Institutions"
            description="We've had the privilege of serving some of the most prestigious schools and business programs in the world."
          />
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              "Wharton",
              "Stanford GSB",
              "Kellogg",
              "Harvard Business School",
              "Columbia GSB",
              "Dartmouth Tuck",
            ].map((school, index) => (
              <motion.div
                key={school}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="px-6 py-3 bg-card rounded-full border border-border text-foreground font-display text-sm font-semibold"
              >
                {school}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyRealAsia;
