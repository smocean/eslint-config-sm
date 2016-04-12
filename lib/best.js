module.exports = {
    rules: {
        curly: 'error',
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
        'no-with': 'error'
    }
};
