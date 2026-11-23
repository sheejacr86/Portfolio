import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let v = 0;
    const t = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 8));
      setN(v);
      if (v >= 100) {
        clearInterval(t);
        setTimeout(onComplete, 400);
      }
    }, 55);
    return () => clearInterval(t);
  }, [onComplete]);

  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-mal text-7xl font-thin text-gold sm:text-8xl"
      >
        കളരി
      </motion.span>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 font-mono text-[10px] uppercase tracking-[0.5em] text-bone/70"
      >
        Kalari with Sagar
      </motion.p>
      <span className="absolute bottom-8 right-8 font-mono text-xs text-gold tabular-nums" data-testid="preloader-counter">
        {String(n).padStart(3, "0")}
      </span>
    </motion.div>
  );
}
