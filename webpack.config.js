const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: {
    main: './app.tsx',
  },
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.tsx'],
  },
}
