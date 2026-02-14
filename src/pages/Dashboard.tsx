import { useEffect, useState } from "react";
import { Activity, Moon, Clock, Smile, Bell, ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SmartSuggestions from "@/components/dashboard/SmartSuggestions";
import DataTransparency from "@/components/dashboard/DataTransparency";
import ComingSoon from "@/components/dashboard/ComingSoon";
import QuickSupport from "@/components/dashboard/QuickSupport";
import useCaregiver from "@/hooks/useCaregiver";

const trendData = [
  { day: "Mon", score: 35 }, { day: "Tue", score: 42 },
  { day: "Wed", score: 38 }, { day: "Thu", score: 55 },
  { day: "Fri", score: 48 }, { day: "Sat", score: 30 },
  { day: "Sun", score: 25 },
];

const AnimCounter = ({ target, label }: { target: number; label: string }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dur = 1200;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [target]);
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-foreground">{val}{label === "Mood" ? "/10" : ""}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const familyAlerts = [
  { type: "warning", msg: "Consider taking a personal break — daily caregiving exhaustion trending up", time: "2h ago" },
  { type: "info", msg: "Your sister Sarah is available to help this weekend", time: "5h ago" },
  { type: "success", msg: "Great job! You logged 7 hours of sleep last night", time: "8h ago" },
];

const proAlerts = [
  { type: "warning", msg: "Workload intensity rising — shift fatigue indicators elevated", time: "2h ago" },
  { type: "info", msg: "Team member Alex can cover your Saturday shift", time: "5h ago" },
  { type: "success", msg: "Great job! You maintained balanced patient load this week", time: "8h ago" },
];

const Dashboard = () => {
  const { isFamily } = useCaregiver();
  const burnoutScore = 42;
  const getBurnoutColor = (s: number) => s < 30 ? "text-success" : s < 60 ? "text-warning" : "text-destructive";
  const getBurnoutLabel = (s: number) => s < 30 ? "Low Risk" : s < 60 ? "Moderate Risk" : "High Risk";

  const alerts = isFamily ? familyAlerts : proAlerts;

  const summaryCards = isFamily
    ? [
        { icon: Moon, label: "Sleep", value: 6, unit: "hrs", trend: "down" as const },
        { icon: Clock, label: "Care Hours", value: 8, unit: "hrs", trend: "up" as const },
        { icon: Activity, label: "Responsibility Load", value: 12, unit: "tasks", trend: "up" as const },
        { icon: Smile, label: "Mood", value: 7, unit: "", trend: "same" as const },
      ]
    : [
        { icon: Moon, label: "Sleep", value: 6, unit: "hrs", trend: "down" as const },
        { icon: Clock, label: "Shift Hours", value: 10, unit: "hrs", trend: "up" as const },
        { icon: Activity, label: "Patient Load", value: 14, unit: "patients", trend: "up" as const },
        { icon: Smile, label: "Mood", value: 7, unit: "", trend: "same" as const },
      ];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl">
        <div className="fade-up">
          <h2 className="text-2xl font-bold text-foreground">Good morning, Jane 👋</h2>
          <p className="text-muted-foreground text-sm">
            {isFamily
              ? "Here's your personal wellbeing snapshot for today."
              : "Here's your professional workload and wellbeing overview."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 flex flex-col items-center justify-center fade-up">
            <p className="text-sm font-medium text-muted-foreground mb-3">Burnout Risk Score</p>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none" stroke={burnoutScore < 30 ? "hsl(var(--success))" : burnoutScore < 60 ? "hsl(var(--warning))" : "hsl(var(--destructive))"} strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={`${burnoutScore * 2.64} 264`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-3xl font-bold ${getBurnoutColor(burnoutScore)}`}>{burnoutScore}</span>
                <span className="text-xs text-muted-foreground">/100</span>
              </div>
            </div>
            <p className={`mt-3 text-sm font-semibold ${getBurnoutColor(burnoutScore)}`}>{getBurnoutLabel(burnoutScore)}</p>
          </div>

          <div className="glass-card p-6 md:col-span-2 fade-up fade-up-delay-1">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              {isFamily ? "Weekly Caregiving Stress Trend" : "Weekly Shift Fatigue Trend"}
            </p>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up fade-up-delay-2">
          {summaryCards.map((c) => (
            <div key={c.label} className="glass-card p-5 glow-hover">
              <div className="flex items-center justify-between mb-3">
                <c.icon size={18} className="text-primary" />
                {c.trend === "up" && <ArrowUp size={14} className="text-destructive" />}
                {c.trend === "down" && <ArrowDown size={14} className="text-warning" />}
              </div>
              <AnimCounter target={c.value} label={c.label} />
              {c.unit && <p className="text-center text-xs text-muted-foreground">{c.unit}</p>}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SmartSuggestions />
          <DataTransparency />
        </div>

        <div className="glass-card p-6 fade-up fade-up-delay-3">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={18} className="text-primary" />
            <p className="text-sm font-semibold text-foreground">Recent Alerts</p>
          </div>
          <div className="space-y-3">
            {alerts.map((a, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${
                a.type === "warning" ? "border-warning/30 bg-warning/5" :
                a.type === "success" ? "border-success/30 bg-success/5" :
                "border-primary/30 bg-primary/5"
              }`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 ${
                  a.type === "warning" ? "bg-warning" : a.type === "success" ? "bg-success" : "bg-primary"
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{a.msg}</p>
                  <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ComingSoon />
      </div>

      <QuickSupport />
    </DashboardLayout>
  );
};

export default Dashboard;
