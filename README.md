# kintone-rest-api-playground
A playground for kintone REST API

## Setup

You have to set the following environment values.

- `KINTONE_API_TOKEN`
- `KINTONE_DOMAIN`
- `KINTONE_USERNAME` (for browsers)
- `KINTONE_PASSWORD` (for browsers)

## for Node

```
npx ts-node scripts/node/get-record.ts
```

## for Browsers

It uploads scripts using `webpack` and `@kintone/customize-uploader`

```
npx webpack --mode development
npm run upload
```

If you'd like to upload scripts automatically, you can use `--watch` options

```
npx webpack --mode development --watch
npm run upload -- --watch
```