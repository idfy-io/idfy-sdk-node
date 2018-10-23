export default class IdfyConfiguration {
  public static clientId: string = '';
  public static clientSecret: string = '';
  public static scopes: any[] = [];

  private static _baseUrl: string;

  public static setClientCredentials(clientId: string, clientSecret: string, scopes: any[]) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.scopes = scopes;
  }

  public static get baseUrl(): string {
    return this._baseUrl;
  }

  public static set baseUrl(value: string) {
    this._baseUrl = value;
  }
}
