import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  image?: string;
  index?: number;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating = 5,
  image,
  index = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="testimonial-card relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      
      <p className="text-foreground mb-6 leading-relaxed">"{content}"</p>
      
      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
