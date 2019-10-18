import { HTTPClientInterface } from "./HTTPClientInterface";
import { AxiosHTTPClientImpl } from "./infra/AxiosHTTPClientImpl";

type HTTPHeader = {
  [key: string]: string;
};

export type Auth =
  | {
      type: "session";
    }
  | {
      type: "token";
      token: string;
    };

export class KintoneAPIClient {
  private headers: HTTPHeader;
  private domain: string;
  private httpclient: HTTPClientInterface;
  public constructor({ domain, auth }: { domain: string; auth: Auth }) {
    this.headers = this.buildAuthHeaders(auth);
    this.domain = domain;
    this.httpclient = new AxiosHTTPClientImpl();
  }
  public getRecord<T extends object>(app: number, id: number): Promise<T> {
    return this.httpclient.get<T>(
      this.buildUrl("/k/v1/record.json"),
      this.headers,
      { app, id }
    );
  }
  // Inject a custom HTTP client, which is for testing
  public setHTTPClient(httpclient: HTTPClientInterface) {
    this.httpclient = httpclient;
  }
  private buildUrl(path: string): string {
    return `https://${this.domain}${path}`;
  }
  private buildAuthHeaders(auth: Auth): HTTPHeader {
    switch (auth.type) {
      case "session":
        return {
          "X-Requested-With": "XMLHTTPRequest"
        };
      case "token": {
        return {
          "X-Cybozu-API-Token": auth.token
        };
      }
      default: {
        throw new Error(
          `${(auth as any).type} is not a supported auth type`
        );
      }
    }
  }
}
