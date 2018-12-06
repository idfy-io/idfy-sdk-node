import IdfyBaseService from '../IdfyBaseService';
import {
  Event,
  EventTypeInfo, MockEventRequest,
  Webhook, WebhookDelivery, WebhookUpdateOptions
} from './';
import APIHelper from '../../infrastructure/APIHelper';
import { WebhookCreateOptions } from './model/WebhookCreateOptions';

export class NotificationService extends IdfyBaseService {
  private readonly _endpointBase: string = 'notification';

  /**
   * Retrieves up to 100 unhandled events for your account. After you retrieve this list the events will be "locked" for 10 minutes
   * to give you time to handle them.
   * Please handle the events using one of the endpoints in this API to avoid retrieving the same events multiple times.
   * @param eventType
   * @param tags
   */
  public listUnhandledEvents(eventType?: string, tags?: string): Promise<Event[]> {
    const url = APIHelper.appendQueryParams(`${this._endpointBase}/events`, {
      eventType,
      tags
    });
    return super.get<Event[]>(url);
  }

  /**
   * Marks the status of an event as handled.
   * @param eventId
   */
  public handleEvent(eventId: string): Promise<void> {
    return super.post(`${this._endpointBase}/events/${eventId}/handle`);
  }

  /**
   * Marks the status of a batch of events as handled.
   * @param eventIds
   */
  public handleMultipleEvents(eventIds: string[]): Promise<void> {
    return super.post(`${this._endpointBase}/events/handle`, eventIds);
  }

  /**
   * Peeks the top 100 unhandled events regardless if they are locked or not. Don't use this endpoint to handle events.
   * @param eventType
   * @param tags
   */
  public peekEvents(eventType?: string, tags?: string): Promise<Event[]> {
    const url = APIHelper.appendQueryParams(`${this._endpointBase}/events/peek`, {
      eventType,
      tags
    });
    return super.get<Event[]>(url);
  }

  /**
   * Clears all events for your account.
   */
  public clearEvents(): Promise<void> {
    return super.post(`${this._endpointBase}/events/clear`);
  }

  /**
   * Returns a list of all available event types.
   */
  public listEventTypes(): Promise<EventTypeInfo[]> {
    return super.get<EventTypeInfo[]>(`${this._endpointBase}/events/types`);
  }

  /**
   * Creates a mock event with a sample payload. Can be used to test your event handling code.
   * @param mockEventRequest
   */
  public mockEvent(mockEventRequest: MockEventRequest): Promise<Event> {
    return super.post<Event>(`${this._endpointBase}/events/mock`, mockEventRequest);
  }

  /**
   * Retrieves the details of a single webhook.
   * @param id
   */
  public getWebhook(id: number): Promise<Webhook> {
    return super.get<Webhook>(`${this._endpointBase}/webhooks/${id}`);
  }

  /**
   * Deletes the specified webhook.
   * @param id
   */
  public deleteWebhook(id: number): Promise<void>{
    return super.delete(`${this._endpointBase}/webhooks/${id}`);
  }

  /**
   * Updates the specified webhook with the parameters passed. Any parameters not provided will be left unchanged.
   * @param id
   * @param webhookUpdateOptions
   */
  public updateWebhook(id: number, webhookUpdateOptions: WebhookUpdateOptions): Promise<Webhook> {
    return super.patch<Webhook>(`${this._endpointBase}/webhooks/${id}`, webhookUpdateOptions);
  }

  /**
   * Returns a list of all your webhooks.
   */
  public listWebhooks(): Promise<Webhook[]> {
    return super.get<Webhook[]>(`${this._endpointBase}/webhooks`);
  }

  /**
   * Creates a new webhook.
   * @param webhookCreateOptions
   */
  public createWebhook(webhookCreateOptions: WebhookCreateOptions): Promise<Webhook> {
    return super.post<Webhook>(`${this._endpointBase}/webhooks`, webhookCreateOptions);
  }

  /**
   * Triggers a ping event to be sent to the webhook.
   * @param id
   */
  public pingWebhook(id: number): Promise<void> {
    return super.post(`${this._endpointBase}/webhooks/${id}/ping`);
  }

  /**
   * Returns the 10 most recent delivery attempts for a single webhook.
   * @param id
   */
  public listWebhookDeliveries(id: number): Promise<WebhookDelivery[]> {
    return super.get<WebhookDelivery[]>(`${this._endpointBase}/webhooks/${id}/deliveries`);
  }
}
