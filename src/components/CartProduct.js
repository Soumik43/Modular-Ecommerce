import { productsLink } from "../config/product.js";

export class CartProducts {
    constructor(cartItems) {
        this.cartItems = cartItems;
    }
    render() {
        const container = document.createElement("div");
        container.id = "cart--products";
        const keys = Object.keys(this.cartItems);
        const cartTitle = document.createElement("p");
        cartTitle.innerText = "Cart Items";
        cartTitle.id = "cart__products__heading__title";
        container.appendChild(cartTitle);
        fetch(productsLink)
            .then((res) => res.json())
            .then((data) => {
                const products = data.products;
                keys.forEach((id) => {
                    const cartDesc = document.createElement("div");
                    const title = document.createElement("p");
                    const price = document.createElement("p");
                    const quantity = document.createElement("p");
                    const product = products.find((ele) => ele.id.toString() === id);
                    const hr = document.createElement("hr");
                    hr.className = "solid";
                    title.className = "cart__product__title";
                    price.className = "cart__product__price";
                    quantity.className = "cart__product__quantity";
                    quantity.innerText = `(x${this.cartItems[id]})`;
                    title.innerText = product.title;
                    price.innerText =
                        "₹" +
                        (
                            this.cartItems[id] *
                            Math.round(product.price - (product.discountPercentage / 100) * product.price)
                        ).toString();
                    cartDesc.append(title, quantity, price, hr);
                    container.appendChild(cartDesc);
                });
            });
        return container;
    }
}
