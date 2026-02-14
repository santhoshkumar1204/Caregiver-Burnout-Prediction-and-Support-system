import { Link } from "react-router-dom";
import { Heart, Mail, MapPin } from "lucide-react";
import LogoFrame from "@/components/LogoFrame";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <LogoFrame size="sm" />
            <span className="text-xl font-bold text-primary-foreground">HoldOn</span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            Supporting caregivers through early burnout detection and community activation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link>
            <Link to="/login" className="hover:text-primary-foreground transition-colors">Log In</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Support</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Get In Touch</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2"><Mail size={14} /> support@holdon.care</div>
            <div className="flex items-center gap-2"><MapPin size={14} /> Community-first, everywhere</div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
        <p>© 2026 HoldOn. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <Heart size={12} className="text-destructive" /> for caregivers</p>
      </div>
    </div>
  </footer>
);

export default Footer;
