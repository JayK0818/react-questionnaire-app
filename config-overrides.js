const path = require('path')
const { override, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
  config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
    if (config.mode === 'production') {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          antd: {
            name: 'antd-chunk',
            test: /antd/,
            priority: 100
          },
          vendors: {
            name: 'vendors-chunk',
            test: /node_modules/,
            priority: 90
          }
        }
      }
    }
    return config
  },
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: '[local]-[hash:base64:4]'
          }
        }
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/css/variable.scss']
        }
      }
    ]
  })
)