import { Shield, Users, Brain, HeartHandshake, Eye } from "lucide-react";

const features = [
  { icon: Brain, title: "Early Burnout Detection", desc: "AI-powered analysis identifies burnout risk before it becomes critical." },
  { icon: Users, title: "Support Network Activation", desc: "Automatically alerts family and team when you need help." },
  { icon: HeartHandshake, title: "Personalized Insights", desc: "Tailored recommendations based on your unique caregiving patterns." },
  { icon: Shield, title: "Family + Professional Modes", desc: "Designed for both family caregivers and healthcare professionals." },
  { icon: Eye, title: "Privacy-First Monitoring", desc: "Your data is encrypted and never shared without consent." },
];

const Features = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Feature Highlights</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tools designed with caregivers in mind — supportive, not clinical.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className={`glass-card p-8 glow-hover group fade-up fade-up-delay-${(i % 4) + 1}`}>
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <f.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
