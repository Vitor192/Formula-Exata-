const CONTACT_PHONES = {
  centro: "5522997281920",
  olaria: "552234120036",
  cordeiro: "5522997758395",
  veterinaria: "5522997673081",
};

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const unit = String(form.get("unit"));
  const unitLabel = document.querySelector("#contact-unit option:checked").textContent;
  const subject = String(form.get("subject"));
  const messageText = String(form.get("message") || "").trim();
  const greeting = name ? `Olá, meu nome é ${name}.` : "Olá!";
  const message = [greeting, `Gostaria de falar sobre: ${subject}.`, `Unidade: ${unitLabel}.`, messageText].filter(Boolean).join(" ");
  window.location.assign(`https://api.whatsapp.com/send?phone=${CONTACT_PHONES[unit]}&text=${encodeURIComponent(message)}`);
});
