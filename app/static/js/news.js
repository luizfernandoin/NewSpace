'use strict';

window.onload = function news() {
    loadNews()
    loadlounch()
};

const searchlounch = async()=> {
    const currentYear = new Date().getFullYear();
    const url = `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=100&year=${currentYear}`;
    const response = await fetch(url);
    return response.json();
};

const searchNews = async()=> {
    const url = "https://api.spaceflightnewsapi.net/v4/articles/?limit=100&offset=10";
    const response = await fetch(url);
    return response.json();
};

const createCard = (item, local, cont) => {
    const { image_url, title, summary, url, news_site, published_at } = item;
    console.log(cont);
    //console.log(links[0].href)
    if (local === "col1") {
        const card = document.createElement('div');
        card.classList.add('post-index');
        card.innerHTML = `
    <a href="${url}">
    <img src=${image_url} alt="">
    <h3 class="title-new">${title}</h3>
    <p class="desc-new">${summary}</p>
    </a>
    `;
        return card;
    } else if (local === "col2"){
        const card = document.createElement('li');
        card.classList.add('item-asside');
        card.innerHTML = `
        <a href="${url}">
        <span>${title}</span>
    </a>
    `;
        return card;
    } else if (local === "plusNews"){
        const card = document.createElement('div');
        card.classList.add('content-post-preview');
        card.innerHTML = `
        <div class="content-image">
            <img src=${image_url} alt="">
        </div>
        <div class="post-preview">
            <a href="${url}">
                <h2 class="post-title">${title}</h2>
                <h3 class="post-subtitle">${summary}</h3>
            </a>
            <p class="post-meta">
                Posted by
                <a href="#!">${news_site}p</a>
                on ${published_at}
            </p>
        </div>
        `;
        return card;
    } else if (local === "grid"){
        console.log('post'+cont)
        const card = document.createElement('div');
        card.classList.add('post'+cont);
        card.innerHTML = `
        <img src=${image_url} alt="">
        <h3 class="title-new">${title}</h3>
        `;
        return card;
    }
};

const loadNews = async () => {
    const url_ativa = window.location.href;
    const col2 = document.querySelector('.ul-col2');
    const col1 = document.querySelector('.grid-index-col1');
    const {results} = await searchNews();
    console.log(results)
    if (url_ativa === "http://127.0.0.1:5000/"){
        const cards1 = results.map((item, index) => createCard(item, "col1"));
        col1.replaceChildren(...cards1.slice(0, 4));
        const cards2 = results.map((item, index) => createCard(item, "col2"));
        col2.replaceChildren(...cards2.slice(0, 6));
    } else if (url_ativa === "http://127.0.0.1:5000/noticias"){
        const plusnews = document.querySelector('.content-plusnews');
        const grid = document.querySelector('.blck-content-grid');
        const cards4 = results.map((item, index) => createCard(item, "grid", index - 3));
        grid.replaceChildren(...cards4.slice(4, 8));
        const cards1 = results.map((item, index) => createCard(item, "col1", index + 1));
        col1.replaceChildren(...cards1.slice(0, 4));
        const cards2 = results.map((item, index) => createCard(item, "col2", index + 1));
        col2.replaceChildren(...cards2.slice(0, 6));
        const cards3 = results.map((item, index) => createCard(item, "plusNews", index + 1));
        plusnews.replaceChildren(...cards3);
    }
    loadlounch();
};

const getMonthName = (month) => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
  
    return months[month];
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = getMonthName(date.getMonth());
    
    return [day, month];
};


const createCardEvent = (item, local) => {
    const { net, mission, status } = item;
    const [day, month] = formatDate(net);
    let description = '';
    let name_status = '';

    if (mission && mission.description && status) {
        description = mission.description;
        name_status = status.name;
        if (local === "index"){
            const card = document.createElement('div');
            card.classList.add('card-event');
            card.innerHTML = `
            <div class="data">
                <h3>${day}</h3>
                <h3>${month}</h3>
            </div>
            <div class="summary-event">
                <p>${description}</p>
            </div>
            <div class="link-event">
                <p>${name_status}</p>
            </div>
            `;
            return card;
        } else if (local === "mission"){
            const card = document.createElement('div');
            card.classList.add('content-post-preview');
            card.innerHTML = `
            <div class="data-event">
                <h3>${day}</h3>
                <h3>${month}</h3>
            </div>
            <div class="main-event">
                <p class="event-meta">
                    ${description}
                </p>
            </div>
            <div class="link-event">
                <p>${name_status}</p>
            </div>
            `;
            return card;
        }
    }
};

const loadlounch = async () => {
    const url_ativa = window.location.href;
    const {results} = await searchlounch();
    console.log(results)
    if (url_ativa === "http://127.0.0.1:5000/"){
        const container = document.querySelector('.content-card');
        const cards = results.map((item) => createCardEvent(item, "index"));
        const filteredCards = cards.filter(card => card !== undefined); // Filtra os cards nulos
        container.replaceChildren(...filteredCards.slice(0, 6));
    } else if (url_ativa === "http://127.0.0.1:5000/missoes"){
        const container = document.querySelector('.conteiner-content-post-preview');
        const cards = results.map((item) => createCardEvent(item, "mission"));
        const filteredCards = cards.filter(card => card !== undefined); // Filtra os cards nulos
        container.replaceChildren(...filteredCards);
    }
};
