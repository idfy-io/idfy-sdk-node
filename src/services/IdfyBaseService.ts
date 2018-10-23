export default abstract class IdfyBaseService {
  private readonly _clientId?: string;
  private readonly _clientSecret?: string;
  private readonly _scopes?: any[];

  constructor();

  constructor(clientId: string, clientSecret: string, scopes: any[]);

  constructor(clientId?: string, clientSecret?: string, scopes?: any[]) {
    this._clientId = clientId;
    this._clientSecret = clientSecret;
    this._scopes = scopes;
  }

  public static get<T>(url: string): Promise<T> {
    return new Promise<T>((res, rej) => {
      res(<T>{});
    })
  }
}
