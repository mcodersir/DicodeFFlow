(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const revealTargets = document.querySelectorAll(
    ".hero-copy, .hero-art, .section-heading, .feature-item, .caution-note, .popup-copy, .popup-frame, .install-aside, .step-item, .transparency-inner, .footer-main"
  );
  if (!revealTargets.length) return;

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

  document.documentElement.classList.add("motion-ready");
  revealTargets.forEach((element) => observer.observe(element));
})();
