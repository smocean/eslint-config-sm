module.exports = {
    env: {
        amd: true,
        builtin: true,
        commonjs: true,
        es6: true,
        browser: true,
        jasmine: true,
        jest: true,
        mocha: true,
        node: true,
        jquery: true
    },
    globals: {
        sm: false,
        Vue: false,
        Zepto: false,
        __inline: false,
        __uri: false
    },
    rules: {
        // Possible Errors
        'comma-dangle': ['error', 'never'],
        'no-dupe-args': 'error',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty': 'warn',
        'no-empty-character-class': 'warn',
        'no-ex-assign': 'warn',
        'no-extra-parens': 'warn',
        'no-extra-semi': 'warn',
        'no-inner-declarations': 'warn',
        'no-invalid-regexp': 'warn',
        'no-obj-calls': 'error',
        'no-sparse-arrays': 'warn',
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'warn',
        'use-isnan': 'warn',
        'valid-typeof': 'warn',
        // Best Practices
        'curly': 'error',
        'no-caller': 'error',
        'no-eval': 'error',
        'no-extend-native': ['error', { exceptions: ['String'] }],
        'no-extra-bind': 'warn',
        'no-fallthrough': 'warn',
        'no-implied-eval': 'error',
        'no-loop-func': 'warn',
        'no-multi-spaces': 'error',
        'no-multi-str': 'warn',
        'no-native-reassign': 'warn',
        'no-new-func': 'warn',
        'no-redeclare': 'warn',
        'no-unused-expressions': ['warn', {allowShortCircuit: true, allowTernary: true}],
        'no-useless-call': 'warn',
        'no-with': 'error',
        // Strict Mode
        'strict': ['error', 'safe'],
        // Variables
        'no-catch-shadow': 'warn',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'warn',
        'no-unused-vars': ['warn', {vars: 'all', args: 'none'}],
        'no-use-before-define': ['warn', 'nofunc'],
        // Stylistic Issues
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
