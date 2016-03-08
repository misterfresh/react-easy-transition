var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var config = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/client/client.js'
    ],
    output: {
        path: path.join(__dirname, 'assets/js'),
        filename: 'bundle.js',
        publicPath: 'http://127.0.0.1:3000/static/'
    },
    debug: true,
    devtool: 'eval',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        devFlagPlugin
    ],
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            {
                loaders: ["react-hot","babel-loader?plugins[]=transform-runtime&plugins[]=transform-decorators-legacy&presets[]=es2015&presets[]=stage-0&presets[]=react"],
                test: /\.js$/,
                include: path.join(__dirname, 'src/client')
            }
        ]
    }
};

module.exports = config;
/*
 new webpack.ProvidePlugin({
 'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
 })
 */