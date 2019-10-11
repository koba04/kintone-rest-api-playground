# kintone-rest-api-playground
A playground for kintone REST API

## Setup

We use Yarn's workspace so you have to use `yarn` instead of `npm`

```
yarn
```

If you run scripts on Node, you have to set the following environment values.

- `KINTONE_API_TOKEN` (for node)
- `KINTONE_DOMAIN` (for node)

## kintone-api-client

- `packages/kintone-api-client`

TBA

## for Node

- `packages/node-scripts`

```
yarn run-node
// or
yarn workspace node-scripts ts-node src/get-record.ts
```

## for Browsers

- `packages/browser-scripts`

It uploads scripts using `webpack` and `@kintone/customize-uploader`

```
yarn run-browser
```

If you'd like to upload scripts automatically, you can use `--watch` options

```
yarn watch
```