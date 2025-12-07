import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BlueprintWrapperProps {
  children: ReactNode;
}

export function BlueprintWrapper({ children }: BlueprintWrapperProps) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground bg-grid-pattern relative overflow-x-hidden font-sans selection:bg-primary/30 selection:text-primary-foreground">
      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)] z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-10 left-10 w-32 h-32 border border-primary/10 rounded-full opacity-20 pointer-events-none animate-pulse" />
      <div className="fixed bottom-20 right-20 w-64 h-64 border border-secondary/10 rounded-full opacity-20 pointer-events-none" />
    </div>
  );
}
