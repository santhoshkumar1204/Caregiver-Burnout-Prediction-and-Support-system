import { useState } from "react";
import { Phone, AlertTriangle, Heart, X, LifeBuoy } from "lucide-react";

const QuickSupport = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform flex items-center justify-center glow-hover"
        title="Quick Support"
      >
        <LifeBuoy size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative glass-card p-6 w-full max-w-sm animate-scale-in space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LifeBuoy size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Quick Support</h3>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-destructive/30 bg-destructive/5 hover:bg-destructive/10 transition-colors">
              <Phone size={18} className="text-destructive" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Emergency Contact</p>
                <p className="text-xs text-muted-foreground">Call your designated emergency contact</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-warning/30 bg-warning/5 hover:bg-warning/10 transition-colors">
              <AlertTriangle size={18} className="text-warning" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Alert Support Network</p>
                <p className="text-xs text-muted-foreground">Send a quick alert to your team</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
              <Heart size={18} className="text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Calming Exercise</p>
                <p className="text-xs text-muted-foreground">Try a 2-minute breathing technique</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickSupport;
