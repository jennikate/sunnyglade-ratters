# sunnyglade-ratters

To run development version
- `npm i`
- `npm start`


To run a production version
- `npm run build`
- ensure you have serve installed (`npm install -g serve`)
- go to the `dist` folder
- run `serve -s`
- view on `http://localhost:5000`


---
Setting up for testing

- `npm i --save-dev jest` : Jest
- `npm i --save-dev @testing-library/react` : Testing library for react
- `--save-dev @testing-library/jest-dom` : Custom DOM element matchers for Jest with RTL
- `npm i eslint-plugin-jest` : stop eslint throwing unnecessary errors

Make testing work with Babel
- `npm i @babel/plugin-transform-runtime --save-dev`
- .babelrc file:
```
{
  "presets": [...],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

Making tests work with scss
- `npm i babel-jest --save-dev`
- jest.config.js file:
remove:
```
  '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/assetMock.js',
  '\\.(gif|png|jpg|ttf|eot|svg)$': '<rootDir>/src/__mocks__/assetMock.js',
```
add:
```
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
```

Make test work with eslint
- .eslintrc.json
```
  {
    "env": {
        "jest": true
    },
    "extends": [
        "plugin:jest/recommended"
    ],
    "plugins": [
        "jest",
        "babel"
    ],
    "overrides": [
      {
        "files": [
          "*.spec.js",
          "*.spec.jsx"
        ],
        "env": {
          "jest": true
        }
      }
    ]
  }
```


----

Adding favicon
- store favicon images in /src/assets/images
- in webpack.config.js
```
  new HtmlWebpackPlugin({
    favicon: "./src/assets/images/favicon.ico"
  }),
```
- in index.html (include whichever variations are needed)
```
  <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">
  <link rel="shortcut icon" sizes="16x16 32x32" href="/assets/images/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
```
_NOTE: Chrome will NOT display the favicon when it's sourced locally, so when testing locahost remember you will not
see a favicon in chrome, test on another browser to see it_

---

Setting up for styling
I like to use normalize.css (https://github.com/necolas/normalize.css/)
Here's a good blog about resets https://elad.medium.com/the-new-css-reset-53f41f13282e