module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module" // Allows for the use of imports
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/ban-ts-comment": "off",
    "react/prop-types": "off"
  }
}
