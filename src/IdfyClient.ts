import IdfyConfiguration from './IdfyConfiguration';
import { IdentificationService } from './services/identification';
import { SignatureService } from './services/signature';
import { NotificationService } from './services/notification';

export class IdfyClient {
  private readonly identificationService: IdentificationService;
  private readonly signatureService: SignatureService;
  private readonly notificationService: NotificationService;

  constructor(clientId: string, clientSecret: string, scopes: any[]) {
    IdfyConfiguration.setClientCredentials(clientId, clientSecret, scopes);

    this.identificationService = new IdentificationService();
    this.signatureService = new SignatureService();
    this.notificationService = new NotificationService();
  }

  public get identification(): IdentificationService {
    return this.identificationService;
  }

  public get signature(): SignatureService {
    return this.signatureService;
  }

  public get notification(): NotificationService {
    return this.notificationService;
  }
}
