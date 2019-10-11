import { KintoneAPIClient } from "kintone-api-client";

const APP_ID = 2;
const RECORD_ID = 3;

(async () => {
  const apiToken = process.env.KINTONE_API_TOKEN as string;
  if (!apiToken) {
    throw new Error("Please set KINTONE_API_TOKEN and rebuild this");
  }

  const domain = process.env.KINTONE_DOMAIN as string;
  if (!domain) {
    throw new Error("Please set KINTONE_DOMAIN and rebuild this");
  }

  const client = new KintoneAPIClient(domain, { type: "session" });

  try {
    const res = await client.getRecord(APP_ID, RECORD_ID);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
})();
