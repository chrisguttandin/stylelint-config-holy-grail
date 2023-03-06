module.exports = {
    plugins: ['stylelint-order'],
    rules: {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-no-important': true,
        'declaration-property-value-no-unknown': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'length-zero-no-unit': true,
        'no-duplicate-selectors': true,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true
    }
};
