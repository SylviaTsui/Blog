'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api':{
      //   target:'http://localhost:3000',
      //   changeOrigin:true,
      //   pathRewrite:{
      //     '^/api': ''
      //   }
      // }
        '/all':{
          target:'http://localhost:3000/all',
          changeOrigin:true,
          pathRewrite:{
            '^/all': ''
          }
        },
          '/js':{
            target:'http://localhost:3000/js',
            changeOrigin:true,
            pathRewrite:{
                '^/js': ''
             }
           },
           '/vue':{
             target:'http://localhost:3000/vue',
             changeOrigin:true,
             pathRewrite:{
                 '^/vue': ''
              }
            },
            '/react':{
              target:'http://localhost:3000/react',
              changeOrigin:true,
              pathRewrite:{
                  '^/react': ''
               }
             },
             '/node':{
               target:'http://localhost:3000/node',
               changeOrigin:true,
               pathRewrite:{
                  '^/node': ''
              }
            },
              '/css':{
                target:'http://localhost:3000/css',
                changeOrigin:true,
                pathRewrite:{
                    '^/css': ''
                 }
             },
              '/mysql':{
                target:'http://localhost:3000/mysql',
                changeOrigin:true,
                pathRewrite:{
                    '^/mysql': ''
                }
              },
              '/page':{
                target:'http://localhost:3000/page',
                changeOrigin:true,
                pathRewrite:{
                    '^/page': ''
                  }
              },
              '/comment':{
                target:'http://localhost:3000/comment',
                changeOrigin:true,
                pathRewrite:{
                    '^/comment': ''
                  }
              },
              '/totalpage':{
                target:'http://localhost:3000/totalpage',
                changeOrigin:true,
                pathRewrite:{
                    '^/totalpage': ''
                  }
              },
              '/weather':{
                target:'http://localhost:3000/weather',
                changeOrigin:true,
                pathRewrite:{
                  '^/weather': ''
                }
              }

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
