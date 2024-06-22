fetch('/static/js/faq.json')
    .then(response => response.json())
    .then(data => {
        const faqContainer = document.getElementById('faq-right-content');

        data.forEach(item => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');

            const faqItemHead = document.createElement('div');
            faqItemHead.classList.add('faq-item-head');

            const faqItemText = document.createElement('span');
            faqItemText.classList.add('faq-item-text');
            faqItemText.textContent = item.pergunta;

            const faqItemIcon = document.createElement('span');
            faqItemIcon.classList.add('faq-item-icon');
            faqItemIcon.innerHTML = '<i class="fa fa-chevron-down"></i>';

            const faqItemBody = document.createElement('div');
            faqItemBody.classList.add('faq-item-body');

            const faqItemParagraph = document.createElement('p');
            faqItemParagraph.textContent = item.resposta;

            faqItemHead.appendChild(faqItemText);
            faqItemHead.appendChild(faqItemIcon);

            faqItemBody.appendChild(faqItemParagraph);

            faqItem.appendChild(faqItemHead);
            faqItem.appendChild(faqItemBody);

            faqContainer.appendChild(faqItem);

            faqItemHead.addEventListener('click', () => {
                let icon = faqItemHead.querySelector('.faq-item-icon').firstElementChild;
                if (icon.className == "fa fa-chevron-down") {
                    faqItemBody.classList.add('show-para');
                    icon.className = "fa fa-chevron-up";
                } else if (icon.className == "fa fa-chevron-up") {
                    faqItemBody.classList.remove('show-para');
                    icon.className = "fa fa-chevron-down";
                }
            });
        });
    })
    .catch(error => console.error('Erro ao carregar os dados do JSON:', error));
