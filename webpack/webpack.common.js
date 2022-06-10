const path = require('path');
const rimraf = require("rimraf");

const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const dirname = './',
   PROJECT_ROOT = path.resolve(dirname),
   PUBLIC_INDEX = path.resolve(PROJECT_ROOT, 'public', 'index.html');

rimraf.sync(path.resolve(PROJECT_ROOT, 'dist'));
module.exports = {
   resolve: {
      modules: [
         path.join(dirname, 'src'),
         'node_modules',
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
   },
   entry: [path.resolve(dirname, './src/index.tsx')],
   module: {
      rules: [
         {
            test: /\.(ts|tsx|js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: PUBLIC_INDEX,
      }),
      new webpack.DefinePlugin({
         'process.env': JSON.stringify(process.env),
      }),
   ],
};