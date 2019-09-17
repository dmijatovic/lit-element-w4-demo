
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports=({mode})=>{
  return{
    mode,
    plugins:[
      new HtmlWebpackPlugin({
        template:'./src/index.html'
      }),
      new CopyWebpackPlugin
    ],
    devtool: mode === 'development' ? 'source-map' : 'none'
  }
}