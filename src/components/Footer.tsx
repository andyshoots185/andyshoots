import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Website Design', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'Website Hosting', path: '/services' },
    { name: 'Redesign & Rebranding', path: '/services' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container-custom py-16 md:py-20">
        <div className="glass-card-dark p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch and let's discuss your project.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Andyteck</span>
              </Link>
              <p className="text-muted-foreground mb-6">
                We build, host & transform digital experiences. Serving clients worldwide from Uganda.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a
                      href="tel:0703639277"
                      className="hover:text-primary transition-colors"
                    >
                      0703639277
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a
                      href="mailto:andyshoots185@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      andyshoots185@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <span>Uganda 🇺🇬 · Serving Worldwide 🌍</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Andyteck Developers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
