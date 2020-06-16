const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        entry: './src/index.js',
        output: {
            filename: '[name].js',
            path: path.resolve(process.cwd(), 'dist'),
            publicPath: "/"
        },
        module: {
            rules: [
               /* {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                } */
            ]
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: 'public/index.html'
            })
        ]
    }
};
