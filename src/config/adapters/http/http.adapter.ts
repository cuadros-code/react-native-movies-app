
export abstract class HttpAdapter {

  abstract get<T>( url: string, options?: unknown ): Promise<T>;

}