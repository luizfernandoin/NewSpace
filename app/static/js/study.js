
let totCardsGrid = 1;

fetch('/static/js/cards.json')
    .then(response => response.json())
    .then(cards => {
        const containerFlex = document.querySelector(".container-study-flex");
        const contentGrid = document.querySelector(".study-grid");

        cards.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.setAttribute("onclick", "rotateCard(this)");

            if (card.type === "single") {
                const content = document.createElement("div");
                content.classList.add("container-study");

                cardDiv.innerHTML = `
                    <div class="card-front">
                        <img src="${card.img_src}" alt="Imagem">
                        <h3 class="title-study" id="main">${card.title}</h3>
                    </div>
                    <div class="card-back">
                        <div class="text-container">
                            <h2>${card.heading}</h2>
                            <p>${card.content}</p>
                        </div>
                    </div>
                `;

                content.appendChild(cardDiv);
                containerFlex.appendChild(content);
            } else if (card.type === "grid") {
                cardDiv.setAttribute("id", `card-grid${totCardsGrid++}`)

                cardDiv.innerHTML = `
                    <div class="card-front">
                        <img src="${card.img_src}" alt="Imagem">
                        <h3 class="title-study">${card.title}</h3>
                    </div>
                    <div class="card-back">
                        <div class="text-container">
                            <h2>${card.heading}</h2>
                            <p>${card.content}</p>
                        </div>
                    </div>
                `;

                contentGrid.appendChild(cardDiv);
            }
        });
    })
    .catch(error => console.error('Erro ao carregar os dados do JSON:', error));

function rotateCard(card) {
  card.classList.toggle('flipped');
}
