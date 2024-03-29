module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'prettier/prettier': true,
    "custom-property-pattern": null,
    "selector-class-pattern": "^[a-z][a-z0-9_-]+$",
  }
};
