const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();

const defaultPort = parseInt(process.env.PORT, 10);
module.exports = {
  mode: process.env.MODE, // 만약 환경변수를 사용하지 않는다면 직접 'development' 입력
  entry: './src/index.js', // 1. 시작파일
  output: {
    // 2. 최종파일을 내보내는 옵션
    // 번들링 결과 : /dist폴더
    path: __dirname + '/dist', // 하위에 dist폴더를 의미
    // bundle.해쉬.js로 생성
    filename: 'bundle.[hash].js', // 파일이름
    publicPath: '/',
  },
  resolve: {
    // 번들링을 할 파일 설정
    extensions: ['.js', '.jsx'],
  },
  // loader를 설정하는 곳
  module: {
    // loader 설정 - 등록한 로더의 뒤의 요소부터 번들링에 반영
    // node_modules 제외
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[contenthash].[ext]',
        },
      },
    ],
  },
  // 가져올 플러그인들
  plugins: [
    // 빌드 이전 결과물을 제거
    new CleanWebpackPlugin(),
    // 번들한 css파일과 js파일을 html 파일에 link 태그, script태그로 추가하기
    new HtmlWebpackPlugin({
      template: 'public/index.html', // 해당경로의 파일을 바탕으로 만든다!
    }),
    // 환경 정보를 제공
    new webpack.DefinePlugin({
      mode: process.env.MODE,
      port: defaultPort,
    }),
  ],
  // 개발할 때 사용하기 위한 서버
  devServer: {
    // 파일경로를 작성해주기
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // 포트 정해주기
    port: defaultPort,
    open: true,
    historyApiFallback: true,
    // hot : 모듈의 변화된 부분만 서버에 자동으로 반영
    hot: true,
  },
};
