import { useState } from "react";
import { CheckCircle2, Circle, Plus, Clock, Smile } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import useCaregiver from "@/hooks/useCaregiver";

const familyTasks = [
  { id: 1, text: "Give morning medication", done: true },
  { id: 2, text: "Doctor appointment at 2 PM", done: false },
  { id: 3, text: "Prepare lunch for family", done: true },
  { id: 4, text: "Physical therapy exercises with Dad", done: false },
  { id: 5, text: "Call support group for check-in", done: false },
];

const proTasks = [
  { id: 1, text: "Complete morning patient rounds", done: true },
  { id: 2, text: "Update patient care plans", done: false },
  { id: 3, text: "Medication administration — Ward B", done: true },
  { id: 4, text: "Team handover briefing at 3 PM", done: false },
  { id: 5, text: "Document shift notes", done: false },
];

const Tasks = () => {
  const { isFamily } = useCaregiver();
  const [tasks, setTasks] = useState(isFamily ? familyTasks : proTasks);
  const [newTask, setNewTask] = useState("");
  const [mood, setMood] = useState(7);
  const [careHours, setCareHours] = useState(6);

  const toggle = (id: number) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const completed = tasks.filter(t => t.done).length;
  const total = tasks.length;

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div className="fade-up">
          <h2 className="text-2xl font-bold text-foreground">
            {isFamily ? "Tasks & Routine" : "Shift Tasks & Schedule"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {isFamily
              ? "Track daily home care tasks, mood, and caregiving hours."
              : "Track shift tasks, patient workload, and professional wellbeing."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card p-5 fade-up">
            <p className="text-sm font-medium text-muted-foreground mb-3">Today's Progress</p>
            <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full gradient-primary transition-all duration-500" style={{ width: `${(completed / total) * 100}%` }} />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{completed}/{total} tasks completed</p>
          </div>

          <div className="glass-card p-5 fade-up fade-up-delay-1">
            <div className="flex items-center gap-2 mb-3">
              <Smile size={16} className="text-primary" />
              <p className="text-sm font-medium text-muted-foreground">Mood Check-in</p>
            </div>
            <input type="range" min={1} max={10} value={mood} onChange={e => setMood(+e.target.value)}
              className="w-full accent-primary" />
            <p className="text-center text-lg font-bold text-foreground mt-1">{mood}/10</p>
          </div>

          <div className="glass-card p-5 fade-up fade-up-delay-2">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} className="text-primary" />
              <p className="text-sm font-medium text-muted-foreground">
                {isFamily ? "Care Hours Today" : "Shift Hours Today"}
              </p>
            </div>
            <input type="range" min={0} max={16} value={careHours} onChange={e => setCareHours(+e.target.value)}
              className="w-full accent-primary" />
            <p className="text-center text-lg font-bold text-foreground mt-1">{careHours} hrs</p>
          </div>
        </div>

        <div className="glass-card p-6 fade-up fade-up-delay-3">
          <p className="text-sm font-semibold text-foreground mb-4">
            {isFamily ? "Care Task Checklist" : "Shift Task Checklist"}
          </p>
          <div className="flex gap-2 mb-4">
            <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === "Enter" && addTask()}
              placeholder={isFamily ? "Add a care task..." : "Add a shift task..."} className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm" />
            <button onClick={addTask} className="gradient-primary text-primary-foreground p-2.5 rounded-xl hover:opacity-90">
              <Plus size={18} />
            </button>
          </div>
          <div className="space-y-2">
            {tasks.map(t => (
              <button key={t.id} onClick={() => toggle(t.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${t.done ? "border-success/30 bg-success/5" : "border-border hover:border-primary/30"}`}>
                {t.done ? <CheckCircle2 size={18} className="text-success" /> : <Circle size={18} className="text-muted-foreground" />}
                <span className={`text-sm ${t.done ? "line-through text-muted-foreground" : "text-foreground"}`}>{t.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
