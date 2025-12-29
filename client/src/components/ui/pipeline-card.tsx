import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch, Maximize2, X } from "lucide-react";
import { MermaidDiagram } from "./mermaid-diagram";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface PipelineCardProps {
    title: string;
    description: string;
    tech: string[];
    repo: string;
    mermaid: string;
    delay?: number;
}



export function PipelineCard({
    title,
    description,
    tech,
    repo,
    mermaid,
    delay = 0,
}: PipelineCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="w-full relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-background rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />

            <div className="relative border border-primary/20 bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm">
                                <GitBranch size={16} />
                                <span>PIPELINE_ARCHITECTURE</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-4">
                                {title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {tech.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary/80"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary rounded-lg transition-colors group/link w-fit"
                            >
                                <Github size={18} />
                                <span className="font-mono text-sm font-bold">VIEW_SOURCE</span>
                                <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>

                            {/* Zoom Trigger Button */}
                            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                <DialogTrigger asChild>
                                    <button
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary rounded-lg transition-colors"
                                        aria-label="Expand Diagram"
                                    >
                                        <Maximize2 size={18} />
                                        <span className="font-mono text-sm font-bold">EXPAND</span>
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-[95vw] h-[90vh] bg-white border-none p-0 overflow-hidden flex flex-col">
                                    <DialogTitle className="sr-only">Architecture Diagram - {title}</DialogTitle>

                                    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                                        <div className="flex items-center gap-2">
                                            <GitBranch size={16} className="text-primary" />
                                            <span className="font-mono text-sm text-gray-900 font-bold">{title}</span>
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-900 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-[url('/grid.svg')] bg-fixed bg-white">
                                        <div className="min-w-[1000px] w-full bg-white p-4 rounded-lg shadow-sm">
                                            <MermaidDiagram chart={mermaid} />
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <div className="lg:col-span-2 min-h-[400px] flex flex-col">
                        <div className="flex-1 border border-white/5 rounded-lg bg-white p-2 overflow-hidden shadow-inner relative group/diagram">
                            {/* Overlay for Click-to-Expand Hint */}
                            <div
                                className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover/diagram:opacity-100 transition-opacity duration-300 cursor-pointer"
                                onClick={() => setIsOpen(true)}
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-white font-mono text-sm">
                                    <Maximize2 size={16} />
                                    <span>CLICK_TO_EXPAND</span>
                                </div>
                            </div>
                            <MermaidDiagram chart={mermaid} />
                        </div>
                        <p className="text-center text-xs text-slate-500 font-mono mt-2 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            LIVE_ARCHITECTURE_RENDER
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
