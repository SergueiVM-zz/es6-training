'use strict';

const webpack = require('webpack'),
	webpackConfig = require('./webpack.config.js'),
	express = require('express'),
	http = require('http'),
	path = require('path'),
	compiler = webpack(webpackConfig),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	app = express(),
	__path = process.cwd(),
	PORT = 3002;

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
	log: console.log,
	path: '/__webpack_hmr',
	publicPath: webpackConfig.output.publicPath,
	heartbeat: 10 * 1000
}));

app.use(express.static('./'));

app.listen(PORT, function(err) {
	if(err) {
		return console.error(err);
	}
	console.log('Server listening on port', PORT);
});