module.exports = {
    plugins: [
        'stylelint-order'
    ],
    rules: {
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': 'never-single-line',
        'color-no-invalid-hex': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-no-important': true,
        'indentation': 4,
        'length-zero-no-unit': true,
        'linebreaks': 'unix',
        'max-empty-lines': 1,
        'no-eol-whitespace': true,
        'number-leading-zero': 'always',
        'order/order': [
            'custom-properties',
            'declarations'
        ],
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-space-before': 'never',
        'string-quotes': 'single'
    }
};
