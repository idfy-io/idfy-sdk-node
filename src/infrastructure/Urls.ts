import IdfyConfiguration from '../IdfyConfiguration';

export default class Urls {
  public static defaultBaseUrl = 'https://api.idfy.io';

  public static get defaultOAuthUrl(): string {
    return this.defaultBaseUrl;
  }

  public static get baseUrl(): string {
    return IdfyConfiguration.baseUrl;
  }

  public static get oauthToken(): string {
    return `${this.baseUrl}/oauth/connect/token`;
  }

  public static get identification(): string {
    return `${this.baseUrl}/identification`;
  }

  public static get signature(): string {
    return `${this.baseUrl}/signature`;
  }

  public static get notification(): string {
    return `${this.baseUrl}/notification`;
  }
}
