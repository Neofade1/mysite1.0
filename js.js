document.addEventListener('DOMContentLoaded', function() {
    const compareBtn = document.getElementById('compare-btn');
    const setsContainer = document.getElementById('sets-container');
    // Пример данных — замени на свои ссылки и картинки!
    const legoSets = [
        {
            official: {
                name: "Ford Bronco SUV",
                price: "9600 ₽",
                source: "Официальный сайт LEGO",
                image: "https://static.mir-kubikov.ru/upload/iblock/0b1/x1_630-370-4xj8wfqo8zyc9093e1vse5hpikxfui0g.jpg",
                url: "https://mir-kubikov.ru/catalog/42213"
            },
            marketplace: {
                name: "Ford Bronco SUV",
                price: "6000 ₽",
                source: "Wildberries",
                image: "https://nsk-basket-cdn-04.geobasket.ru/vol5250/part525001/525001835/images/big/1.webp",
                url: "https://www.wildberries.ru/catalog/525001835/detail.aspx",
            }
        },
        {
            official: {
                name: "LEGO Hero",
                price: "9000 ₽",
                source: "Официальный сайт LEGO",
                image: "https://mir-kubikov.ru/upload/resize_cache/iblock/60a/746_580_1/txl2bjh9ggoniphf1pjuxv446m2jyx75.jpg",
                url: "https://mir-kubikov.ru/catalog/76321"
            },
            marketplace: {
                name: "LEGO Hero",
                price: "4000 Р",
                source: "OZON",
                image: "https://nsk-basket-cdn-07.geobasket.ru/vol5379/part537949/537949634/images/big/1.webp",
                url: "https://www.ozon.ru/product/lego-marvel-super-heroes-76321-stsena-v-poezde-metro-chelovek-pauk-protiv-doktora-osminoga-2789183844/?at=mqtk4124wh0XDjLYfWMJ8WPsXEkLnNsKMnzYLSmRnB4r",
            }
        },
        {
            official: {
                name: "LEGO Star Wars",
                price: "17000 ₽",
                source: "Официальный сайт LEGO",
                image: "https://static.mir-kubikov.ru/upload/iblock/520/x1_310-230-e4ioiat74eqeka0dfxhvpjg6hcgg6ghr.jpg",
                url: "https://mir-kubikov.ru/catalog/75416",
            },
            marketplace: {
                name: "LEGO Star Wars",
                price: "5100 ₽",
                source: "Яндекс Маркет",
                image: "https://avatars.mds.yandex.net/get-mpic/5252557/2a00000199ade2d47c46a68b1740bd03f835/180x240",
                url: "https://market.yandex.ru/card/konstruktor-astromekhanicheskiy-droid-chopper-c1-10p-1039-det-65640/4705396180?do-waremd5=D86IT-oFLWFU2wLaf3fzFA&cpc=RZ1c2kTsMAwhwrBDyAKAD2q8CiFey74jzDrgCY4M_UR41Ku4tqF2uoCEQfuS5sc6cCZimoQ8YO4_Nwz_ymVVzCpgkKK_J4YE6jYdVZhmTOXadOAfJ_WU9Aw6cnIpK_ZGKH5NGtDkfnGedTspiQ7aNyOTm_smkcag0JsMZ0mTxpy7yvcIH-noqlqAkLVmw7u5FeWvzn_bUl3LiYOlSKG418Q0v3kddMW9skucMCE5t0JC_OFZxwbZEQP769h4JptTc4bw6Ok38mwqFzZojRRNwJu28PqkVI-O8kxRd3ssHQ3CSRy7QtvxCkHcAm1szLWIL02DBRJw43SDVwNyzAwR647YSyT4IVWv3xsRRW4MrpEZAzwXrMFWioVb9lCyj2KuRjwd6di57Nu8n4EDYpJQMoJbGzZTHbiOFw19B93O6k1bQM9bsqCrB5D7UKCXrueHht3WaeR--dk7SOXxswtSr6Qgfi6eEKHiJoBwjZJQDwGYU4qhdHHl2mW5edu1kjBl2PTqC8ra9gce_ficy9aKib7-lEOD9etIBp5FuTkn1EgCNgdwbpw_F9PZPzhImv_cfFu9CY7fISUJ2z7r_ZJr8VOyMr0TucmmthzUVangOmv7fbTL5WFZI9s8nXUm5Zd9iEF4UBY8w_sKAlf4n3Y1sXqKZfQ_1WkZLe0WChqTrbtKrje-8lG7Qj2fpTqcykpa&ogV=-6",
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
                <div class="set-info"><a href="${set.official.url}" target="_blank" class="store-link">${set.official.source}</a></div>
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
                <div class="set-info"><a href="${set.marketplace.url}" target="_blank" class="store-link">${set.marketplace.source}</a></div>
            `;

            setRow.appendChild(officialSet);
            setRow.appendChild(vs);
            setRow.appendChild(marketplaceSet);

            setsContainer.appendChild(setRow);
        });
    });

    const burgerIcon = document.querySelector('.burger-icon');
    const burgerContent = document.querySelector('.burger-content');

    burgerIcon.addEventListener('click', function() {
        if (burgerContent.style.display === 'block') {
            burgerContent.style.display = 'none';
        } else {
            burgerContent.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.burger-menu')) {
            burgerContent.style.display = 'none';
        }
    });
});
