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
    expect(mockHTTPClient.getCalls()[0].url).toBe('https://example.com/k/v1/record.json')
  });

  describe('auth', () => {
    it('should set headers for session auth', async () => {
      const client = new KintoneAPIClient({
        domain: 'example.com',
        auth: {
          type: 'session'
        }
      });
      const mockHTTPClient = new MockHTTPClientImpl();
      client.setHTTPClient(mockHTTPClient);
      await client.getRecord(1, 2);
      expect(mockHTTPClient.getCalls()[0].headers).toEqual({
        "X-Requested-With": "XMLHTTPRequest"
      });
    });
    it('should set headers for token auth', async () => {
      const client = new KintoneAPIClient({
        domain: 'example.com',
        auth: {
          type: 'token',
          token: 'foobar'
        }
      });
      const mockHTTPClient = new MockHTTPClientImpl();
      client.setHTTPClient(mockHTTPClient);
      await client.getRecord(1, 2);
      expect(mockHTTPClient.getCalls()[0].headers).toEqual({
        "X-Cybozu-API-Token": 'foobar'
      });
    });
    it('should throw an error if it receives an unsupported auth type', () => {
      expect(() => {
        new KintoneAPIClient({
          domain: 'example.com',
          auth: {
            // @ts-ignore
            type: 'unknown'
          }
        })
      })
      .toThrowError(/unknown is not a supported auth type/)
    });
  });

  describe('getRecord', () => {
    let client: KintoneAPIClient;
    let mockHTTPClient: MockHTTPClientImpl;
    beforeEach(() => {
      client = new KintoneAPIClient({
        domain: 'example.com',
        auth: {
          type: 'session'
        }
      });
      mockHTTPClient = new MockHTTPClientImpl();
      client.setHTTPClient(mockHTTPClient);
    })
    it('should request to the URL to get a record', async () => {
      await client.getRecord(1, 2);
      expect(mockHTTPClient.getCalls()[0].url).toBe('https://example.com/k/v1/record.json')
    });
    it('should pass appId and recordId as the params', async () => {
      await client.getRecord(1, 2);
      expect(mockHTTPClient.getCalls()[0].params).toEqual({
        app: 1,
        id: 2
      })
    });
  })
});