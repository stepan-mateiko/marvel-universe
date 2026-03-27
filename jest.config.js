module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|avif)$": "<rootDir>/test/__mocks__/fileMock.js"
  },
  testPathIgnorePatterns: ["/node_modules/", "/build/"]
};
