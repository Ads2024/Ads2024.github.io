import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export function MermaidDiagram({ chart }: { chart: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: "dark",
            securityLevel: "loose",
            fontFamily: "monospace",
        });

        const renderGraph = async () => {
            if (!ref.current) return;

            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(false);
            } catch (err) {
                console.error("Mermaid rendering failed:", err);
                setError(true);
            }
        };

        renderGraph();
    }, [chart]);

    if (error) {
        return (
            <div className="p-4 border border-red-500/20 bg-red-500/10 text-red-400 rounded-lg text-sm font-mono">
                Diagram failed to render. Please check console.
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className="mermaid-container w-full overflow-x-auto p-4 bg-black/20 rounded-lg border border-white/5"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
