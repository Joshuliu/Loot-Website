import { ReactNode } from "react";

export default function AnswerCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-muted rounded-xl p-8">
      <div className="text-lg font-medium tracking-tight text-foreground max-w-[65ch]">
        {children}
      </div>
    </div>
  );
}
