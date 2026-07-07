"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function countUp(el: Element) {
  const target = parseFloat(el.getAttribute("data-count") || "0");
  const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
  const suffix = el.getAttribute("data-suffix") || "";
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target,
    duration: 1.4,
    ease: "power3.out",
    onUpdate: () => {
      (el as HTMLElement).textContent = obj.v.toFixed(dec) + suffix;
    },
  });
}

export function RevealInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        (el as HTMLElement).textContent = target.toFixed(dec) + suffix;
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      document.querySelectorAll("[data-count]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => countUp(el),
        });
      });

      const heroImg = document.getElementById("heroImg");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.14 },
          { scale: 1.02, duration: 2.6, ease: "power2.out" }
        );
        gsap.to(heroImg, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: heroImg, start: "top top", end: "bottom top", scrub: true },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
