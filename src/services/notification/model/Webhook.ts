import { WebhookConfig } from './WebhookConfig';
import { WebhookResponse } from './WebhookResponse';

export interface Webhook {
  /**
   * The webhooks unique identifier.
   */
  id?: number;

  /**
   * Display name of the webhook.
   */
  name?: string;

  /**
   * Determines if the webhook is active.
   */
  active?: boolean;

  /**
   * A list of events that the webhook triggers for.
   */
  events?: string[];

  /**
   * Webhook configuration.
   */
  config?: WebhookConfig;

  /**
   * Time at which the webhook was created.
   */
  createdAt?: Date;

  /**
   * Time at which the webhook was last updated.
   */
  updatedAt?: Date;

  /**
   * Last webhook response.
   */
  lastResponse?: WebhookResponse;

  /**
   * A list of event tags that the webhook triggers for.
   */
  tags?: string[];
}
