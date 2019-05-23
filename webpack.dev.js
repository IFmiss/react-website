const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
	entry: {
    app: './src/index.tsx'
  },
  devtool: 'inline-source-map',
  devServer: {
		// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
		contentBase: "./",
		host: '0.0.0.0',
		// 端口号
		port: 2005,
		//当有编译器错误或警告时，在浏览器中显示全屏覆盖。默认禁用。如果您只想显示编译器错误：
		noInfo: true,
		// 配置端口号
		overlay: true,
  }
});