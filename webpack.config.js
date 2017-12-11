const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
   entry: ['./src/app.js', './src/app.scss'],
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'app.dist.js'
   },
	 module: {
		 rules: [
			 {
				 test: /\.scss$/,
				 use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			 }
		 ]
	 },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Web3 sandbox',
       template: 'src/index.html'
     }),
     new ExtractTextPlugin({
       filename: 'app.dist.css',
       allChunks: true,
     })
   ]
}
