import logo from "@/assets/logo.png";

interface LogoFrameProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

const paddings = {
  sm: "p-1",
  md: "p-1.5",
  lg: "p-2",
};

const LogoFrame = ({ size = "md", className = "" }: LogoFrameProps) => (
  <div className={`rounded-full bg-background shadow-md border-2 border-primary/20 ${paddings[size]} ${className}`}
    style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08))" }}>
    <img src={logo} alt="HoldOn" className={`${sizes[size]} object-contain rounded-full`} />
  </div>
);

export default LogoFrame;
