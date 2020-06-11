const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
    console.log(argv.mode);

    return {
        mode: argv.mode,
        entry: './src/index.js',
        output: {
            filename: '[name].[contenthash:5].js',
            chunkFilename: '[name].[contenthash:5].chunk.js',
            path: path.resolve(process.cwd(), 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000,
            historyApiFallback: true,
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
