import { MailIcon } from "lucide-react";

export default function ContactButton() {
  return (
    <>
      <button
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-background transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
        onClick={() => {
          // redirect to mailto link
          window.location.href = "mailto:ahirchirag396@gmail.com";
        }}
      >
        <MailIcon className="h-5 w-5 sm:h-5 sm:w-5 lg:h-5 lg:w-5" />
        <span className="text-lg font-semibold sm:text-lg lg:text-lg">
          Send Message
        </span>
      </button>
    </>
  );
}
