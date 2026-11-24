import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORKS, ARTISTIC_PRODUCTIONS, COLLABORATIONS } from "../data/content";
import { downloadCV } from "../data/cv";
import { FadeUp, SectionHead, EASE } from "./motion-primitives";

export default function Works() {
  const [open, setOpen] = useState(null);

  return (
    <section id="works" data-testid="works-section" className="border-y border-bone/10 bg-coal/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHead
            num="03"
            label="Works"
            title={
              <>
                A journey through movement,
                <span className="italic text-gold"> performance, and choreography.</span>
              </>
            }
          />
          <FadeUp delay={0.15} className="shrink-0 pb-1">
            <motion.button
              data-testid="cv-download-btn"
              onClick={downloadCV}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full border border-gold/50 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M8 2v8M4.5 7 8 10.5 11.5 7M2.5 12.5v1.5h11v-1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download CV (PDF)
            </motion.button>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-sand sm:text-base">
            My work explores the intersection of Kalaripayattu, contemporary dance, theatre, cinema,
            and physical expression. From stage productions and site-specific performances to film
            choreography and movement training, each project represents a different exploration of
            the body and its expressive possibilities.
          </p>
        </FadeUp>

        <div className="mt-14 border-t border-bone/10">
          {WORKS.map((w, i) => {
            const isOpen = open === w.id;
            return (
              <FadeUp key={w.id} delay={Math.min(i * 0.04, 0.2)}>
                <div className={`border-b border-bone/10 transition-colors duration-500 ${isOpen ? "bg-bone/[0.03]" : ""}`}>
                  <button
                    data-testid={`work-row-${w.id}`}
                    onClick={() => setOpen(isOpen ? null : w.id)}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 text-left sm:grid-cols-[3rem_1fr_auto_7rem] sm:gap-8 sm:py-8"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs text-terra">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-serif text-2xl font-light leading-tight transition-all duration-400 group-hover:translate-x-2 sm:text-4xl lg:text-5xl ${
                        isOpen ? "italic text-gold" : "text-bone group-hover:text-gold group-hover:italic"
                      }`}
                    >
                      {w.title}
                    </span>
                    <span className="hidden max-w-[16rem] text-right font-mono text-[10px] uppercase tracking-[0.2em] text-sand sm:block">
                      {w.company}
                    </span>
                    <span className="text-right font-mono text-xs text-gold">{w.year}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        data-testid={`work-detail-${w.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-8 pb-10 pl-0 pr-2 sm:pl-[5.5rem] md:grid-cols-2">
                          <div>
                            <p className="max-w-xl text-sm leading-relaxed text-sand sm:text-[15px]">{w.note}</p>
                            <p className="mt-5 font-mono text-[10px] uppercase leading-loose tracking-[0.2em] text-gold/80">
                              {w.venues}
                            </p>
                          </div>
                          {w.image && (
                            <div className="overflow-hidden rounded-sm border border-bone/10">
                              <img
                                src={w.image}
                                alt={`${w.title} — ${w.venues}`}
                                loading="lazy"
                                className="photo-grade aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="rounded-sm border border-bone/10 bg-coal/60 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Artistic Productions</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {ARTISTIC_PRODUCTIONS.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-bone/15 px-4 py-1.5 font-serif text-sm italic text-bone/90"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-sand">
                Each work reflects my ongoing exploration of movement, culture, martial arts,
                contemporary performance, and storytelling.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-sm border border-bone/10 bg-coal/60 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Collaborations & Performances</p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {COLLABORATIONS.map((c) => (
                  <li key={c} className="text-xs leading-relaxed text-bone/75">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
