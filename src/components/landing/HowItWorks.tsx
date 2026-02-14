import workflowImg from "@/assets/workflow.png";
import c5Img from "@/assets/c5.png";

const steps = [
  { num: "01", title: "Caregiver Onboarding", desc: "Quick profile setup to understand your caregiving context and needs." },
  { num: "02", title: "Behavioral & Workload Inputs", desc: "Track sleep, mood, care hours, and daily routines effortlessly." },
  { num: "03", title: "Burnout Risk Prediction", desc: "AI-powered dashboard shows your burnout risk score and trends." },
  { num: "04", title: "Support Activation", desc: "Automatically alerts your support network when risk rises." },
  { num: "05", title: "Improved Wellbeing", desc: "Better outcomes through early intervention and community support." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Five simple steps from onboarding to improved wellbeing.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="flex justify-center fade-up fade-up-delay-1">
          <img src={workflowImg} alt="HoldOn Workflow" className="w-full max-w-lg rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
        </div>
        <div className="flex justify-center fade-up fade-up-delay-2">
          <img src={c5Img} alt="Caregiver support features" className="w-full max-w-lg rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={step.num} className={`glass-card p-6 text-center glow-hover fade-up fade-up-delay-${(i % 4) + 1}`}>
            <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-4">
              {step.num}
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
            <p className="text-xs text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
