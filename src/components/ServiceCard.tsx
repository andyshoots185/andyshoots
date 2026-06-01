import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  index?: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  benefits,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {benefits && benefits.length > 0 && (
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {benefit}
            </li>
          ))}
        </ul>
      )}
      
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};
