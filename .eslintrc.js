module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-essential", "@vue/eslint-config-prettier", "plugin:storybook/recommended"],
  overrides: [{
    env: {
      node: true
    },
    files: [".eslintrc.{js,cjs}"],
    parserOptions: {
      sourceType: "script"
    }
  }],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "linebreak-style": ["error", "unix"]
  }
};