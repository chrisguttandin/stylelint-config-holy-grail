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
        'indentation': 4,
        'length-zero-no-unit': true,
        'linebreaks': 'unix',
        'max-empty-lines': 1,
        'no-duplicate-selectors': true,
        'no-eol-whitespace': true,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true,
        'selector-list-comma-space-before': 'never'
    }
};
