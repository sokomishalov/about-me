const {override: customizeCRA, fixBabelImports, disableEsLint} = require('customize-cra');

module.exports = function override(config) {
    config.module.rules.push({
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        include: [
            require.resolve('@ant-design/icons/lib/dist')
        ]
    });

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