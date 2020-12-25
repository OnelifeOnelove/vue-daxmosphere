const path = require('path')
const isPro = 'production' === process.env.NODE_ENV

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: isPro ? '/vue-daxmosphere' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  // 关闭生产环境source-map加速生产构建和减少包大小
  productionSourceMap: false,
  devServer: {
    port: 8888,
    overlay: {
      warning: false,
      errors: false
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@assets/style/base.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@mixins': resolve('src/mixins'),
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@views': resolve('src/views')
      }
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
      filename: `[name].js`,
      chunkFilename: `[name].js`
    }
  },
  chainWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
  }
}
