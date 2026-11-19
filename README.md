# Site institucional — Fórmula Exata

Página institucional estática, responsiva e em português, com cena 3D feita em CSS, selo e cartões inclináveis ao movimento do cursor, animações de profundidade e controle para pausar a rotação. O protótipo foi criado em uma pasta separada para manter o CRM existente intacto.

Os cartões de serviços abrem `solucoes.html` com o assunto correspondente. A página permite escolher uma unidade e seguir para o orçamento com serviço e unidade pré-selecionados; todos os links de retorno levam a `index.html`.

## Avaliações das unidades

As notas, contagens e pequenos trechos exibidos nos cartões foram conferidos no Google Maps em 18/11/2026. Os números ficam estáticos no HTML; os links abrem a ficha de cada unidade no Google Maps para consultar os dados atualizados.

## Abrir

Abra `index.html` em um navegador ou publique os arquivos desta pasta em uma hospedagem estática.

## Loja online

Os links com `data-store-link` recebem seu destino de `STORE_URL` no início de `script.js`. Por enquanto apontam para `https://www.formulaexata.com.br/`. Quando a loja Nuvemshop estiver pronta, basta substituir essa URL pelo endereço oficial da loja nova.

## Vídeo de fundo

O vídeo enviado está em `assets/formula-exata-background.mp4` e toca sem áudio em repetição contínua somente na página inicial. As páginas de orçamento, contato e soluções usam fundos em gradientes rosados, sem vídeo, para manter o conteúdo leve e legível.

`background-video.js` controla a reprodução na página inicial. Além do loop nativo, retoma o vídeo ao voltar para a aba, durante a rolagem se o navegador o tiver pausado, e recupera travamentos longos.

## Conteúdo para revisar antes da publicação

- Confirmar endereços, horários, telefones e canais de contato.
- Definir destino oficial da loja após integração com a Nuvemshop.
- Revisar textos e alegações comerciais com a equipe responsável.
- Adicionar os links oficiais de Facebook e YouTube, se desejar exibi-los no rodapé.
