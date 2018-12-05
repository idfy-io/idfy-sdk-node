import * as request from 'request';
import HttpRequestMethod from './HttpRequestMethod';
import IdfyResponse from './IdfyResponse';
import HttpRequestOptions from './HttpRequestOptions';

export class HttpRequestor {
  public static lastRequest?: (request.CoreOptions & request.UriOptions) = undefined;

  public static get<T>(url: string, token?: string): Promise<T> {
    return this.makeRequest<T>({
      url,
      token,
      method: HttpRequestMethod.GET,
    });
  }

  public static getBuffer(url: string, token?: string): Promise<Buffer> {
    return this.makeRequest<Buffer>({
      url,
      token,
      method: HttpRequestMethod.GET,
      disableEncoding: true
    });
  }

  public static post<T>(url: string, body: any, token?: string): Promise<T> {
    return this.makeRequest<T>({
      url,
      token,
      body,
      method: HttpRequestMethod.POST,
    });
  }

  public static postForm<T>(url: string, form: { [key: string]: any }, token?: string) {
    return this.makeRequest<T>({
      url,
      token,
      form,
      method: HttpRequestMethod.POST
    });
  }

  public static patch<T>(url: string, body: any, token?: string): Promise<T> {
    return this.makeRequest<T>({
      url,
      token,
      body,
      method: HttpRequestMethod.PATCH
    });
  }

  public static put<T>(url: string, body: any, token?: string): Promise<T> {
    return this.makeRequest<T>({
      url,
      token,
      body,
      method: HttpRequestMethod.PUT
    });
  }

  public static delete(url: string, token?: string): Promise<void> {
    return this.makeRequest<void>({
      url,
      token,
      method: HttpRequestMethod.DELETE
    });
  }

  private static makeRequest<T>(options: HttpRequestOptions): Promise<T> {
    const { url, method, token, body, form, disableEncoding } = options;

    const reqOptions: (request.CoreOptions & request.UriOptions) = {
      uri: url,
      method: method.toString(),
      json: true,
      encoding: disableEncoding ? null : undefined
    };

    if (token) {
      reqOptions.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    if (body) {
      reqOptions.body = body;
    } else if (form) {
      reqOptions.form = form;
    }

    this.lastRequest = reqOptions;

    return new Promise<T>((resolve, reject) => {
      request(reqOptions, (err, response, body) => {
        if (err) {
          reject(err);
        } else if (!this.isSuccess(response.statusCode)) {
          reject(this.buildError(response, body));
        } else {
          resolve(<T>body);
        }
      });
    });
  }

  private static buildError(response: request.Response, body: any): IdfyResponse {
    return {
      body,
      statusCode: response.statusCode,
      requestUrl: response.request.href,
    };
  }

  private static isSuccess = (statusCode: number): boolean =>
    statusCode >= 200 && statusCode <= 299;
}
