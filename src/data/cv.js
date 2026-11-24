import { jsPDF } from "jspdf";
import { CONTACT } from "./content";

const C = {
  ink: [12, 10, 8],
  coal: [22, 17, 9],
  gold: [201, 161, 92],
  terra: [194, 94, 62],
  bone: [245, 240, 231],
  sand: [166, 147, 123],
  white: [255, 255, 255],
};

export function downloadCV() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 18;
  const CW = W - M * 2;
  let y = 0;

  const footer = () => {
    doc.setFillColor(...C.coal);
    doc.rect(0, H - 10, W, 10, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...C.sand);
    doc.text(
      `Dil Sagar MB — ${CONTACT.phones[0]} · ${CONTACT.email} · ${CONTACT.website}`,
      W / 2,
      H - 4,
      { align: "center" }
    );
  };

  const newPage = () => {
    footer();
    doc.addPage();
    y = M;
  };

  const space = (need) => {
    if (y + need > H - 16) newPage();
  };

  const h2 = (t) => {
    space(18);
    y += 9;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...C.gold);
    doc.text(t.toUpperCase(), M, y);
    y += 2;
    doc.setDrawColor(...C.gold);
    doc.setLineWidth(0.4);
    doc.line(M, y, M + 14, y);
    doc.setDrawColor(...[226, 217, 200]);
    doc.setLineWidth(0.2);
    doc.line(M + 14, y, W - M, y);
    y += 6;
  };

  const item = (lead, lines, indent = 0) => {
    const x = M + indent;
    space(6 + lines.length * 4.4);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...C.ink);
    doc.text(lead, x, y);
    y += 4.6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...[70, 60, 48]);
    lines.forEach((l) => {
      const wrapped = doc.splitTextToSize(l, CW - indent - 2);
      wrapped.forEach((w) => {
        space(4.4);
        doc.text(w, x, y);
        y += 4.2;
      });
    });
    y += 2.2;
  };

  // Header band
  doc.setFillColor(...C.ink);
  doc.rect(0, 0, W, 46, "F");
  doc.setFillColor(...C.gold);
  doc.rect(0, 46, W, 1.2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...C.bone);
  doc.text("DIL SAGAR MB", M, 20);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...C.gold);
  doc.text("Kalaripayattu Artist · Movement Practitioner · Choreographer", M, 28);
  doc.setFontSize(8.5);
  doc.setTextColor(...C.sand);
  doc.text("Kerala, India   |   sagarkalari.co.in", M, 36);
  doc.text(`${CONTACT.phones[0]}   |   ${CONTACT.email}   |   kalariwithsagar.blogspot.com`, M, 42);
  y = 58;

  // Profile
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...[60, 50, 40]);
  const bio =
    "Dil Sagar MB is a Kalaripayattu artist, movement practitioner, choreographer, contemporary dancer, actor, and teacher rooted in the ancient martial art of Kerala since the age of seven. With over four decades of practice, his work bridges traditional martial arts, contemporary dance, theatre, and physical storytelling across stages, cinema, and international festivals worldwide.";
  doc.splitTextToSize(bio, CW).forEach((l) => {
    doc.text(l, M, y);
    y += 4.4;
  });

  // Practice Areas
  h2("Core Movement Practice");
  item("Kalaripayattu", [
    "Foundation of movement practice emphasizing discipline, agility, strength, awareness, and coordination.",
  ]);
  item("Contemporary Dance & Choreography", [
    "Exploring freedom of movement, improvisation, spatial awareness, and multidisciplinary storytelling.",
  ]);
  item("Teaching, Masterclasses & Movement Research", [
    "Sharing knowledge through community classes, diploma training, corporate workshops, and international artistic collaborations.",
  ]);

  // Selected Stage Productions
  h2("Selected Stage Works & Choreography");
  item("Ashank – Fearless (2009)", [
    "Choreographer & Performer. 45-minute contemporary Kalaripayattu production premiered at Chowdiah Memorial Hall, Bangalore; opening performance at the International Film Festival, Thiruvananthapuram.",
  ]);
  item("Yudhakandam (2014)", [
    "Choreographed and performed episode from the Mahabharata, presented at the National Centre for the Performing Arts (NCPA), Mumbai.",
  ]);
  item("Sougandhya Parvam (2014)", [
    "Movement-based performance exploring a Mahabharata narrative, presented in Thrissur, Kerala.",
  ]);
  item("Purushartha (2006–2007)", [
    "Attakkalari Centre for Movement Arts multimedia dance production. Toured Venice Biennale, Munich Contemporary Dance Festival, Frankfurt Book Fair, JuliDans Amsterdam, and Poland.",
  ]);
  item("Transavatar (2007–2009)", [
    "Attakkalari multimedia production presented in New Delhi, Kolkata, Chennai, and Amsterdam.",
  ]);
  item("Nagaranthara", [
    "Site-specific contemporary movement performance at Trafalgar Square, London.",
  ]);

  // Film & Commercial Works
  h2("Cinema & Commercial Choreography");
  item("Chandra (2013)", ["Kannada and Tamil feature film; worked as actor, choreographer, and movement trainer."]);
  item("Olipporu (2013) & Vegam (2014)", ["Malayalam feature films; choreographed songs and action movement sequences."]);
  item("Kalliyath TMT (2018)", [
    "Choreographed and trained artists for commercial advertisement and performance at Jawaharlal Nehru International Stadium, Kochi, in association with Kerala Blasters.",
  ]);

  // Timeline
  h2("Milestone Timeline");
  item("1983 — The Beginning", [
    "Began Kalaripayattu at age seven under Gurukkal Sri Sankaranarayana Menon and Gurukkal Sri C. Vishwanathan at Vallabhatta Kalari Sangam, Chavakkad, Kerala.",
  ]);
  item("1988–1997 — Martial Arts & Championship Honors", [
    "National Kalaripayattu Championship winner in full combat (1990, 1997); First place in Meipayattu at Yuvajana Mela (1989); State championship winner; Bharatiyam New Delhi (1989); Lok Utsav Sangeet Natak Akademi (1988).",
  ]);
  item("1997–2004 — London & Movement Exploration", [
    "Movement artist & outreach facilitator with Imlata Dance Company, London; trained in contemporary dance, Capoeira, contact improvisation, ballet, and yoga.",
  ]);
  item("2001–2009 — Attakkalari Centre for Movement Arts, Bangalore", [
    "Kalaripayattu faculty, Diploma faculty, community outreach, and choreographer integrating Kalaripayattu with contemporary dance across international productions.",
  ]);
  item("2008 — Rashtrapati Bhavan, New Delhi", [
    "Performed Kalaripayattu and contemporary dance for the Presidents of India, Brazil, and South Africa at the IBSA Summit.",
  ]);
  item("2023–2025 — Education & Community Training", [
    "Physical Education Teacher at GEMS Modern Academy (2023); Summer camp movement training with Kilkari, Purnea, Bihar (2025).",
  ]);

  footer();
  doc.save("dil-sagar-mb-cv.pdf");
}
