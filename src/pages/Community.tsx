import { useState } from "react";
import { MessageCircle, ThumbsUp, HelpCircle, ChevronDown } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const discussions = [
  { author: "Maria S.", time: "2h ago", msg: "How do you manage guilt when taking a day off from caring for your parent?", likes: 12, replies: 5, tag: "Emotional" },
  { author: "James K.", time: "4h ago", msg: "Found a great app for medication reminders — happy to share if anyone's interested.", likes: 8, replies: 3, tag: "Tips" },
  { author: "Aisha R.", time: "1d ago", msg: "Just completed my first month as a hospice caregiver. It's tough but rewarding. AMA!", likes: 24, replies: 11, tag: "Experience" },
  { author: "Tom L.", time: "1d ago", msg: "Any advice for talking to siblings about sharing caregiving responsibilities?", likes: 15, replies: 7, tag: "Support" },
];

const faqs = [
  { q: "Is this a medical support platform?", a: "No. HoldOn provides wellbeing monitoring and peer support. For medical advice, please consult a healthcare professional." },
  { q: "Who can see my posts?", a: "Community posts are visible to other HoldOn caregivers only. Your identity can be kept anonymous if you prefer." },
  { q: "How do I report inappropriate content?", a: "Use the flag icon on any post. Our moderation team reviews reports within 24 hours." },
];

const Community = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div className="fade-up">
          <h2 className="text-2xl font-bold text-foreground">Community Support</h2>
          <p className="text-muted-foreground text-sm">Connect with fellow caregivers, share experiences, and find encouragement.</p>
        </div>

        <div className="space-y-4">
          {discussions.map((d, i) => (
            <div key={i} className={`glass-card p-5 glow-hover fade-up fade-up-delay-${(i % 4) + 1}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {d.author.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{d.author}</span>
                  <span className="text-xs text-muted-foreground">{d.time}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{d.tag}</span>
              </div>
              <p className="text-sm text-foreground mb-3">{d.msg}</p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors">
                  <ThumbsUp size={14} /> {d.likes}
                </button>
                <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors">
                  <MessageCircle size={14} /> {d.replies} replies
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 fade-up fade-up-delay-3">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle size={18} className="text-primary" />
            <h3 className="font-semibold text-foreground">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                  {f.q}
                  <ChevronDown size={16} className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground animate-fade-in">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
