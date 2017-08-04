const path = require("path");

module.exports = {
    debug: true,
    devtool: "inline-source-map",
    noInfo: false,
    entry: [
        path.resolve(__dirname, "src/index")
    ],
    target: "web",
    output: {
        path: path.resolve(__dirname, "src"),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [],
    module:{
        loaders: [
            {test: /\.js$/, exclude: /node_module/, loaders: ["babel"]},
            {test: /\.css$/, loaders: ["style", "css"]}
        ]
    }
};

//exports.default = config;
