import { useState } from "react";
import { BookOpen, Heart, Dumbbell, Briefcase, Bookmark, BookmarkCheck } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const categories = ["All", "Emotional Support", "Physical Care", "Professional Caregiving"];

const resources = [
  { title: "5 Minute Breathing Exercise", cat: "Emotional Support", desc: "A quick guided breathing technique to reduce stress between caregiving tasks.", icon: Heart },
  { title: "Managing Compassion Fatigue", cat: "Emotional Support", desc: "Understanding the signs and coping with emotional exhaustion as a caregiver.", icon: Heart },
  { title: "Stretches for Caregivers", cat: "Physical Care", desc: "Simple stretches to ease tension from lifting, bending, and long hours of physical care.", icon: Dumbbell },
  { title: "Sleep Hygiene for Shift Workers", cat: "Physical Care", desc: "Tips for better sleep quality when your schedule is unpredictable.", icon: Dumbbell },
  { title: "Setting Boundaries at Work", cat: "Professional Caregiving", desc: "How to maintain professional boundaries while providing compassionate care.", icon: Briefcase },
  { title: "Peer Support Best Practices", cat: "Professional Caregiving", desc: "Building effective support networks within your care team.", icon: Briefcase },
  { title: "Guided Break Suggestions", cat: "Emotional Support", desc: "Structured micro-breaks designed to recharge during long caregiving shifts.", icon: Heart },
  { title: "Nutrition for Energy", cat: "Physical Care", desc: "Quick, healthy meal ideas that sustain energy throughout demanding care days.", icon: Dumbbell },
];

const Resources = () => {
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);

  const filtered = filter === "All" ? resources : resources.filter(r => r.cat === filter);
  const toggleSave = (title: string) => setSaved(s => s.includes(title) ? s.filter(t => t !== title) : [...s, title]);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl">
        <div className="fade-up">
          <h2 className="text-2xl font-bold text-foreground">Wellness Resources</h2>
          <p className="text-muted-foreground text-sm">Curated tips, guides, and support content for caregivers.</p>
        </div>

        <div className="flex flex-wrap gap-2 fade-up fade-up-delay-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((r, i) => (
            <div key={r.title} className={`glass-card p-5 glow-hover fade-up fade-up-delay-${(i % 4) + 1}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <r.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.title}</p>
                    <span className="text-xs text-primary/70">{r.cat}</span>
                    <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
                  </div>
                </div>
                <button onClick={() => toggleSave(r.title)} className="text-primary hover:scale-110 transition-transform shrink-0">
                  {saved.includes(r.title) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
