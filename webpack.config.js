const path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};