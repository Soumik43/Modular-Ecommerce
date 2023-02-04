export class Card {
    constructor(data) {
        this.data = data;
        this.cartItemsCount = 0;
        this.addToCart = document.createElement("button");
    }

    incrementCount = () => {
        this.cartItemsCount++;
        window["totalCartCount"]++;
        window["cartItems"][this.data.id] === undefined
            ? (window["cartItems"][this.data.id] = [])
            : window["cartItems"][this.data.id].push(this.data);
        console.log(window["cartItems"]);
        this.updateCount();
    };

    updateCount = () => {
        this.addToCart.innerText = this.cartItemsCount.toString();
        document.getElementById("cart__count").innerText = window["totalCartCount"].toString();
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

        container.className = "card--container";
        img.className = "card__image";
        originalPrice.className = "card__price";
        titleP.className = "card__title";
        lowerDiv.className = "lower--div";
        upperDiv.className = "upper--div";
        priceContainer.className = "price--div";
        this.addToCart.className = "cart__button";

        const { thumbnail, title, price, rating, discountPercentage } = this.data;
        img.src = thumbnail;
        titleP.innerText = title;
        originalPrice.innerText = "₹" + price;
        this.addToCart.innerHTML = `<i class="fa fa-cart-plus" style="font-size: 1rem" ></i>`;
        discountedPrice.innerText = "₹" + Math.round(price - (discountPercentage / 100) * price).toString();
        this.addToCart.onclick = this.incrementCount;

        priceContainer.append(originalPrice, discountedPrice, this.addToCart);
        upperDiv.appendChild(img);
        lowerDiv.append(titleP, priceContainer);

        container.append(upperDiv, lowerDiv);
        return container;
    }
}
