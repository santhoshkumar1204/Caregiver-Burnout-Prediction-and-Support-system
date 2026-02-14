import { useState } from "react";
import { User, Bell as BellIcon, Shield, Save, Stethoscope, Volume2, Clock as ClockIcon, Moon, Mail } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const professionalCategories = [
  "Hospital Nurse",
  "Home Healthcare Worker",
  "NGO Caregiver",
  "Elder Care Assistant",
  "Disability Support Worker",
  "Hospice Caregiver",
  "Volunteer Caregiver",
];

const Profile = () => {
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane@example.com");
  const [role, setRole] = useState("Family Caregiver");
  const [proCategory, setProCategory] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [alertIntensity, setAlertIntensity] = useState(50);
  const [alertFreq, setAlertFreq] = useState("moderate");
  const [quietHours, setQuietHours] = useState(false);
  const [channelPref, setChannelPref] = useState("app");

  const Toggle = ({ val, set }: { val: boolean; set: (v: boolean) => void }) => (
    <button onClick={() => set(!val)}
      className={`w-11 h-6 rounded-full transition-colors relative ${val ? "bg-primary" : "bg-muted"}`}>
      <div className={`w-5 h-5 rounded-full bg-primary-foreground shadow-sm absolute top-0.5 transition-transform ${val ? "left-5.5" : "left-0.5"}`} />
    </button>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-2xl">
        <div className="fade-up">
          <h2 className="text-2xl font-bold text-foreground">Profile</h2>
          <p className="text-muted-foreground text-sm">Manage your personal info and preferences.</p>
        </div>

        <div className="glass-card p-6 space-y-5 fade-up fade-up-delay-1">
          <div className="flex items-center gap-2 mb-2"><User size={18} className="text-primary" /> <h3 className="font-semibold text-foreground">Personal Info</h3></div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Caregiver Type</label>
              <select value={role} onChange={e => { setRole(e.target.value); if (e.target.value !== "Professional Caregiver") setProCategory(""); }}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm">
                <option>Family Caregiver</option>
                <option>Professional Caregiver</option>
              </select>
            </div>
            {role === "Professional Caregiver" && (
              <div className="fade-up">
                <label className="text-sm font-medium text-foreground block mb-1.5 flex items-center gap-1">
                  <Stethoscope size={14} className="text-primary" /> Professional Category
                </label>
                <select value={proCategory} onChange={e => setProCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm">
                  <option value="">Select your category...</option>
                  {professionalCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="glass-card p-6 space-y-4 fade-up fade-up-delay-2">
          <div className="flex items-center gap-2 mb-2"><BellIcon size={18} className="text-primary" /> <h3 className="font-semibold text-foreground">Notifications</h3></div>
          {[
            { label: "Email Notifications", val: emailNotif, set: setEmailNotif },
            { label: "Push Notifications", val: pushNotif, set: setPushNotif },
            { label: "Weekly Wellbeing Report", val: weeklyReport, set: setWeeklyReport },
          ].map(n => (
            <label key={n.label} className="flex items-center justify-between py-2 cursor-pointer">
              <span className="text-sm text-foreground">{n.label}</span>
              <Toggle val={n.val} set={n.set} />
            </label>
          ))}
        </div>

        {/* Notification Preference Controls */}
        <div className="glass-card p-6 space-y-5 fade-up fade-up-delay-3">
          <div className="flex items-center gap-2 mb-2"><Volume2 size={18} className="text-primary" /> <h3 className="font-semibold text-foreground">Notification Preferences</h3></div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Alert Intensity</label>
            <input type="range" min={0} max={100} value={alertIntensity} onChange={e => setAlertIntensity(Number(e.target.value))}
              className="w-full accent-primary" />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Gentle</span><span>Moderate</span><span>Urgent</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Alert Frequency</label>
            <select value={alertFreq} onChange={e => setAlertFreq(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm">
              <option value="low">Low — only critical alerts</option>
              <option value="moderate">Moderate — important + reminders</option>
              <option value="high">High — all notifications</option>
            </select>
          </div>

          <label className="flex items-center justify-between py-2 cursor-pointer">
            <span className="text-sm text-foreground flex items-center gap-2"><Moon size={14} /> Quiet Hours (10pm — 7am)</span>
            <Toggle val={quietHours} set={setQuietHours} />
          </label>

          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5 flex items-center gap-1"><Mail size={14} /> Preferred Channel</label>
            <select value={channelPref} onChange={e => setChannelPref(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm">
              <option value="app">In-App Notifications</option>
              <option value="email">Email</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>

        <div className="glass-card p-6 space-y-4 fade-up fade-up-delay-4">
          <div className="flex items-center gap-2 mb-2"><Shield size={18} className="text-primary" /> <h3 className="font-semibold text-foreground">Privacy</h3></div>
          <p className="text-sm text-muted-foreground">Your data is encrypted and never shared without consent. HoldOn uses privacy-first monitoring.</p>
          <button className="text-sm text-primary font-medium hover:underline">Download my data</button>
        </div>

        <button className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 glow-hover fade-up fade-up-delay-4">
          <Save size={16} /> Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
