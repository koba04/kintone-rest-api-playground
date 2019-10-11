import axios from "axios";
import qs from "query-string";
import { HTTPClientInterface } from "../HTTPClientInterface";

export class AxiosHTTPClientImpl implements HTTPClientInterface {
  get(url: string, headers: object, params: any) {
    return axios(`${url}?${qs.stringify(params)}`, {
      method: "get",
      headers
    }).then(res => res.data);
  }
}
