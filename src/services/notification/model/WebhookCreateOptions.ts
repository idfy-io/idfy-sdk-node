import { WebhookCreateConfig } from './WebhookCreateConfig';

export interface WebhookCreateOptions {
  /**
   * Display name of the webhook.
   */
  name: string;

  /**
   * Determines whether the webhook is active or not.
   */
  active: boolean;

  /**
   * A list of events that the webhook triggers for.
   */
  events: string[];

  /**
   * Webhook configuration.
   */
  config: WebhookCreateConfig;

  /**
   * An optional list of event tags that the webhook triggers for.
   */
  tags?: string[];
}
