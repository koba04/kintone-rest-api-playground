import axios from "axios";
import { HTTPClientInterface } from "./HTTPClientInterface";
import { AxiosHTTPClientImpl } from "./infra/AxiosHTTPClientImpl";

export class KintoneAPIClient {
  private headers: object;
  private domain: string;
  private httpclient: HTTPClientInterface;
  public constructor(apiToken: string, domain: string) {
    this.headers = {
      "X-Cybozu-API-Token": apiToken
    };
    this.domain = domain;
    this.httpclient = new AxiosHTTPClientImpl();
  }
  public getRecord<T extends object>(app: number, id: number): Promise<T> {
    return this.httpclient.get<T>(
      this.buildUrl("/k/v1/record.json"),
      this.headers,
      { app, id },
    );
  }
  // Inject a custom HTTP client, which is for testing
  public setHTTPClient(httpclient: HTTPClientInterface) {
    this.httpclient = httpclient;
  }
  private buildUrl(path: string): string {
    return `https://${this.domain}${path}`;
  }
}
