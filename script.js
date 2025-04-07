const riskKeywords = [
  { keyword: "scammer", risk: "❌ Dangerous – Possible Defamation" },
  { keyword: "fraud", risk: "❌ Dangerous – False Accusation" },
  { keyword: "stole my idea", risk: "⚠️ Risky – Defamation Potential" },
  { keyword: "free Disney movie", risk: "❌ Dangerous – Copyright Violation" },
  { keyword: "download full movie", risk: "❌ Dangerous – Copyright Violation" },
  { keyword: "I'll ruin you", risk: "❌ Dangerous – Threatening Language" },
  { keyword: "burn your business", risk: "❌ Dangerous – Threatening Language" },
];

function checkRisk() {
  const input = document.getElementById('userInput').value.toLowerCase();
  const resultBox = document.getElementById('result');
  resultBox.classList.add('hidden');
  resultBox.classList.remove('visible');

  let resultText = "✅ Safe – Unlikely to cause legal issues.";

  for (let item of riskKeywords) {
    if (input.includes(item.keyword)) {
      resultText = item.risk;
      break;
    }
  }

  setTimeout(() => {
    resultBox.textContent = resultText;
    resultBox.classList.remove('hidden');
    resultBox.classList.add('visible');
  }, 100);
}
