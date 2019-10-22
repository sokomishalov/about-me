const {override: customizeCRA, disableEsLint} = require('customize-cra');

module.exports = function override(config) {
    return customizeCRA(
        disableEsLint()
    )(config);
};