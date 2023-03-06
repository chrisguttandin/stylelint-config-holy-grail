module.exports = {
    overrides: [
        {
            customSyntax: 'postcss-scss',
            files: ['*.scss', '**/*.scss'],
            plugins: ['stylelint-scss'],
            rules: {
                'at-rule-no-unknown': null,
                'declaration-property-value-no-unknown': null,
                'function-no-unknown': null,
                'scss/at-rule-no-unknown': true,
                'scss/no-duplicate-dollar-variables': true,
                'scss/no-duplicate-mixins': true,
                'scss/no-global-function-names': true
            }
        }
    ],
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
        'font-family-no-duplicate-names': [
            true,
            {
                ignoreFontFamilyNames: ['monospace']
            }
        ],
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-no-unknown': true,
        'keyframe-block-no-duplicate-selectors': true,
        'keyframe-declaration-no-important': true,
        'length-zero-no-unit': true,
        'media-feature-name-no-unknown': true,
        'named-grid-areas-no-invalid': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-invalid-double-slash-comments': true,
        'no-invalid-position-at-import-rule': true,
        'no-irregular-whitespace': true,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true,
        'property-no-unknown': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements']
            }
        ],
        'string-no-newline': true,
        'unit-no-unknown': true
    }
};
