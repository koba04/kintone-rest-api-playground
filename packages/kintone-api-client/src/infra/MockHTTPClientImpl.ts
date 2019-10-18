import { HTTPClientInterface } from "../HTTPClientInterface";

type Request = {
  method: 'get',
  url: string,
  headers: { [key: string]: string },
  params: object
}

export class MockHTTPClientImpl implements HTTPClientInterface {
  private calls: Request[];
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
  public getCalls(): Request[] {
    return this.calls;
  }
  // TODO: type correctly
  private returnMockResponse(): any {
    return this.mockResponses.shift() || {};
  }
}
