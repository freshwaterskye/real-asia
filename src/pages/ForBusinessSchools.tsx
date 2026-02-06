import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, GraduationCap, Briefcase, Users, CheckCircle } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeading from "@/components/shared/SectionHeading";
import heroEmba from "@/assets/hero-emba.jpg";
import destJapan from "@/assets/dest-japan.jpg";
import destSingapore from "@/assets/dest-singapore.jpg";
import destTaiwan from "@/assets/dest-taiwan.jpg";
import destVietnam from "@/assets/dest-vietnam.jpg";
import destChina from "@/assets/dest-china.jpg";
import destKorea from "@/assets/dest-korea.jpg";

const schoolsServed = [
  "Wharton",
  "Stanford GSB",
  "Kellogg",
  "Harvard Business School",
  "Columbia GSB",
  "Dartmouth Tuck",
];

const destinations = [
  { name: "Japan", tagline: "The Heritage of Japan's Centuries-Old Businesses", image: destJapan },
  { name: "Singapore", tagline: "A Global Perspective in Multicultural Business", image: destSingapore },
  { name: "Taiwan", tagline: "Easy Business Environment of Taiwan", image: destTaiwan },
  { name: "South Korea", tagline: "Innovation Hub of East Asia", image: destKorea },
  { name: "Vietnam", tagline: "Business Opportunities in a Dynamic Economy", image: destVietnam },
  { name: "China", tagline: "The World's Fastest-Growing Major Economy", image: destChina },
];

const basicServices = [
  "Program optimization",
  "Flight reservations",
  "4-5 star hotel bookings",
  "Visa processing",
  "Chartered bus services",
  "Local authentic meals",
  "Receptions and events",
  "Guides experienced in business trips",
  "Travel and liability insurance",
];

const companyVisitTypes = [
  { icon: Building2, title: "Fortune 500 Companies", description: "Visit major multinational corporations across Asia." },
  { icon: Briefcase, title: "Entrepreneurial Startups", description: "Meet rising Asian entrepreneurs building the future." },
  { icon: Globe2, title: "Social Enterprises", description: "See how for-profit businesses do good in unique environments." },
  { icon: GraduationCap, title: "Local Business Schools", description: "Exchange ideas with local students and professors on relevant business topics." },
];

const ForBusinessSchools = () => {
  return (
    <div>
      <HeroSection
        image={heroEmba}
        title="For Business Schools"
        subtitle="Our MBA/EMBA service provides a vast array of travel logistics support, trip organizing services, and assistance in setting up educational content for E/MBA programs traveling to Asia."
      />

      {/* Schools Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Clients"
            title="Trusted by Top Business Schools"
            description="We have extensive experience serving many prestigious business schools and programs."
          />
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {schoolsServed.map((school, index) => (
              <motion.div
                key={school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="px-6 py-4 bg-card rounded-lg border border-border text-center"
              >
                <span className="font-display text-lg font-semibold text-foreground">{school}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: schoolsServed.length * 0.08 }}
              className="px-6 py-4 bg-primary/10 rounded-lg border border-primary/20 text-center"
            >
              <span className="font-display text-lg font-semibold text-primary">And many more...</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Top Destinations"
            title="Where Business Meets Culture"
            description="Explore Asia's most dynamic business destinations with our expert local teams."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm font-body">{dest.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fully Customizable */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 font-body uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Fully Customizable MBA Service
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 font-body">
                An MBA trip requires a much higher level of flexibility than a traditional tour. Company visits may not be confirmed until the last few days before departure, participants may request different flights, and students' spouses may not join certain activities. Plans change and you have to react fast. Our experienced staff understand and expect these demands, knowing full well how to make mid-course corrections.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {basicServices.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-body">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 font-body uppercase tracking-wider">
                Company Visits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get Your Foot in the Door
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 font-body">
                With our broad network of company partners in Asia, we can help you connect with some of the major players in Asia's booming economy. These partners span several industries and range from multinational corporations to rising Asian entrepreneurs.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {companyVisitTypes.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student-Led Trips */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Student-Led Trips
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 font-body">
              Planning and coordinating a tour with your fellow classmates is an exciting experience and an opportunity to demonstrate your leadership skills. However, dealing with larger groups means coordinating trip promotion, registration, visas, local transportation, and more. Because student leaders must keep up with school obligations, self-planning can become a major headache. We work with you to ensure both you and the trip are successful.
            </p>
            <Link
              to="/plan-your-trip"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-md hover:bg-primary-foreground/90 transition-all text-sm font-body"
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

export default ForBusinessSchools;
