module.exports = {
    rules: {
        'array-bracket-spacing': [2, 'never', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false
        }],
        'brace-style': [2, '1tbs', {
            allowSingleLine: false
        }],
        camelcase: [2, {properties: 'never'}],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'eol-last': [2],
        indent: [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: 1
        }],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        'linebreak-style': [2, 'unix'],
        'new-cap': [2, {capIsNew: false}],
        'newline-after-var': [2, 'always'],
        'no-array-constructor': [2],
        'no-multiple-empty-lines': [2, {max: 1}],
        'no-new-object': [2],
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-spaced-func': [2],
        'no-trailing-spaces': [2, {skipBlankLines: true}],
        'object-curly-spacing': [2, 'never', {
            objectsInObjects: false,
            arraysInObjects: false
        }],
        'operator-linebreak': [2, 'after'],
        'quote-props': [2, 'as-needed', {
            keywords: true,
            numbers: true,
            unnecessary: true
        }],
        quotes: [2, 'single'],
        'semi-spacing': [2, {
            before: false, after: true
        }],
        semi: [2, 'always'],
        'keyword-spacing': [2, {before: true, after: true}],
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never'
        }],
        'space-before-keywords': [2, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': [2],
        'space-unary-ops': [2, {
            words: true,
            nonwords: false
        }],
        'spaced-comment': [2, 'always']
    }
};
