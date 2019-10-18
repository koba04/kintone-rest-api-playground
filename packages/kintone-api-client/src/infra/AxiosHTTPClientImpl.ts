import axios from "axios";
import qs from "query-string";
import { HTTPClientInterface } from "../HTTPClientInterface";

export class AxiosHTTPClientImpl implements HTTPClientInterface {
  async get(url: string, headers: object, params: any) {
    const res = await axios(`${url}?${qs.stringify(params)}`, {
      method: "get",
      headers
    });
    return res.data;
  }
}
