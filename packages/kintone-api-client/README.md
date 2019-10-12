# kintone-api-client

A client for kintone API, which is a wrapper for kintone REST API.

## Browser with session authentication

```typescript
const client = new KintoneAPIClient({
  domain: location.host,
  auth: { type: "session" }
});
const res = await client.getRecord(APP_ID, RECORD_ID);
```

## Node with API token authentication

```typescript
const client = new KintoneAPIClient({
  domain,
  auth: {
    type: "token",
    token: apiToken
  }
});
const res = await client.getRecord(APP_ID, RECORD_ID);
```