export class Cart {
    constructor(totalCount) {
        this.totalCount = totalCount;
    }
    render() {
        const cartContainer = document.createElement("div");
        const title = document.createElement("p");
        const cartCount = document.createElement("p");

        cartContainer.id = "cart--container";
        title.id = "title__webpage";
        title.innerText = "@Soumik. All rights reserved.";
        cartCount.id = "cart__count";
        cartCount.innerText = this.totalCount.toString();

        cartContainer.appendChild(title);
        cartContainer.appendChild(cartCount);

        return cartContainer;
    }
}
