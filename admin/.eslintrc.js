module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        // eslint-disable-next-line indent
            "for-direction": "off",
    },
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    }
}; 