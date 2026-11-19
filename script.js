// Atualize este único endereço quando a loja da Nuvemshop estiver integrada.
const STORE_URL = "https://www.formulaexata.com.br/";

document.querySelectorAll("[data-store-link]").forEach((link) => {
  link.href = STORE_URL;
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("open");
  });
});

const revealTargets = document.querySelectorAll(
  ".story-seal, .story-copy, .story-facts, .solution-card, .store-copy, .store-icon, .step, .location-card, .pet-contact, .closing-cta > *",
);
revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-tilt]").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    element.style.setProperty("--tilt-x", `${(0.5 - y) * 13}deg`);
    element.style.setProperty("--tilt-y", `${(x - 0.5) * 16}deg`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
  });
});

const backgroundVideo = document.querySelector(".site-video-backdrop video");
if (backgroundVideo) {
  const resumeBackgroundVideo = () => {
    if (document.visibilityState === "visible" && backgroundVideo.paused) {
      backgroundVideo.play().catch(() => {});
    }
  };
  document.addEventListener("visibilitychange", resumeBackgroundVideo);
  backgroundVideo.addEventListener("ended", () => {
    backgroundVideo.currentTime = 0;
    resumeBackgroundVideo();
  });
}

const scene = document.querySelector(".hero-art");
const sceneControl = document.querySelector(".scene-control");
sceneControl.addEventListener("click", () => {
  const paused = sceneControl.getAttribute("aria-pressed") === "true";
  sceneControl.setAttribute("aria-pressed", String(!paused));
  scene.classList.toggle("scene-paused", !paused);
  sceneControl.innerHTML = paused
    ? "<span>Ⅱ</span> Pausar rotação 3D"
    : "<span>▶</span> Retomar rotação 3D";
});
