import Urls from './infrastructure/Urls';
const { version } = require('../package.json');

export default class IdfyConfiguration {
  public static clientId: string = '';
  public static clientSecret: string = '';
  public static scopes: any[] = [];

  private static _baseUrl: string;
  private static _oauthBaseUrl: string;

  public static setClientCredentials(clientId: string, clientSecret: string, scopes: any[]) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.scopes = scopes;
  }

  public static get baseUrl(): string {
    return this._baseUrl || Urls.defaultBaseUrl;
  }

  public static set baseUrl(value: string) {
    this._baseUrl = value;
  }

  public static get oauthBaseUrl(): string {
    return this._oauthBaseUrl || Urls.defaultOAuthUrl;
  }

  public static set oauthBaseUrl(value: string) {
    this._baseUrl = value;
  }

  public static get sdkVersion(): string {
    return version;
  }
}
