import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code2, Globe, Palette, Rocket, Shield, Zap, CheckCircle, Users, Clock, Award, HelpCircle, Sparkles } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { PortfolioCard } from '@/components/PortfolioCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import heroBg from '@/assets/hero-bg.jpg';
import portfolioHrhGold from '@/assets/portfolio-hrhgold.jpg';
import portfolioRaClassic from '@/assets/portfolio-raclassic.jpg';
import portfolioKatrinaFf from '@/assets/portfolio-katrinaff.jpg';
import portfolioKatrina from '@/assets/portfolio-katrina.jpg';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Beautiful, user-focused designs that capture your brand essence and convert visitors into customers.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom-built websites using modern technologies for speed, security, and seamless performance.',
  },
  {
    icon: Globe,
    title: 'Website Hosting',
    description: 'Reliable, fast, and secure hosting solutions to keep your website running 24/7.',
  },
  {
    icon: Rocket,
    title: 'Redesign & Rebranding',
    description: 'Transform outdated websites into modern digital experiences that drive results.',
  },
];

const portfolioItems = [
  {
    image: portfolioHrhGold,
    title: 'HRH Gold Invest',
    category: 'Finance',
    description: 'Premium gold investment platform with elegant dark UI and lead capture for serious investors.',
    link: 'https://hrhgoldinvest.com/',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    image: portfolioRaClassic,
    title: 'RA Classic Collection',
    category: 'Business',
    description: 'Cinematic showcase site for a luxury classic-car collection with rich imagery and storytelling.',
    link: 'https://raclassiccollection.com/',
    technologies: ['React', 'Tailwind', 'Responsive'],
  },
  {
    image: portfolioKatrinaFf,
    title: 'Katrina FF Portfolio',
    category: 'Portfolio',
    description: 'Modern personal portfolio with bold typography and editorial layout.',
    link: 'https://katrinaff.netlify.app/',
    technologies: ['React', 'Tailwind', 'Netlify'],
  },
  {
    image: portfolioKatrina,
    title: 'Katrina Fashion Finds',
    category: 'eCommerce',
    description: 'A complete fashion eCommerce platform with product catalog, cart, and seamless checkout.',
    link: 'https://katrina-fashion-finds.vercel.app/',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
  },
];

const testimonials = [
  {
    name: 'Sarah Nakamya',
    role: 'Founder',
    company: 'Katrina Fashion',
    content: 'Andyteck transformed our vision into a stunning eCommerce platform. Sales have increased by 150% since launch. Their attention to detail and dedication to our success is unmatched.',
    rating: 5,
  },
  {
    name: 'Dean Okello',
    role: 'Professional Photographer',
    company: 'Dean Photography',
    content: 'My portfolio website perfectly captures my artistic style. The team understood my vision immediately and delivered beyond expectations. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Grace Achieng',
    role: 'CEO',
    company: 'TimeBloom Beauty',
    content: 'The website they built for our salon has brought in dozens of new clients. The booking system works flawlessly, and our customers love the easy navigation.',
    rating: 5,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience to create the perfect strategy.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our designers craft beautiful mockups that align with your brand and user expectations.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build your website using cutting-edge technologies for optimal performance.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'After thorough testing, we launch your site and provide ongoing support.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '40+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We deliver projects on time without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your website is built with security best practices from day one.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 support to ensure your website runs smoothly always.',
  },
  {
    icon: Award,
    title: 'Quality Focused',
    description: 'We never compromise on code quality or design standards.',
  },
];

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most small business websites launch in 1–2 weeks. eCommerce or custom platforms typically take 3–6 weeks depending on scope and content readiness.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Pricing starts from as little as a simple landing page and scales with features. We provide a transparent custom quote after a free 15-minute discovery call — no hidden fees.',
  },
  {
    q: 'Do you offer hosting and domain registration?',
    a: 'Yes. We handle domain registration, SSL, fast hosting, regular backups and ongoing maintenance so you never have to worry about the technical side.',
  },
  {
    q: 'Will my website work on phones and tablets?',
    a: 'Absolutely. Every site we build is mobile-first and tested on phones, tablets and desktops so it looks and performs great on any screen.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes — redesign and rebranding is one of our specialties. We modernise outdated sites while preserving your SEO and content equity.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Every project includes a support window after launch, and we offer affordable monthly maintenance plans for updates, backups and security.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Content */}
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                🚀 Digital Agency from Uganda · Serving Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              We Build Websites That{' '}
              <span className="gradient-text">Make Businesses Grow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              We build, host & transform digital experiences. From stunning websites 
              to powerful eCommerce platforms, we bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4">
                View Our Work
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 pt-16 border-t border-border/50"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="stat-card">
                    <p className="stat-number">{stat.number}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title={
              <>
                Everything You Need to{' '}
                <span className="gradient-text">Succeed Online</span>
              </>
            }
            description="From design to development, hosting to support—we've got you covered with comprehensive digital solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title={
                  <>
                    We're Your Partner in{' '}
                    <span className="gradient-text">Digital Success</span>
                  </>
                }
                description="We don't just build websites—we build digital experiences that drive real business results."
                centered={false}
              />

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-card transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card-dark p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">What You Get With Us</h3>
                <ul className="space-y-4">
                  {[
                    'Custom Design Tailored to Your Brand',
                    'Mobile-First Responsive Development',
                    'SEO Optimized for Search Engines',
                    'Fast Loading Speed & Performance',
                    'Secure & Reliable Hosting',
                    'Ongoing Maintenance & Support',
                    'Free SSL Certificate',
                    'Analytics & Tracking Setup',
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-gradient-primary opacity-20 blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Our Portfolio"
            title={
              <>
                Projects That Speak{' '}
                <span className="gradient-text">For Themselves</span>
              </>
            }
            description="Take a look at some of our recent work. Each project is crafted with passion and precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioItems.map((project, index) => (
              <PortfolioCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/portfolio" className="btn-primary">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title={
              <>
                From Idea to Launch,{' '}
                <span className="gradient-text">Seamlessly</span>
              </>
            }
            description="Our proven 4-step process ensures your project is delivered on time and exceeds expectations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-dark p-6 text-center relative group"
              >
                <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-primary" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            title={
              <>
                What Our Clients{' '}
                <span className="gradient-text">Say About Us</span>
              </>
            }
            description="Don't just take our word for it—hear from the businesses we've helped succeed online."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="FAQ"
            title={
              <>
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </>
            }
            description="Everything you need to know before working with us. Still curious? Reach out anytime."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="glass-card-dark border-border/40 px-5 rounded-2xl"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="flex items-center gap-3 font-semibold">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Newsletter / Lead Magnet */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card-dark p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Free Resource
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Grab our free <span className="gradient-text">Website Launch Checklist</span>
                </h3>
                <p className="text-muted-foreground">
                  25 things every business website needs before going live — SEO, speed,
                  security, conversions. Delivered straight to your inbox.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = '/contact';
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="you@business.com"
                  className="form-input flex-1"
                  aria-label="Email address"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Send it to me
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
