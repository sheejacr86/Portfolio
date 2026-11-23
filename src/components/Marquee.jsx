import { MARQUEE_ITEMS } from "../data/content";

function Row({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-serif text-4xl font-light sm:px-12 sm:text-6xl ${
              i % 2 ? "italic text-gold" : "text-bone/85"
            }`}
          >
            {item}
          </span>
          <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 text-terra" aria-hidden="true">
            <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div data-testid="marquee" className="group overflow-hidden border-y border-bone/10 bg-coal/60 py-7 sm:py-9">
      <div className="flex w-max animate-marquee-x group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
