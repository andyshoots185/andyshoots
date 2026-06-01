import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-muted-foreground text-lg md:text-xl max-w-3xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
