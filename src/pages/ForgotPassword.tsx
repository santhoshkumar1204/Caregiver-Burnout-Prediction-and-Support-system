import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const ForgotPassword = () => (
  <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6">
          <img src={logo} alt="HoldOn" className="h-14 w-14 object-contain" />
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Reset your password</h1>
        <p className="text-muted-foreground text-sm mt-1">Enter your email and we'll send you a reset link</p>
      </div>

      <div className="glass-card p-8">
        <form onSubmit={e => e.preventDefault()} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
            <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" required />
          </div>
          <button type="submit" className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity glow-hover">
            Send Reset Link
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        <Link to="/login" className="text-primary font-medium hover:underline flex items-center justify-center gap-1">
          <ArrowLeft size={14} /> Back to Sign In
        </Link>
      </p>
    </div>
  </div>
);

export default ForgotPassword;
