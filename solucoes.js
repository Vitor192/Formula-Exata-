const SERVICES = {
  personalizadas: {
    eyebrow: "FÓRMULAS PERSONALIZADAS",
    title: "Uma fórmula pensada para você.",
    description: "Na manipulação, a fórmula é preparada conforme a receita e as orientações do profissional de saúde, com atenção às necessidades de cada pessoa.",
    symbol: "✳",
    quoteType: "Fórmula personalizada",
    highlights: ["Cápsulas e formas farmacêuticas personalizadas", "Vitaminas, minerais e fitoterápicos conforme prescrição", "Atendimento farmacêutico para orientar seu pedido"],
  },
  beleza: {
    eyebrow: "PELE, CABELOS E BELEZA",
    title: "Cuidado que acompanha sua rotina.",
    description: "Conheça opções manipuladas para cuidados com a pele, cabelos e unhas. Converse com nossa equipe sobre a receita ou o produto que procura.",
    symbol: "♡",
    quoteType: "Dermatologia e cosméticos",
    highlights: ["Cremes, séruns e loções manipulados", "Opções para pele, cabelos e unhas", "Atendimento conforme orientação dermatológica"],
  },
  nutricao: {
    eyebrow: "NUTRIÇÃO E PERFORMANCE",
    title: "Seu cuidado em movimento.",
    description: "Suplementos e fórmulas personalizados para sua rotina, sempre de acordo com a recomendação do seu médico ou nutricionista.",
    symbol: "↗",
    quoteType: "Nutrição e suplementos",
    highlights: ["Suplementos e nutrientes sob medida", "Opções para diferentes rotinas e objetivos", "Pedido preparado com atenção farmacêutica"],
  },
  veterinaria: {
    eyebrow: "MANIPULAÇÃO VETERINÁRIA",
    title: "Um cuidado especial para o seu pet.",
    description: "A manipulação veterinária oferece formas farmacêuticas adaptadas à prescrição e à rotina do seu animal, facilitando o cuidado com cães e gatos.",
    symbol: "⌁",
    quoteType: "Manipulação veterinária",
    highlights: ["Fórmulas conforme prescrição veterinária", "Opções pensadas para cães e gatos", "Atendimento dedicado à manipulação pet"],
  },
};

const params = new URLSearchParams(window.location.search);
const service = SERVICES[params.get("area")] || SERVICES.personalizadas;
document.getElementById("year").textContent = new Date().getFullYear();
document.title = `${service.eyebrow} | Fórmula Exata`;
document.getElementById("service-eyebrow").textContent = service.eyebrow;
document.getElementById("service-title").textContent = service.title;
document.getElementById("service-description").textContent = service.description;
document.getElementById("service-symbol").textContent = service.symbol;

const highlights = document.getElementById("service-highlights");
service.highlights.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  highlights.append(li);
});

const unitSelect = document.getElementById("service-unit");
const quoteLink = document.getElementById("service-quote-link");
function updateQuoteLink() {
  const query = new URLSearchParams({ tipo: service.quoteType });
  if (unitSelect.value) query.set("unidade", unitSelect.value);
  quoteLink.href = `orcamento.html?${query.toString()}`;
}
unitSelect.addEventListener("change", updateQuoteLink);
updateQuoteLink();

const backgroundVideo = document.querySelector(".site-video-backdrop video");
if (backgroundVideo) {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && backgroundVideo.paused) {
      backgroundVideo.play().catch(() => {});
    }
  });
}
