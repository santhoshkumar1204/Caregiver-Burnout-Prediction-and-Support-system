import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import dashImg from "@/assets/dashboard-preview.png";
import c6Img from "@/assets/c6.png";

const DashboardPreview = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Wellbeing, <span className="gradient-text">At a Glance</span>
          </h2>
          <p className="text-muted-foreground">
            A real-time dashboard that tracks burnout risk, care workload, and support status — all in one calming, easy-to-read view.
          </p>

          <div className="space-y-4">
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-success" />
              <div>
                <p className="text-sm font-semibold text-foreground">Burnout Score Gauge</p>
                <p className="text-xs text-muted-foreground">Color-coded risk levels: Green / Yellow / Red</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Weekly Trend Analysis</p>
                <p className="text-xs text-muted-foreground">Track stress patterns over time</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div>
                <p className="text-sm font-semibold text-foreground">Smart Notifications</p>
                <p className="text-xs text-muted-foreground">Break reminders and support alerts</p>
              </div>
            </div>
          </div>

          <Link to="/dashboard" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity glow-hover">
            See Dashboard Demo <ArrowRight size={18} />
          </Link>
        </div>

        <div className="space-y-6 fade-up fade-up-delay-2">
          <img src={dashImg} alt="Dashboard Preview" className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300" />
          <img src={c6Img} alt="Analytics illustration" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPreview;
