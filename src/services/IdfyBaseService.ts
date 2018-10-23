export default abstract class IdfyBaseService {
  private readonly clientId?: string;
  private readonly clientSecret?: string;
  private readonly scopes?: any[];

  constructor();

  constructor(clientId: string, clientSecret: string, scopes: any[]);

  constructor(clientId?: string, clientSecret?: string, scopes?: any[]) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.scopes = scopes;
  }

  public static get<T>(url: string): Promise<T> {
    return new Promise<T>((res, rej) => {
      res(<T>{});
    });
  }
}
