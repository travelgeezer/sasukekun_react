const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpackDevServer = require('webpack-dev-server');

const env = {
  hot_server_host: '127.0.0.1',
  hot_server_port: 8081
};

var _config = config.dev;
const argv = process.argv.slice(2).length > 0 ? process.argv.slice(2)[0]:'';
if (argv && argv.toLocaleLowerCase().indexOf('test') > -1) {
  _config = config.test;
  _config.SASUKEKUN_CONFIG.staticPrefix='';
}

const postcss_rule = {
  'loader': 'postcss-loader',
  'options': {
    'plugins': [
      autoprefixer({}),
    ]
  }
};

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'stage-0', 'react-hmre'],
      plugins: [["import", { libraryName: "antd", style: true }]],
      cacheDirectory: '.webpack_cache'
    }
  },
  {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader', postcss_rule]
  },
  {
    test: /\.less$/,
    use: ["style-loader", "css-loader", postcss_rule, "less-loader"]
  },
  {
    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
    exclude: /favicon\.png$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
];


const webpackConfig = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: [
    `webpack-dev-server/client?http://${env.hot_server_host}:${env.hot_server_port}`,
    'webpack/hot/dev-server',
    './src/client.js'
  ],

  output: {
    path: '/public/',
    filename: `[name].js`,
    publicPath: `http://${env.hot_server_host}:${env.hot_server_port}/`
  },

  devtool: 'eval',

  // What information should be printed to the console
  stats: {
    colors: true
  },

  // Options affecting the normal modules
  module: {
    rules
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new HtmlWebpackPlugin({
      title: config.dev.pageTitle,
      template: './webpack/template.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.join(__dirname, '../public/')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      'SASUKEKUN_CONFIG': JSON.stringify(_config.SASUKEKUN_CONFIG)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {
  hot: true,
  contentBase: path.join(__dirname, '../public/'),
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" }
});
server.listen(env.hot_server_port);
