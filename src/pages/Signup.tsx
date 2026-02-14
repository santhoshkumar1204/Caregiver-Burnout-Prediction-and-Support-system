import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, Heart, Stethoscope } from "lucide-react";
import LogoFrame from "@/components/LogoFrame";

const professionalCategories = [
  "Hospital Nurse",
  "Home Healthcare Worker",
  "NGO Caregiver",
  "Elder Care Assistant",
  "Disability Support Worker",
  "Hospice Caregiver",
  "Volunteer Caregiver",
];

const Signup = () => {
  const [showPw, setShowPw] = useState(false);
  const [role, setRole] = useState<"family" | "professional" | "">("");
  const [proCategory, setProCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <LogoFrame size="lg" />
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
          <p className="text-muted-foreground text-sm mt-1">Start your caregiver support journey</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Jane Doe" required />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Password</label>
              <div className="relative">
                <input type={showPw ? "text" : "password"} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 pr-10" placeholder="Min 8 characters" required />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">I am a...</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => { setRole("family"); setProCategory(""); }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${role === "family" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}>
                  <Heart size={24} className={role === "family" ? "text-primary" : "text-muted-foreground"} />
                  <span className="text-sm font-medium text-foreground">Family Caregiver</span>
                </button>
                <button type="button" onClick={() => setRole("professional")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${role === "professional" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}>
                  <Stethoscope size={24} className={role === "professional" ? "text-primary" : "text-muted-foreground"} />
                  <span className="text-sm font-medium text-foreground">Professional Caregiver</span>
                </button>
              </div>
            </div>

            {role === "professional" && (
              <div className="fade-up">
                <label className="text-sm font-medium text-foreground block mb-1.5">Professional Category</label>
                <select value={proCategory} onChange={e => setProCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="">Select your category...</option>
                  {professionalCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            )}

            <button type="submit" className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-hover">
              Create Account <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">or continue with</span></div>
            </div>
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-background text-sm font-medium hover:bg-muted transition-colors">🔵 Google</button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
