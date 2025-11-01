document.addEventListener('DOMContentLoaded', function() {
    const compareBtn = document.getElementById('compare-btn');
    const setsContainer = document.getElementById('sets-container');

    // Пример данных — замени на свои ссылки и картинки!
    const legoSets = [
        {
            official: {
                name: "LEGO Creator 3in1",
                price: "3500 ₽",
                source: "Официальный сайт LEGO",
                image: "https://via.placeholder.com/200?text=LEGO+Official"
            },
            marketplace: {
                name: "LEGO Creator 3in1",
                price: "1500 ₽",
                source: "Wildberries",
                image: "https://via.placeholder.com/200?text=LEGO+WB"
            }
        },
        {
            official: {
                name: "LEGO Technic",
                price: "4500 ₽",
                source: "Официальный сайт LEGO",
                image: "https://via.placeholder.com/200?text=LEGO+Official"
            },
            marketplace: {
                name: "LEGO Technic",
                price: "2500 ₽",
                source: "Ozon",
                image: "https://via.placeholder.com/200?text=LEGO+Ozon"
            }
        },
        {
            official: {
                name: "LEGO Star Wars",
                price: "5500 ₽",
                source: "Официальный сайт LEGO",
                image: "https://via.placeholder.com/200?text=LEGO+Official"
            },
            marketplace: {
                name: "LEGO Star Wars",
                price: "3000 ₽",
                source: "Яндекс Маркет",
                image: "https://via.placeholder.com/200?text=LEGO+Yandex"
            }
        }
    ];

    compareBtn.addEventListener('click', function() {
        setsContainer.innerHTML = '';
        legoSets.forEach(set => {
            const setRow = document.createElement('div');
            setRow.className = 'set-row';

            const officialSet = document.createElement('div');
            officialSet.className = 'set';
            officialSet.innerHTML = `
                <img src="${set.official.image}" alt="${set.official.name}">
                <div class="set-info">${set.official.name}</div>
                <div class="price">${set.official.price}</div>
                <div class="set-info">${set.official.source}</div>
            `;

            const vs = document.createElement('div');
            vs.className = 'vs';
            vs.textContent = 'VS';

            const marketplaceSet = document.createElement('div');
            marketplaceSet.className = 'set';
            marketplaceSet.innerHTML = `
                <img src="${set.marketplace.image}" alt="${set.marketplace.name}">
                <div class="set-info">${set.marketplace.name}</div>
                <div class="price">${set.marketplace.price}</div>
                <div class="set-info">${set.marketplace.source}</div>
            `;

            setRow.appendChild(officialSet);
            setRow.appendChild(vs);
            setRow.appendChild(marketplaceSet);

            setsContainer.appendChild(setRow);
        });
    });
});
