# no-CRA

CRA없이 react구동환경 만들고 HOOKS 연습하기

### 1. package.json생성 및 react설치

- package.json 생성

> npm init -y

- react : 리액트 코어 라이브러리
- react-dom : 리액트와 DOM을 연결

> npm i react react-dom

---

### 2. 바벨 설치

- @babel/core : 바벨 코어
- @babel/preset-react : 리액트의 JSX코드를 트랜스파일링
- @babel/preset-env : ES6+ 코드를 ES5 코드로 트랜스파일링(+폴리필 자동화)

> npm i -D @babel/core @babel/preset-react @babel/preset-env

---

### 3. 웹팩과 관련 모듈(loader) 설치

- webpack : 웹팩 코어
- webpack-cli : 터미널의 커맨드라인에서 웹팩 사용
- webpack-dev-server : 웹팩을 메모리 상으로만 빌드한 결과물을 개발 서버에 구동
- babel-loader : ES6+, JSX문법을 트랜스파일링
- css-loader : CSS코드를 JS로 변환
- style-loader : 변환된 css파일을 index.html의 `<style>`태그에 삽입
- file-loader : 이미지, 폰트 등의 파일 로딩
- json-loader : json 파일 로딩
- dotenv : .env파일을 환경변수에 대신 설정해줌

---

- 웹팩 설치

> npm i -D webpack webpack-cli webpack-dev-server

- 관련모듈 설치

> npm i -D babel-loader css-loader style-loader file-loader

- json 사용 시

> npm i -D json-loader

- .env파일을 사용한다면 설치

> npm i dotenv

웹팩으로 번들링 한 후의 파일에 적용할 플러그인을 설치

- html-webpack-plugin : html파일에 번들링된 JS코드를 삽입하고 dist폴더에 번들링된 결과물을 옮겨줌

- clean-webpack-plugin : 번들링을 할 때마다 이전의 번들링 결과를 제거

> npm i html-webpack-plugin clean-webpack-plugin

### 4. 바벨, 웹팩 설정

프로젝트 루트에 babel.config.js파일을 만들고 프리셋을 설정한다.

```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

프로젝트 루트에 webpack.config.js 파일과 .env파일을 만든다.(webpack설정은 사이트 참고)

```js
// .env
MODE = 'development';
PORT = '3000';
```

```js
// webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config();

module.exports = {
  mode: process.env.MODE, // 만약 환경변수를 사용하지 않는다면 직접 'development' 입력
  entry: './src/index.js',
  output: {
    // 번들링 결과 : /dist폴더
    path: __dirname + '/dist',
    // bundle.해쉬.js로 생성
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    // 번들링을 할 파일 설정
    extensions: ['.js', '.jsx'],
  },
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
  plugins: [
    // 빌드 이전 결과물을 제거
    new CleanWebpackPlugin(),
    // 번들한 css파일과 js파일을 html 파일에 link 태그, script태그로 추가
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // 환경 정보를 제공
    new webpack.DefinePlugin({
      mode: process.env.MODE,
      port: process.env.PORT,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: process.env.PORT,
    open: true,
    historyApiFallback: true,
    // hot : 모듈의 변화된 부분만 서버에 자동으로 반영
    hot: true,
  },
};
```

- start : 개발 서버에서 리액트 프로젝트 실행
- build : dist 폴더에 번들링된 파일 생성

```js
// package.json
"scripts": {
  "start": "webpack-dev-server --progress --mode development",
  "build": "webpack --progress --mode production"
}
```
