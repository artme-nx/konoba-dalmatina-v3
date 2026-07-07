'use client';

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TITLE_LINES = [
  { text: 'Stories cut', indent: '', italic: false },
  { text: 'from shadow', indent: 'md:pl-[12vw]', italic: false },
  { text: '& light', indent: 'md:pl-[4vw]', italic: true },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Scroll choreography: masked line reveal + slow parallax exit
  React.useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('[data-hero-line]', {
          yPercent: 110,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        gsap.from('[data-hero-fade]', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.06,
          delay: 0.35,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        // Camera drift: title lags behind the scroll on exit
        gsap.to('[data-hero-title]', {
          yPercent: -14,
          autoAlpha: 0.25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-background pb-32 text-foreground"
    >
      {/* Ember glow + vignette, replaces the original grid background image */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--hero-glow)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--hero-vignette)]" />

      <nav className="flex w-full items-center justify-between border-b border-border p-4 md:px-16 md:py-6 lg:px-24 xl:px-32">
        <a href="#" aria-label="Mara Volk home" className="flex items-baseline gap-3">
          <span className="font-display text-xl tracking-[var(--tracking-display)]">
            Mara Volk
          </span>
          <span className="text-label hidden text-muted-foreground sm:inline">
            Director / DP
          </span>
        </a>

        <div
          id="menu"
          ref={menuRef}
          className={[
            'max-md:absolute max-md:top-0 max-md:left-0 max-md:z-50 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-background/80 max-md:backdrop-blur',
            'flex items-center gap-8',
            'text-label',
            'max-md:flex-col max-md:justify-center',
            menuOpen ? 'max-md:w-full' : 'max-md:w-0',
          ].join(' ')}
          aria-hidden={!menuOpen}
        >
          <a href="#" className="transition-colors duration-(--duration-micro) hover:text-ember">
            Work
          </a>

          <div className="group relative flex cursor-pointer items-center gap-1">
            <span>Films</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-36 left-0 flex w-max -translate-y-full flex-col gap-3 border border-border bg-card p-5 opacity-0 transition-all duration-(--duration-base) group-hover:top-44 group-hover:opacity-100">
              <a href="#" className="transition-all duration-(--duration-micro) hover:translate-x-1 hover:text-ember">Narrative</a>
              <a href="#" className="transition-all duration-(--duration-micro) hover:translate-x-1 hover:text-ember">Commercial</a>
              <a href="#" className="transition-all duration-(--duration-micro) hover:translate-x-1 hover:text-ember">Music Video</a>
              <a href="#" className="transition-all duration-(--duration-micro) hover:translate-x-1 hover:text-ember">Documentary</a>
            </div>
          </div>

          <a href="#" className="transition-colors duration-(--duration-micro) hover:text-ember">
            Journal
          </a>
          <a href="#" className="transition-colors duration-(--duration-micro) hover:text-ember">
            About
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="aspect-square bg-primary p-2 text-primary-foreground transition-colors duration-(--duration-micro) hover:bg-ember hover:text-foreground md:hidden"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <button className="text-label hidden rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] hover:text-[var(--button-primary-hover-fg)] md:block">
          Contact
        </button>

        <button
          id="open-menu"
          onClick={() => setMenuOpen(true)}
          className="aspect-square bg-primary p-2 text-primary-foreground transition-colors duration-(--duration-micro) hover:bg-ember hover:text-foreground md:hidden"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </nav>

      <div
        data-hero-fade
        className="text-label mx-auto mt-24 flex w-max max-w-full items-center gap-3 border border-border px-4 py-2 text-muted-foreground md:mt-16"
      >
        <span aria-hidden className="size-1.5 shrink-0 bg-ember" />
        <span>Now screening — “Halflight” (2026)</span>
        <button className="flex items-center gap-1 text-foreground transition-colors duration-(--duration-micro) hover:text-ember">
          <span>Trailer</span>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <h1
        data-hero-title
        className="font-display mx-auto mt-10 w-full max-w-6xl px-4 text-center text-[length:var(--hero-title-size)] leading-[var(--hero-title-leading)] font-light tracking-[var(--tracking-display)] md:text-left"
      >
        {TITLE_LINES.map((line) => (
          <span
            key={line.text}
            className={`inline-block overflow-hidden align-bottom md:block ${line.indent}`}
          >
            <span data-hero-line className="inline-block pr-[0.25em] md:pr-0">
              {line.italic ? (
                <em className="font-normal text-ember italic">{line.text}</em>
              ) : (
                line.text
              )}
            </span>
          </span>
        ))}
      </h1>

      <p
        data-hero-fade
        className="mx-auto mt-8 max-w-xl px-4 text-center text-base leading-relaxed text-muted-foreground"
      >
        Mara Volk is a director and cinematographer making narrative films,
        commercials and music videos — shot on 35mm and digital, graded in the dark.
      </p>

      <div data-hero-fade className="mx-auto mt-8 flex w-full items-center justify-center gap-3">
        <button className="text-label rounded-full bg-[var(--button-primary-bg)] px-7 py-3.5 text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] hover:text-[var(--button-primary-hover-fg)]">
          Watch showreel
        </button>
        <button className="text-label flex items-center gap-2 rounded-full border border-[var(--button-ghost-border)] px-7 py-3.5 transition-colors duration-(--duration-micro) hover:border-[var(--button-ghost-hover-border)]">
          <span>Selected work</span>
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        data-hero-fade
        className="text-label absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border px-4 py-5 text-muted-foreground md:px-16 lg:px-24 xl:px-32"
      >
        <span>Scene 01 — Showreel</span>
        <span className="hidden sm:inline">35mm / Digital — 2.39:1</span>
        <span>Zagreb — Worldwide</span>
      </div>
    </section>
  );
}
