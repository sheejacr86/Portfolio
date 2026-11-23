import { JOURNEY } from "../data/content";
import { FadeUp, SectionHead } from "./motion-primitives";

export default function Journey() {
  return (
    <section id="journey" data-testid="journey-section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <SectionHead
          num="06"
          label="The journey"
          title={
            <>
              From the kalari floor in Chavakkad
              <span className="italic text-gold"> to the Biennale in Venice.</span>
            </>
          }
        />

        <div className="mt-16 border-t border-bone/10">
          {JOURNEY.map((j, i) => (
            <FadeUp key={j.year + j.title} delay={Math.min(i * 0.03, 0.2)}>
              <div
                data-testid={`journey-entry-${j.year}`}
                className="group grid grid-cols-1 gap-2 border-b border-bone/10 py-8 transition-colors duration-500 hover:bg-bone/[0.02] sm:grid-cols-[9rem_1fr] sm:gap-10"
              >
                <span className="font-mono text-xs tracking-widest text-terra sm:pt-2 sm:text-sm">
                  {j.year}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-light text-bone transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                    {j.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sand">{j.text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
