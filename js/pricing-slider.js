// Mana Rythu - Smart Transparent Pricing Calculator (Vanilla JS)

(function () {
  function updatePricingCalculator() {
    const slider = document.getElementById("pricing-slider");
    if (!slider) return;

    const basketVal = parseInt(slider.value, 10);
    const basketDisplay = document.getElementById("pricing-slider-val");
    if (basketDisplay) basketDisplay.textContent = `₹${basketVal}`;

    // Mana Rythu Breakdown (72% to farmer)
    const manaFarmer = Math.round(basketVal * 0.72);
    const manaPackaging = Math.round(basketVal * 0.08);
    const manaDelivery = Math.round(basketVal * 0.12);
    const manaPlatform = Math.round(basketVal * 0.08);

    // Traditional Mandi (24% to farmer, 58% to middlemen, 18% spoilage)
    const mandiFarmer = Math.round(basketVal * 0.24);
    const mandiMiddlemen = Math.round(basketVal * 0.58);
    const mandiWastage = Math.round(basketVal * 0.18);

    const delta = manaFarmer - mandiFarmer;

    // Update DOM elements
    const manaFarmerEl = document.getElementById("mana-farmer-share");
    if (manaFarmerEl) manaFarmerEl.textContent = `₹${manaFarmer}`;

    const mandiFarmerEl = document.getElementById("mandi-farmer-share");
    if (mandiFarmerEl) mandiFarmerEl.textContent = `₹${mandiFarmer}`;

    const mandiMiddlemenEl = document.getElementById("mandi-middlemen-share");
    if (mandiMiddlemenEl) mandiMiddlemenEl.textContent = `₹${mandiMiddlemen}`;

    const deltaEl = document.getElementById("farmer-extra-gain");
    if (deltaEl) deltaEl.textContent = `+₹${delta}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("pricing-slider");
    if (slider) {
      slider.addEventListener("input", updatePricingCalculator);
      updatePricingCalculator();
    }
  });
})();
