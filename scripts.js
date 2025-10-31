const container = document.getElementById("vendaDosNumeros");

// Criar 200 cartas numeradas
for (let i = 1; i <= 200; i++) {
  const card = document.createElement("div");
  card.classList.add("Numeros-card");

  // Faces
  const back = document.createElement("p");
  back.classList.add("face-frontal");
  back.textContent = "Venda";

  const front = document.createElement("p");
  front.classList.add("face-posterio");
  front.textContent = i;

  card.appendChild(front);
  card.appendChild(back);

  // Evento de virar
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });

  container.appendChild(card);
}
