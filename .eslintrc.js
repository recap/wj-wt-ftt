module.exports = {
  plugins: ["@typescript-eslint"],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-import-module-exports": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-unused-vars": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/self-closing-comp": "off",
    "import/order": "off",
    "react/destructuring-assignment": "off",
    "promise/catch-or-return": "off",
    "promise/always-return": "off",
    camelcase: "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/require-default-props": "off",
    "spaced-comment": "off",
    "prefer-destructuring": "off",
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      typescript: {},
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
