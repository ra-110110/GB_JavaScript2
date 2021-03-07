"use strict";
//товары
class ProductList {
    constructor(container = ".products") {
        this.container = container;
        this.allProducts = [];
        this.gooods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.gooods = [{
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
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.gooods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }
    getAllProductSum() {
        let res = this.allProducts.reduce(function(price, good) {
            return price + good.price * good.quantity;
        }, 0);
        alert(`Общая сумма всех товаров на складе: ${res} рублей`);
    }
}
class ProductItem {
    constructor(product) {
        this.obj = product.obj;
        this.price = product.price;
        this.quantity = product.quantity;
        this.img = product.img;
    }
    render() {
        return `<div class='product-item'>
                <img src='${this.img}'>
                <h3>${this.obj}</h3>
                <p>Цена за шт.: ${this.price}</p>
                <p>Количество: ${this.quantity}</p>
                <button class="buy-btn">Добавить в корзину</button>
        </div>`;
    }
}

let list = new ProductList();
list.render();
list.getAllProductSum();

class Cart {
    additemToCart() {}
    deleteItemInCart() {}
    changeItemInCart() {}
    clearCart() {}
    getCartPrice() {}
}

class CartItem {}