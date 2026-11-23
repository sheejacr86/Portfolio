import { GALLERY } from "../data/content";
import { FadeUp, SectionHead } from "./motion-primitives";

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="border-y border-bone/10 bg-coal/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <SectionHead
          num="05"
          label="In performance"
          title={
            <>
              The stage is the witness —
              <span className="italic text-gold"> Trissur & Mamangam.</span>
            </>
          }
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3" data-testid="gallery-grid">
          {GALLERY.map((g, i) => (
            <FadeUp key={g.src} delay={Math.min((i % 3) * 0.06, 0.2)} className="mb-5 break-inside-avoid">
              <figure
                data-testid={`gallery-item-${i}`}
                className="group relative overflow-hidden rounded-sm border border-bone/10"
              >
                <img
                  src={g.src}
                  alt={g.cap}
                  loading="lazy"
                  className={`photo-grade w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0 ${g.ar} grayscale-[0.35]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone transition-transform duration-500 group-hover:translate-y-0">
                  {g.cap}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
