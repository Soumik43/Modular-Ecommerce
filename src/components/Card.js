export class Card {
    constructor(data, count) {
        this.data = data;
        this.totalCartCount = count;
        this.currCount = 0;
        this.addToCart = document.createElement("button");
    }

    incrementCount = () => {
        this.currCount++;
        this.updateCount();
    };

    decrementCount = () => {
        this.currCount === 0 ? this.currCount : this.currCount--;
        this.updateCount();
    };

    updateCount = () => {
        this.addToCart.innerText = this.currCount.toString();
        document.getElementById("cart__count").innerText = this.totalCartCount.toString();
    };

    render() {
        const container = document.createElement("div");
        const upperDiv = document.createElement("div");
        const lowerDiv = document.createElement("div");
        const titleP = document.createElement("p");
        const priceP = document.createElement("p");
        const img = document.createElement("img");
        const addToFav = document.createElement("button");
        // const addToCart = document.createElement("button");
        const buttonContainer = document.createElement("div");
        const increment = document.createElement("button");
        const decrement = document.createElement("button");

        container.className = "card--container";
        img.className = "card__image";
        priceP.className = "card__price";
        titleP.className = "card__title";

        const { thumbnail, title, price, rating, discountPercentage } = this.data;
        img.src = thumbnail;
        titleP.innerText = title;
        priceP.innerText = price;
        this.addToCart.innerText = this.currCount.toString();
        increment.innerText = "+";
        decrement.innerText = "-";
        increment.onclick = this.incrementCount;
        decrement.onclick = this.decrementCount;

        buttonContainer.appendChild(increment);
        buttonContainer.appendChild(this.addToCart);
        buttonContainer.appendChild(decrement);
        upperDiv.appendChild(img);
        lowerDiv.appendChild(titleP);
        lowerDiv.appendChild(priceP);
        lowerDiv.appendChild(buttonContainer);

        container.appendChild(upperDiv);
        container.appendChild(lowerDiv);
        return container;
    }
}
