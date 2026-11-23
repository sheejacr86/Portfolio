import { CONTACT } from "../data/content";
import { Mark } from "./motion-primitives";
import { scrollToId } from "../lib/scroll";

const LINKS = ["about", "works", "videos", "journey", "gallery", "classes", "contact"];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-14">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <button data-testid="footer-logo" onClick={() => scrollToId("top")} className="flex items-center gap-3">
            <Mark className="h-10 w-10" />
            <span className="font-serif text-xl text-bone">
              Kalari <span className="italic text-gold">with</span> Sagar
            </span>
          </button>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {LINKS.map((l) => (
              <button
                key={l}
                data-testid={`footer-link-${l}`}
                onClick={() => scrollToId(l)}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand transition-colors hover:text-gold"
              >
                {l}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-bone/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <span data-testid="footer-copyright">© {new Date().getFullYear()} Dil Sagar — Kalari with Sagar</span>
          <span>Photographs from the artist's archive · kalariwithsagar.blogspot.com</span>
        </div>
      </div>
    </footer>
  );
}
