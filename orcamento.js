const UNIT_PHONES = {
  centro: "5522997281920",
  olaria: "552234120036",
  cordeiro: "5522997758395",
  veterinaria: "5522997673081",
};

document.getElementById("year").textContent = new Date().getFullYear();

const quoteParams = new URLSearchParams(window.location.search);
const requestedType = quoteParams.get("tipo");
const requestedUnit = quoteParams.get("unidade");
if (requestedType) {
  document.getElementById("quote-type").value = requestedType;
}
if (requestedUnit) {
  document.getElementById("quote-unit").value = requestedUnit;
}

document.getElementById("quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const unitSelect = document.getElementById("quote-unit");
  const name = String(form.get("name") || "").trim();
  const unit = String(form.get("unit"));
  const type = String(form.get("type"));
  const unitName = unitSelect.selectedOptions[0].textContent;
  const greeting = name ? `Olá, meu nome é ${name}.` : "Olá!";
  const message = `${greeting} Gostaria de solicitar um orçamento para: ${type}. Unidade: ${unitName}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${UNIT_PHONES[unit]}&text=${encodeURIComponent(message)}`;
  window.location.assign(whatsappUrl);
});
