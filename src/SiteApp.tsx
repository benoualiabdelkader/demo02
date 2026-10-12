import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  CONTACT, Lang, L, nav, t, galleryItems, heroImage,
} from "./content";

/* ---------- helpers ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
const tr = (l: L, lang: Lang) => l[lang];

/* ---------- brand ---------- */
function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M4 38C4 22 12 12 24 8c12 4 20 14 20 30" stroke="#c89b4b" strokeWidth="1.6" />
      <path d="M9 38C9 26 15 18 24 14c9 4 15 12 15 24" stroke="#c89b4b" strokeWidth="1.2" opacity=".6" />
      <text x="24" y="33" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="15" fill="#fff">IR</text>
    </svg>
  );
}

/* ---------- Language switcher ---------- */
function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="lang" role="group" aria-label="Langue / اللغة">
      <button aria-pressed={lang === "ar"} onClick={() => setLang("ar")}>العربية</button>
      <button aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>FR</button>
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ lang, setLang, active }: { lang: Lang; setLang: (l: Lang) => void; active: string }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`header ${solid || open ? "solid" : ""}`}>
      <div className="wrap bar">
        <a href="#accueil" className="brand" aria-label={t.brandLatin}>
          <BrandMark />
          <span className="brand-text">
            <span className="brand-ar">{t.brandAr}</span>
            <span className="brand-lat">{t.brandLatin}</span>
          </span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} aria-current={active === n.id ? "true" : undefined}>
              {tr(n.label, lang)}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
            <svg width="18" height="18" viewBox="0 0 18 18" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{tr(n.label, lang)}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ lang }: { lang: Lang }) {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <img src={heroImage} alt={lang === "fr" ? "Salle de classe — visuel éducatif générique" : "قاعة دراسة — صورة تعليمية عامة"} fetchPriority="high" />
      <div className="hero-seal" aria-hidden="true">{t.brandAr}</div>
      <div className="wrap inner">
        <p className="kicker">{tr(t.heroEyebrow, lang)}<span className="badge">{tr(t.demoBadge, lang)}</span></p>
        <h1 id="hero-title" className="h1">{tr(t.heroTitle, lang)}</h1>
        <p>{tr(t.heroText, lang)}</p>
        <div className="actions">
          <a className="btn btn-royal" href="#admission">{tr(t.ctaAdmission, lang)}</a>
          <a className="btn btn-ghost" href="#notre-ecole">{tr(t.ctaDiscover, lang)}</a>
        </div>
      </div>
      <span className="demo-ribbon">{tr(t.gallery.note, lang)}</span>
    </section>
  );
}

/* ---------- Intro ---------- */
function IntroSection({ lang }: { lang: Lang }) {
  const i = t.intro;
  return (
    <section id="notre-ecole" className="section">
      <div className="wrap intro-grid">
        <Reveal>
          <span className="kicker">{tr(i.kicker, lang)}</span>
          <h2 className="h2">{tr(i.title, lang)}</h2>
          <p className="lead">{tr(i.p1, lang)}</p>
          <p className="lead">{tr(i.p2, lang)}</p>
        </Reveal>
        <Reveal>
          <div className="quote-panel"><p>{tr(i.quote, lang)}</p></div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function FeatureGrid({ lang }: { lang: Lang }) {
  const f = t.features;
  return (
    <section className="section feature-band on-dark" aria-labelledby="feat-title">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{tr(f.kicker, lang)}</span>
          <h2 id="feat-title" className="h2">{tr(f.title, lang)}</h2>
        </Reveal>
        <div className="feature-grid">
          {f.items.map((it) => (
            <Reveal key={it.n}>
              <div className="feature">
                <span className="n">{it.n}</span>
                <h3>{tr(it.title, lang)}</h3>
                <p>{tr(it.text, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Programs ---------- */
function ProgramsSection({ lang }: { lang: Lang }) {
  const p = t.programs;
  return (
    <section id="programmes" className="section programs">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{tr(p.kicker, lang)}</span>
          <h2 className="h2">{tr(p.title, lang)}</h2>
          <p className="lead">{tr(p.lead, lang)}</p>
        </Reveal>
        <div className="prog-grid">
          {p.items.map((it, idx) => (
            <Reveal key={idx}>
              <article className="prog">
                <h3>{tr(it.title, lang)}</h3>
                <p>{tr(it.text, lang)}</p>
                <span className="tbc">{tr(t.confirmed, lang)}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Activities ---------- */
function ActivitiesSection({ lang }: { lang: Lang }) {
  const a = t.activities;
  return (
    <section id="activites" className="section activities on-dark">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{tr(a.kicker, lang)}</span>
          <h2 className="h2">{tr(a.title, lang)}</h2>
          <p className="lead">{tr(a.lead, lang)}</p>
        </Reveal>
        <div className="act-list">
          {a.items.map((it, i) => (
            <Reveal key={i}>
              <div className="act-row"><span>0{i + 1}</span><b>{tr(it, lang)}</b></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Lightbox ---------- */
function Lightbox({ index, lang, onClose }: { index: number; lang: Lang; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [onClose]);
  const g = galleryItems[index];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={tr(g.caption, lang)} onClick={onClose}>
      <button ref={closeRef} className="x" aria-label={tr(t.gallery.close, lang)} onClick={onClose}>×</button>
      <figure style={{ margin: 0 }} onClick={(e) => e.stopPropagation()}>
        <img src={g.src.replace("w=1200", "w=1800")} alt={tr(g.alt, lang)} />
        <figcaption>{tr(g.caption, lang)} — {tr(t.gallery.overlay, lang)}</figcaption>
      </figure>
    </div>
  );
}

/* ---------- Gallery ---------- */
function GallerySection({ lang }: { lang: Lang }) {
  const [sel, setSel] = useState<number | null>(null);
  const [broken, setBroken] = useState<Record<number, boolean>>({});
  const g = t.gallery;
  return (
    <section id="galerie" className="section">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{tr(g.kicker, lang)}</span>
          <h2 className="h2">{tr(g.title, lang)}</h2>
          <p className="lead">{tr(g.note, lang)}</p>
        </Reveal>
        <div className="gal-grid">
          {galleryItems.map((it, i) => (
            <Reveal key={i}>
              <button className={`tile ${broken[i] ? "fallback" : ""}`} onClick={() => setSel(i)} aria-label={`${tr(it.caption, lang)} — ${tr(it.alt, lang)}`}>
                {!broken[i] && (
                  <img src={it.src} alt={tr(it.alt, lang)} loading="lazy" onError={() => setBroken((b) => ({ ...b, [i]: true }))} />
                )}
                <span className="cap"><small>{tr(g.overlay, lang)}</small><b>{tr(it.caption, lang)}</b></span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {sel !== null && <Lightbox index={sel} lang={lang} onClose={() => setSel(null)} />}
    </section>
  );
}

/* ---------- Admissions ---------- */
function AdmissionsSection({ lang }: { lang: Lang }) {
  const a = t.admission;
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="admission" className="section admission">
      <div className="wrap adm-grid">
        <Reveal>
          <span className="kicker">{tr(a.kicker, lang)}</span>
          <h2 className="h2">{tr(a.title, lang)}</h2>
          <p className="lead">{tr(a.lead, lang)}</p>
          <p className="note">{tr(t.adminNote, lang)}</p>
          <div style={{ marginTop: 28 }}>
            <a className="btn btn-royal" href="#contact">{tr(nav[6].label, lang)}</a>
          </div>
        </Reveal>
        <Reveal>
          <div>
            {a.steps.map((s, i) => (
              <div className="acc" key={i}>
                <button aria-expanded={open === i} aria-controls={`step-${i}`} id={`step-btn-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span><span style={{ color: "#c89b4b", marginInlineEnd: 14, fontFamily: "Manrope" }}>0{i + 1}</span>{tr(s.q, lang)}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div id={`step-${i}`} role="region" aria-labelledby={`step-btn-${i}`} className={`panel ${open === i ? "open" : ""}`}>
                  <div><p>{tr(s.a, lang)}</p></div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Family ---------- */
function FamilySection({ lang }: { lang: Lang }) {
  const f = t.family;
  return (
    <section className="section family">
      <div className="wrap fam-grid">
        <Reveal>
          <span className="kicker">{tr(f.kicker, lang)}</span>
          <h2 className="h2">{tr(f.title, lang)}</h2>
          <p className="lead">{tr(f.text, lang)}</p>
        </Reveal>
        <DemoNewsSection lang={lang} />
      </div>
    </section>
  );
}

/* ---------- News ---------- */
function DemoNewsSection({ lang }: { lang: Lang }) {
  const n = t.news;
  return (
    <Reveal>
      <aside className="news-box" aria-label={tr(n.title, lang)}>
        <span className="kicker">{tr(n.kicker, lang)}</span>
        <h3>{tr(n.title, lang)}</h3>
        <p style={{ color: "#5b6676", margin: 0 }}>{tr(n.text, lang)}</p>
        <p className="empty">{tr(n.empty, lang)}</p>
      </aside>
    </Reveal>
  );
}

/* ---------- Contact ---------- */
function ContactSection({ lang }: { lang: Lang }) {
  const c = t.contact;
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <section id="contact" className="section contact on-dark">
      <div className="wrap con-grid">
        <Reveal>
          <span className="kicker">{tr(c.kicker, lang)}</span>
          <h2 className="h2">{tr(c.title, lang)}</h2>
          <p className="lead">{tr(t.adminNote, lang)}</p>
          <dl className="info">
            <div><dt>{tr(c.addressLabel, lang)}</dt><dd>{tr(t.brandFull, lang)} — {tr(c.address, lang)}</dd></div>
            <div>
              <dt>{tr(c.phoneLabel, lang)}</dt>
              <dd>{CONTACT.phone ? <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a> : tr(c.phoneTbc, lang)}</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                {CONTACT.whatsapp
                  ? <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">{tr(c.waLabel, lang)}</a>
                  : tr(c.waLabel, lang)}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal>
          <form className="form" onSubmit={submit}>
            <label>{tr(c.name, lang)}<input name="name" required minLength={2} autoComplete="name" /></label>
            <label>{tr(c.contactField, lang)}<input name="contact" required autoComplete="email" /></label>
            <label>{tr(c.message, lang)}<textarea name="message" rows={5} required minLength={10} /></label>
            <button className="btn btn-sand" type="submit">{tr(c.send, lang)}</button>
            {sent && <p className="ok" role="status">{tr(c.success, lang)}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="footer">
      <div className="wrap row">
        <div>
          <strong style={{ color: "#fff" }}>{t.brandLatin} — {t.brandFull.ar}</strong><br />
          {tr(t.city, lang)}
        </div>
        <div>{tr(t.footer.note, lang)}</div>
        <a href="#accueil">{tr(t.footer.top, lang)} ↑</a>
      </div>
    </footer>
  );
}

/* ---------- Floating actions ---------- */
function FloatingActions({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const waHref = CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}` : "#contact";
  return (
    <div className="floating">
      <a
        className="wa-btn"
        href={waHref}
        target={CONTACT.whatsapp ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={`WhatsApp — ${tr(t.contact.waStatus, lang)}`}
      >
        <span className="wa-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.45 6.6 2 12.06 2c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.9-9.89 9.9zM20.5 3.49A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.44-8.42z" />
          </svg>
        </span>
        <span className="wa-text">
          <b>WhatsApp</b>
          <small>{tr(t.contact.waStatus, lang)}</small>
        </span>
      </a>
      <button className={`fab ${show ? "" : "hide"}`} aria-label={tr(t.footer.top, lang)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 15V3M3 9l6-6 6 6" /></svg>
      </button>
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("ibnrochd-lang") === "fr" ? "fr" : "ar"));
  const [active, setActive] = useState("accueil");

  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("ibnrochd-lang", l); };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      const el = document.getElementById("progress-fill");
      if (el) el.style.width = `${Math.min(100, p * 100)}%`;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true"><i id="progress-fill" /></div>
      <Header lang={lang} setLang={setLang} active={active} />
      <main>
        <Hero lang={lang} />
        <IntroSection lang={lang} />
        <FeatureGrid lang={lang} />
        <ProgramsSection lang={lang} />
        <ActivitiesSection lang={lang} />
        <GallerySection lang={lang} />
        <AdmissionsSection lang={lang} />
        <FamilySection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingActions lang={lang} />
    </>
  );
}
