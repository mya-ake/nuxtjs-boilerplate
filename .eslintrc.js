module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'error',
    'default-case': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': 'warn',
    'no-implicit-coercion': 'error',
    'no-mixed-operators': 'error',
    'no-var': 'error',
  },
  globals: {},
}
