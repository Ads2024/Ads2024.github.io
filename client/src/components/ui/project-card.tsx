import { motion } from "framer-motion";
import { Github, ExternalLink, BarChart3 } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
    repo: string;
    delay?: number;
}

export function ProjectCard({
    title,
    description,
    tech,
    link,
    repo,
    delay = 0,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative h-full"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500" />

            <div className="relative h-full flex flex-col justify-between bg-background border border-white/10 p-6 rounded-xl hover:border-primary/40 transition-colors duration-300">
                <div>
                    <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs">
                        <BarChart3 size={14} />
                        <span>ANALYTICS_MODULE</span>
                    </div>

                    <h3 className="text-xl font-bold font-mono text-white mb-3 group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
                        {description}
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-300 border border-white/5"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors text-xs font-mono font-bold"
                        >
                            <ExternalLink size={14} />
                            LIVE_DEMO
                        </a>
                        <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                            title="View Source"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
