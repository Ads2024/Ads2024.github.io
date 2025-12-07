import { motion } from "framer-motion";
import { Database, Server, Code, GitBranch, Cpu, Network } from "lucide-react";

interface HeroNodeProps {
  name: string;
  title: string;
}

export function HeroNode({ name, title }: HeroNodeProps) {
  return (
    <div className="relative flex items-center justify-center py-20 md:py-32">
      {/* Connecting Lines (Static SVG background for the node) */}
      <svg className="absolute w-full h-full max-w-4xl opacity-30 pointer-events-none" viewBox="0 0 800 400">
        <motion.path 
          d="M 400 200 L 200 100" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path 
          d="M 400 200 L 600 100" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path 
          d="M 400 200 L 400 350" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Decorative Circles at endpoints */}
        <circle cx="200" cy="100" r="4" className="fill-primary" />
        <circle cx="600" cy="100" r="4" className="fill-primary" />
        <circle cx="400" cy="350" r="4" className="fill-primary" />
      </svg>

      {/* Central Node */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full glass-panel border-glow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="absolute inset-2 rounded-full border border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-8 rounded-full border border-primary/10" />
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-white text-glow mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {name}
        </motion.h1>
        <motion.div 
          className="text-primary font-mono text-sm md:text-base bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {title}
        </motion.div>
        
        {/* Floating Icons around the node */}
        <FloatingIcon icon={Database} angle={0} delay={1} />
        <FloatingIcon icon={Server} angle={60} delay={1.2} />
        <FloatingIcon icon={Code} angle={120} delay={1.4} />
        <FloatingIcon icon={GitBranch} angle={180} delay={1.6} />
        <FloatingIcon icon={Cpu} angle={240} delay={1.8} />
        <FloatingIcon icon={Network} angle={300} delay={2.0} />
      </motion.div>
    </div>
  );
}

function FloatingIcon({ icon: Icon, angle, delay }: { icon: any, angle: number, delay: number }) {
  const radius = 140; // distance from center
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute p-2 rounded-full bg-background border border-primary/30 text-primary"
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ x, y, opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
      style={{ left: "50%", top: "50%", marginLeft: -16, marginTop: -16 }} // center offset
    >
      <Icon size={16} />
    </motion.div>
  );
}
