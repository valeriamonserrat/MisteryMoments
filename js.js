document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.getElementById("cart-btn");
    const cartDropdown = document.getElementById("cart-dropdown");
    const cartItemsList = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    let cart = [];

    cartBtn.addEventListener("click", function () {
        cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
        });
        cartCount.textContent = cart.length;
    }

    document.getElementById("checkout-btn").addEventListener("click", function () {
        alert("Compra realizada con éxito");
        cart = [];
        updateCart();
        cartDropdown.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (!cartBtn.contains(event.target) && !cartDropdown.contains(event.target)) {
            cartDropdown.style.display = "none";
        }
    });
});
