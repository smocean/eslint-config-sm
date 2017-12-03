module.exports = {
    env: {
        builtin: true,
        es6: true,
        browser: true,
        jquery: true
    },
    globals: {
        sm: false,
        Vue: false,
        Zepto: false,
        __inline: false,
        __uri: false,
        require: false
    },
    rules: {
        // Possible Errors
        "for-direction": "error",
        "getter-return": "warn",
        "no-compare-neg-zero": "error",
        "comma-dangle": ["error", "never"],
        "no-cond-assign": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty": "warn",
        "no-empty-character-class": "warn",
        "no-ex-assign": "warn",
        "no-extra-parens": "warn",
        "no-extra-semi": "warn",
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "warn",
        "no-obj-calls": "error",
        "no-sparse-arrays": "warn",
        "no-unexpected-multiline": "warn",
        "no-unreachable": "warn",
        "use-isnan": "warn",
        "valid-typeof": "warn",
        // Best Practices
        curly: "error",
        "no-caller": "error",
        "no-eval": "error",
        "no-extend-native": ["error", {exceptions: ["String"]}],
        "no-extra-bind": "warn",
        "no-fallthrough": "warn",
        "no-implied-eval": "error",
        "no-loop-func": "warn",
        "no-multi-spaces": "error",
        "no-multi-str": "warn",
        "no-global-assign": "error",
        "no-new-func": "warn",
        "no-redeclare": "warn",
        "no-unused-expressions": ["warn", {allowShortCircuit: true, allowTernary: true}],
        "no-useless-call": "warn",
        "no-with": "error",
        // Strict Mode
        strict: ["error", "function"],
        // Variables
        "no-catch-shadow": "warn",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "warn",
        "no-unused-vars": ["warn", {vars: "all", args: "none"}],
        "no-use-before-define": ["warn", "nofunc"],
        // Stylistic Issues
        "array-bracket-spacing": ["error", "never"],
        "brace-style": ["error", "1tbs"],
        camelcase: ["error", {properties: "never"}],
        "comma-spacing": ["error", {
            before: false,
            after: true
        }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "eol-last": ["error"],
        indent: ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1
        }],
        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true
        }],
        "keyword-spacing": ["error", {before: true, after: true}],
        "linebreak-style": ["error", "unix"],
        "new-cap": ["error", {capIsNew: false}],
        "no-array-constructor": ["error"],
        "no-multiple-empty-lines": ["error", {max: 1, maxBOF: 1, maxEOF: 1}],
        "no-new-object": "error",
        "no-restricted-syntax": ["error", "WithStatement"],
        "no-spaced-func": "error",
        "no-trailing-spaces": ["error", {skipBlankLines: true}],
        "object-curly-spacing": ["error", "never", {
            objectsInObjects: false,
            arraysInObjects: false
        }],
        "operator-linebreak": ["error", "after"],
        "padding-line-between-statements": ["warn", 
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
            { blankLine: "always", prev: "directive", next: "*" }, 
            { blankLine: "any", prev: "directive", next: "directive" }
        ],
        "quote-props": ["error", "as-needed", {
            keywords: true,
            numbers: true,
            unnecessary: true
        }],
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "semi-spacing": ["error", {
            before: false, after: true
        }],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never"
        }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", {
            words: true,
            nonwords: false
        }],
        "spaced-comment": ["error", "always"]
    }
};
