import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-10 pt-6 pb-8">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <span className="font-display text-4xl tracking-wider text-primary">
                LETSTREAM<span className="text-foreground"> HUB</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              letstream Hub is an independent third-party service assistance startup. We are not affiliated with, authorized by, or endorsed by any internet, cable, or streaming provider.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              All trademarks belong to their respective owners.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Facebook} />
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <FooterGroup 
              title="Discover" 
              links={[
                { to: "/", label: "Home" },
                { to: "/about", label: "Our Story" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ]} 
            />
            <FooterGroup 
              title="Support" 
              links={[
                { to: "/contact", label: "Help Center" },
                { to: "/services", label: "Coverage" },
                { to: "/faq", label: "FAQ" },
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
              ]} 
            />
            <div className="hidden sm:block">
              <FooterGroup 
                title="Services" 
                links={[
                  { to: "/services", label: "Fiber Internet" },
                  { to: "/services", label: "Cable TV" },
                  { to: "/services", label: "Business" },
                ]} 
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xl tracking-wider mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <ContactItem icon={Phone} label="Phone" value="(888) 478-6124" href="tel:+18884786124" />
              <ContactItem icon={Mail} label="Email Support" value="hello@letstreamHub.com" href="mailto:hello@letstreamHub.com" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-card border border-border/40 grid place-items-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Official Address</div>
                  <div className="text-sm font-medium leading-relaxed">2120 Carrell Rd Apt 219,<br />Fort Myers, FL 33901-8051, USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} letstream Hub Communications. All rights reserved.
          </div>
          <div className="flex gap-8 flex-wrap">
            <Link to="/faq" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <Link to="/refund" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="/disclaimer" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/privacy" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-xl tracking-wider mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.label}>
            <Link 
              to={l.to} 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group/link"
            >
              <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon: Icon }: { icon: typeof Twitter }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-card border border-border/40 grid place-items-center hover:bg-primary hover:border-primary text-foreground hover:text-primary-foreground transition-all duration-300">
      <Icon className="w-4 h-4" />
    </a>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 group/item">
      <div className="w-10 h-10 rounded-full bg-card border border-border/40 grid place-items-center flex-shrink-0 group-hover/item:border-primary transition-colors">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
        <div className="text-sm font-medium group-hover/item:text-primary transition-colors">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
