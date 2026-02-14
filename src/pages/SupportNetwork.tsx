import { useState } from "react";
import { UserPlus, Phone, MessageCircle, Star, Trash2 } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const initialContacts = [
  { id: 1, name: "Sarah Miller", relation: "Sister", phone: "+1 555-0123", emergency: true },
  { id: 2, name: "Dr. James Lee", relation: "Physician", phone: "+1 555-0456", emergency: true },
  { id: 3, name: "Maria Garcia", relation: "Neighbor", phone: "+1 555-0789", emergency: false },
  { id: 4, name: "Tom Chen", relation: "Home Aide", phone: "+1 555-0321", emergency: false },
];

const SupportNetwork = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRelation, setNewRelation] = useState("");

  const addContact = () => {
    if (!newName) return;
    setContacts([...contacts, { id: Date.now(), name: newName, relation: newRelation, phone: "", emergency: false }]);
    setNewName(""); setNewRelation(""); setShowAdd(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center justify-between fade-up">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Support Network</h2>
            <p className="text-muted-foreground text-sm">Manage your care team and emergency contacts.</p>
          </div>
          <button onClick={() => setShowAdd(true)} className="gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:opacity-90 glow-hover">
            <UserPlus size={16} /> Add Contact
          </button>
        </div>

        {showAdd && (
          <div className="glass-card p-5 fade-up space-y-3">
            <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Contact name" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" />
            <input value={newRelation} onChange={e => setNewRelation(e.target.value)} placeholder="Relationship" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" />
            <div className="flex gap-2">
              <button onClick={addContact} className="gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold">Add</button>
              <button onClick={() => setShowAdd(false)} className="border border-border px-4 py-2 rounded-xl text-sm">Cancel</button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <div key={c.id} className={`glass-card p-5 glow-hover fade-up fade-up-delay-${(i % 4) + 1}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm flex items-center gap-1">
                      {c.name} {c.emergency && <Star size={12} className="text-warning fill-warning" />}
                    </p>
                    <p className="text-xs text-muted-foreground">{c.relation}</p>
                  </div>
                </div>
                <button onClick={() => setContacts(contacts.filter(x => x.id !== c.id))} className="text-muted-foreground hover:text-destructive transition-colors p-1">
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-xs font-medium hover:bg-muted transition-colors">
                  <Phone size={12} /> Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-xs font-medium hover:bg-muted transition-colors">
                  <MessageCircle size={12} /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportNetwork;
