import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechCardProps {
  title: string;
  subtitle?: string;
  items?: string[];
  type?: "server" | "database" | "terminal";
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

export function TechCard({ title, subtitle, items, type = "server", className, delay = 0, children }: TechCardProps) {
  return (
    <motion.div
      className={cn("glass-panel rounded-lg p-0 overflow-hidden flex flex-col h-full", className)}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Header Bar */}
      <div className="bg-muted/50 border-b border-white/5 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${type === 'server' ? 'bg-green-500' : type === 'database' ? 'bg-blue-500' : 'bg-orange-500'}`} />
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{type}_NODE</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1 font-sans">{title}</h3>
        {subtitle && <div className="text-sm text-primary mb-4 font-mono">{subtitle}</div>}
        
        {items && items.length > 0 && (
          <ul className="space-y-2 mt-auto">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="text-primary/50 mt-1">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* Footer Status Line */}
      <div className="px-4 py-1 bg-black/20 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>STATUS: ONLINE</span>
        <span>ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
      </div>
    </motion.div>
  );
}
