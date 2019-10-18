import { HTTPClientInterface } from "../HTTPClientInterface";

export class MockHTTPClientImpl implements HTTPClientInterface {
  private calls: object[];
  private mockResponses: object[];
  constructor() {
    this.calls = [];
    this.mockResponses = [];
  }
  async get<T extends object>(url: string, headers: { [key: string]: string }, params: object): Promise<T> {
    this.calls.push({
      method: 'get',
      url,
      headers,
      params
    });
    return this.returnMockResponse();
  }
  public getCalls(): object[] {
    return this.calls;
  }
  // TODO: type correctly
  private returnMockResponse(): any {
    return this.mockResponses.shift() || {};
  }
}
