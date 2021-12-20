/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    "\\.[jt]sx?$": [
      "esbuild-jest",
      {
        loaders: {
          ".spec.js": "jsx",
          ".js": "jsx",
        },
      },
    ],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/types/", "/ignored/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
};
