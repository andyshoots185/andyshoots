import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, Code2, Globe, Rocket, Briefcase, Camera, ShoppingCart, 
  ArrowRight, CheckCircle 
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Beautiful, custom designs that capture your brand essence and engage your audience from the first click.',
    benefits: [
      'Custom UI/UX design tailored to your brand',
      'Mobile-first responsive layouts',
      'User-focused design principles',
      'Modern aesthetics & animations',
    ],
  },
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Clean, efficient code that brings your design to life with optimal performance and functionality.',
    benefits: [
      'Modern frameworks (React, Next.js)',
      'Fast loading & optimized performance',
      'Cross-browser compatibility',
      'Clean, maintainable code',
    ],
  },
  {
    icon: Globe,
    title: 'Website Hosting',
    description: 'Reliable, secure hosting solutions that keep your website running smoothly 24/7.',
    benefits: [
      '99.9% uptime guarantee',
      'SSL certificates included',
      'Regular backups & security',
      'Fast global CDN delivery',
    ],
  },
  {
    icon: Rocket,
    title: 'Redesign & Rebranding',
    description: 'Transform your outdated website into a modern digital experience that drives results.',
    benefits: [
      'Complete visual overhaul',
      'Updated user experience',
      'Performance optimization',
      'SEO preservation & improvement',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and help your business grow online.',
    benefits: [
      'Corporate & business layouts',
      'Contact forms & lead capture',
      'Service/product showcases',
      'Analytics integration',
    ],
  },
  {
    icon: Camera,
    title: 'Portfolio Websites',
    description: 'Stunning portfolio sites that showcase your work and attract potential clients.',
    benefits: [
      'Gallery & project showcases',
      'Creative layouts & animations',
      'Easy content management',
      'Social media integration',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Websites',
    description: 'Fully-featured online stores that make selling products online easy and profitable.',
    benefits: [
      'Product catalog management',
      'Secure payment processing',
      'Inventory management',
      'Order tracking & notifications',
    ],
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started online',
    price: 'Custom Quote',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '1 month support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses that need more features',
    price: 'Custom Quote',
    features: [
      'Up to 10 pages',
      'Custom design',
      'Advanced SEO',
      'CMS integration',
      'Analytics setup',
      '3 months support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Full-featured solution for established businesses',
    price: 'Custom Quote',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'eCommerce features',
      'Priority support',
      'Ongoing maintenance',
      '12 months support',
    ],
    popular: false,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Digital Solutions for{' '}
              <span className="gradient-text">Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From design to development, hosting to support—we provide everything 
              you need to establish and grow your online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Pricing"
            title={
              <>
                Investment That{' '}
                <span className="gradient-text">Pays Off</span>
              </>
            }
            description="Every business is unique. Contact us for a custom quote tailored to your specific needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card-dark p-6 md:p-8 relative ${
                  tier.popular ? 'border-primary/50 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="text-3xl font-bold gradient-text mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                    tier.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-dark p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project. We'll help you figure out the best solution 
                for your business goals and budget.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
