/* eslint-disable quote-props */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['google'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        semi: ['warn', 'never'],
        quotes: ['warn', 'single'],
        indent: ['warn', 4],
        'comma-spacing': ['warn', { before: false, after: true }],
        'object-curly-spacing': ['warn', 'always'],
        'comma-dangle': ['warn', 'always-multiline'],
        'require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                },
            },
        ],
        'valid-jsdoc': ['warn'],
        'no-unused-vars': ['warn'],
        'max-len': ['warn'],
    },
}
