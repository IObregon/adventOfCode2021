module.exports = {
  clearMocks: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|mjs?)$",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "mjs"]
}