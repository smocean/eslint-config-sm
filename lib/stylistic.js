module.exports = {
    rules: {
        'array-bracket-spacing': ['error', 'never', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false
        }],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],
        camelcase: ['error', {properties: 'never'}],
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error'],
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1
        }],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        'keyword-spacing': ['error', {before: true, after: true}],
        'linebreak-style': ['error', 'unix'],
        'new-cap': ['error', {capIsNew: false}],
        'newline-after-var': ['error', 'always'],
        'no-array-constructor': ['error'],
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 1, maxEOF: 1}],
        'no-new-object': ['error'],
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-spaced-func': ['error'],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'never', {
            objectsInObjects: false,
            arraysInObjects: false
        }],
        'operator-linebreak': ['error', 'after'],
        'quote-props': ['error', 'as-needed', {
            keywords: true,
            numbers: true,
            unnecessary: true
        }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'semi-spacing': ['error', {
            before: false, after: true
        }],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never'
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error'],
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false
        }],
        'spaced-comment': ['error', 'always']
    }
};
