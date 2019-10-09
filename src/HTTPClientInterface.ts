export interface HTTPClientInterface {
  get(url: string, headers: object, params: object): Promise<any>;
}
