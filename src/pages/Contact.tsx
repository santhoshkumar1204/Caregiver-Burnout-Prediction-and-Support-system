import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Send, Building2, CalendarCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("general");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="fade-up">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact <span className="gradient-text">Us</span></h1>
            <p className="text-muted-foreground mb-8">
              Have questions, feedback, or want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 fade-up fade-up-delay-1">
            <div className="glass-card p-5 flex items-center gap-3">
              <Mail size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">support@holdon.care</p>
              </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-3">
              <Building2 size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Organizations</p>
                <p className="text-xs text-muted-foreground">partners@holdon.care</p>
              </div>
            </div>
            <div className="glass-card p-5 flex items-center gap-3">
              <CalendarCheck size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Demo</p>
                <p className="text-xs text-muted-foreground">Request a walkthrough</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="glass-card p-8 text-center fade-up">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 fade-up fade-up-delay-2">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Inquiry Type</label>
                <select value={inquiryType} onChange={e => setInquiryType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm">
                  <option value="general">General Inquiry</option>
                  <option value="organization">Organization Partnership</option>
                  <option value="demo">Request a Demo</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" placeholder="you@example.com" />
              </div>
              {inquiryType === "organization" && (
                <div className="fade-up">
                  <label className="text-sm font-medium text-foreground block mb-1.5">Organization Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm" placeholder="Your organization" />
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                <textarea required rows={5} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm resize-none" placeholder="How can we help?" />
              </div>
              <button type="submit" className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 glow-hover">
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
