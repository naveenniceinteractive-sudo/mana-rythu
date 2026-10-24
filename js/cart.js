// Mana Rythu - Shopping Cart & Drawer Management (Vanilla JS)

(function () {
  let cart = [];

  try {
    const saved = localStorage.getItem("mana_rythu_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    localStorage.setItem("mana_rythu_cart", JSON.stringify(cart));
    updateCartBadges();
    renderCartDrawer();
  }

  function updateCartBadges() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll(".cart-count-badge").forEach((el) => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? "inline-flex" : "none";
    });
  }

  function addToCart(product, quantity = 1, event = null) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        nameTe: product.nameTe,
        price: product.price,
        unit: product.unit,
        farmerName: product.farmerName,
        farmerLocation: product.farmerLocation,
        image: product.image,
        quantity: quantity
      });
    }
    saveCart();

    // Trigger visual notification or fly-to-cart
    showToast(`Added ${product.name} to harvest basket!`);
    openCartDrawer();
  }

  function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    saveCart();
  }

  function updateQuantity(id, delta) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
    }
  }

  function clearCart() {
    cart = [];
    saveCart();
  }

  function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const farmerShare = Math.round(subtotal * 0.72);
    const packaging = Math.round(subtotal * 0.08);
    const delivery = subtotal > 0 ? (subtotal > 400 ? 0 : 35) : 0;
    const grandTotal = subtotal + delivery;
    return { subtotal, farmerShare, packaging, delivery, grandTotal };
  }

  function renderCartDrawer() {
    const drawerItemsContainer = document.getElementById("cart-drawer-items");
    const drawerSummaryContainer = document.getElementById("cart-drawer-summary");
    const emptyState = document.getElementById("cart-drawer-empty");
    if (!drawerItemsContainer) return;

    const isTelugu = window.manaLanguage ? window.manaLanguage.isTelugu : false;
    const { subtotal, farmerShare, delivery, grandTotal } = calculateTotals();

    if (cart.length === 0) {
      drawerItemsContainer.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      if (drawerSummaryContainer) drawerSummaryContainer.style.display = "none";
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (drawerSummaryContainer) drawerSummaryContainer.style.display = "block";

    drawerItemsContainer.innerHTML = cart
      .map((item) => {
        const title = isTelugu && item.nameTe ? item.nameTe : item.name;
        return `
        <div class="cart-item-row" data-id="${item.id}">
          <img src="${item.image}" alt="${title}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${title}</h4>
            <p class="cart-item-farmer">🌱 ${item.farmerName} • ${item.farmerLocation}</p>
            <div class="cart-item-price">₹${item.price} / ${item.unit}</div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-pill">
              <button class="qty-btn" onclick="manaCart.updateQuantity('${item.id}', -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="manaCart.updateQuantity('${item.id}', 1)">+</button>
            </div>
            <button class="remove-btn" onclick="manaCart.removeFromCart('${item.id}')" title="Remove">🗑️</button>
          </div>
        </div>
      `;
      })
      .join("");

    const farmerLabel = isTelugu ? "రైతుకు చేరే వాటా (72%):" : "Direct Farmer Share (72%):";
    const subtotalLabel = isTelugu ? "ఉత్పత్తుల మొత్తం:" : "Harvest Subtotal:";
    const deliveryLabel = isTelugu ? "డెలివరీ ఛార్జీ:" : "Cold-Chain Delivery:";
    const totalLabel = isTelugu ? "మొత్తం చెల్లింపు:" : "Grand Total:";
    const freeDeliveryNote = isTelugu ? "₹400 పైబడిన ఆర్డర్లకు ఉచితం" : "Free on orders above ₹400";

    drawerSummaryContainer.innerHTML = `
      <div class="farmer-direct-banner">
        <span class="leaf-icon">🌾</span>
        <div>
          <span class="banner-title">${farmerLabel}</span>
          <span class="banner-amount">₹${farmerShare}</span>
        </div>
      </div>
      <div class="summary-breakdown">
        <div class="breakdown-row">
          <span>${subtotalLabel}</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="breakdown-row">
          <span>${deliveryLabel}</span>
          <span>${delivery === 0 ? `<span class="free-tag">${freeDeliveryNote}</span>` : `₹${delivery}`}</span>
        </div>
        <div class="breakdown-row total-row">
          <span>${totalLabel}</span>
          <span>₹${grandTotal}</span>
        </div>
      </div>
      <a href="checkout.html" class="checkout-submit-btn">
        <span>${isTelugu ? "చెల్లింపునకు వెళ్లండి (Checkout)" : "Proceed to Doorstep Checkout"}</span>
        <span>→</span>
      </a>
    `;
  }

  function openCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      renderCartDrawer();
      drawer.classList.add("open");
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  function showToast(msg) {
    let toast = document.getElementById("mana-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "mana-toast";
      toast.className = "mana-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 2400);
  }

  window.manaCart = {
    get items() {
      return cart;
    },
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateTotals,
    open: openCartDrawer,
    close: closeCartDrawer
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateCartBadges();
    const cartTriggerBtns = document.querySelectorAll(".cart-drawer-trigger");
    cartTriggerBtns.forEach((btn) => btn.addEventListener("click", openCartDrawer));

    const closeBtn = document.getElementById("cart-drawer-close");
    if (closeBtn) closeBtn.addEventListener("click", closeCartDrawer);

    const backdrop = document.getElementById("cart-backdrop");
    if (backdrop) backdrop.addEventListener("click", closeCartDrawer);

    window.addEventListener("languageChanged", () => {
      renderCartDrawer();
    });
  });
})();
