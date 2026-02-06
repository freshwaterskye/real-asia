import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-primary">R</span>eal Asia
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Since 2005, providing the most educational and engaging Asia travel
              experiences for US teachers, students, and business professionals.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {[
                { label: "MBA Treks", path: "/mba-treks" },
                { label: "For Business Schools", path: "/for-business-schools" },
                { label: "K-16 Immersion", path: "/k16-immersion" },
                { label: "Virtual Tours", path: "/virtual-tours" },
                { label: "Asia in North America", path: "/asia-in-north-america" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Why Real Asia", path: "/why-real-asia" },
                { label: "FAQ", path: "/faq" },
                { label: "Plan Your Trip", path: "/plan-your-trip" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17202664666"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} />
                  +1-720-266-4666
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@realasia.travel"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  info@realasia.travel
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/realasiatravel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/realasiatravel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Real Asia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
