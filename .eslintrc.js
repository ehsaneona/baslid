module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/button-has-type': 0,
        'import/prefer-default-export': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-unstable-nested-components': 0,
        'no-underscore-dangle': 0,
        'import/no-cycle': 0,
        'no-param-reassign': 0,
        'no-restricted-globals': 0,
        'no-use-before-define': 0,
        'react/no-unescaped-entities': 0,
    },
};
