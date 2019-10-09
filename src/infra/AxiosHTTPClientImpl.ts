import { HTTPClientInterface } from "../HTTPClientInterface";
import axios from "axios";

export class AxiosHTTPClientImpl implements HTTPClientInterface {
  get(url: string, headers: object, params: object) {
    return axios(url, {
      method: "get",
      data: params,
      headers
    }).then(res => res.data);
  }
}
