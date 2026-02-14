import { Watch, Building2, Handshake } from "lucide-react";

const items = [
  { icon: Watch, title: "Wearable Integration", desc: "Connect smartwatches for real-time stress and sleep tracking." },
  { icon: Building2, title: "Hospital Integration", desc: "Seamless connection with hospital management systems." },
  { icon: Handshake, title: "NGO Collaboration", desc: "Partner modules for NGOs supporting caregiver networks." },
];

const ComingSoon = () => (
  <div className="glass-card p-6 fade-up fade-up-delay-4">
    <p className="text-sm font-semibold text-foreground mb-4">🚀 Coming Soon</p>
    <div className="grid sm:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <div key={i} className="p-4 rounded-xl border border-dashed border-border bg-muted/20 text-center opacity-70">
          <item.icon size={22} className="text-primary mx-auto mb-2" />
          <p className="text-sm font-medium text-foreground">{item.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
          <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Coming Soon</span>
        </div>
      ))}
    </div>
  </div>
);

export default ComingSoon;
