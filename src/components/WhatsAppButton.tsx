import { MessageCircle } from "lucide-react";
import { company, whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hello ${company.brand}, I would like to discuss a sourcing requirement.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nex Source Global on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#D40000] px-4 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-105 hover:bg-[#B00000]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Talk on WhatsApp</span>
    </a>
  );
}
