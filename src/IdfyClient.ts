import IdfyConfiguration from './IdfyConfiguration';
import { IdentificationService } from './services/identification';
import { SignatureService } from './services/signature';

export class IdfyClient {
  private readonly identificationService: IdentificationService;
  private readonly signatureService: SignatureService;

  constructor(clientId: string, clientSecret: string, scopes: any[]) {
    IdfyConfiguration.setClientCredentials(clientId, clientSecret, scopes);
    IdfyConfiguration.baseUrl = 'https://api.idfy.io/';
    this.identificationService = new IdentificationService();
    this.signatureService = new SignatureService();
  }

  public get identification(): IdentificationService {
    return this.identificationService;
  }

  public get signature(): SignatureService {
    return this.signatureService;
  }
}
