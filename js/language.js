// Mana Rythu - Language Switching System (English & Telugu)

(function () {
  let currentLang = localStorage.getItem("mana_rythu_lang") || "en";

  function getNestedTranslation(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("mana_rythu_lang", lang);
    document.documentElement.lang = lang;

    // Update buttons
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
      langBtn.innerHTML = `
        <span class="lang-icon">🌐</span>
        <span class="lang-text">${lang === "en" ? "తెలుగు" : "English"}</span>
      `;
    }

    // Update mobile lang button if present
    const mobileLangBtn = document.getElementById("mobile-lang-btn");
    if (mobileLangBtn) {
      mobileLangBtn.innerHTML = `
        <span class="lang-icon">🌐</span>
        <span class="lang-text">${lang === "en" ? "తెలుగుకి మారండి" : "Switch to English"}</span>
      `;
    }

    const dict = translations[lang] || translations.en;

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = getNestedTranslation(dict, key);
      if (translation) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translation;
        } else {
          el.innerHTML = translation;
        }
      }
    });

    // Update Telugu font class on root or body
    if (lang === "te") {
      document.body.classList.add("lang-te");
    } else {
      document.body.classList.remove("lang-te");
    }

    // Fire event for dynamic grids
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  function toggleLanguage() {
    const nextLang = currentLang === "en" ? "te" : "en";
    applyLanguage(nextLang);
  }

  window.manaLanguage = {
    get current() {
      return currentLang;
    },
    get isTelugu() {
      return currentLang === "te";
    },
    set: applyLanguage,
    toggle: toggleLanguage,
    t: (key) => {
      const dict = translations[currentLang] || translations.en;
      return getNestedTranslation(dict, key) || key;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);

    const toggleBtn = document.getElementById("lang-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleLanguage);
    }
    const mobileToggleBtn = document.getElementById("mobile-lang-btn");
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener("click", toggleLanguage);
    }
  });
})();
