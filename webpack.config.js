var path = require('path')
module.exports = {
  mode: "production",
  entry: { //webpack打包入口
      main: './lib/index.js', //
    },
    output: {
      path: path.resolve(__dirname, 'dist'), //必须是绝对路径
      filename: 'js/[name].js'
    }
}