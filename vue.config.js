module.exports = {
//  const webpack= require('webpack'),
 // lintOnSave: false,
 // npm
 lintOnSave: true,
 publicPath: process.env.NODE_ENV === 'production'
 ? './'
 : '/',
 assetsDir:'static',
 devServer: {
  port: 8080,// 端口

//   proxy: {//配置跨域
//     '/api': {
//         target: 'http://localhost:8080/',//这里后台的地址模拟的;应该填写你们真实的后台接口
//         ws: true,
//         changOrigin: true,//允许跨域
//         pathRewrite: {
//             '^/api': ' '//请求的时候使用这个api就可以
//         }
//     },
//    },
  },
// 字体自适应
css: {
  loaderOptions: {
      postcss: {
          plugins: [
              require('postcss-plugin-px2rem')({
                  // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                  // rootValue: 37.5, 
                  // unitPrecision: 5, // 允许REM单位增长到的十进制数字。
                  // propWhiteList: [],  // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                  // propBlackList: [], // 黑名单
                  // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                  exclude: /(node_module)/, 
                  // selectorBlackList: [], // 要忽略并保留为px的选择器
                  // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                  // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                  // mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                  minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
              }),
          ]
      }
  }
},
 
  //webpack配置
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
        hints:false
    },

    //或者

    //警告 webpack 的性能提示
    performance: {
        hints:'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //  $: "jquery",
    //  jQuery: "jquery",
    //  jquery: "jquery",
    //  "window.jQuery": "jquery"
    //   })
    //  ],
 },

}