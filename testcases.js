// Test EU Article 17 Compliance
testScanner({
  input: "This YouTube clip contains Warner Music content",
  locale: "de-DE",
  expected: { copyright: 85, jurisdiction: "eu" }
});

// Test US Fair Use
testScanner({
  input: "Critical analysis of Disney film with 10s clips",
  locale: "en-US",
  expected: { copyright: 30, fairUse: true }
});
