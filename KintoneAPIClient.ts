import axios from "axios";

type HTTPMethod = "get" | "post";

export class KintoneAPIClient {
  private apiToken: string;
  private domain: string;
  public constructor(apiToken: string, domain: string) {
    this.apiToken = apiToken;
    this.domain = domain;
  }
  public getRecord(app: number, id: number): Promise<any> {
    return this.sendRequest("get", "/k/v1/record.json", { app, id });
  }
  private sendRequest(
    method: HTTPMethod,
    url: string,
    data = {}
  ): Promise<any> {
    return axios(`https://${this.domain}${url}`, {
      method,
      data,
      headers: {
        "X-Cybozu-API-Token": this.apiToken
      }
    });
  }
}
