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
    },
};
