const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');


module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle-[hash].js'
        //filename: 'traze-web-components.bundle-[hash].js'
    },
    entry: {
			//components: [
			//],
			app: './js/trazeComponents.js',
			'traze-dropdown': './js/containers/traze-dropdown.js',
			styles: [
					'./styles/app.css'
			]
    }
    /*{
    	TrazeComponents:
    	'./js/app.js',
    	}*/
    ,
    module: {
			rules: [
				//{
					/*test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
						},*/
					{
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            /*{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css", "less")
					}*/
        ]
    },
    plugins: [
			//new webpack.ProgressPlugin(),
			//new HtmlWebpackPlugin(),
			//new HtmlWebpackIncludeAssetsPlugin({ assets: ['a.js', 'b.css'], append: true })
			//,
        new HtmlWebpackPlugin({
            title: 'Traze Application',
            filename: 'index.html',
            template: 'index.html',
					//chunks: ['app','dropDown'],
						chunksSortMode: 'manual',
        }),
			new MiniCssExtractPlugin({
            filename: '[name].min.[hash:8].css',
        }),
			//new CleanWebpackPlugin()
        /*new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
		}),*/
        // new ExtractTextPlugin("[name].min.css"), //, {
        //allChunks: true
        //}),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        hot: true
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
