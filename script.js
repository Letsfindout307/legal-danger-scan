const riskKeywords = [
  { keyword: "scammer", risk: "❌ Dangerous – Possible Defamation" },
  { keyword: "fraud", risk: "❌ Dangerous – Defamation or False Accusation" },
  { keyword: "stole my idea", risk: "⚠️ Risky – Defamation Potential" },
  { keyword: "free Disney movie", risk: "❌ Dangerous – Copyright Violation" },
  { keyword: "download full movie", risk: "❌ Dangerous – Copyright Violation" },
  { keyword: "I'll ruin you", risk: "❌ Dangerous – Threatening Language" },
  { keyword: "burn your business", risk: "❌ Dangerous – Threatening Language" },
];

function checkRisk() {
  const input = document.getElementById('userInput').value.toLowerCase();
  let resultText = "✅ Safe – Unlikely to cause legal issues.";

  for (let item of riskKeywords) {
    if (input.includes(item.keyword.toLowerCase())) {
      resultText = item.risk;
      break;
    }
  }

  document.getElementById('result').innerText = resultText;
}
