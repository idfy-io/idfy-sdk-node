import HttpRequestMethod from './HttpRequestMethod';

export default interface HttpRequestOptions {
  url: string;
  method: HttpRequestMethod;
  token?: string;
  body?: any;
  form?: { [key: string]: any };
  disableEncoding?: boolean;
}
