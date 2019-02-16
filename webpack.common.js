const path = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');
const webpack = require('webpack');

module.exports = {
    entry: {
        achievy: './main.ts'
    },
    module: {
	    rules: [
            {test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader'},
            {test: /\.html/, exclude: /node_modules/, use: ['to-string-loader', 'html-loader']},
	        {test: /\.scss$/, exclude: /node_modules/, use: ['to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader']}
	    ]
	},
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss', '.html', '.json'],
        alias: rxPaths()
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core/, path.resolve(__dirname, './src'), {}),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};