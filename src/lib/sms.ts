import { company } from "../data/company";

export function hasPhone() {
  return Boolean(company.phoneE164);
}

/**
 * Builds an sms: link that opens the device messaging app.
 * iPhone and iPad use `&body=`. Other devices use `?body=`.
 */
export function buildSmsHref(message: string): string | null {
  if (!company.phoneE164) return null;
  const body = encodeURIComponent(message);
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const iOS = /iPhone|iPad|iPod/i.test(ua);
  const iPadOS =
    typeof navigator !== "undefined" &&
    navigator.platform === "MacIntel" &&
    navigator.maxTouchPoints > 1;
  const joiner = iOS || iPadOS ? "&" : "?";
  return `sms:${company.phoneE164}${joiner}body=${body}`;
}

export async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  }
}
