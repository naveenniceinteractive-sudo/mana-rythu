// Mana Rythu - Krishi AI Assistant (Vanilla JS)

(function () {
  const initialMessages = [
    {
      sender: "krishi",
      textEn: "Namaskaram! I am Mana Rythu Krishi AI. Ask me anything about crop diseases, organic Jeevamrutham sprays, current mandi prices vs Mana Rythu direct rates, or nutritional benefits of heirloom crops in Telugu or English.",
      textTe: "నమస్కారం! నేను మన రైతు కృషి AI. తెలుగు లేదా ఇంగ్లీషులో పంట రోగాలు, జీవామృతం తయారీ, మార్కెట్ ధరలు లేదా దేశీ విత్తనాల వివరాల గురించి ఏదైనా అడగవచ్చు.",
      badge: "Verified Agronomy Model"
    },
    {
      sender: "user",
      textEn: "How do I cure leaf curl in Guntur chillies naturally?",
      textTe: "గుంటూరు మిరప తోటలో ఆకుముడుతను సహజంగా ఎలా నివారించాలి?"
    },
    {
      sender: "krishi",
      textEn: "🌱 For chilli leaf curl (Thrips/Mites attack), avoid toxic synthetic pyrethroids. Recommended Organic Protocol:\n1. Spray 5% Neem Seed Kernel Extract (NSKE) or Agniastram at dawn.\n2. Apply Sour Buttermilk spray (500ml in 15L water) to neutralize micro-fungus.\n3. Maintain yellow sticky traps (15 per acre).",
      textTe: "🌱 మిరపలో ఆకుముడుత (నల్లి/తామర పురుగులు) నివారణకు సహజ విధానం:\n1. ఉదయాన్నే 5% వేప గింజల కషాయం (NSKE) లేదా అగ్నిఅస్త్రం పిచికారీ చేయండి.\n2. 15 లీటర్ల నీటిలో అరలీటరు పుల్లటి మజ్జిగ కలిపి పిచికారీ చేస్తే సూక్ష్మజీవులు నశిస్తాయి.\n3. ఎకరానికి 15 పసుపు రంగు జిగురు అట్టలు అమర్చండి.",
      badge: "Organic Protocol (ZBNF)"
    }
  ];

  let chatHistory = [...initialMessages];

  function renderMessages() {
    const chatContainer = document.getElementById("krishi-chat-messages");
    if (!chatContainer) return;
    const isTe = window.manaLanguage ? window.manaLanguage.isTelugu : false;

    chatContainer.innerHTML = chatHistory
      .map((msg) => {
        const text = isTe && msg.textTe ? msg.textTe : msg.textEn;
        const isUser = msg.sender === "user";
        return `
        <div class="chat-bubble-row ${isUser ? "user-row" : "bot-row"}">
          <div class="chat-bubble ${isUser ? "user-bubble" : "bot-bubble"}">
            ${
              msg.badge
                ? `<div class="chat-badge">✨ ${msg.badge}</div>`
                : ""
            }
            <div class="chat-text">${text.replace(/\n/g, "<br/>")}</div>
          </div>
        </div>
      `;
      })
      .join("");

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function handleSendPrompt(inputVal) {
    if (!inputVal.trim()) return;

    chatHistory.push({
      sender: "user",
      textEn: inputVal,
      textTe: inputVal
    });
    renderMessages();

    const inputField = document.getElementById("krishi-input-field");
    if (inputField) inputField.value = "";

    // Show typing indicator
    const typingIndicator = document.getElementById("krishi-typing-indicator");
    if (typingIndicator) typingIndicator.style.display = "flex";

    setTimeout(() => {
      let replyEn = "Thank you for asking! For this specific crop cycle, organic compost combined with regulated drip irrigation ensures maximum soil microbial density. Local farm gate prices are holding strong at ₹38-₹45/kg direct to farmer.";
      let replyTe = "ధన్యవాదాలు! ఈ పంట కాలంలో జీవామృతం మరియు డ్రిప్ పద్ధతి ద్వారా అధిక దిగుబడి సాధించవచ్చు. ప్రస్తుతం మన రైతు వేదికపై రైతులకు నేరుగా కిలోకు ₹38-₹45 అందుతోంది.";

      const lower = inputVal.toLowerCase();
      if (lower.includes("rice") || lower.includes("paddy") || inputVal.includes("వరి") || inputVal.includes("బియ్యం")) {
        replyEn = "🌾 For Single-Origin Sona Masoori Rice, ageing for 12-14 months stabilizes natural amylose for non-sticky fluffy cooking. Our Miryalaguda farmers use canal irrigation and organic Azolla bio-fertilizer.";
        replyTe = "🌾 మన సోనా మసూరి బియ్యం నాగార్జున సాగర్ కాలువ నీటితో పండించి, 14 నెలలు నిల్వ ఉంచిన పాత బియ్యం. దీనిలో తక్కువ గ్లైసెమిక్ ఇండెక్స్ ఉంటుంది.";
      } else if (lower.includes("millet") || inputVal.includes("కొర్రలు") || inputVal.includes("చిరుధాన్యం")) {
        replyEn = "Foxtail Millet (కొర్రలు) is ideal for diabetes management due to its low glycemic index (50.8) and high insoluble dietary fiber (8%). It requires 70% less water than paddy.";
        replyTe = "మధుమేహ నియంత్రణకు కొర్రలు (Foxtail Millet) అత్యుత్తమమైనవి. వీటిలో తక్కువ గ్లైసెమిక్ ఇండెక్స్ మరియు 8% పీచు పదార్థం ఉంటుంది.";
      } else if (lower.includes("price") || lower.includes("rate") || inputVal.includes("ధర")) {
        replyEn = "Traditional Mandis currently pay farmers ₹18/kg for tomatoes while charging urban consumers ₹45/kg. On Mana Rythu, the farmer receives ₹38/kg directly (72%), and the consumer pays only ₹38-₹42/kg.";
        replyTe = "సాధారణ మార్కెట్లలో రైతుకు కిలోకు కేవలం ₹18 మాత్రమే ఇస్తూ వినియోగదారులకు ₹45 కు అమ్ముతారు. మన రైతులో రైతుకు పూర్తి ₹38 లభిస్తుంది.";
      }

      if (typingIndicator) typingIndicator.style.display = "none";
      chatHistory.push({
        sender: "krishi",
        textEn: replyEn,
        textTe: replyTe,
        badge: "Krishi AI Real-Time Response"
      });
      renderMessages();
    }, 800);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderMessages();

    const form = document.getElementById("krishi-chat-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputField = document.getElementById("krishi-input-field");
        if (inputField) handleSendPrompt(inputField.value);
      });
    }

    // Quick suggestion pills
    document.querySelectorAll(".krishi-prompt-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const prompt = pill.getAttribute("data-prompt");
        if (prompt) handleSendPrompt(prompt);
      });
    });

    window.addEventListener("languageChanged", () => {
      renderMessages();
    });
  });
})();
