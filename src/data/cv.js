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
    doc.text(`Kalari with Sagar — ${CONTACT.phones[0]} · ${CONTACT.email} · kalariwithsagar.blogspot.com`, W / 2, H - 4, { align: "center" });
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
  doc.text("DIL SAGAR", M, 20);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...C.gold);
  doc.text("Kalari with Sagar", M, 28);
  doc.setFontSize(8.5);
  doc.setTextColor(...C.sand);
  doc.text("Kalaripayattu Artiste · Contemporary Dancer · Choreographer · Teacher", M, 36);
  doc.text(`${CONTACT.phones[0]}   |   ${CONTACT.email}   |   kalariwithsagar.blogspot.com`, M, 42);
  y = 58;

  // Profile
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...[70, 60, 48]);
  const profile = doc.splitTextToSize(
    "Founder member and senior ex-faculty (Kalaripayattu) of the Attakkalari Centre for Movement Arts, Bangalore. Kalaripayattu artiste since 1983, contemporary dancer, choreographer and teacher — with productions performed at the Venice Biennale, Munich Festival of Contemporary Dance, Frankfurt Book Fair, JuliDans Amsterdam and the NCPA Mumbai.",
    CW
  );
  profile.forEach((l) => {
    doc.text(l, M, y);
    y += 4.4;
  });
  y += 3;

  h2("Championships");
  item("1990 – 1997", [
    "National Champion, Full-Contact Combat — two consecutive years.",
    "1992: First place (Kettukeri), Keralotsavam, Kerala State Youth Welfare Board.",
    "1991–92: First place (Sword & Shield), Kerala Kalaripayat Association, Thiruvananthapuram.",
    "1993–94: Individual first place, State Championship (Kerala Kalaripayat Association), Thiruvananthapuram.",
    "1993–94: Team first place, State Championship (Kerala Kalaripayat Association), Trissur.",
    "1993–94: Individual first place and Best Sword & Shield, District Championship (Kerala Kalaripayat Association), Trissur.",
    "1989: First place (Meipayattu), Yuva Jana Mela, Kerala State Youth Welfare Board.",
  ]);

  h2("Professional Experience");
  item("Attakkalari Centre for Movement Arts, Bangalore — 2001–2009", [
    "Faculty, Kalaripayattu (2006–2008); Diploma in Movement Arts & Mixed Media — faculty.",
    "Community Outreach Programme facilitator; Community Class facilitator, Kalaripayattu.",
    "Corporate workshops — contemporary dance and Kalaripayattu choreography.",
    "Choreographer — Kalaripayattu integrated with contemporary dance, Attakkalari productions.",
  ]);
  item("Imlata Dance Company, London, UK — 1990–1997", [
    "Movement artiste; community outreach programmes across the UK.",
  ]);
  item("Facilitator, LVD's India International Salsa Congress — 2011", []);

  h2("Significant Performances");
  item("Beyond the Walls for Men — 1997", [
    "Imlata Dance Company, UK — Birmingham, Nottingham, London.",
  ]);
  item("City Maps — 2000", [
    "Imlata Dance Company, UK — Place Theatre & Greenwich Dance Agency (London), Milton Keynes, Nottingham, Exeter, Croydon, Chichester Fringe Festival 2000, Ellesmere Port, Barnet.",
  ]);
  item("Purushartha — 2006–2007", [
    "Attakkalari multi-media production — Venice Biennale, Munich Festival of Contemporary Dance, Frankfurt Book Fair, JuliDans Amsterdam, Poland Contemporary Dance Festival, Chennai.",
  ]);
  item("Nagaranthara — 2006–2007", [
    "Site-specific work, Trafalgar Square, London.",
  ]);
  item("Transavatar — 2007–2009", [
    "Attakkalari multi-media production — India Habitat Centre (New Delhi), Kolkata, Chennai, Amsterdam. (Original Transavatar research & movement material with Imlata, 2003.)",
  ]);
  item("India–Brazil–South Africa Summit — 2008", [
    "Kamani Auditorium, New Delhi, with dancers from Brazil and South Africa; performance at Rashtrapati Bhavan for the Presidents of India, Brazil and South Africa.",
  ]);
  item("Ashank (Fearless) — 2009", [
    "Own work, choreographer & performer — 45-minute contemporary Kalaripayattu; premiered at Chowdiah Memorial Hall, Bangalore; invited to open the International Film Festival, Thiruvananthapuram. Also: Attakkalari India Biennial 2009, Kalinga Martial Dance Festival (Bhubaneshwar).",
  ]);
  item("Chandra · Oliporu · Vegam — 2013", [
    "Acted and worked as movement teacher in the Kannada film Chandra (with Shriya Saran); choreographed songs in the Malayalam film Oliporu; action choreography for the Malayalam film Vegam.",
  ]);
  item("Yudha Kahaandam — 2014", [
    "Own work — an episode from the Mahabharatha; full house, NCPA, Mumbai.",
  ]);
  item("Sougandya Parvam — 2014", [
    "Own work — from the Mahabharatha; staged at the Monsoon Dance & Music Fest, Trissur, Kerala.",
  ]);
  item("Mamangam — 2017", ["Contemporary Kalaripayattu, performed 2 October 2017."]);
  item("Lecture–demonstrations", [
    "India Habitat Centre, New Delhi (2008) — Movement for Dancers; FACETS, Attakkalari choreography laboratory (2003); Madras Craft Foundation & Miranda College, New Delhi (1992).",
  ]);

  h2("Masterclasses & Workshops");
  item("Companies & institutions", [
    "Shobhana Jeyasingh Dance Company (UK) · Tribhanga Dance Theatre (South Africa) · Infosys, Bangalore · CGI, Bangalore · STEM Dance Kampni, Bangalore · Lourdes Vijay Dance Company · SNGSV Kalari Sangam · Jawahar Bala Bhavan, Trissur.",
  ]);

  h2("Training");
  item("Kalaripayattu — since 1983", [
    "Vallabhatta Kalari Sangam, Chavakkad, under Gurukkal Shri Sankaranarayana Menon and Gurukkal Sri C. Vishwanathan.",
  ]);
  item("Additional", [
    "Sasha Waltz workshop, Chennai (1998) · Capoeira, Estegiario Marcus Cabeca, London (Place Theatre) · Contact improvisation, Christopher Lechner (Germany) · Ballet, Christina Lechner (USA) · Yoga, Arun Iyengar (Bangalore) · FACETS, Attakkalari global choreography workshop (2001).",
  ]);

  footer();
  doc.save("dil-sagar-cv.pdf");
}
