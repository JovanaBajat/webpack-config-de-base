## mkdir test
## npm init
## mkdir src
## touch index.js app.js
## mkdir dist, index.html dans dist

## npm i react react-dom webpack
## npm i babel-core babel-loader
## npm i babel-preset-env babel-preset-react babel-preset-stage-2
## npm i babel-plugin-transform-class-properties
## npm i webpack-dev-server -D

"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server  --open --content-base dist/ --inline"
}

##npm run build
##npm start
