import express from 'express'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import ssr from './ssr'
import webpackConfig from '../../webpack.config'

const env = process.env.NODE_ENV | 'development'
let app;

if (env === 'production') {
  app = express ()
} else {
  app = new webpackDevServer (webpack (webpackConfig), {
    contentBase: '/build/',
    stats: {
      colors: true
    },
    hot: true,
    inline: true,
    historyApiFallback: true,
  })
}

app.use ('/', ssr)
app.listen (3000, () => console.log (`Server start on port 3000`))
