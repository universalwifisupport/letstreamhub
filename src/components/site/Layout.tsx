import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SupportPopup } from "./SupportPopup";
import { Disclaimer } from "./Disclaimer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary/10 py-1 text-center text-[10px] uppercase tracking-widest text-primary border-b border-primary/20">
        Independent service assistance platform. Not affiliated with any provider.
      </div>
      <Header />
      <main className="pt-20">{children}</main>
      <Disclaimer />
      <Footer />
      <SupportPopup />
    </div>
  );
}
