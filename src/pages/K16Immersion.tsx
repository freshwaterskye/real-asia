import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Globe2, Languages } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import heroK16 from "@/assets/hero-k16.jpg";
import destTaiwan from "@/assets/dest-taiwan.jpg";
import destChina from "@/assets/dest-china.jpg";
import destJapan from "@/assets/dest-japan.jpg";
import destKorea from "@/assets/dest-korea.jpg";

const highlights = [
  {
    icon: Languages,
    title: "Language Immersion",
    description: "Practice Mandarin, Japanese, Korean, and more in real-world conversations with locals.",
  },
  {
    icon: BookOpen,
    title: "Cultural Education",
    description: "Go beyond textbooks with hands-on workshops, temple visits, traditional arts, and homestays.",
  },
  {
    icon: Users,
    title: "School Exchanges",
    description: "Connect your students with local students for meaningful cross-cultural friendships.",
  },
  {
    icon: Globe2,
    title: "Service Learning",
    description: "Give back through community volunteering and service-learning projects across Asia.",
  },
];

const itineraries = [
  { name: "Deep Dive Taiwan", image: destTaiwan, description: "Night markets, aboriginal villages, school visits, and homestays across the island." },
  { name: "China Explorer", image: destChina, description: "Beijing, Shanghai, Yunnan — from the Great Wall to minority village volunteering." },
  { name: "Japan Discovery", image: destJapan, description: "Tokyo, Kyoto, Osaka — shrines, bamboo groves, kimono, and student exchanges." },
  { name: "Korea Adventure", image: destKorea, description: "K-pop culture, ancient palaces, modern tech, and dynamic student connections." },
];

const K16Immersion = () => {
  return (
    <div>
      <HeroSection
        image={heroK16}
        title="K-16 Language & Cultural Immersion"
        subtitle="Immersive experiences for K-12, college, and university students to apply classroom lessons in the real world."
        height="h-[75vh]"
      >
        <Link
          to="/plan-your-trip"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all text-sm font-body"
        >
          Let's Plan Your Trip
          <ArrowRight size={18} />
        </Link>
      </HeroSection>

      {/* About */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading
            label="Our Approach"
            title="Meet Real People. See Real Asia."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body mb-6">
              As interest in Asia and the Chinese language becomes more prevalent throughout K-16 institutions,
              a full immersion trip is a great opportunity for students to apply the lessons they learned in the classroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Teaching classes and planning a trip can be an overwhelming workload. Let us build your ideal trip,
              customize it to your liking, and walk you through the planning process. We'll supply promotional materials,
              help book flights, process visas, handle payments, and create a seamless experience for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Program Highlights"
            title="Beyond Tourist Sites"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-8 bg-card rounded-lg border border-border"
              >
                <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Sample Itineraries"
            title="Where Will Your Students Go?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {itineraries.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">{item.name}</h3>
                  <p className="text-primary-foreground/80 text-sm font-body">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Plan Your Immersion Trip?
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-8 font-body">
            We'll customize the perfect itinerary for your students' learning goals.
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

export default K16Immersion;
