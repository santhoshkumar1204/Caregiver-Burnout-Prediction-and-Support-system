import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Users, Brain, Target, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="fade-up">
          <h1 className="text-4xl font-bold text-foreground mb-4">About <span className="gradient-text">HoldOn</span></h1>
          <p className="text-lg text-muted-foreground mb-12">
            HoldOn is a caregiver burnout detection and support platform that uses behavioral analysis to identify burnout risk early and activate support networks before it's too late.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Heart, title: "Our Mission", desc: "To ensure no caregiver burns out alone. We believe those who care for others deserve care themselves." },
            { icon: Brain, title: "How AI Helps", desc: "AI-powered behavioral analysis tracks stress patterns, sleep, workload, and mood to predict burnout before it becomes critical — all non-clinical and transparent." },
            { icon: Users, title: "Who Benefits", desc: "Family caregivers, professional caregivers, hospital staff, NGOs, elder care providers — anyone in the caregiving ecosystem." },
            { icon: Shield, title: "Privacy First", desc: "Your data is encrypted and never shared. We believe in monitoring that respects dignity and autonomy." },
            { icon: Target, title: "Problem Statement", desc: "Over 53 million Americans serve as unpaid caregivers. Up to 70% experience depression symptoms. Early detection can change outcomes." },
            { icon: Globe, title: "Future Vision", desc: "Wearable integration, hospital partnerships, NGO collaboration modules, and multilingual support — making caregiver wellbeing universally accessible." },
          ].map((item, i) => (
            <div key={i} className={`glass-card p-6 glow-hover fade-up fade-up-delay-${(i % 4) + 1}`}>
              <item.icon size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center fade-up fade-up-delay-3">
          <h2 className="text-2xl font-bold text-foreground mb-3">Join the Movement</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Early intervention matters. Support systems improve outcomes. HoldOn is building the future of caregiver wellbeing — and you can be part of it.
          </p>
          <Link to="/signup" className="inline-flex gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 glow-hover">
            Join HoldOn Today
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
