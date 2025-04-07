// High-Precision Risk Algorithm
function analyzeText(text) {
    // 1. Defamation Detection (Federal Court Rulings)
    const defamationPatterns = [
        { pattern: /\b(fraudster|scam|rip-off)\b/gi, weight: 0.9, precedent: "German Federal Court Ruling I ZR 114/17" },
        { pattern: /\b(dangerous|harmful to health)\b/gi, weight: 0.7, test: hasEvidence(text) }
    ];

    // 2. Copyright Detection (EU Directive 2019/790)
    const copyrightPatterns = [
        { pattern: /©|(?:copyright|intellectual property)/gi, weight: 0.6 },
        { pattern: /(\b[A-Z]{2,}\b).*?(?:logo|brand)/g, weight: 0.8 } // Brand names
    ];

    // 3. Result Calculation
    const results = {
        defamation: calculateRisk(defamationPatterns),
        copyright: calculateRisk(copyrightPatterns),
        privacy: detectGDPR(text) // GDPR-specific
    };

    displayResults(results);
}
