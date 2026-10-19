import type { ReactNode } from "react";
import { buildSmsHref } from "../lib/sms";

type Props = {
  message: string;
  className?: string;
  children: ReactNode;
};

export function SmsLink({ message, className, children }: Props) {
  const href = buildSmsHref(message);
  if (!href) {
    return (
      <a href="#contact" className={className}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
