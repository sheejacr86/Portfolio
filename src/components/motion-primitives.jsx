import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function FadeUp({ children, delay = 0, className = "", ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function MaskedLine({ children, active = true, delay = 0, className = "" }) {
  return (
    <span className={`mask-line ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "115%" }}
        animate={active ? { y: "0%" } : { y: "115%" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function SectionHead({ num, label, title, className = "" }) {
  return (
    <div className={className}>
      <FadeUp>
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
          {num} — {label}
        </p>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.08] text-bone sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </FadeUp>
    </div>
  );
}

export function Mark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 9 L51 26 L32 55 L13 26 Z"
        fill="none"
        stroke="#C9A15C"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M32 14 V50" stroke="#EFE7DA" strokeWidth="3" strokeLinecap="round" />
      <path d="M23.5 30 H40.5" stroke="#C25E3E" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
