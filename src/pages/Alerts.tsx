import DashboardLayout from "@/components/layout/DashboardLayout";
import { Bell } from "lucide-react";
import useCaregiver from "@/hooks/useCaregiver";

const familyAlerts = [
  { type: "warning", title: "Emotional Fatigue Alert", msg: "Your stress from daily caregiving has been elevated for 3 consecutive days. Consider asking family for help.", time: "30 min ago" },
  { type: "info", title: "Personal Break Reminder", msg: "You've been providing home care for 4 hours straight. Taking a short break can help maintain your wellbeing.", time: "1h ago" },
  { type: "success", title: "Family Support Available", msg: "Your brother Mark has offered to help this Saturday so you can take personal time.", time: "3h ago" },
  { type: "warning", title: "Sleep Deficit", msg: "Your average sleep has dropped to 5.5 hours. Prioritizing rest will help you sustain your caregiving energy.", time: "6h ago" },
  { type: "info", title: "Weekly Wellbeing Check-in", msg: "Your weekly emotional wellbeing report is ready. Tap to view personal insights and self-care recommendations.", time: "1 day ago" },
];

const proAlerts = [
  { type: "warning", title: "Professional Burnout Risk Detected", msg: "Your workload intensity has been above threshold for 3 consecutive shifts. Consider coordinating with your team.", time: "30 min ago" },
  { type: "info", title: "Shift Break Reminder", msg: "You've been on shift for 4 hours straight. A short break can help maintain care quality and reduce fatigue.", time: "1h ago" },
  { type: "success", title: "Team Support Available", msg: "Your colleague Alex has marked availability for shift coverage this Saturday.", time: "3h ago" },
  { type: "warning", title: "Shift Fatigue Increasing", msg: "Your average sleep between shifts has dropped to 5.5 hours. Rest is critical for sustained clinical performance.", time: "6h ago" },
  { type: "info", title: "Weekly Performance Insights", msg: "Your weekly workload and burnout risk report is ready. Tap to view professional analytics.", time: "1 day ago" },
];

const Alerts = () => {
  const { isFamily } = useCaregiver();
  const alertsList = isFamily ? familyAlerts : proAlerts;

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-3 fade-up">
          <Bell size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-bold text-foreground">Alerts</h2>
            <p className="text-muted-foreground text-sm">
              {isFamily
                ? "Stay informed about your personal wellbeing status."
                : "Stay informed about your professional workload and fatigue levels."}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {alertsList.map((a, i) => (
            <div key={i} className={`glass-card p-5 glow-hover fade-up fade-up-delay-${(i % 4) + 1}`}>
              <div className="flex items-start gap-3">
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                  a.type === "warning" ? "bg-warning" : a.type === "success" ? "bg-success" : "bg-primary"
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{a.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{a.msg}</p>
                  <p className="text-xs text-muted-foreground mt-2">{a.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
