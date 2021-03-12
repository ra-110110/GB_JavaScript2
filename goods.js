"use strict";
//товары
const API =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class List {
    constructor(url, container, list = list2) {
        this.container = container;
        this.list = list;
        this.url = url;
        this.goods = [];
        this.allProducts = [];
        this._init();
    }
    getJson(url) {
        return fetch(url ? url : `${API + this.url}`)
            .then((result) => result.json())
            .catch((error) => {
                console.log(error);
            });
    }
    handleData(data) {
        this.goods = [...data];
        this.render();
    }
    getAllProductSum() {
        let res = this.allProducts.reduce((sum, good) => (sum += good.price), 0);
        alert(res);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            console.log(this.constructor.name);
            const productObj = new this.list[this.constructor.name](product);
            console.log(productObj);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }
    _init() {
        return false;
    }
}
class Item {
    constructor(el, img = "https://placehold.it/200x150") {
        this.product_name = el.product_name;
        this.price = el.price;
        this.id_product = el.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Добавить в корзину</button>
                </div>
            </div>`;
    }
}

class ProductsList extends List {
    constructor(cart, container = ".products", url = "/catalogData.json") {
        super(url, container);
        this.cart = cart;
        this.getJson().then((data) => this.handleData(data));
    }
    _init() {
        document.querySelector(this.container).addEventListener("click", (el) => {
            if (el.target.classList.contains("buy-btn")) {
                console.log(el.target);
            }
        });
    }
}

class ProductItem extends Item {}

class Cart extends List {
    constructor(container = ".cart-block", url = "/getBasket.json") {
        super(url, container);
        this.getJson().then((data) => {
            this.handleData(data.contents);
        });
    }
    additemToCart() {}
    deleteItemInCart() {}
    changeItemInCart() {}
    clearCart() {}
    getCartPrice() {}
    _init() {
        document.querySelector(".btn-cart").addEventListener("click", () => {
            document.querySelector(this.container).classList.toggle("invisible");
        });
        document.querySelector(this.container).addEventListener("click", (el) => {
            if (el.target.classList.contains("del-btn")) {
                console.log(el.target);
            }
        });
    }
}

class CartItem extends Item {
    constructor(el, img = "https://placehold.it/50x100") {
        super(el, img);
        this.quantity = el.quantity;
    }
    render() {
        return `<div class="cart-item" data-id="${this.id_product}">
            <div class="product-bio">
            <img src="${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.product_name}</p>
            <p class="product-quantity">Quantity: ${this.quantity}</p>
        <p class="product-single-price">$${this.price} for one</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">$${this.quantity * this.price}</p>
            <button class="del-btn" data-id="${
              this.id_product
            }">&times;</button>
        </div>
        </div>`;
    }
}
const list2 = {
    ProductsList: ProductItem,
    Cart: CartItem,
};
let cart = new Cart();
let products = new ProductsList(cart);