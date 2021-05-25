import { IdfyConfiguration } from './IdfyConfiguration';
import { IdentificationService } from './services/identification';
import { IdentificationV2Service } from './services/identificationv2';
import { SignatureService } from './services/signature';
import { NotificationService } from './services/notification';

export class IdfyClient {
  private readonly identificationService: IdentificationService;
  private readonly identificationV2Service: IdentificationV2Service;
  private readonly signatureService: SignatureService;
  private readonly notificationService: NotificationService;

  constructor(clientId: string, clientSecret: string, scopes: any[]) {
    IdfyConfiguration.setClientCredentials(clientId, clientSecret, scopes);

    this.identificationService = new IdentificationService();
    this.identificationV2Service = new IdentificationV2Service();
    this.signatureService = new SignatureService();
    this.notificationService = new NotificationService();
  }

  /**
   * @deprecated Use identificationV2 instead.
   */
  public get identification(): IdentificationService {
    return this.identificationService;
  }

  public get identificationV2(): IdentificationV2Service {
    return this.identificationV2Service;
  }

  public get signature(): SignatureService {
    return this.signatureService;
  }

  public get notification(): NotificationService {
    return this.notificationService;
  }
}
