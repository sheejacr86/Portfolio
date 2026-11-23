import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId, stopScroll, startScroll } from "../lib/scroll";
import { Mark, EASE } from "./motion-primitives";
import { CONTACT } from "../data/content";

const LINKS = [
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "journey", label: "Journey" },
  { id: "gallery", label: "Gallery" },
  { id: "classes", label: "Classes" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (open) {
      stopScroll();
      document.body.style.overflow = "hidden";
    } else {
      startScroll();
      document.body.style.overflow = "";
    }
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled ? "border-b border-bone/10 bg-ink/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-10">
          <button
            data-testid="nav-logo-home"
            onClick={() => go("top")}
            className="group flex items-center gap-3"
            aria-label="Kalari with Sagar — home"
          >
            <Mark className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[15deg]" />
            <span className="hidden font-serif text-lg tracking-wide text-bone sm:block">
              Kalari <span className="italic text-gold">with</span> Sagar
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-bone/70 transition-colors hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-book-btn"
              onClick={() => go("contact")}
              className="hidden rounded-full border border-gold/50 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink sm:block"
            >
              Book a workshop
            </button>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-bone/20 lg:hidden"
            >
              <span className={`h-px w-4 bg-bone transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-ink/97 px-6 pb-10 pt-28 backdrop-blur-sm"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  data-testid={`mobile-menu-link-${l.id}`}
                  onClick={() => go(l.id)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: EASE }}
                  className="border-b border-bone/10 py-4 text-left font-serif text-4xl font-light text-bone transition-colors hover:text-gold"
                >
                  <span className="mr-4 font-mono text-xs text-gold">0{i + 1}</span>
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col gap-1 font-mono text-xs text-sand"
            >
              {CONTACT.phones.map((p, i) => (
                <a key={p} href={CONTACT.phoneLinks[i]} className="py-1">{p}</a>
              ))}
              <a href={`mailto:${CONTACT.email}`} className="py-1 text-gold">{CONTACT.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
