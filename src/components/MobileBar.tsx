import { generalSms } from "../data/company";
import { SmsLink } from "./SmsLink";

export function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#000308]/98 px-3 pt-2.5 backdrop-blur-md supports-[padding:max(0px)]:pb-[max(0.55rem,env(safe-area-inset-bottom))] lg:hidden"
      style={{ paddingBottom: "max(0.55rem, env(safe-area-inset-bottom))" }}
    >
      <SmsLink message={generalSms} className="btn-inverse min-h-12 w-full text-sm font-medium">
        <i className="bi bi-chat-left-text" aria-hidden="true" />
        Text Us
      </SmsLink>
    </div>
  );
}
