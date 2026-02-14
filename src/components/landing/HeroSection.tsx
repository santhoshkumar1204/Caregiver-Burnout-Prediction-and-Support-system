import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-16">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 fade-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Caregiver Burnout Detection & Support
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            You support others.{" "}
            <span className="gradient-text">HoldOn supports you.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            Early burnout detection and support network activation for family and professional caregivers. Because those who care deserve care too.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/signup" className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all flex items-center gap-2 glow-hover">
              Get Started <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="border-2 border-primary/20 text-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:border-primary/40 hover:bg-primary/5 transition-all">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative fade-up fade-up-delay-2">
          <div className="relative float-animation">
            <img src={heroImg} alt="Caregiver support illustration" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>

    <a href="#how-it-works" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
