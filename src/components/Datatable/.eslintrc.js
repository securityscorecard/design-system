module.exports = {
  rules: {
    /**
     * We are using 'pullstate' state management package which internaly uses immer.js
     * Immer is using mutating-like syntax on immutable objects, so we need to allow
     * param reassign
     */
    'no-param-reassign': 'off',
  },
};
