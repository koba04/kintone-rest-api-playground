import { KintoneAPIClient } from '../KintoneAPIClient';
import { MockHTTPClientImpl } from '../infra/MockHTTPClientImpl';

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
  it('should request to the specified kinton domain', async () => {
    const client = new KintoneAPIClient({
      domain: 'example.com',
      auth: {
        type: 'session'
      }
    });
    const mockHTTPClient = new MockHTTPClientImpl();
    client.setHTTPClient(mockHTTPClient);

    await client.getRecord(1, 2);

    expect(mockHTTPClient.getCalls()).toEqual([{
      method: 'get',
      url: 'https://example.com/k/v1/record.json',
      headers: {
        "X-Requested-With": "XMLHTTPRequest",
      },
      params: {
        app: 1,
        id: 2
      }
    }])

  });
});