"use strict";
//товары
const products = [{
        id: 1,
        obj: "Laptop",
        price: 15000,
        quantity: 2,
        img: "https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/email-laptop-256.png",
    },
    {
        id: 2,
        obj: "RAM",
        price: 5000,
        quantity: 2,
        img: "https://cdn1.iconfinder.com/data/icons/computer-hardware-529/64/Processor-chip-cpu-memory-ram-256.png",
    },
    {
        id: 3,
        obj: "HDD",
        price: 8000,
        quantity: 3,
        img: "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/devices/hdd_mount.png",
    },

    {
        id: 3,
        obj: "Mouse",
        price: 500,
        quantity: 13,
        img: "https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F401-mouse-256.png",
    },
];

//верстка
const renderProduct = (product) => {
    return `<div class='product-item'>
                <img src='${product.img}'>
                <h3>${product.obj}</h3>
                <p>Цена за шт.: ${product.price}</p>
                <p>Количество: ${product.quantity}</p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`;
};

function renderPage(products_list) {
    document.querySelector(".products").innerHTML = products_list
        .map((item) => renderProduct(item))
        .join("");
}

renderPage(products);