import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Globe, Monitor, MapPin } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import heroHome from "@/assets/hero-home.jpg";
import destChina from "@/assets/dest-china.jpg";
import destJapan from "@/assets/dest-japan.jpg";
import destKorea from "@/assets/dest-korea.jpg";
import destTaiwan from "@/assets/dest-taiwan.jpg";
import destSingapore from "@/assets/dest-singapore.jpg";
import destVietnam from "@/assets/dest-vietnam.jpg";

const programs = [
  {
    icon: GraduationCap,
    title: "MBA & EMBA Treks",
    description:
      "Faculty-led study trips designed specifically for business schools. Visit Fortune 500 companies, emerging tech innovators, and top local business schools across Asia.",
    link: "/mba-treks",
  },
  {
    icon: Globe,
    title: "K-16 Language & Cultural Immersion",
    description:
      "Full immersion trips for K-12, college, and university students to apply classroom lessons in real-world cultural and language experiences across Asia.",
    link: "/k16-immersion",
  },
  {
    icon: Monitor,
    title: "Livestream Virtual Tours",
    description:
      "Live-stream programs connecting classrooms with mainland China and Taiwan for real-time cultural exchanges and language practice.",
    link: "/virtual-tours",
  },
  {
    icon: MapPin,
    title: "Asia in North America",
    description:
      "Visit Chinatowns and Asian communities in New York, San Francisco, or Vancouver. Experience Asian language, culture, and food without leaving North America.",
    link: "/asia-in-north-america",
  },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "300+", label: "Schools Served" },
  { value: "500+", label: "Trips Organized" },
  { value: "0", label: "Accidents" },
  { value: "16", label: "Team Members" },
  { value: "6", label: "Time Zones" },
];

const destinations = [
  { name: "China", image: destChina },
  { name: "Japan", image: destJapan },
  { name: "South Korea", image: destKorea },
  { name: "Taiwan", image: destTaiwan },
  { name: "Singapore", image: destSingapore },
  { name: "Vietnam", image: destVietnam },
];

const recentTrips = [
  {
    destination: "China",
    date: "March 2024",
    school: "The Peddie School",
    description:
      "Visited Beijing, Shanghai, and Yunnan to explore culture and practice Mandarin. Activities included sister school visits, homestays, camping in Lijiang, and volunteering with minority families.",
  },
  {
    destination: "Taiwan",
    date: "April 2024",
    school: "Arlington Students",
    description:
      "Explored Taiwan for rich cultural and language perspectives. Visited iconic night markets, toured aboriginal villages, attended workshops, and connected with local students through homestay.",
  },
  {
    destination: "Korea",
    date: "March 2025",
    school: "Stanford Business School",
    description:
      "Visited major companies like Hybe Entertainment and Amore Pacific, combined with cultural exploration in historic Gyeongju.",
  },
  {
    destination: "Japan",
    date: "March 2025",
    school: "Iolani College Prep",
    description:
      "Explored Tokyo, Kyoto, and Osaka — trying on kimono, visiting bamboo groves and shrines, connecting with local students through multi-day school exchanges and homestays.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        image={heroHome}
        title="Meet Real People. See Real Asia."
        subtitle="Since 2005, we've been creating the most educational and engaging Asia travel experiences for US teachers, students, and business professionals."
        height="h-[85vh]"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/plan-your-trip"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all text-sm font-body"
          >
            Plan Your Trip
          </Link>
          <Link
            to="/why-real-asia"
            className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-all text-sm font-body"
          >
            Why Real Asia
          </Link>
        </div>
      </HeroSection>

      {/* Programs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Programs"
            title="Tailored Experiences for Every Journey"
            description="Whether you're leading a business school trek or an immersive K-16 program, we craft unforgettable experiences."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={program.link}
                  className="group block p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <program.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold font-body">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Our Track Record
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center p-4"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-wider font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Top Destinations"
            title="Where We'll Take You"
            description="From ancient temples to modern megacities, explore the breadth of Asia with our expert local teams."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    {dest.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Trips */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Recent Trips"
            title="Stories from the Road"
            description="See what our recent travelers have experienced across Asia."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentTrips.map((trip, index) => (
              <motion.div
                key={trip.destination + trip.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full font-body">
                    {trip.destination}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">{trip.date}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {trip.school}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {trip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary-foreground leading-relaxed italic mb-8">
              "Our class trip to China was not only the best trip of my MBA experience,
              but the best trip of my life. The amount of care and detail shown in creating
              the itinerary was met with grace and immense willingness to help make the trip perfect."
            </p>
            <div className="text-primary-foreground/80 font-body">
              <span className="font-semibold">Harvard Business School</span>
              <span className="mx-2">·</span>
              <span>2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-body">
              Let us craft a customized itinerary that matches your goals, timeline, and budget.
            </p>
            <Link
              to="/plan-your-trip"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all text-sm font-body"
            >
              Plan Your Trip
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
