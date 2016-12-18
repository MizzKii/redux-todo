import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import bodyParser from 'body-parser'
import ssr from './ssr'
import webpackConfig from '../../webpack.config'
import api from './api'
import config from './config'

let app = express ()
app.use (bodyParser.json ())
api (app)

if (config.env !== 'production') {
  app.listen (config.api.port, () => console.log (`API start on port ${config.api.port}`))
  app = new webpackDevServer (webpack (webpackConfig), {
    contentBase: '/build/',
    stats: {
      colors: true
    },
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: `http://127.0.0.1:${config.api.port}/api`,
        pathRewrite: {'^/api' : ''}
      }
    }
  })
}

app.use(express.static(path.join(__dirname, '../../build')))
app.use ('/', ssr)
app.listen (config.port, () => console.log (`Server start on port ${config.port}`))
