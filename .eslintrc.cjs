/* eslint-disable no-undef */
module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended"],
  overrides: [{
    files: ["**/src/**/*.test.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "indent": ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "i18next/no-literal-string": ["warn", {
      markupOnly: true
    }],
    "@typescript-eslint/ban-ts-comment": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "warn"
  }
};