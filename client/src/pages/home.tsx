import { BlueprintWrapper } from "@/components/layout/BlueprintWrapper";
import { HeroNode } from "@/components/ui/hero-node";
import { TechCard } from "@/components/ui/tech-card";
import { RESUME_DATA } from "@/lib/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Terminal, Database, Cloud, Layout, Briefcase, GraduationCap, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experienceRef = useRef(null);
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end end"]
  });
  
  const experienceLineHeight = useTransform(experienceProgress, [0, 1], ["0%", "100%"]);

  return (
    <BlueprintWrapper>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_10px_var(--color-primary)]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Navigation / Header */}
        <header className="fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-40 bg-background/80 backdrop-blur-sm border-b border-white/5">
          <div className="font-mono text-sm text-primary flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            SYSTEM_ONLINE
          </div>
          <div className="flex gap-4">
            <SocialLink href={RESUME_DATA.socials.github} icon={Github} label="GH" />
            <SocialLink href={RESUME_DATA.socials.linkedin} icon={Linkedin} label="LI" />
            <SocialLink href={`mailto:${RESUME_DATA.socials.email}`} icon={Mail} label="EM" />
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center relative">
          <HeroNode name={RESUME_DATA.name} title={RESUME_DATA.title} />
          
          <motion.div 
            className="text-center max-w-2xl mx-auto mt-8 text-slate-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p>{RESUME_DATA.summary}</p>
          </motion.div>

          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to initialize</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
          </motion.div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 relative">
          <SectionHeader title="TECHNICAL_CAPABILITIES" icon={Terminal} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCard 
              title="Data Modeling" 
              type="database" 
              items={RESUME_DATA.skills.dataModeling} 
              delay={0.1}
            />
            <TechCard 
              title="Platforms" 
              type="server" 
              items={RESUME_DATA.skills.platforms} 
              delay={0.2}
            />
            <TechCard 
              title="Cloud Architecture" 
              type="server" 
              items={RESUME_DATA.skills.cloud} 
              delay={0.3}
            />
            <TechCard 
              title="Languages & Tools" 
              type="terminal" 
              items={RESUME_DATA.skills.languagesTools} 
              delay={0.4}
            />
            <TechCard 
              title="Data Engineering" 
              type="database" 
              items={RESUME_DATA.skills.dataEngineering} 
              delay={0.5}
            />
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 relative" ref={experienceRef}>
          <SectionHeader title="SYSTEM_LOGS // EXPERIENCE" icon={Briefcase} />
          
          <div className="relative ml-4 md:ml-12 pl-8 md:pl-12 space-y-12">
            {/* Background Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20" />
            
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-0 top-0 w-px bg-primary shadow-[0_0_10px_var(--color-primary)] origin-top"
              style={{ height: experienceLineHeight }}
            />

            {RESUME_DATA.experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_var(--color-primary)] z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                
                <TechCard 
                  title={job.role} 
                  subtitle={`${job.company} | ${job.period}`}
                  items={job.highlights}
                  type="server"
                  className="w-full"
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 mb-20">
          <SectionHeader title="KERNEL_UPDATES // EDUCATION" icon={GraduationCap} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESUME_DATA.education.map((edu, index) => (
              <TechCard 
                key={index}
                title={edu.degree} 
                subtitle={edu.institution}
                type="database"
                delay={index * 0.1}
              >
                <div className="flex justify-between items-center text-sm text-slate-400 mt-2">
                  <span>{edu.year}</span>
                  {edu.note && <span className="text-primary">{edu.note}</span>}
                </div>
              </TechCard>
            ))}
          </div>
        </section>
        
        <footer className="py-8 text-center text-slate-600 text-sm font-mono border-t border-white/5">
          <p>SYSTEM_ID: ADAM_M_PORTFOLIO_V1.0 // ENGINEERED WITH REACT + TAILWIND</p>
        </footer>
      </div>
    </BlueprintWrapper>
  );
}

function SectionHeader({ title, icon: Icon }: { title: string, icon: any }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-mono text-white tracking-tight">
        <span className="text-primary mr-2">{">"}</span>
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4" />
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
    >
      <Icon size={18} />
      <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-block">
        {label}
      </span>
    </a>
  );
}
