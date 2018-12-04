import IdfyBaseService from '../IdfyBaseService';
import { Webhook } from './';

export class NotificationService extends IdfyBaseService {
  private readonly _endpointBase: string = 'notification';

  public getWebhook(id: number): Promise<Webhook> {
    return super.get<Webhook>(`${this._endpointBase}/webhooks/${id}`);
  }
}
