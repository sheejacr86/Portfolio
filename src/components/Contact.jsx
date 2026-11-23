import { useState } from "react";
import { toast, Toaster } from "sonner";
import { CONTACT, INTERESTS } from "../data/content";
import { FadeUp, SectionHead } from "./motion-primitives";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", interest: INTERESTS[0], message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await fetch(`${API}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).then(async (r) => {
        if (!r.ok) throw new Error((await r.json().catch(() => ({}))).detail || "Failed");
      });
      toast.success("Enquiry received — Sagar will get back to you.", {
        style: { background: "#161109", border: "1px solid rgba(201,161,92,0.4)", color: "#EFE7DA" },
      });
      setForm({ name: "", contact: "", interest: INTERESTS[0], message: "" });
    } catch (err) {
      toast.error("Could not send — please call or WhatsApp instead.", {
        style: { background: "#161109", border: "1px solid rgba(194,94,62,0.5)", color: "#EFE7DA" },
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="border-t border-bone/10 bg-coal/40 py-24 sm:py-32">
      <Toaster position="bottom-right" richColors={false} />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-5 sm:px-10 lg:grid-cols-2">
        <div>
          <SectionHead
            num="08"
            label="Contact"
            title={
              <>
                Bring Kalaripayattu to your stage, studio
                <span className="italic text-gold"> or company.</span>
              </>
            }
          />
          <div className="mt-12 space-y-1" data-testid="contact-links">
            <FadeUp>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Phone</p>
              <div className="mt-3 flex flex-col gap-1">
                {CONTACT.phones.map((p, i) => (
                  <a
                    key={p}
                    data-testid={`contact-phone-${i}`}
                    href={CONTACT.phoneLinks[i]}
                    className="group flex w-fit items-baseline gap-3 font-serif text-2xl font-light text-bone transition-colors hover:text-gold sm:text-3xl"
                  >
                    {p}
                    <span className="font-mono text-xs text-terra opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">↗</span>
                  </a>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.08} className="pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Email</p>
              <a
                data-testid="contact-email"
                href={`mailto:${CONTACT.email}`}
                className="mt-3 block w-fit font-serif text-2xl font-light text-bone transition-colors hover:text-gold sm:text-3xl"
              >
                {CONTACT.email}
              </a>
            </FadeUp>
            <FadeUp delay={0.14} className="pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Blog</p>
              <a
                data-testid="contact-blog"
                href={CONTACT.blog}
                target="_blank"
                rel="noreferrer"
                className="group mt-3 flex w-fit items-baseline gap-3 font-serif text-2xl font-light text-bone transition-colors hover:text-gold sm:text-3xl"
              >
                {CONTACT.blogLabel}
                <span className="font-mono text-xs text-terra opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">↗</span>
              </a>
            </FadeUp>
            <FadeUp delay={0.2} className="flex flex-wrap gap-4 pt-10">
              <a
                data-testid="contact-whatsapp"
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-bone/25 px-6 py-3 text-sm text-bone transition-all duration-300 hover:border-gold hover:text-gold"
              >
                WhatsApp
              </a>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.1}>
          <form
            data-testid="contact-form"
            onSubmit={submit}
            className="rounded-sm border border-bone/10 bg-ink p-7 sm:p-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Enquiry</p>
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="cf-name" className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand">Name *</label>
                <input
                  id="cf-name"
                  data-testid="contact-input-name"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className="mt-2 w-full border-b border-bone/20 bg-transparent pb-3 text-bone placeholder:text-bone/25 focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="cf-contact" className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand">Phone or email *</label>
                <input
                  id="cf-contact"
                  data-testid="contact-input-contact"
                  required
                  minLength={5}
                  value={form.contact}
                  onChange={set("contact")}
                  placeholder="+91 …"
                  className="mt-2 w-full border-b border-bone/20 bg-transparent pb-3 text-bone placeholder:text-bone/25 focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="cf-interest" className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand">Interested in</label>
                <select
                  id="cf-interest"
                  data-testid="contact-select-interest"
                  value={form.interest}
                  onChange={set("interest")}
                  className="mt-2 w-full border-b border-bone/20 bg-transparent pb-3 text-bone focus:border-gold [&>option]:bg-ink"
                >
                  {INTERESTS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cf-message" className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand">Message</label>
                <textarea
                  id="cf-message"
                  data-testid="contact-input-message"
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Dates, group size, city…"
                  className="mt-2 w-full resize-none border-b border-bone/20 bg-transparent pb-3 text-bone placeholder:text-bone/25 focus:border-gold"
                />
              </div>
              <button
                data-testid="contact-submit-btn"
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-gold py-4 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:bg-gild disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send enquiry"}
              </button>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
