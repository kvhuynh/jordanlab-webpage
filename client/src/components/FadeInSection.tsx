import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: false }); // triggers when 40% visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 30,
      }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};
