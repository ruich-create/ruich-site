// Cart functionality
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const sidebar = document.querySelector('.cart-sidebar');
const toggleCart = document.querySelector('a[href="#cart"]');

// Add to cart
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tile = btn.closest('.product-tile');
        const itemName = tile.querySelector('h3').textContent;
        const price = parseInt(tile.querySelector('.price').textContent.replace(/[^\d]/g, ''));
        const item = { name: itemName, price: price, qty: 1 };

        const existing = cart.find(i => i.name === item.name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push(item);
        }
        updateCart();
    });
});

// Update cart display
function updateCart() {
    cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            ${item.name} x${item.qty} <span>RWF ${item.price * item.qty}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
    `).join('');
    cartTotal.textContent = `Total: RWF ${cart.reduce((sum, i) => sum + (i.price * i.qty), 0)}`;
}

// Remove from cart
function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    updateCart();
}

// Toggle cart
toggleCart.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('open');
});

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert(`Order total: RWF ${cartTotal.textContent.split(': ')[1]}! Redirecting to payment... (Mock - integrate Stripe later)`);
    } else {
        alert('Cart empty! Add items first.');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order sent to RUICH! Check email for confirmation. Murakaza neza!');
    e.target.reset();
});