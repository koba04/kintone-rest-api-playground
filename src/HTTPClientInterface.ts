export interface HTTPClientInterface {
  get<T extends object>(
    url: string,
    headers: { [key: string]: string },
    params: object
  ): Promise<T>;
}
