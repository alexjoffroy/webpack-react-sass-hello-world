# webpack-react-sass-hello-world

## What is it ?
This repository is an example project. I made it to understand how to build a library based on Webpack, React, Sass.

## Usage
```
npm install --save https://github.com/the-cormoran/webpack-react-sass-hello-world.git
```
Then:
```javascript
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from 'webpack-react-sass-hello-world';

render(<HelloWorld />, document.getElementById('app'));

```
You'll also have to include the CSS or SCSS file in your project.

## Development
Clone the repository:
```
git clone https://github.com/the-cormoran/webpack-react-sass-hello-world.git
```
Install dependencies:
```
cd webpack-react-sass-hello-world && npm install
```
Commands:
```shell
npm run build 	# build the lib to publish the package
npm run example # build the example
npm run test	# run the tests
```
