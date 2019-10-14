import KintoneAPIClient from "@koba04/kintone-api-client";

const APP_ID = 2;
const RECORD_ID = 3;

(async () => {
  const apiToken = process.env.KINTONE_API_TOKEN as string;
  if (!apiToken) {
    console.error("Please set KINTONE_API_TOKEN");
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  const domain = process.env.KINTONE_DOMAIN as string;
  if (!domain) {
    console.error("Please set KINTONE_DOMAIN");
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  const client = new KintoneAPIClient({
    domain,
    auth: {
      type: "token",
      token: apiToken
    }
  });

  try {
    const res = await client.getRecord(APP_ID, RECORD_ID);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
})();
