import { HttpRequestor } from '../infrastructure/HttpRequestor';
import IdfyConfiguration from '../IdfyConfiguration';
import Urls from '../infrastructure/Urls';

interface OAuthToken {
  accessToken: string;
  expiresIn: string;
  tokenType: string;
  expiry: Date;
}

export default abstract class IdfyBaseService {
  private readonly clientId?: string;
  private readonly clientSecret?: string;
  private readonly scopes?: any[];
  private oauthToken: any = null;

  constructor();

  constructor(clientId: string, clientSecret: string, scopes: any[]);

  constructor(clientId?: string, clientSecret?: string, scopes?: any[]) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.scopes = scopes;
  }

  protected async get<T>(url: string): Promise<T> {
    const token = await this.getToken();
    return HttpRequestor.get<T>(url, token.access_token);
  }

  protected async getBuffer(url: string): Promise<Buffer> {
    const token = await this.getToken();
    return HttpRequestor.getBuffer(url, token.access_token);
  }

  protected async post<T>(url: string, body?: any): Promise<T> {
    const token = await this.getToken();
    return HttpRequestor.post<T>(url, body, token.access_token);
  }

  protected async patch<T>(url: string, body?: any): Promise<T> {
    const token = await this.getToken();
    return HttpRequestor.patch<T>(url, body, token.access_token);
  }

  protected async put<T>(url: string, body?: any): Promise<T> {
    const token = await this.getToken();
    return HttpRequestor.put<T>(url, body, token.access_token);
  }

  protected async delete(url: string): Promise<void> {
    const token = await this.getToken();
    return HttpRequestor.delete(url, token.access_token);
  }

  private getToken(): Promise<any> {
    if (this.oauthToken && this.oauthToken.expiry > new Date()) {
      return Promise.resolve(this.oauthToken);
    }

    let clientId = this.clientId;
    let clientSecret = this.clientSecret;
    let scopes = this.scopes;

    if (!clientId) {
      clientId = IdfyConfiguration.clientId;
      clientSecret = IdfyConfiguration.clientSecret;
      scopes = IdfyConfiguration.scopes;
    }

    const form: { [key: string]: any } = {
      grant_type: 'client_credentials',
      scope: scopes ? scopes.join(' ') : '',
      client_id: clientId,
      client_secret: clientSecret,
    };

    const promise = HttpRequestor.postForm<any>(Urls.oauthToken, form);

    promise.then((res: any) => {
      this.oauthToken = res;

      const now = new Date();
      this.oauthToken.expiry = now.setSeconds(now.getSeconds() + res.expires_in);
    });

    return promise;
  }
}
