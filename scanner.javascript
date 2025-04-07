// International Copyright Detection
const copyrightPatterns = {
    us: {
        fairUse: {
            factors: ["purpose", "nature", "amount", "effect"],
            thresholds: {
                educational: 0.7,
                parody: 0.8,
                commercial: 0.3
            }
        },
        dmca: {
            takedownKeywords: ["copyright strike", "Content ID", "DMCA"],
            penaltyScore: 0.9
        }
    },
    eu: {
        article17: {
            platforms: ["YouTube", "TikTok", "Instagram"],
            filters: ["audio", "video", "thumbnails"],
            penaltyScore: 0.85
        }
    },
    asia: {
        china: {
            keyword: "国家版权局", // National Copyright Administration
            penalty: 1.0
        },
        japan: {
            jasracKeywords: ["JASRAC", "日本音楽著作権協会"],
            penaltyScore: 0.75
        }
    }
};

function detectInternationalCopyright(text, locale = 'en-US') {
    // 1. Detect jurisdiction
    const jurisdiction = detectUserJurisdiction(locale);
    
    // 2. Apply region-specific rules
    const regionRules = copyrightPatterns[jurisdiction.region] || copyrightPatterns.us;
    
    // 3. Calculate risk
    let riskScore = 0;
    
    // US DMCA Detection
    if (jurisdiction.region === 'us') {
        riskScore += text.match(/copyright infringement/i) ? regionRules.dmca.penaltyScore : 0;
    }
    
    // EU Article 17 Filter
    if (jurisdiction.region === 'eu') {
        riskScore += text.match(new RegExp(regionRules.article17.filters.join('|'), 'i')) 
            ? regionRules.article17.penaltyScore 
            : 0;
    }
    
    // 4. Normalize score (0-100)
    return Math.min(100, Math.floor(riskScore * 100));
}
