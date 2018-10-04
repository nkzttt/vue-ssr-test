# Vue

Node.js version: `v8.12.0`

## Setup Flow

### 1. install `webpack`
1. [Simple Build](https://webpack.js.org/guides/getting-started/)
1. [Specify Mode](https://webpack.js.org/concepts/mode/)
1. [Source maps](https://webpack.js.org/configuration/devtool/)

### 2. install `babel` with webpack
1.  [babel-loader](https://github.com/babel/babel-loader) (webpack 4.x | babel-loader 8.x | babel 7.x)
1. set targets of `@babel/preset-env` to match the vue template.

### 3. install `vue` and relation modules
1. [vue](https://jp.vuejs.org/v2/guide/installation.html)
1. [vue-loader](https://vue-loader.vuejs.org/guide/#manual-configuration)
    1. create files to refer sample of [webpack-simple](https://github.com/vuejs-templates/webpack-simple/tree/master/template/src)
1. [vue-router](https://router.vuejs.org/installation.html)

### 4. launch server with the `Express`
1. [express](https://expressjs.com/ja/)
1. [serve static files](http://expressjs.com/ja/starter/static-files.html)

### 5. SSR
1. [create entry files](https://ssr.vuejs.org/ja/guide/structure.html#webpack%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B3%E3%83%BC%E3%83%89%E6%A7%8B%E9%80%A0)
1. [setup webpack both client and server](https://ssr.vuejs.org/ja/guide/build-config.html#server-%E8%A8%AD%E5%AE%9A)