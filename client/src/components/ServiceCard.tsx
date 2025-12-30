import { motion } from "framer-motion";
import { Brain, Zap, Rocket, Bot, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Rocket,
  Bot
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

export function ServiceCard({ title, description, iconName, index }: ServiceCardProps) {
  const Icon = icons[iconName] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
