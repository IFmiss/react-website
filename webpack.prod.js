const selfmerge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const selfcommon = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// css压缩打包相关
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 打包清除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = function (dir) {
	return path.resolve(__dirname, dir);
}
module.exports = selfmerge(selfcommon, {
  mode: 'production',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/web_v3'),
    publicPath: '/web_v3',
    filename: 'js/[name]-[hash].js'
  },
  module: {
    rules: [
      {
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/env"]
					}
				}
			},
    ]
  },
  plugins: [
    // 清除
    new CleanWebpackPlugin(['dist'], {
			verbose: false
    }),
    
    // css 压缩
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),

    // 
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'dist/web_v3/index.html'),
        to: path.resolve(__dirname, 'dist'),
        ignore: ['.*']
      }
    ])
  ],
  optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 3,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
				}
			}
		},
		minimizer: [
      new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i,
      }),
    ]
	}
});