import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

const StatCard = ({ value, label, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-body text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export default StatCard;
