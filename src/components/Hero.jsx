import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMG, CONTACT } from "../data/content";
import { MaskedLine, EASE } from "./motion-primitives";
import { scrollToId } from "../lib/scroll";

export default function Hero({ active }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const d = active ? 0 : 999;

  return (
    <section ref={ref} id="top" data-testid="hero-section" className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.img
          src={IMG.hero}
          alt="Dil Sagar performing contemporary Kalaripayattu on stage"
          className="photo-grade h-[115%] w-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: EASE }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </motion.div>

      <span aria-hidden="true" className="pointer-events-none absolute -right-6 top-24 select-none font-mal text-[38vw] font-thin leading-none text-bone opacity-[0.05] sm:text-[26vw]">
        കളരി
      </span>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-28 sm:px-10 sm:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: d + 0.35, duration: 0.8 }}
          className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-gold sm:text-[11px]"
        >
          കളരി &nbsp;·&nbsp; Kalari with Sagar — since 1983
        </motion.p>

        <h1 className="font-serif font-medium leading-[0.88] tracking-[-0.02em]">
          <MaskedLine active={active} delay={d + 0.45}>
            <span className="text-[clamp(4.2rem,17vw,13.5rem)] text-bone">DIL</span>
          </MaskedLine>
          <MaskedLine active={active} delay={d + 0.58}>
            <span className="text-[clamp(4.2rem,17vw,13.5rem)] italic text-outline-gold">SAGAR</span>
          </MaskedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: d + 0.95, duration: 0.9, ease: EASE }}
          className="mt-7 max-w-md text-sm leading-relaxed text-bone/80 sm:text-base"
        >
          Kalaripayattu artiste, contemporary dancer and choreographer — carrying Kerala's
          ancient martial art onto contemporary stages, studios and screens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: d + 1.1, duration: 0.9, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <motion.button
            data-testid="hero-cta-work"
            onClick={() => scrollToId("works")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-gild"
          >
            Explore the work
          </motion.button>
          <motion.button
            data-testid="hero-cta-book"
            onClick={() => scrollToId("contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-bone/30 px-7 py-3.5 text-sm text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Book a workshop
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ delay: d + 1.4, duration: 1 }}
        className="relative z-10 border-t border-bone/10"
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-10">
          <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Scroll
            <span className="block h-6 w-px animate-scroll-cue bg-gold" />
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50 md:block">
            Kalaripayattu · Contemporary dance · Choreography
          </span>
          <span data-testid="hero-champion-meta" className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            3× State Champion — 2× National
          </span>
        </div>
      </motion.div>
    </section>
  );
}
