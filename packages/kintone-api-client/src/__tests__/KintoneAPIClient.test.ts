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
    expect(mockHTTPClient.getCalls()[0].url).toEqual('https://example.com/k/v1/record.json')
  });

  describe('auth', () => {
    it.todo('should set headers for session auth');
    it.todo('should set headers for token auth');
    it.todo('should throw an error if it receives an unsupported auth type');
  });

  describe('getRecord', () => {
    let client: KintoneAPIClient;
    beforeEach(() => {
      client = new KintoneAPIClient({
        domain: 'example.com',
        auth: {
          type: 'session'
        }
      });
      const mockHTTPClient = new MockHTTPClientImpl();
      client.setHTTPClient(mockHTTPClient);
    })
    it.todo('should request to the URL to get a record');
    it.todo('should pass appId and recordId as the params');
  })
});