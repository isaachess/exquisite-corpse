module.exports = {
    entry: "./public/app.js",
    output: {
        path: __dirname,
        filename: "./public/dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    }
};
