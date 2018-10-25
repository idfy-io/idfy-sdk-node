import { IdentificationService } from './services/identification';
import IdfyConfiguration from './IdfyConfiguration';

export class IdfyClient {
  private readonly identificationService: IdentificationService;

  constructor(clientId: string, clientSecret: string, scopes: any[]) {
    IdfyConfiguration.setClientCredentials(clientId, clientSecret, scopes);
    IdfyConfiguration.baseUrl = 'https://api.idfy.io/';
    this.identificationService = new IdentificationService();
  }

  public get identification() {
    return this.identificationService;
  }
}
