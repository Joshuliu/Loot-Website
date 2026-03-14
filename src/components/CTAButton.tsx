import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
}

export default function CTAButton({ to, href, children, variant = "primary", size = "default" }: Props) {
  const base = "inline-flex items-center justify-center font-medium rounded-xl transition-all";
  const sizes = size === "lg" ? "h-12 px-8 text-base" : "h-10 px-5 text-sm";
  const variants =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-native-sm hover:shadow-native-md hover:scale-[1.02]"
      : "bg-muted text-foreground shadow-native-sm hover:shadow-native-md";

  const cls = `${base} ${sizes} ${variants}`;

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.span>
  );

  if (href) return <a href={href} className="inline-block">{inner}</a>;
  if (to) return <Link to={to} className="inline-block">{inner}</Link>;
  return inner;
}
