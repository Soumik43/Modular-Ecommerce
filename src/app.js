import { Card } from "./components/Card.js";
import { Cart } from "./components/Cart.js";

const root = document.getElementById("root");

// Declaring global variables to access across all files.
// window["totalCartCount"] = 0;
// window["cartItems"] = {};

if (!localStorage.getItem("totalCartItems")) localStorage.setItem("totalCartItems", 0);

if (!localStorage.getItem("cartItems")) localStorage.setItem("cartItems", JSON.stringify({}));

root.appendChild(new Cart().render());
const cardContainer = document.createElement("div");
cardContainer.id = "rootCardContainer";

fetch("https://raw.githubusercontent.com/Soumik43/Modular-Ecommerce/main/data/products.json")
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((cardData) => {
            const newCard = new Card(cardData);
            cardContainer.appendChild(newCard.render());
        });
    });

root.appendChild(cardContainer);
