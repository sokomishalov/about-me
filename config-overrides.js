const { override: customizeCRA, fixBabelImports, disableEsLint } = require('customize-cra');

module.exports = function override(config) {
    return customizeCRA(
        disableEsLint(),
        fixBabelImports("lodash", {
            libraryDirectory: "",
            camel2DashComponentName: false
        }),
        fixBabelImports("antd", {
            libraryName: "antd",
            libraryDirectory: "es"
        })
    )(config);
};