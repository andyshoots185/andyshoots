import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
  technologies: string[];
  index?: number;
  onClick?: () => void;
}

export const PortfolioCard = ({
  image,
  title,
  category,
  description,
  link,
  technologies,
  index = 0,
  onClick,
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="portfolio-card group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
