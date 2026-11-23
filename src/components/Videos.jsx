import { FadeUp, SectionHead } from "./motion-primitives";

const VIDEOS = [
  {
    id: "chandra-trained",
    title: "Chandra — choreographed & trained by Dil Sagar",
    year: "2013",
    src: "https://www.blogger.com/video.g?token=AD6v5dzkScndhzP6fgONec2qfU31uf4uL8jX9iPU8tcIPEcSX9gW52Ml8UPFuzLt40eqbPiiCLLcrlB33BhCZgQt_Kvfuzr4Zw0-SewJ_D1hPYIfhaXaiyv2bkPkqIx4MqQPB33UK9s",
  },
  {
    id: "chandra-shriya",
    title: "Chandra — with Shriya Saran",
    year: "2013",
    src: "https://www.blogger.com/video.g?token=AD6v5dx_dEF0mGmEzRsFAyLp_ECqjgM6RiifiY-R9gwFtx3AATph0Peua4emYOf5_DieOh4uv2vw3GIwCfwKkEX2vX4YsYwTafVoQwMAY6z1Jv2mxKul5Pxn3_vJfKy1Yw4VY-4EBbA",
  },
  {
    id: "sougandhya-parvam",
    title: "Sougandhya Parvam — a small part",
    year: "2017",
    src: "https://www.blogger.com/video.g?token=AD6v5dzw6mm7WbYxN811_qYszpBUj_GCiOJUnXZ74dSzDXkoWhzeXuHbM3KUFAEy1RwgPmJoSBRL8Pp74Qk7GQX6etPBDPNRMQIQgTmd8vuhZNhVahI_wb3ScmX_78Bsa8UBEOs6MyM",
  },
];

export default function Videos() {
  return (
    <section id="videos" data-testid="videos-section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <SectionHead
          num="04"
          label="In motion"
          title={
            <>
              The art, seen moving —
              <span className="italic text-gold"> film choreography & stage work.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <FadeUp key={v.id} delay={i * 0.1}>
              <figure data-testid={`video-${v.id}`} className="group">
                <div className="overflow-hidden rounded-sm border border-bone/10 bg-coal">
                  <iframe
                    src={v.src}
                    title={v.title}
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="aspect-video w-full"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg font-light leading-snug text-bone">{v.title}</span>
                  <span className="shrink-0 font-mono text-xs text-gold">{v.year}</span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
