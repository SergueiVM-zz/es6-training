'use strict';

const webpack = require('webpack'),
	path = require('path'),
	ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin'),
	__path = path.resolve(process.cwd());

function resolvePath(relPath) {
	return path.resolve(__path, relPath);
}

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: [
			'./src/app.js'
		]
	},
	output: {
		path: resolvePath('dist'),
		filename: '[name].bundle.js',
		chunkFileName: '[name].bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.scss/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.js?$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&minetype=application/font-woff&name=common/static/[name]-[hash].[ext]'
			},
			{
				test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=common/static/[name]-[hash].[ext]'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.json', '.js', '.jsx', '.scss', '.css', '.png'],
		modulesDirectories: ['node_modules', resolvePath('src/')],
		alias: {
			app: 'app',
			commons: 'commons',
			components: 'components',
			configs: 'configs',
			libty: 'core/libty',
			entities: 'entities',
			libs: 'libs',
			modules: 'modules',
			utils: 'utils',
			styles: 'styles'
		}
	},
	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.json', '.js', '.jsx', '.scss', '.css', '.png']
	},
	watchOptions: {
		aggregateTimeout: 100
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ForceCaseSensitivityPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};