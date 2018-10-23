import * as request from 'request';
import HttpRequestMethod from './HttpRequestMethod';
import IdfyResponse from './IdfyResponse';
import IdfyError from './IdfyError';

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
          reject(this.buildError(response, err, body));
        } else {
          console.log(`${response.statusCode} request succeeded`);
          return resolve(<T>JSON.parse(body));
        }
      });
    });
  }

  private static buildError(response: request.Response, err: any, body: any): any {
    const idfyResponse: IdfyResponse = {
      statusCode: response.statusCode,
      responseJson: body,
    };

    const idfyError: IdfyError = body ? <IdfyError>JSON.parse(body) : {};

    return { idfyResponse, idfyError };
  }

  private static isSuccess = (statusCode: number): boolean =>
    statusCode >= 200 && statusCode <= 299;
}
