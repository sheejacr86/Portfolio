import { motion } from "framer-motion";
import { IMG } from "../data/content";
import { FadeUp, SectionHead, EASE } from "./motion-primitives";

const STATS = [
  { v: "1983", l: "Training since", s: "Vallabhatta Kalari Sangam, Chavakkad" },
  { v: "3×", l: "State champion", s: "Kerala Kalaripayat Association — three years in a row" },
  { v: "2×", l: "National champion", s: "Full-contact combat — consecutive years" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-5 sm:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <FadeUp>
            <motion.div
              whileHover={{ scale: 0.985 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative overflow-hidden rounded-sm border border-bone/10"
              data-testid="about-portrait"
            >
              <img
                src={IMG.portrait}
                alt="Portrait of Dil Sagar"
                loading="lazy"
                className="photo-grade aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/80">
                Dil Sagar — portrait
              </p>
            </motion.div>
            <span aria-hidden="true" className="pointer-events-none absolute -right-4 top-6 hidden select-none font-serif text-[9rem] font-light italic leading-none text-outline-faint lg:block">
              1983
            </span>
          </FadeUp>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHead
            num="01"
            label="The practice"
            title={
              <>
                A body forged in Kerala's ancient martial art,
                <span className="italic text-gold"> at home on the world's contemporary stages.</span>
              </>
            }
          />

          <div className="mt-10 max-w-2xl space-y-6 text-[15px] leading-relaxed text-sand sm:text-base">
            <FadeUp delay={0.1}>
              <p>
                Dil Sagar began Kalaripayattu in 1983 at the Vallabhatta Kalari Sangam in Chavakkad,
                Kerala, under Gurukkal Shri Sankaranarayana Menon and Gurukkal Sri C. Vishwanathan.
                As a competitor he was Kerala state champion three years in a row and won the
                National Championship in full-contact combat twice consecutively.
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p>
                In London he worked as a movement artiste with the Imlata Dance Company (1990–97),
                performing across the UK. Back in India, nearly a decade at the Attakkalari Centre
                for Movement Arts, Bangalore — as founder member and senior faculty of Kalaripayattu —
                saw him choreograph works that fused kalari with contemporary dance.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <p>
                His productions have travelled to the Venice Biennale, Munich's festival of
                contemporary dance, the Frankfurt Book Fair, JuliDans Amsterdam and Poland. He has
                performed for the Presidents of India, Brazil and South Africa, staged works at the
                NCPA Mumbai, and taught dancers, corporates, children and communities across India
                and the UK.
              </p>
            </FadeUp>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-bone/10 bg-bone/10 sm:grid-cols-3" data-testid="about-stats">
            {STATS.map((s, i) => (
              <FadeUp key={s.v} delay={0.1 + i * 0.08} className="bg-coal p-7">
                <p className="font-serif text-4xl font-light text-gold">{s.v}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone">{s.l}</p>
                <p className="mt-2 text-xs leading-relaxed text-sand">{s.s}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
