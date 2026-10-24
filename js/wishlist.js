// Mana Rythu - Wishlist Management (Vanilla JS)

(function () {
  let wishlist = [];

  try {
    const saved = localStorage.getItem("mana_rythu_wishlist");
    if (saved) wishlist = JSON.parse(saved);
  } catch (e) {
    wishlist = [];
  }

  function saveWishlist() {
    localStorage.setItem("mana_rythu_wishlist", JSON.stringify(wishlist));
    updateWishlistBadges();
  }

  function updateWishlistBadges() {
    const totalCount = wishlist.length;
    document.querySelectorAll(".wishlist-count-badge").forEach((el) => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? "inline-flex" : "none";
    });
  }

  function toggleWishlist(product) {
    const idx = wishlist.findIndex((item) => item.id === product.id);
    if (idx >= 0) {
      wishlist.splice(idx, 1);
    } else {
      wishlist.push(product);
    }
    saveWishlist();
    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: { wishlist } }));
  }

  function isInWishlist(id) {
    return wishlist.some((item) => item.id === id);
  }

  window.manaWishlist = {
    get items() {
      return wishlist;
    },
    toggle: toggleWishlist,
    has: isInWishlist
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateWishlistBadges();
  });
})();
