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

### 실제 서비스 개발 시 .env파일 사용법

- .env : 기본
- .env.local, .env.development.local : 로컬 override
- .env.development, .env.production : 환경 별 설정

> CRA을 사용한 프로젝트에서는 env파일을 사용하는 우선순위가 정해져있고 override로 커스터마이징 할 수 없다!

- 우선순위

  - npm start: .env.development.local, .env.local, .env.development, .env
  - npm run build: .env.production.local, .env.local, .env.production, .env
  - npm test: .env.test.local, .env.test, .env

```js
배포 시 build를 할때 build:dev는 development를,
build:prod는 production을 실행하고 싶어도 build라는 명령어는 무조건 .env.production을 실행하게 되어있다!
"scripts": {
  	"build:prod": "NODE_ENV=production react-script build",
	"build:dev": "NODE_ENV=development react-script build"
}

```

> CRA를 사용하여 환경변수를 만든다면 반드시 REACT_APP이 반드시반드시!!!!!!꼭 붙어야 한다!

```
그 이유는 dotenv라는 라이브러리를 사용하는데 해당 라이브러리의 동작 방식이 그렇다!

```

- MY_PORT X
- REACT_APP_MY_PORT O

### env-cmd의 사용 이유

- 환경변수를 build 시에 분기할 수 있는 방법 중 하나!
- dotenv와 동일한 원리로 동작한다!
- REACT_APP으로 시작해야한다!
- CRA가 사용하는 모든 env파일 보다 우선시한다!
  - CRA로 만들어도 분기처리가 가능하단 말!

```js
  npm i env-cmd
```

설치만 해준다면 위의 build:prod, build:dev 방식으로 scripts를 작성하면 정상적으로 분기처리가 된다!

```js
"scripts": {
	"build:prod": "react-script build",
	"build:dev": "env-cmd -f .env.development react-script build",
	...
}
```

- env-cmd -f .env.development
  - ".env.development" 파일에서 환경 변수를 로드하도록 env-cmd에 지시한다!
- 문제점?
  - NODE_ENV 자체는 변경되지 않는다.
