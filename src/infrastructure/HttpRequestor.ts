import * as request from 'request';
import HttpRequestMethod from './HttpRequestMethod';
import IdfyResponse from './IdfyResponse';

export class HttpRequestor {
  public static lastRequest?: (request.CoreOptions & request.UriOptions) = undefined;

  public static get<T>(url: string, token?: string): Promise<T> {
    return this.makeRequest<T>(url, HttpRequestMethod.GET, token);
  }

  public static post<T>(url: string, body: any, token?: string): Promise<T> {
    return this.makeRequest<T>(url, HttpRequestMethod.POST, token, body);
  }

  public static postForm<T>(url: string, form: { [key: string]: any }, token?: string) {
    return this.makeRequest<T>(url, HttpRequestMethod.POST, token, null, form);
  }

  public static put<T>(url: string, body: any, token?: string): Promise<T> {
    return this.makeRequest<T>(url, HttpRequestMethod.PUT, token, body);
  }

  private static makeRequest<T>(url: string, method: HttpRequestMethod, token?: string,
                                body?: any, form?: { [key: string]: any }): Promise<T> {
    const options: (request.CoreOptions & request.UriOptions) = {
      uri: url,
      method: method.toString(),
      json: true,
    };

    if (token) {
      options.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    if (body) {
      options.body = body;
    } else if (form) {
      options.form = form;
    }

    this.lastRequest = options;

    return new Promise<T>((resolve, reject) => {
      request(options, (err, response, body) => {
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
