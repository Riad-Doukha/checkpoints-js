class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
        this.updateCartUI();
    }

    removeItem(productId) {
        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem.quantity>1) {
            existingItem.quantity -= 1;
        } else {
            this.items = this.items.filter(item => item.product.id !== productId);
        }
        this.updateCartUI();
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    updateCartUI() {
        const cartList = document.getElementById("cart-items");
        cartList.innerHTML = "";
        this.items.forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${item.product.name} (x${item.quantity}): $${item.getTotalPrice()}`;
            cartList.appendChild(li);
        });
        document.getElementById("total-price").textContent = `$${this.getTotalPrice()}`;
    }
}

// adding the elements created to the HTML file (inspired by React.js)

const products = [
    new Product(1, "Baskets", 100),
    new Product(2, "Socks", 20),
    new Product(3, "Bag", 50)
];

const cart = new ShoppingCart();

function renderProducts() {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4 mb-3";
        productCard.innerHTML = `
          <div class="card-body">
            <div class="card" style="width: 18rem">
              <img
                src="/assets/${product.name}.png"
                class="card-img-top"
                alt="baskets"
                height="250px"
                width="250px"
              />
              <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-text">This is a ${product.name}</p>
                <h4 class="unit-price">${product.price} $</h4>
                <div>
                  <button class="btn btn-success" onclick="cart.addItem(products[${product.id - 1}])">Add to Cart</button>
                  <button class="btn btn-success" onclick="cart.removeItem(${product.id})">Remove from Cart</button>
                </div>
              </div>
            </div>
          </div>
        `;
        productContainer.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);