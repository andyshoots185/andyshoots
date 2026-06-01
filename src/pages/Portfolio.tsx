import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { PortfolioCard } from '@/components/PortfolioCard';
import portfolioKatrina from '@/assets/portfolio-katrina.jpg';
import portfolioDean from '@/assets/portfolio-dean.jpg';
import portfolioTimebloom from '@/assets/portfolio-timebloom.jpg';
import portfolioMwanga from '@/assets/portfolio-mwanga.jpg';
import portfolioHrhGold from '@/assets/portfolio-hrhgold.jpg';
import portfolioRaClassic from '@/assets/portfolio-raclassic.jpg';
import portfolioKatrinaFf from '@/assets/portfolio-katrinaff.jpg';

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    image: portfolioHrhGold,
    title: 'HRH Gold Invest',
    category: 'Finance',
    description: 'Premium gold investment platform with elegant dark UI, market data, and lead capture for serious investors.',
    fullDescription: 'HRH Gold Invest is a high-end financial services website built to attract and convert serious gold investors. The site combines a luxury dark aesthetic with clear, trust-building information about investment products and processes.',
    challenge: 'The client needed a website that conveyed authority, security and luxury — instantly reassuring high-value investors while still being fast and easy to navigate.',
    solution: 'We crafted a premium dark-themed experience with gold accents, refined typography, animated hero sections and strong calls-to-action. The site is fully responsive and SEO-optimised for investment-related queries.',
    link: 'https://hrhgoldinvest.com/',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
  },
  {
    image: portfolioRaClassic,
    title: 'RA Classic Collection',
    category: 'Business',
    description: 'Cinematic showcase site for a luxury classic-car collection, with rich imagery and storytelling.',
    fullDescription: 'RA Classic Collection is a high-end automotive showcase website built to display a curated collection of classic and vintage vehicles. The site emphasises atmosphere, photography and craftsmanship.',
    challenge: 'The collection needed an online home worthy of the vehicles themselves — cinematic, refined and capable of generating enquiries from collectors worldwide.',
    solution: 'We designed a dark, image-led layout with smooth scroll animations, large hero visuals and a clear enquiry path. Performance and image optimisation were prioritised so the visuals load instantly on every device.',
    link: 'https://raclassiccollection.com/',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
  },
  {
    image: portfolioKatrinaFf,
    title: 'Katrina FF Portfolio',
    category: 'Portfolio',
    description: 'Modern personal portfolio with bold typography, project case studies, and clean editorial layout.',
    fullDescription: 'Katrina FF is a personal portfolio website that showcases creative projects with an editorial, magazine-style layout. The site balances bold typography with airy whitespace to let the work breathe.',
    challenge: 'The client wanted a portfolio that stood out from typical template-based sites and felt genuinely personal and creative.',
    solution: 'We delivered a custom-designed portfolio with unique grid layouts, smooth page transitions and a thoughtful content structure that highlights each project as a small case study.',
    link: 'https://katrinaff.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'Netlify', 'Framer Motion'],
  },
  {
    image: portfolioKatrina,
    title: 'Katrina Fashion Finds',
    category: 'eCommerce',
    description: 'A complete fashion eCommerce platform with product catalog, cart, and seamless checkout experience.',
    fullDescription: 'Katrina Fashion Finds is a modern online fashion store that brings the latest trends to customers across Africa. The platform features a comprehensive product catalog, shopping cart functionality, and a streamlined checkout process designed to maximize conversions.',
    challenge: 'The client needed an online presence to compete with larger fashion retailers while maintaining their unique brand identity and providing an exceptional shopping experience for their customers.',
    solution: 'We built a fully responsive eCommerce platform with intuitive navigation, high-quality product imagery, and a seamless checkout flow. The site includes size guides, product filtering, and a wishlist feature to enhance the shopping experience.',
    link: 'https://katrina-fashion-finds.vercel.app/',
    technologies: ['React', 'Tailwind CSS', 'Vercel', 'Context API'],
  },
  {
    image: portfolioDean,
    title: 'Dean Photography',
    category: 'Portfolio',
    description: 'Stunning photography portfolio showcasing professional work with an elegant gallery design.',
    fullDescription: 'Dean Photography is a portfolio website for a professional photographer based in Uganda. The site showcases stunning photography across various categories including portraits, events, and landscape photography.',
    challenge: 'The photographer needed a platform that would let their visual work speak for itself while still being easy to navigate and contact for bookings.',
    solution: 'We created an elegant, minimalist portfolio with a focus on large, high-quality imagery. The gallery design allows visitors to immerse themselves in the work while the clean layout maintains easy navigation and clear calls-to-action for booking.',
    link: 'https://dean-photography-ug.netlify.app/',
    technologies: ['React', 'CSS3', 'Netlify', 'Lightbox Gallery'],
  },
  {
    image: portfolioTimebloom,
    title: 'TimeBloom Beauty',
    category: 'Business',
    description: 'Beauty salon website with service booking, pricing display, and customer testimonials.',
    fullDescription: 'TimeBloom Beauty is a website for a premium beauty salon offering a range of services from hair styling to spa treatments. The site serves as both an information hub and a booking platform for clients.',
    challenge: 'The salon wanted to reduce phone call volume for simple inquiries while making it easier for clients to discover services and book appointments online.',
    solution: 'We developed a comprehensive business website with detailed service descriptions, transparent pricing, a gallery of work, and prominent booking CTAs. Customer testimonials add social proof to build trust with potential clients.',
    link: 'https://timebloombeauty.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'Netlify', 'Responsive Design'],
  },
  {
    image: portfolioMwanga,
    title: 'Mwanga Properties',
    category: 'Real Estate',
    description: 'Real estate platform with property listings, search functionality, and contact features.',
    fullDescription: 'Mwanga Properties is a comprehensive real estate platform serving the Ugandan property market. The website features property listings for sale and rent, with detailed property information and high-quality imagery.',
    challenge: 'The real estate agency needed a digital platform to showcase their property portfolio and generate leads from potential buyers and renters.',
    solution: 'We built a feature-rich real estate website with property search and filtering, detailed listing pages with galleries, and integrated contact forms for inquiries. The responsive design ensures a great experience on all devices.',
    link: 'https://mwangaproperties.com/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
  },
];

const categories = ['All', 'eCommerce', 'Portfolio', 'Business', 'Real Estate', 'Finance'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work That Speaks{' '}
              <span className="gradient-text">For Itself</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of successful projects. Each one crafted with 
              passion, precision, and a focus on results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <PortfolioCard
                  key={project.title}
                  {...project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-sm text-primary font-medium">{selectedProject.category}</span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-1">{selectedProject.title}</h2>
                  </div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-shrink-0"
                  >
                    Visit Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-6">{selectedProject.fullDescription}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-card-dark p-4">
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div className="glass-card-dark p-4">
                    <h4 className="font-semibold mb-2">Our Solution</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
