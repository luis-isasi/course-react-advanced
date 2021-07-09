const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    //primero le pasamos a donde queremos que se diriga los archivos
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    chunkFilename: '[name].min.js',
    //la raiz del proyecto
    publicPath: '/',
  },
  //le pasamo las extensiones de los archivos que escuchara webpack
  resolve: { extensions: ['.js', '.tsx', 'ts', ] },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|jpg|gif|mp4|svg|webm)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
          },
        },
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    //tenemos que configurar este plugin
    new HtmlWebpackPlugin({
      //le decimos de donde tomara el index.html
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
      },
      //como se llamra nuestro archivo
      title: '[name].min.html',
    }),
  ],
};
