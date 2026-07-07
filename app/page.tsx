import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1772555429713-c53ec3fcc575",
  loggia: "https://images.unsplash.com/photo-1766940506623-e0df28baeaeb",
  courtyard: "https://images.unsplash.com/photo-1763389068884-de80282168b1",
  tableSet: "https://images.unsplash.com/photo-1571163940357-8b2ede0bf787",
  tableSet2: "https://images.unsplash.com/photo-1595255548358-1c6a859377e5",
  winePour: "https://images.unsplash.com/photo-1556710808-a2bc27a448f2",
  platter: "https://images.unsplash.com/photo-1629386210559-4e9db09d7831",
  blackRisotto: "https://images.unsplash.com/photo-1627841825438-ee3e7d8febd4",
  grillFire: "https://images.unsplash.com/photo-1604566285222-a9448ed8ca79",
  pasticada: "https://images.unsplash.com/photo-1597740751020-a45809a41967",
  dessert: "https://images.unsplash.com/photo-1702728109878-c61a98d80491",
  mussels: "https://images.unsplash.com/photo-1600732062183-a337a76492e4",
  squidSkewers: "https://images.unsplash.com/photo-1609519226069-54e6befa449b",
  shrimp: "https://images.unsplash.com/photo-1559742811-822873691df8",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.platter,
    dishes: [
      { name: "Dalmatinska pjat", desc: "Domaći pršut, ovčji sir s otoka Paga, masline i kapare, uz topli kruh." },
      { name: "Riblja juha", desc: "Gusta domaća riblja juha, kuhana jutros od ulova dana." },
      { name: "Inćuni u ulju", desc: "Slani inćuni u domaćem maslinovom ulju, s lukom i kaparima." },
    ],
  },
  {
    cat: "Iz mora",
    image: IMG.blackRisotto,
    dishes: [
      { name: "Crni rižot", desc: "Rižot bojan sipinim crnilom, s komadićima svježe sipe i kapljicom ulja." },
      { name: "Škampi na buzaru", desc: "Škampi u umaku od rajčice, bijelog vina i češnjaka, s kruhom za umakanje." },
      { name: "Školjke na buzaru", desc: "Dagnje u umaku od bijelog vina, češnjaka i peršina." },
    ],
  },
  {
    cat: "S gradela",
    image: IMG.grillFire,
    dishes: [
      { name: "Riba dana s gradela", desc: "Cijela bijela riba iz jutarnjeg ulova, pečena na žaru uz blitvu i krumpir." },
      { name: "Lignje na žaru", desc: "Svježe lignje s roštilja, češnjak, peršin i limun." },
      { name: "Škampi na gradele", desc: "Škampi pečeni na žaru, s malo maslinovog ulja i limunom." },
    ],
  },
  {
    cat: "S ognjišta",
    image: IMG.pasticada,
    dishes: [
      { name: "Pašticada s njokima", desc: "Govedina sporo pirjana u vinu i suhim šljivama, s domaćim njokima." },
      { name: "Janjetina ispod peke", desc: "Po narudžbi — janjetina i krumpir ispod peke, najavite dan ranije." },
      { name: "Biftek s umakom od papra", desc: "Domaći biftek s umakom od crnog papra i pečenim krumpirom." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.dessert,
    dishes: [
      { name: "Rožata", desc: "Dalmatinski krem karamel s notom ružičine vodice i tragom karamela." },
      { name: "Torta od oraha", desc: "Vlažna orahova torta po receptu iz obiteljske bilježnice." },
    ],
  },
];

const GALLERY = [
  { src: IMG.tableSet, alt: "Postavljeni stolovi u konobi navečer", tall: true },
  { src: IMG.courtyard, alt: "Otvorena vrata prema unutrašnjem dvorištu" },
  { src: IMG.mussels, alt: "Svježe dagnje pripremljene za buzaru" },
  { src: IMG.winePour, alt: "Točenje domaćeg vina za stolom", wide: true },
  { src: IMG.squidSkewers, alt: "Lignje na ražnjićima na žaru" },
  { src: IMG.shrimp, alt: "Škampi na tanjuru s limunom" },
  { src: IMG.tableSet2, alt: "Stol postavljen za večeru, kameni zidovi", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Kamena uličica u starom gradu Zadru u sumrak"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--brass)" }}>
            Konoba · Stari grad Zadar
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Dalmacija se kuha <em className="italic" style={{ color: "var(--brass)" }}>polako</em>, u kamenoj uličici.
          </h1>
          <p className="reveal mt-6 max-w-[42ch] text-[1.05rem]" style={{ color: "var(--bone-300, #DFC9AE)" }}>
            Obiteljska konoba u srcu starog Zadra — riba s jutarnjeg ulova, pašticada i crni rižot, onako kako se kuhalo u kamenim kućama.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--brass)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--brass)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.5" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.5
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ TripAdvisor</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="497" data-suffix="+" style={{ color: "var(--foreground)" }}>
              497+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>#17</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Od 294 restorana u Zadru</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="o-nama" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--brass)" }}>O konobi</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Mala obiteljska konoba u kamenim uličicama starog grada —{" "}
            <em className="italic" style={{ color: "var(--brass)" }}>gdje se čeka red, ali isplati se čekati.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--brass)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Onako kako su kuhale <em className="italic" style={{ color: "var(--brass)" }}>none</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--brass)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center font-display italic text-lg" style={{ color: "var(--muted-foreground)" }}>
            Ponuda ovisi o ulovu i sezoni — pitajte konobara za preporuku dana.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.loggia, 1000)} alt="Kameni trijem s lukovima i posudama maslina" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--brass)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Konoba stara koliko i <em className="italic" style={{ color: "var(--brass)" }}>kamen</em> oko nje
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Konoba Dalmatina skriva se u kamenoj uličici starog Zadra, grada koji je Alfred Hitchcock nazvao mjestom s najljepšim zalaskom sunca na svijetu. Ovdje se ne kuha za trend — kuha se onako kako se u zadarskim kućama kuhalo oduvijek.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Riba i školjke biraju se svakog jutra prema onome što more da, pašticada se pirja satima, a stol je uvijek malo pretrpan — jer se ovdje jelo dijeli velikodušno. Gosti dolaze iz cijelog svijeta i strpljivo čekaju red; njih gotovo petsto ostavilo je svoju ocjenu.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--brass)" }}>
              — obitelj iza Konobe Dalmatina, Zadar
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--brass)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Iz naše <em className="italic" style={{ color: "var(--brass)" }}>konobe</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--brass)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              U srcu <em className="italic" style={{ color: "var(--brass)" }}>starog grada</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--brass)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Kovačka ulica 10, 23000 Zadar</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--brass)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Za veće grupe pozovite unaprijed — mjesta se brzo popune.</p>
              <a href="tel:+38523633459" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--brass)" }}>
                +385 23 633 459
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--brass)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Pon – Sub</span><span>14:00 – 23:45</span>
              </div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Nedjelja</span><span>19:00 – 23:45</span>
              </div>
            </div>

            <a
              href="tel:+38523633459"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--brass)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Kova%C4%8Dka+ulica+10%2C+Zadar&output=embed"
              loading="lazy"
              title="Konoba Dalmatina — Kovačka ulica 10, Zadar"
              className="h-full w-full min-h-[360px] border-0 grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "#0F080A" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                Konoba <span style={{ color: "var(--brass)" }}>Dalmatina</span>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Obiteljska konoba u kamenim uličicama starog Zadra. Riba s gradela, pašticada, crni rižot i domaće vino.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--brass)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--brass)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--brass)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--brass)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--brass)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--brass)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+38523633459" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 23 633 459</a>
                <a href="mailto:konobadalmatia@gmail.com" className="hover:text-[var(--brass)]">konobadalmatia@gmail.com</a>
                <p>Kovačka ulica 10, Zadar</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Konoba Dalmatina · Zadar</span>
            <span>4.5 ★ TripAdvisor · 497+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
