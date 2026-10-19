import { generalSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#000308]/96 px-3 pt-2.5 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.65rem + env(safe-area-inset-bottom))" }}
    >
      <SmsLink message={generalSms} className="btn-inverse min-h-11 w-full text-sm">
        <i className="bi bi-chat-left-text" aria-hidden="true" />
        Text Us
      </SmsLink>
    </div>
  );
}
