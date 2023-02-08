import { Card } from "./components/Card.js";
import { Cart } from "./components/Cart.js";
import { CartHover } from "./components/CartHover.js";
import { productsLink } from "./config/product.js";

const root = document.getElementById("root");

if (!localStorage.getItem("totalCartItems")) localStorage.setItem("totalCartItems", 0);

if (!localStorage.getItem("cartItems")) localStorage.setItem("cartItems", JSON.stringify({}));

root.appendChild(new Cart().render());
const cardContainer = document.createElement("div");
cardContainer.id = "root--cart--container";

fetch(productsLink)
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach((cardData) => {
            const newCard = new Card(cardData);
            cardContainer.appendChild(newCard.render());
        });
    });

cardContainer.appendChild(new CartHover(JSON.parse(localStorage.getItem("cartItems"))).render());

root.append(cardContainer);
