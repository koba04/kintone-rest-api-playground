import { KintoneAPIClient } from "./KintoneAPIClient";

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

  const client = new KintoneAPIClient(apiToken, domain);

  try {
    const res = await client.getRecord(2, 2);
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
})();
