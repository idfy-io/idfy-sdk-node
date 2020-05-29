import got, { Response } from 'got';
import HttpRequestMethod from './HttpRequestMethod';
import IdfyResponse from './IdfyResponse';
import HttpRequestOptions from './HttpRequestOptions';

export class HttpRequestor {
  public static lastRequest?: any = undefined;

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

    const requestOptions: any = {
      url,
      method,
      throwHttpErrors: false,
      responseType: disableEncoding ? 'buffer' : 'json',
    };

    if (token) {
      requestOptions.headers = {
        authorization: `Bearer ${token}`
      };
    }

    if (body) {
      requestOptions.json = body;
    } else if (form) {
      requestOptions.form = form;
    }

    this.lastRequest = { ...requestOptions };

    return new Promise<T>(async (resolve, reject) => {
      try {
        const response = await got<T>(requestOptions);
        if (!this.isSuccess(response.statusCode)) {
          reject(this.buildError(response));
        } else {
          resolve(response.body);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  private static buildError(response: Response): IdfyResponse {
    return {
      body: response.body,
      statusCode: response.statusCode,
      requestUrl: response.request.requestUrl,
      requestId: <string> response.headers['requestid'],
    };
  }

  private static isSuccess = (statusCode: number): boolean =>
    statusCode >= 200 && statusCode <= 299;
}
