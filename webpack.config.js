
var webpack = require("webpack");

module.exports = {
  entry: ['script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/js/foundation.min.js',
  './app/app.jsx'],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Header: 'app/components/Header.jsx',
      LandingPage: 'app/components/LandingPage.jsx',
      StartIcon: 'app/components/StartIcon.jsx',
      SummarySection: 'app/components/SummarySection.jsx',
      SummaryItem: 'app/components/SummaryItem.jsx',
      ProjectSection: 'app/components/ProjectSection.jsx',
      ProjectItem: 'app/components/ProjectItem.jsx',
      DetailsSection: 'app/components/DetailsSection.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    preLoaders: [
            // Javascript
            { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        ],
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  eslint: {
        failOnWarning: false,
        failOnError: true
    },
};
