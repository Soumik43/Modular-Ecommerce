export class Cart {
    render() {
        const cartContainer = document.createElement("div");
        const title = document.createElement("p");
        const cartCount = document.createElement("p");

        cartContainer.id = "cart--container";
        title.id = "title__webpage";
        title.innerText = "@Soumik. All rights reserved.";
        cartCount.id = "cart__count";
        cartCount.innerHTML = `(₹${localStorage.getItem("cartItemsTotal")})  ${localStorage
            .getItem("totalCartItems")
            .toString()} <img src="assets/bag.png" id="cart__icon" style="width: 2rem; height: 2rem;">`;

        cartContainer.append(title, cartCount);

        return cartContainer;
    }
}
