import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  className?: string;
  index: number;
}

export function ProductCard({ title, description, category, image, link, className, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("group relative flex flex-col overflow-hidden rounded-2xl glass-card hover:border-white/20 transition-colors duration-300", className)}
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted/50">
        {/* Unsplash image loaded here */}
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
      
      <div className="flex flex-1 flex-col p-6 md:p-8 relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-white/70 backdrop-blur-sm">
            {category}
          </span>
          {link && (
            <a 
              href={link} 
              className="text-white/50 hover:text-white transition-colors p-3 -m-3 pointer-events-auto"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
        
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
            <h3 className="mb-2 text-xl font-bold text-white hover:text-white/90">
              {title}
            </h3>
          </a>
        ) : (
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-white/90">
            {title}
          </h3>
        )}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
