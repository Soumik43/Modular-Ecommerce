import { productsLink } from "../config/product.js";
import { Card } from "./Card.js";

export class CartHover {
    constructor(cartItems) {
        this.cartItems = cartItems;
    }
    render() {
        const container = document.createElement("div");

        container.id = "cart--hover";

        const keys = Object.keys(this.cartItems);
        fetch(productsLink)
            .then((res) => res.json())
            .then((data) => {
                const products = data.products;
                keys.forEach((item) => {
                    container.appendChild(new Card(products[item - 1]).render());
                });
            });
        return container;
    }
}
