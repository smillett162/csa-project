const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: {
    frontend: './frontend/src/index.js',
  },
  output: {
    path: path.resolve('./frontend/static/frontend/'),
    filename: 'bundle.js',
    publicPath: 'static/frontend/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: './webpack-stats.json',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            //plugins: ["file-loader"]
          },
        },
      ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },  

      {
        //test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: './resources/',
              name: '/[name].[ext]',
              publicPath: '/static/frontend/resources/'
            }

          }
        ]
      },
      
    ],
  },
}