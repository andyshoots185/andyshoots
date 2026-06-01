import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Code2, Palette, Globe, Zap, Database, Search, Settings, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in every project we deliver.',
  },
  {
    icon: Users,
    title: 'Client-First',
    description: 'Your success is our success. We put your needs at the center of everything.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of trends to deliver cutting-edge digital solutions.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We never settle for "good enough." We strive for exceptional in all we do.',
  },
];

const skills = [
  { name: 'HTML5 & CSS3', icon: Code2, level: 98 },
  { name: 'JavaScript & React', icon: Code2, level: 95 },
  { name: 'UI/UX Design', icon: Palette, level: 92 },
  { name: 'Web Hosting', icon: Globe, level: 96 },
  { name: 'Database Management', icon: Database, level: 88 },
  { name: 'SEO Optimization', icon: Search, level: 90 },
];

const tools = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB',
  'PostgreSQL', 'Figma', 'Vercel', 'Netlify', 'AWS', 'Git',
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Help Brands Go{' '}
              <span className="gradient-text">Digital & Look Professional</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Andyteck Developers is a digital agency based in Uganda, serving businesses 
              worldwide with premium web solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                badge="Who We Are"
                title={
                  <>
                    Your Trusted Partner in{' '}
                    <span className="gradient-text">Digital Transformation</span>
                  </>
                }
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Andyteck Developers, we're more than just a web development agency. 
                  We're a team of passionate creators, strategists, and problem-solvers 
                  dedicated to helping businesses establish a powerful online presence.
                </p>
                <p>
                  Founded in Uganda with a vision to serve the world, we combine local 
                  insights with global standards to deliver websites that don't just 
                  look good—they perform exceptionally.
                </p>
                <p>
                  Every project we take on is treated as a partnership. We work closely 
                  with our clients to understand their unique needs, challenges, and goals, 
                  ensuring that every website we build is tailored to drive their success.
                </p>
              </div>
              <Link to="/contact" className="btn-primary inline-flex mt-8">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card-dark p-6 text-center">
                <div className="stat-number">5+</div>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div className="glass-card-dark p-6 text-center">
                <div className="stat-number">50+</div>
                <p className="text-muted-foreground text-sm">Projects Delivered</p>
              </div>
              <div className="glass-card-dark p-6 text-center">
                <div className="stat-number">40+</div>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div className="glass-card-dark p-6 text-center">
                <div className="stat-number">15+</div>
                <p className="text-muted-foreground text-sm">Countries Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-dark p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with affordable, high-quality digital 
                solutions that help them compete in the modern marketplace. We believe 
                every business deserves a professional online presence, and we're here 
                to make that accessible to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card-dark p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Africa's leading digital agency, known for transforming 
                businesses through innovative web solutions. We envision a future 
                where every entrepreneur, regardless of location, has access to 
                world-class digital tools and expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title={
              <>
                The Principles That{' '}
                <span className="gradient-text">Guide Us</span>
              </>
            }
            description="Our values shape every decision we make and every project we deliver."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-dark p-6 text-center group hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Skills */}
            <div>
              <SectionHeading
                badge="Our Skills"
                title={
                  <>
                    Expertise That{' '}
                    <span className="gradient-text">Delivers Results</span>
                  </>
                }
                centered={false}
              />
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <SectionHeading
                badge="Our Tools"
                title={
                  <>
                    Technologies We{' '}
                    <span className="gradient-text">Work With</span>
                  </>
                }
                centered={false}
              />
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 p-6 glass-card-dark">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-lg">Always Learning</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Technology evolves rapidly, and so do we. We continuously update 
                  our skills and adopt new tools to ensure our clients always get 
                  the best solutions available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
