# kintone-rest-api-playground
![](https://github.com/koba04/kintone-rest-api-playground/workflows/CI/badge.svg)

A playground for kintone REST API

## Setup

We use Yarn's workspace so you have to use `yarn` instead of `npm`

```
yarn
```

If you run scripts on Node, you have to set the following environment values.

- `KINTONE_API_TOKEN` (for node)
- `KINTONE_DOMAIN` (for node)

## kintone-api-client - [packages/kintone-api-client](https://github.com/koba04/kintone-rest-api-playground/tree/master/packages/kintone-api-client)

See the [README.md](https://github.com/koba04/kintone-rest-api-playground/tree/master/packages/kintone-api-client)

## for Node - [packages/node-scripts](https://github.com/koba04/kintone-rest-api-playground/tree/master/packages/node-scripts)


```
yarn run-node
// or
yarn workspace node-scripts ts-node src/get-record.ts
```

## for Browsers - [packages/browser-scripts](https://github.com/koba04/kintone-rest-api-playground/tree/master/packages/browser-scripts)

It uploads scripts using `webpack` and `@kintone/customize-uploader`

```
yarn run-browser
```

If you'd like to upload scripts automatically, you can use `--watch` options

```
yarn watch
```