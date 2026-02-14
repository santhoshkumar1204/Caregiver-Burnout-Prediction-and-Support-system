import { Eye, ShieldCheck, Lock } from "lucide-react";

const DataTransparency = () => (
  <div className="glass-card p-6 fade-up fade-up-delay-3">
    <div className="flex items-center gap-2 mb-3">
      <Eye size={18} className="text-primary" />
      <p className="text-sm font-semibold text-foreground">How Your Data Helps</p>
    </div>
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <ShieldCheck size={16} className="text-success mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground">Your data is used solely to detect burnout patterns and provide personalized support — never for advertising or third-party sales.</p>
      </div>
      <div className="flex items-start gap-3">
        <Lock size={16} className="text-primary mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground">All information is encrypted end-to-end. We follow healthcare-grade privacy standards to protect your wellbeing data.</p>
      </div>
    </div>
    <p className="text-xs text-muted-foreground mt-3 italic">HoldOn uses ethical AI — transparent, non-clinical, and always in your control.</p>
  </div>
);

export default DataTransparency;
