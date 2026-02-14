import stressImg from "@/assets/stress.png";

const Awareness = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <img src={stressImg} alt="Burnout Awareness" className="w-full max-w-lg rounded-2xl shadow-lg" />
        </div>

        <div className="space-y-6 fade-up fade-up-delay-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Caregiver Burnout is <span className="text-destructive">Real</span>
          </h2>

          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-foreground mb-1">🔥 40-70% of caregivers</h3>
              <p className="text-sm text-muted-foreground">experience clinically significant symptoms of depression and burnout.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-foreground mb-1">⏰ Early Intervention Matters</h3>
              <p className="text-sm text-muted-foreground">Detecting burnout early reduces health risks by up to 60%.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-foreground mb-1">🤝 Support Systems Work</h3>
              <p className="text-sm text-muted-foreground">Caregivers with activated support networks report 3x better outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Awareness;
