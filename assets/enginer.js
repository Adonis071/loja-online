
let productPrice = 100;
let cartQuantity = 0;
let cartTotal = 0;

function addToCart() {
    cartQuantity += 1;
    cartTotal += productPrice;

    document.getElementById(`cartQuantity`).textContent =
     `Quantidade de produtos: `+ cartQuantity;
     document.getElementById(`cartTotal`).textContent =
     `Valor total: `+cartTotal.toFixed(2);
}




