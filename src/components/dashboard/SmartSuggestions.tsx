import { Lightbulb, Coffee, RotateCcw, TrendingDown, Smile } from "lucide-react";
import useCaregiver from "@/hooks/useCaregiver";

const familySuggestions = [
  { icon: Coffee, text: "Take a 15-minute personal break — you've been caregiving for 4 hours straight.", color: "text-warning" },
  { icon: RotateCcw, text: "Consider shifting morning care tasks to evening — your energy peaks later in the day.", color: "text-primary" },
  { icon: TrendingDown, text: "Your caregiving responsibility load is 30% higher than last week. Ask family for help with 2 tasks.", color: "text-destructive" },
  { icon: Smile, text: "Your mood improved after weekend rest. Prioritize personal time on Saturdays.", color: "text-success" },
];

const proSuggestions = [
  { icon: Coffee, text: "Take a 15-minute break — you've been on shift for 4 hours. Rest sustains care quality.", color: "text-warning" },
  { icon: RotateCcw, text: "Consider adjusting your shift schedule — your performance peaks during afternoon hours.", color: "text-primary" },
  { icon: TrendingDown, text: "Patient load is 30% higher than last week. Coordinate with your team to redistribute tasks.", color: "text-destructive" },
  { icon: Smile, text: "Your mood improved on days off. Maintaining work-life boundaries supports long-term sustainability.", color: "text-success" },
];

const SmartSuggestions = () => {
  const { isFamily } = useCaregiver();
  const suggestions = isFamily ? familySuggestions : proSuggestions;

  return (
    <div className="glass-card p-6 fade-up fade-up-delay-2">
      <div className="flex items-center gap-2 mb-1">
        <Lightbulb size={18} className="text-primary" />
        <p className="text-sm font-semibold text-foreground">Smart Suggestions</p>
      </div>
      <p className="text-xs text-muted-foreground mb-4 italic">Non-clinical guidance based on your patterns</p>
      <div className="space-y-3">
        {suggestions.map((s, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <s.icon size={16} className={`${s.color} mt-0.5 shrink-0`} />
            <p className="text-sm text-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartSuggestions;
