import { motion } from "framer-motion";
import { FORMATS, OFFERINGS, MASTERCLASSES } from "../data/content";
import { FadeUp, SectionHead } from "./motion-primitives";

export default function Classes() {
  return (
    <section id="classes" data-testid="classes-section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <SectionHead
          num="07"
          label="Classes & workshops"
          title={
            <>
              Train with a national champion —
              <span className="italic text-gold"> in the kalari, the studio or your company.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {FORMATS.map((f, i) => (
            <FadeUp key={f.num} delay={i * 0.1} className="h-full">
              <motion.div
                data-testid={`class-card-${f.num}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="flex h-full flex-col rounded-sm border border-bone/10 bg-coal p-8 transition-colors duration-500 hover:border-gold/40"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl font-light italic text-gold/70">{f.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-terra">{f.audience}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-light leading-snug text-bone sm:text-[1.7rem]">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-sand">{f.desc}</p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-bone/10 pt-6">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[13px] text-bone/75">
                      <svg viewBox="0 0 12 12" className="mt-1 h-2 w-2 shrink-0 text-gold" aria-hidden="true">
                        <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="currentColor" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <FadeUp>
            <div className="rounded-sm border border-bone/10 bg-coal/60 p-8" data-testid="offerings-panel">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">What you can book</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {OFFERINGS.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-bone/15 px-4 py-2 text-xs text-bone/85 transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    {o}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-sand">
                Every format can be adapted — from a single masterclass to a three-month corporate
                programme, a school kalari for kids, or full choreography for stage and screen.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-sm border border-bone/10 bg-coal/60 p-8" data-testid="masterclass-panel">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Masterclasses & workshops led for
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {MASTERCLASSES.map((m) => (
                  <li key={m} className="text-[13px] leading-relaxed text-bone/75">
                    {m}
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
