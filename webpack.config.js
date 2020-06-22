const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port: 8080,
        host: 'localhost',
        watchOptions:{
            poll: true
        }
    },
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  	loader: 'babel-loader',
                  	options: {
                    	presets: ['@babel/preset-env']
                  	}
                }
			}
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template: './index.html'
    })]
}