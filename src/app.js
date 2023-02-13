import { Card } from "./components/Card.js";
import { Cart } from "./components/Cart.js";
import { productsLink } from "./config/product.js";
import { CartProducts } from "./components/CartProduct.js";

const root = document.getElementById("root");

if (!localStorage.getItem("totalCartItems")) localStorage.setItem("totalCartItems", 0);
if (!localStorage.getItem("cartItems")) localStorage.setItem("cartItems", JSON.stringify({}));
if (!localStorage.getItem("cartItemsTotal")) localStorage.setItem("cartItemsTotal", 0);

root.appendChild(new Cart().render());
const cardContainer = document.createElement("div");
const wholeContainer = document.createElement("div");
wholeContainer.id = "whole--container";
cardContainer.id = "root--cart--container";

fetch(productsLink)
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((cardData) => {
            const newCard = new Card(cardData);
            cardContainer.appendChild(newCard.render());
        });
    });

wholeContainer.append(cardContainer, new CartProducts(JSON.parse(localStorage.getItem("cartItems"))).render());
root.append(wholeContainer);
