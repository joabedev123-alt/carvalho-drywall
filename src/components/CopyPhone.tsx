import { useState } from "react";
import { company } from "../data/company";
import { copyText } from "../lib/sms";

type Props = {
  className?: string;
  label?: string;
  copiedLabel?: string;
};

export function CopyPhone({
  className,
  label = "Copy Phone Number",
  copiedLabel = "Phone number copied",
}: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    const ok = await copyText(company.phoneDisplay);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button type="button" className={className} onClick={onCopy}>
      <i className={`bi ${copied ? "bi-check2" : "bi-clipboard"}`} aria-hidden="true" />
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
