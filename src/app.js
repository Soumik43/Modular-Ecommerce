import { Card } from "./components/Card.js";
import { Cart } from "./components/Cart.js";

const root = document.getElementById("root");

// Declaring global variables to access across all files.
window["totalCartCount"] = 0;
window["cartItems"] = {};

root.appendChild(new Cart(totalCartCount).render());
const cardContainer = document.createElement("div");
cardContainer.id = "rootCardContainer";

fetch("https://raw.githubusercontent.com/Soumik43/Modular-Ecommerce/main/data/products.json")
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((cardData) => {
            const newCard = new Card(cardData, totalCartCount);
            cardContainer.appendChild(newCard.render());
        });
    });

root.appendChild(cardContainer);
