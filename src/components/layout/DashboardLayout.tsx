import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Brain, Users, ListChecks, Bell, User, LogOut, Menu, X, BookOpen, MessageCircle
} from "lucide-react";
import LogoFrame from "@/components/LogoFrame";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Insights", icon: Brain, path: "/insights" },
  { title: "Support Network", icon: Users, path: "/support-network" },
  { title: "Tasks & Routine", icon: ListChecks, path: "/tasks" },
  { title: "Resources", icon: BookOpen, path: "/resources" },
  { title: "Community", icon: MessageCircle, path: "/community" },
  { title: "Alerts", icon: Bell, path: "/alerts" },
  { title: "Profile", icon: User, path: "/profile" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const NavContent = () => (
    <>
      <div className="p-4 flex items-center gap-2 border-b border-border">
        <LogoFrame size="sm" />
        {!collapsed && <span className="font-bold gradient-text text-lg">HoldOn</span>}
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}>
              <item.icon size={18} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-border">
        <Link to="/" onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-background">
      <aside className={`hidden lg:flex flex-col border-r border-border bg-card transition-all duration-300 ${collapsed ? "w-16" : "w-60"}`}>
        <NavContent />
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-64 bg-card flex flex-col shadow-2xl">
            <NavContent />
          </div>
          <div className="flex-1 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-border bg-card/80 backdrop-blur-lg flex items-center px-4 gap-4 sticky top-0 z-40">
          <button onClick={() => { if (window.innerWidth < 1024) setMobileOpen(true); else setCollapsed(!collapsed); }}
            className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground">
            <Menu size={20} />
          </button>
          <h1 className="font-semibold text-foreground text-sm">
            {navItems.find(n => n.path === location.pathname)?.title || "Dashboard"}
          </h1>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
