const config = {
  clearMocks: true, collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  "jest": {
    "setupFiles": ["<rootDir>/jest.setup.js"]
  }
};



module.exports = config
