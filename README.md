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


