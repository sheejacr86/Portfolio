import { motion } from "framer-motion";
import { IMG } from "../data/content";
import { FadeUp, SectionHead, EASE } from "./motion-primitives";

const STATS = [
  { v: "1983", l: "Kalari Foundation", s: "Vallabhatta Kalari Sangam, Chavakkad, Kerala" },
  { v: "40+", l: "Years of Practice", s: "Martial arts, contemporary dance & physical performance" },
  { v: "2×", l: "National Champion", s: "Full combat Kalaripayattu winner (1990, 1997)" },
];

const PRACTICE_PILLARS = [
  {
    title: "Kalaripayattu",
    desc: "An ancient martial art of Kerala that forms the foundation of my movement practice, emphasizing discipline, agility, strength, awareness, and coordination.",
  },
  {
    title: "Contemporary Dance",
    desc: "Exploring freedom of movement, expression, improvisation, and the relationship between body and space.",
  },
  {
    title: "Choreography",
    desc: "Creating movement-based performances that bring together martial arts, dance, theatre, and storytelling.",
  },
  {
    title: "Teaching & Training",
    desc: "Sharing knowledge through classes, workshops, masterclasses, corporate training, and movement education.",
  },
  {
    title: "Movement Research",
    desc: "Continuously exploring the relationship between traditional practices and contemporary movement forms.",
  },
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
                alt="Portrait of Dil Sagar MB"
                loading="lazy"
                className="photo-grade aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/80">
                Dil Sagar MB — portrait
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
            label="About Dil Sagar"
            title={
              <>
                Movement is my language.
                <span className="italic text-gold"> Kalari is my foundation.</span>
              </>
            }
          />

          <div className="mt-10 max-w-2xl space-y-6 text-[15px] leading-relaxed text-sand sm:text-base">
            <FadeUp delay={0.1}>
              <p>
                I am Dil Sagar MB, a Kalaripayattu artist, movement practitioner, choreographer,
                contemporary dancer, actor, and teacher. My artistic journey is rooted in the ancient
                martial art of Kalaripayattu, which has shaped my understanding of movement,
                discipline, body, and expression.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p>
                Having started my Kalari training at the age of seven in Kerala, I have spent decades
                exploring the connection between martial arts, contemporary dance, theatre, and physical
                performance. My practice brings together traditional movement techniques and contemporary
                artistic expressions, creating a unique language of movement.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p>
                Over the years, I have worked with artists, dance companies, educational institutions,
                film productions, and cultural organizations in India and internationally. My work spans
                performance, choreography, teaching, movement research, workshops, and artistic
                collaborations.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <p>
                I believe movement is more than physical expression. It is a way of storytelling,
                connecting with people, exploring emotions, and discovering the possibilities of the human
                body.
              </p>
            </FadeUp>
          </div>

          <div className="mt-12 border-t border-bone/10 pt-10">
            <FadeUp delay={0.24}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">My Practice</p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PRACTICE_PILLARS.map((p, i) => (
                  <div key={p.title} className="rounded-sm border border-bone/10 bg-coal/40 p-5">
                    <h3 className="font-serif text-lg font-light text-bone">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-sand">{p.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="mt-10 border-t border-bone/10 pt-8">
            <FadeUp delay={0.28}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Artistic Philosophy</p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-sand sm:text-[15px]">
                <p>
                  My approach to movement is based on curiosity, discipline, and exploration. I believe
                  every movement carries the possibility of expression, and every body has its own language.
                </p>
                <p>
                  Through Kalari and contemporary movement, I continue to explore the boundaries between
                  martial art and dance, tradition and innovation, strength and sensitivity.
                </p>
              </div>
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
