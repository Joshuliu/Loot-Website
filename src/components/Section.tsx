import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: Props) {
  return (
    <motion.section
      id={id}
      className={`section-padding py-16 sm:py-20 ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="content-width">{children}</div>
    </motion.section>
  );
}
