const prettierConfig  = {
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};

module.exports = {
    extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier', 'prettier/flowtype', 'prettier/react'],

    parser: 'babel-eslint',

    plugins: ['flowtype', 'prettier'],

    rules: {
        'prettier/prettier': ['error', prettierConfig],

        // https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
        'react/jsx-filename-extension': 'off',

        // We use Flow in most of our projects so we don't really need prop-type validation.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',

        // "type-annotations" isn't in the default options of 'react/sort-comp'.
        'react/sort-comp': [
            'error',
            {
                order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render'],
            },
        ],
    },

    overrides: [
        {
            files: ['tests/**/*.js', '**/__tests__/**/*.test.js'],
            env: {
                jest: true,
            },
        },
    ],
};
