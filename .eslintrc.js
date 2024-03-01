module.exports = {
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    parser: "@typescript-eslint/parser",
    root: true,
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
    }
};