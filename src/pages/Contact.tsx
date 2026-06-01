import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { useToast } from '@/components/ui/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '0703639277',
    href: 'tel:0703639277',
    description: 'Call us anytime',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'andyshoots185@gmail.com',
    href: 'mailto:andyshoots185@gmail.com',
    description: 'Email us 24/7',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Uganda',
    description: 'Serving Worldwide 🌍',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon - Sat: 9AM - 6PM',
    description: 'East Africa Time (EAT)',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });
    setIsSubmitting(false);
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Your{' '}
              <span className="gradient-text">Dream Website</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your business online? Get in touch with us today and 
              let's discuss how we can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-dark p-6 text-center group hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-primary font-medium hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium">{info.value}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                badge="Get a Quote"
                title={
                  <>
                    Tell Us About{' '}
                    <span className="gradient-text">Your Project</span>
                  </>
                }
                description="Fill out the form below and we'll get back to you within 24 hours with a custom quote."
                centered={false}
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="website-design">Website Design</option>
                      <option value="website-development">Website Development</option>
                      <option value="website-hosting">Website Hosting</option>
                      <option value="redesign">Redesign & Rebranding</option>
                      <option value="ecommerce">eCommerce Website</option>
                      <option value="portfolio">Portfolio Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select your budget</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card-dark p-8 md:p-10 sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Free initial consultation',
                    'Custom solutions tailored to your needs',
                    'Transparent pricing with no hidden fees',
                    'Fast turnaround times',
                    'Ongoing support after launch',
                    '100% satisfaction guarantee',
                  ].map((item, index) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6 bg-gradient-primary rounded-xl text-primary-foreground">
                  <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Don't wait to take your business online. Every day without a 
                    website is a day of missed opportunities.
                  </p>
                  <a
                    href="tel:0703639277"
                    className="inline-flex items-center gap-2 bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-background/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: 0703639277
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
