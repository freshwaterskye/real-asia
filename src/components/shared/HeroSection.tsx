import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: string;
}

const HeroSection = ({ image, title, subtitle, children, height = "h-[70vh]" }: HeroSectionProps) => {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-warm-overlay" />
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed font-body"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
