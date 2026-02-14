import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoFrame from "@/components/LogoFrame";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LogoFrame size="sm" />
          <span className="text-xl font-bold gradient-text">HoldOn</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
          <Link to="/login" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Log In</Link>
          <Link to="/signup" className="gradient-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/50 p-4 flex flex-col gap-3">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">How It Works</a>
          <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Features</a>
          <Link to="/about" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Contact Us</Link>
          <Link to="/login" onClick={() => setOpen(false)} className="text-sm font-medium text-primary py-2">Log In</Link>
          <Link to="/signup" onClick={() => setOpen(false)} className="gradient-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
