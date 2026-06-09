import { useEffect, useState } from "react";
import { Phone, X, Wifi } from "lucide-react";

export function SupportPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show after 1 second
    const t = setTimeout(() => {
      console.log("SupportPopup opening...");
      setOpen(true);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-popup-title"
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={close}
      />

      {/* Popup Content */}
      <div className="relative animate-pop-in w-full max-w-lg bg-card border border-primary/40 rounded-md shadow-2xl overflow-hidden z-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-red" />
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-black/60 hover:bg-primary text-foreground transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 md:p-10 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary grid place-items-center shadow-glow-red animate-pulse-glow">
            <Wifi className="w-7 h-7 text-primary-foreground" />
          </div>

          <h2
            id="support-popup-title"
            className="font-display text-4xl md:text-5xl mt-6 tracking-wide"
          >
            Internet or Cable <span className="text-primary">Not Working?</span>
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Get instant help for slow internet, outages, setup issues, or cable problems.
          </p>

          <a
            href="tel:+18884786124"
            className="mt-7 inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-sm rounded-sm shadow-glow-red hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" /> (888) 478-6124
          </a>

          <p className="mt-5 text-xs text-muted-foreground/80">
            Quick assistance &nbsp;•&nbsp; No forms &nbsp;•&nbsp; Talk to a real agent
          </p>
        </div>
      </div>
    </div>
  );
}
