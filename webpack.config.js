const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const developmentConfig = {
    mode: 'development',
    module: {
			rules: [
				{
					test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
						},
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
				//chunksSortMode: 'manual',
        }),
			/*new MiniCssExtractPlugin({
            filename: '[name].min.[hash:8].css',
				}),*/

			//new CleanWebpackPlugin()
        /*new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
		}),*/
        // new ExtractTextPlugin("[name].min.css"), //, {
        //allChunks: true
        //}),
    ],
	/*devServer: {
        contentBase: path.resolve(__dirname, '.'),
        hot: true
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
		*/
};
const productionConfig = {
    mode: 'production',
    module: {
			rules: [
				{
					test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
						},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [

    ],
};

//const appConfig = Object.assign({}, developmentConfig, {
const appConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle-[hash].js'
        //filename: 'traze-web-components.bundle-[hash].js'
    },
    entry: {
			//app: './src/trazeComponents.js',
			'traze-dropdown': './src/containers/traze-dropdown.js',
			styles: [
					'./styles/app.css'
			]
    }
}

//const indexConfig = Object.assign({}, developmentConfig, {
const indexConfig = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "index.js"
	},
};


module.exports = [
	//{...productionConfig, ...appConfig}, { ...productionConfig, ...indexConfig}
	//,
	{ ...developmentConfig, ...appConfig}, {...developmentConfig, ...indexConfig}
];


    /*{
    	TrazeComponents:
    	'./js/app.js',
    	}*/
