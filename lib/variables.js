module.exports = {
    rules: {
        'no-catch-shadow': 'warn',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'warn',
        'no-unused-vars': ['warn', {vars: 'all', args: 'none'}],
        'no-use-before-define': ['warn', 'nofunc']
    }
};
