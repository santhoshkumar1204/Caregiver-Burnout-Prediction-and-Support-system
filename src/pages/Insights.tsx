import { TrendingDown, TrendingUp, Moon, Users, Activity } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ComposedChart } from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";
import useCaregiver from "@/hooks/useCaregiver";

const weeklyData = [
  { day: "Mon", stress: 35, sleep: 7, workload: 6 },
  { day: "Tue", stress: 42, sleep: 6, workload: 8 },
  { day: "Wed", stress: 38, sleep: 6.5, workload: 7 },
  { day: "Thu", stress: 55, sleep: 5, workload: 9 },
  { day: "Fri", stress: 48, sleep: 5.5, workload: 8 },
  { day: "Sat", stress: 30, sleep: 8, workload: 4 },
  { day: "Sun", stress: 25, sleep: 8.5, workload: 3 },
];

const familyInsights = [
  { icon: Moon, title: "Sleep Drop Detected", desc: "Your sleep has decreased by 1.5 hours over the past 3 days, contributing to rising emotional fatigue from daily caregiving.", severity: "warning" },
  { icon: Activity, title: "Caregiving Responsibility Spike", desc: "Your home care hours increased 40% this week. Consider asking family members for support.", severity: "warning" },
  { icon: Users, title: "Social Isolation Risk", desc: "No family or friend interactions logged in 5 days. Reaching out to your support circle can help reduce personal stress.", severity: "error" },
  { icon: TrendingDown, title: "Weekend Recovery", desc: "Your stress levels dropped when you took personal time — maintaining breaks from caregiving duties is key.", severity: "success" },
];

const proInsights = [
  { icon: Moon, title: "Sleep Deficit Alert", desc: "Your sleep has decreased by 1.5 hours over the past 3 shifts, increasing shift fatigue and professional burnout risk.", severity: "warning" },
  { icon: Activity, title: "Workload Density Spike", desc: "Patient interaction intensity increased 40% this week. Consider coordinating with your team for task redistribution.", severity: "warning" },
  { icon: Users, title: "Team Coordination Gap", desc: "No team support interactions logged in 5 days. Engaging colleagues can help distribute clinical workload.", severity: "error" },
  { icon: TrendingDown, title: "Off-Shift Recovery", desc: "Your stress levels dropped significantly during days off — maintaining work-life boundaries sustains care quality.", severity: "success" },
];

const Insights = () => {
  const { isFamily } = useCaregiver();
  const insights = isFamily ? familyInsights : proInsights;

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl">
        <div className="fade-up">
          <h2 className="text-2xl font-bold text-foreground">Insights</h2>
          <p className="text-muted-foreground text-sm">
            {isFamily
              ? "Personalized analysis of your emotional wellbeing and caregiving patterns."
              : "AI-powered analysis of your workload patterns and professional burnout indicators."}
          </p>
        </div>

        <div className="glass-card p-6 fade-up fade-up-delay-1">
          <p className="text-sm font-semibold text-foreground mb-4">
            {isFamily ? "Stress, Sleep & Caregiving Load Trends" : "Fatigue, Sleep & Patient Load Trends"}
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
              <Bar dataKey="workload" fill="hsl(var(--primary))" opacity={0.3} radius={[4, 4, 0, 0]} name={isFamily ? "Care Hours" : "Patient Load"} />
              <Line type="monotone" dataKey="stress" stroke="hsl(var(--warning))" strokeWidth={2} dot={{ r: 3 }} name={isFamily ? "Emotional Stress" : "Shift Fatigue"} />
              <Line type="monotone" dataKey="sleep" stroke="hsl(var(--success))" strokeWidth={2} dot={{ r: 3 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {insights.map((ins, i) => (
            <details key={i} className={`glass-card p-5 glow-hover cursor-pointer fade-up fade-up-delay-${(i % 4) + 1}`}>
              <summary className="flex items-center gap-3 list-none">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  ins.severity === "warning" ? "bg-warning/10" : ins.severity === "error" ? "bg-destructive/10" : "bg-success/10"
                }`}>
                  <ins.icon size={18} className={
                    ins.severity === "warning" ? "text-warning" : ins.severity === "error" ? "text-destructive" : "text-success"
                  } />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{ins.title}</p>
                  <p className="text-xs text-muted-foreground">Click to expand</p>
                </div>
              </summary>
              <p className="text-sm text-muted-foreground mt-3 pl-13">{ins.desc}</p>
            </details>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
