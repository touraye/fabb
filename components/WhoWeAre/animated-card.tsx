'use client';
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCardProps {
    children: React.ReactNode;
    id: number;
  }
  
  export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, id }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  
    return (
      <div 
        ref={ref}
        style={{
          transform: isInView ? "none" : `translateX(${id % 2 === 0 ? '-' : ''}50px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        className="w-full"
      >
        {children}
      </div>
    );
  };