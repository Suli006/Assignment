// Define an array to hold the cart items
let cart = [];

// Function to add an item to the cart
function addToCart(productName, price, imageUrl) {
    cart.push({ name: productName, price: price, image: imageUrl });
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Cart is empty</p>';
    } else {
        // Display each item in the cart
        cart.forEach((item, index) => {
            cartElement.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name} - $${item.price}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
    }
}