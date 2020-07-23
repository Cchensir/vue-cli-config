module.exports = {
  productionSourceMap: true,   //vue-cli配置生产环境是否有source map
  publicPath: './',  //所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径 在vue-cli3之前使用的beseUrl 在3后被弃用
  outputDir:"dist",  //  DefaultValue 打包构建文件的目录 在构建的时候会先请空之前的dist 如果不想请空之前的在启动命令vue-cli-serveice build的后面添加--no-clean
  assetsDir:"", //Defaultvalue 放置静态资源(js.img.css.iconfont)默认在dist下面
  indexPath:"index.html",  //指定生成index.html的输出路径 默认在dist下面
  filenameHashing:true, //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  pages: {
    app: {
      entry: './src/main.js', //vue-cli的入口函数
      template: 'public/index.html',  //模板文件来源
      filename: 'index.html',  //打包后的html
      title: '教师端主页面', //打开网页的title
      //chunks:['chunk-vendors', 'chunk-common', 'index']  //最后打包出的文件都是一个chunk 如果不进行分割或者多页面不需要添加，默认全部引入
      //vue-cli的对chunks进行了加工 默认引入的就是chunk-vendors为node_moudels的文件 chunk-common为静态文件被多个文件引入就单独拿出来 index为所有的js的chunk
    },
    live:{
        entry: './src/pages/live.js', //vue-cli的入口函数
        template: 'public/live.html',  //模板文件来源
        filename: 'live.html',  //打包后的html
        title: '多页面测试' //打开网页的title
    }
  },
  devServer: {
    https: true,  //启动项目时https
    proxy: {
      '/dev-api': { // 使用代理名称 
        target: 'www.c123.com',   //代理地址
        ws: true, // 如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/dev-api': ''    //正则匹配已dev-api开头的换成代理地址
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
    //   new MyAwesomeWebpackPlugin()   //用来写plugin 常用的都已经被vue-cli封装好了
    ]
  },
  chainWebpack: config => {//用来写loader 常用的都已经被vue-cli封装好了
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
}
}