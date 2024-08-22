document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            const productName = productItem.querySelector('h3').innerText;
            const productPrice = parseFloat(productItem.getAttribute('data-price'));

            // Add item to cart
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ฿${productPrice}`;
            cartItems.appendChild(cartItem);

            // Update total
            total += productPrice;
            cartTotal.textContent = total.toFixed(2);
        });
    });

    // Checkout functionality (for demonstration purposes)
    document.getElementById('checkout').addEventListener('click', () => {
        if (total > 0) {
            alert(`Your total is ฿${total.toFixed(2)}. Thank you for your purchase!`);
            // Reset cart
            cartItems.innerHTML = '';
            total = 0;
            cartTotal.textContent = total.toFixed(2);
        } else {
            alert('Your cart is empty.');
        }
    });
});