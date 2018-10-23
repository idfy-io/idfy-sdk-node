import * as request from 'request';
import HttpRequestMethod from '../models/HttpRequestMethod';

export class HttpRequestor {
  public static async get<T>(url: string): Promise<T> {
    console.log(`GET ${url}`);
    return this.makeRequest<T>(url, HttpRequestMethod.GET);
  }

  private static makeRequest<T>(url: string, method: HttpRequestMethod): Promise<T> {
    const options: (request.CoreOptions & request.UriOptions) = {
      uri: url,
      method: method.toString(),
    };

    return new Promise<T>((resolve, reject) => {
      request(options, (err, response, body) => {
        if (err || !this.isSuccess(response.statusCode)) {
          console.log(`${response.statusCode} request failed`);
          reject(err);  // todo: return custom error object
        } else {
          console.log(`${response.statusCode} request succeeded`);
          return resolve(<T>JSON.parse(body));
        }
      });
    });
  }

  private static isSuccess = (statusCode: number): boolean =>
    statusCode >= 200 && statusCode <= 299;
}
