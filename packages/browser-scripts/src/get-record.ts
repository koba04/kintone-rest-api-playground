import KintoneAPIClient from "kintone-api-client";

const APP_ID = 2;
const RECORD_ID = 3;

(async () => {
  const client = new KintoneAPIClient(location.host, { type: "session" });
  try {
    const res = await client.getRecord(APP_ID, RECORD_ID);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
})();
