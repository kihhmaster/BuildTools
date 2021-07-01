const HtmlWepackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'index.bundle.js'
	},
	devServer: {
		port: 9000
	},

	module: {
		rules: [
			{
				test: /\.s[ca]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.mp3$/,
				use: ['file-loader']
			}
		]

		
	},

	plugins: [
		new HtmlWepackPlugin({
			template: path.resolve(__dirname, 'index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: 'main.bundle.css'
		}),
		new BundleAnalyzerPlugin(),
	]
}