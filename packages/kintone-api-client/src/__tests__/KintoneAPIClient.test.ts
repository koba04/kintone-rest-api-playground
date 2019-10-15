import { KintoneAPIClient } from '../KintoneAPIClient';

describe("KintoneAPIClient", () => {
  it("should be able to instantiate without any error", () => {
    expect(() => {
      new KintoneAPIClient({
        domain: 'example.com',
        auth: {
          type: 'session'
        }
      })
    }).not.toThrowError();
  })
});