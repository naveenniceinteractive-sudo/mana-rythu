// Mana Rythu - Seasonal Harvest Tabs Switcher (Vanilla JS)

(function () {
  const seasonsData = {
    kharif: {
      id: "kharif",
      nameEn: "Kharif (Monsoon Harvest)",
      nameTe: "ఖరీఫ్ (వర్షాకాల పంటలు)",
      period: "June – October",
      crops: [
        { name: "Paddy & Sona Masoori", nameTe: "వరి & సోనా మసూరి", icon: "🌾" },
        { name: "Native Sweet Corn", nameTe: "నాటు మొక్కజొన్న", icon: "🌽" },
        { name: "Red Gram (Toor)", nameTe: "నాటు కందులు", icon: "🫘" },
        { name: "Monsoon Leafy Greens", nameTe: "తోటకూర & గోంగూర", icon: "🥬" }
      ],
      benefitEn: "Monsoon crops replenish vital gut microbiome and balance digestive heat.",
      benefitTe: "వర్షాకాలంలో పండే ఆకుకూరలు మరియు పప్పుధాన్యాలు శరీర రోగనిరోధక శక్తిని పెంచుతాయి.",
      themeBg: "#0B291B",
      accent: "#80BC41"
    },
    rabi: {
      id: "rabi",
      nameEn: "Rabi (Winter Dew Harvest)",
      nameTe: "రబీ (శీతాకాల పంటలు)",
      period: "November – March",
      crops: [
        { name: "Country Heirloom Tomatoes", nameTe: "గుంటూరు నాటు టమాటాలు", icon: "🍅" },
        { name: "Native Purple Brinjal", nameTe: "గుత్తి వంకాయ", icon: "🍆" },
        { name: "Tender Palakura Spinach", nameTe: "మంచు పాలకూర", icon: "🥬" },
        { name: "Stone-Ground Mustard", nameTe: "ఆవాలు & జీలకర్ర", icon: "🌿" }
      ],
      benefitEn: "Winter harvests concentrate natural sugars (high Brix) and therapeutic lycopene.",
      benefitTe: "చలికాలం మంచు బిందువులతో టమాటాల్లో సహజ తీపి మరియు యాంటీఆక్సిడెంట్లు పుష్కలంగా ఉంటాయి.",
      themeBg: "#123B28",
      accent: "#E8AE42"
    },
    zaid: {
      id: "zaid",
      nameEn: "Zaid (Summer Sweet Harvest)",
      nameTe: "జాయద్ (వేసవి కాల పంటలు)",
      period: "April – June",
      crops: [
        { name: "Royal Banganapalli Mangoes", nameTe: "బంగినపల్లి మామిడి", icon: "🥭" },
        { name: "Village Watermelon", nameTe: "నాటు పుచ్చకాయ", icon: "🍉" },
        { name: "Crisp Native Cucumber", nameTe: "సహజ దోసకాయ", icon: "🥒" },
        { name: "Muskmelon (Kharbuja)", nameTe: "కర్బూజ పండ్లు", icon: "🍈" }
      ],
      benefitEn: "Summer fruits deliver high electrolyte content and cellular cooling hydration.",
      benefitTe: "వేసవిలో శరీరానికి చలువ చేసే సహజ నీటి శాతం, ఎలక్ట్రోలైట్లు సమృద్ధిగా లభిస్తాయి.",
      themeBg: "#2B2011",
      accent: "#F59E0B"
    }
  };

  let activeSeason = "rabi";

  function renderSeason() {
    const section = document.getElementById("seasonal-harvest");
    const container = document.getElementById("season-content-container");
    if (!section || !container) return;

    const data = seasonsData[activeSeason];
    const isTe = window.manaLanguage ? window.manaLanguage.isTelugu : false;

    section.style.backgroundColor = data.themeBg;

    container.innerHTML = `
      <div class="season-banner-card">
        <div class="season-title-row">
          <h3 class="season-title">${isTe ? data.nameTe : data.nameEn}</h3>
          <span class="season-period-badge">📅 ${data.period}</span>
        </div>
        <p class="season-benefit">${isTe ? data.benefitTe : data.benefitEn}</p>
        <div class="season-crops-grid">
          ${data.crops
            .map(
              (c) => `
            <div class="season-crop-card">
              <span class="crop-emoji">${c.icon}</span>
              <span class="crop-name">${isTe ? c.nameTe : c.name}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    document.querySelectorAll(".season-tab-btn").forEach((btn) => {
      if (btn.getAttribute("data-season") === activeSeason) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".season-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSeason = btn.getAttribute("data-season");
        renderSeason();
      });
    });
    renderSeason();

    window.addEventListener("languageChanged", () => {
      renderSeason();
    });
  });
})();
