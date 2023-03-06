module.exports = {
    plugins: ['stylelint-order'],
    rules: {
        'annotation-no-unknown': true,
        'at-rule-no-unknown': true,
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'comment-no-empty': true,
        'custom-property-no-missing-var-function': true,
        'declaration-block-no-duplicate-custom-properties': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-no-important': true,
        'declaration-property-value-no-unknown': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-no-unknown': true,
        'keyframe-block-no-duplicate-selectors': true,
        'keyframe-declaration-no-important': true,
        'length-zero-no-unit': true,
        'no-duplicate-selectors': true,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true
    }
};
