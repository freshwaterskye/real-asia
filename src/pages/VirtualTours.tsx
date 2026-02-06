import { motion } from "framer-motion";
import { Monitor, Users, Globe2, MessageCircle, Clock, Video } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import heroVirtual from "@/assets/hero-virtual.jpg";

const offerings = [
  {
    title: "Visit a Chinese Family",
    subtitle: "走进中国家庭",
    description: "Visit a home to learn about Chinese family structure and participate in family conversations to discover traditional values and today's lifestyle.",
    duration: "60 minutes",
  },
  {
    title: "Walk Through a Chinese City",
    subtitle: "走进中国城市",
    description: "Explore the vibrant streets, markets, and neighborhoods of major Chinese cities through live-streamed guided tours.",
    duration: "60 minutes",
  },
  {
    title: "Chinese School Experience",
    subtitle: "走进中国学校",
    description: "Join a Chinese classroom and interact with local students, participate in activities, and learn about the education system firsthand.",
    duration: "60 minutes",
  },
  {
    title: "Chinese Food & Culture",
    subtitle: "中国美食文化",
    description: "Explore traditional Chinese cuisine, cooking techniques, and the cultural significance behind beloved dishes across different regions.",
    duration: "60 minutes",
  },
];

const benefits = [
  { icon: Monitor, text: "Live interactive experience — not pre-recorded" },
  { icon: Users, text: "Real-time conversations with local people" },
  { icon: Globe2, text: "Covers mainland China and Taiwan" },
  { icon: MessageCircle, text: "Practice Mandarin in real-life contexts" },
  { icon: Clock, text: "Flexible scheduling across time zones" },
  { icon: Video, text: "Professional streaming with bilingual guides" },
];

const VirtualTours = () => {
  return (
    <div>
      <HeroSection
        image={heroVirtual}
        title="Livestream Virtual Tours"
        subtitle="Connect your classroom with Asia in real-time. Live-stream programs for Mandarin learning, cultural exploration, and meaningful exchange."
        height="h-[75vh]"
      />

      {/* About */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <SectionHeading
            label="Virtual Programs"
            title="Asia Comes to Your Classroom"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed font-body"
          >
            Real Asia offers a variety of virtual programs to help enhance the classroom experience,
            whether it's for Mandarin Chinese language learning or exploring China's history, technology,
            business, society, and culture. Your classes will have the chance to practice language,
            interact with local people through real-life conversations, and lead the way to adventurous encounters!
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 p-4"
              >
                <benefit.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm font-body">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Signature Offerings"
            title="Choose Your Virtual Experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-lg border border-border"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{offering.title}</h3>
                <span className="text-primary text-sm font-body">{offering.subtitle}</span>
                <p className="text-muted-foreground text-sm leading-relaxed font-body mt-4 mb-4">{offering.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                  <Clock size={14} />
                  <span>{offering.duration}</span>
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
            Bring Asia Into Your Classroom
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-8 font-body">
            Schedule a virtual tour session and give your students an unforgettable live experience.
          </p>
          <a
            href="mailto:info@realasia.travel"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-md hover:bg-primary-foreground/90 transition-all text-sm font-body"
          >
            Schedule a Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default VirtualTours;
