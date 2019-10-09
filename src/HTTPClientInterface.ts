export interface HTTPClientInterface {
  get<T extends object>(url: string, headers: object, params: object): Promise<T>;
}
