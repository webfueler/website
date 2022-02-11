module.exports = {
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  rules: {
    "no-multiple-empty-lines": [2, { max: 1 }],
    "no-use-before-define": [0],
    "@typescript-eslint/no-use-before-define": [1],
    "@typescript-eslint/unbound-method": 2,
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-unused-vars": ["warn"],
  },
  env: {
    browser: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module"
  }
};
