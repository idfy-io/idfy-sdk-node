export interface WebhookDelivery {
  /**
   * The webhook delivery's unique identifier.
   */
  id?: string;

  /**
   * The webhooks unique identifier.
   */
  webhookId?: number;

  eventId?: string;

  timestamp?: Date;

  url?: string;

  elapsedMs?: number;

  requestHeaders?: any;

  requestBody?: any;

  responseHeaders?: any;

  responseBody?: any;

  responseStatusCode?: number;

  responseMessage?: string;

  errorMessage?: string;
}
