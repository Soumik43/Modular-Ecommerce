import { Card } from "./components/Card.js";
import { Cart } from "./components/Cart.js";

const root = document.getElementById("root");

export let totalCartCount = 0;

root.appendChild(new Cart(totalCartCount).render());
const cardContainer = document.createElement("div");
cardContainer.id = "rootCardContainer";

fetch("https://raw.githubusercontent.com/Soumik43/Modular-Ecommerce/main/data/products.json")
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((cardData) => {
            cardContainer.appendChild(new Card(cardData, totalCartCount).render());
        });
    });

root.appendChild(cardContainer);
