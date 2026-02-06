import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Sparkles, Globe2, Building2, GraduationCap } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import heroMba from "@/assets/hero-mba.jpg";
import destChina from "@/assets/dest-china.jpg";
import destJapan from "@/assets/dest-japan.jpg";
import destKorea from "@/assets/dest-korea.jpg";
import destSingapore from "@/assets/dest-singapore.jpg";
import destTaiwan from "@/assets/dest-taiwan.jpg";
import destVietnam from "@/assets/dest-vietnam.jpg";

const stats = [
  { value: "20+", label: "Years" },
  { value: "300+", label: "Schools" },
  { value: "500+", label: "Trips" },
  { value: "0", label: "Accidents" },
];

const destinations = [
  { name: "Mainland China", image: destChina },
  { name: "Japan", image: destJapan },
  { name: "South Korea", image: destKorea },
  { name: "Singapore", image: destSingapore },
  { name: "Taiwan", image: destTaiwan },
  { name: "Vietnam", image: destVietnam },
];

const values = [
  {
    icon: Briefcase,
    title: "Leadership",
    description: "We've been organizing MBA treks since 2005 — working alongside student leaders for nearly two decades.",
  },
  {
    icon: Sparkles,
    title: "Legacy",
    description: "It's not just about leading a trek. It's about creating something your classmates will never forget — and future classes will want to follow.",
  },
  {
    icon: Users,
    title: "Representation",
    description: "You believe in the power of returning home — to share your roots through lived experience, not slides or speeches.",
  },
  {
    icon: Globe2,
    title: "Connection",
    description: "We create meaningful bridges between people, cultures, and lasting memories.",
  },
];

const processSteps = [
  { step: 1, title: "Getting To Know You", description: "We start by understanding your vision, goals, and class vibe. This trek is your story — we're here to help you bring it to life." },
  { step: 2, title: "Customize Proposal", description: "Based on your goals, we craft a tailored itinerary with the right mix of culture, business, and fun — curated just for your class." },
  { step: 3, title: "Trip Launch", description: "We finalize details, open sign-ups, and provide everything you need to rally your class — from promo decks to FAQs." },
  { step: 4, title: "Finalizing Bookings", description: "We lock in all logistics — hotels, venues, visits, and experiences — so everything runs smoothly." },
  { step: 5, title: "Pre-trip Orientation", description: "We prep your group with a full briefing — itineraries, cultural tips, and what to expect." },
  { step: 6, title: "Let's Go!", description: "You lead the way, we've got your back. From arrival to farewell, we handle the details so you can focus on creating unforgettable memories." },
];

const MbaTreks = () => {
  return (
    <div>
      <HeroSection
        image={heroMba}
        title="MBA Treks"
        subtitle="Designed specifically for business schools' faculty-led short-term study trips. Meet real people, see real Asia."
        height="h-[75vh]"
      >
        <a
          href="mailto:ericl@realasia.travel"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all text-sm font-body"
        >
          Connect With Our MBA Trek Expert
          <ArrowRight size={18} />
        </a>
      </HeroSection>

      {/* Stats */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Dear Trek Leaders"
            title="This is YOUR Homecoming"
            description="We understand, this is not just a trip — let us be your partner for your trek!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-8 bg-card rounded-lg border border-border"
              >
                <value.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Top Destinations"
            title="For Business Schools in Asia"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative aspect-[3/5] rounded-lg overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-sm font-semibold text-primary-foreground">{dest.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Process"
            title="Fully Customized To Your Goals"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display text-lg font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Events */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">MBA Exclusive Events</h2>
            <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4 font-body">
              From private cultural immersions to unforgettable nightlife adventures.
              From insider visits to Fortune 500 giants to emerging tech innovators.
              From top local business schools to exclusive entertainment.
            </p>
            <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8 font-body">
              We are committed to crafting exclusive, tailor-made experiences that reveal the true beauty and depth of Asia.
            </p>
            <a
              href="mailto:ericl@realasia.travel"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-md hover:bg-primary-foreground/90 transition-all text-sm font-body"
            >
              Connect With Our MBA Trek Expert
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Prestige */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionHeading
            label="Trusted By"
            title="Prestigious Schools We've Served"
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Wharton", "Stanford GSB", "Kellogg", "Harvard Business School", "Columbia GSB", "Dartmouth Tuck"].map(
              (school, index) => (
                <motion.div
                  key={school}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 bg-card rounded-full border border-border font-display text-sm font-semibold text-foreground"
                >
                  {school}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbaTreks;
