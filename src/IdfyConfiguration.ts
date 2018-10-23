export default class IdfyConfiguration {
  public static clientId: string = '';
  public static clientSecret: string = '';
  public static scopes: any[] = [];

  public static setClientCredentials(clientId: string, clientSecret: string, scopes: any[]) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.scopes = scopes;
  }
}
