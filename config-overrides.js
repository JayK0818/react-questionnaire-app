const path = require('path')
const { override, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
  config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
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