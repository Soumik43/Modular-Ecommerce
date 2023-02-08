import { CartHover } from "./CartHover.js";

export class Card {
    constructor(data, isHover = false) {
        this.data = data;
        this.cartItemsCount = 0;
        this.isHover = isHover;
    }

    incrementCount = () => {
        let totalCartItemsCount = localStorage.getItem("totalCartItems");
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        this.cartItemsCount++;
        totalCartItemsCount++;
        cartItems[this.data.id] === undefined ? (cartItems[this.data.id] = 1) : cartItems[this.data.id]++;
        localStorage.setItem("totalCartItems", totalCartItemsCount);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        this.updateCount();
    };

    updateCount = () => {
        if (document.getElementById("root--cart--container").contains(document.getElementById("cart--hover")))
            document.getElementById("root--cart--container").removeChild(document.getElementById("cart--hover"));
        document
            .getElementById("root--cart--container")
            .appendChild(new CartHover(JSON.parse(localStorage.getItem("cartItems"))).render());
        document.getElementById("cart__count").innerHTML = `${localStorage
            .getItem("totalCartItems")
            .toString()} <img src="assets/bag.png" style="width: 2rem; height: 2rem;">`;
    };

    render() {
        const container = document.createElement("div");
        const upperDiv = document.createElement("div");
        const lowerDiv = document.createElement("div");
        const titleP = document.createElement("p");
        const originalPrice = document.createElement("p");
        const img = document.createElement("img");
        const discountedPrice = document.createElement("p");
        const priceContainer = document.createElement("div");
        const addToCart = document.createElement("button");

        container.className = "card--container";
        img.className = "card__image";
        originalPrice.className = "card__price__og";
        discountedPrice.className = "card__price__dis";
        titleP.className = "card__title";
        lowerDiv.className = "lower--div";
        upperDiv.className = "upper--div";
        priceContainer.className = "price--div";
        addToCart.className = "cart__button";

        const { thumbnail, title, price, rating, discountPercentage } = this.data;
        img.src = thumbnail;
        titleP.innerText = title;
        originalPrice.innerText = "₹" + price;
        addToCart.innerHTML = `<i class="fa fa-cart-plus" style="font-size: 1rem" ></i>`;
        discountedPrice.innerText = "₹" + Math.round(price - (discountPercentage / 100) * price).toString();
        addToCart.onclick = this.incrementCount;

        priceContainer.append(discountedPrice, originalPrice, addToCart);
        upperDiv.appendChild(img);
        lowerDiv.append(titleP, priceContainer);

        container.append(upperDiv, lowerDiv);
        return container;
    }
}
