import { Link } from "react-router-dom";
import { ReactNode } from "react";

export default function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-primary hover:underline underline-offset-2">
      {children}
    </Link>
  );
}
